import { firebase } from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { AppleAuth } from 'expo-apple-authentication';
import { MicrosoftAuthenticationProvider } from 'react-native-microsoft-authentication';
import { AmazonCognitoIdentityClient, CognitoIdentityProvider } from '@aws-sdk/client-cognito-identity';
import { User } from 'firebase/auth';
import { UserData } from '../../database/firestoreService';
import { createUser } from '../../database/firestoreService';

const microsoftAuthenticationProvider = new MicrosoftAuthenticationProvider({
  clientId: process.env.MICROSOFT_CLIENT_ID,
  redirectUri: process.env.MICROSOFT_REDIRECT_URI,
});

const amazonCognitoIdentityClient = new AmazonCognitoIdentityClient({
  region: process.env.AWS_REGION,
});

const cognitoIdentityProvider = new CognitoIdentityProvider({
  client: amazonCognitoIdentityClient,
});

export const signInWithGoogle = async (): Promise< User | null > => {
  try {
    await GoogleSignin.configure({
      webClientId: process.env.GOOGLE_WEB_CLIENT_ID,
    });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const userCredential = await auth.signInWithCredential(googleCredential);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in with Google:', error);
    return null;
  }
};

export const signInWithFacebook = async (): Promise< User | null > => {
  try {
    await LoginManager.logInWithPermissions(['public_profile', 'email']);
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw new Error('No Facebook access token available');
    }
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    const userCredential = await auth.signInWithCredential(facebookCredential);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in with Facebook:', error);
    return null;
  }
};

export const signInWithApple = async (): Promise< User | null > => {
  try {
    const appleAuthRequestResponse = await AppleAuth.signInAsync({
      requestedScopes: [AppleAuth.Scope.EMAIL, AppleAuth.Scope.FULL_NAME],
    });
    if (appleAuthRequestResponse.user) {
      const appleCredentialFirebase = auth.AppleAuthProvider.credential(
        appleAuthRequestResponse.identityToken,
        appleAuthRequestResponse.authorizationCode,
      );
      const userCredential = await auth.signInWithCredential(appleCredentialFirebase);
      return userCredential.user;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error signing in with Apple:', error);
    return null;
  }
};

export const signInWithEmailAndPassword = async (email: string, password: string): Promise< User | null > => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in with email and password:', error);
    return null;
  }
};

export const signOut = async (): Promise<void> => {
  try {
    await auth().signOut();
  } catch (error) {
    console.error('Error signing out:', error);
  }
};

export const onAuthStateChanged = (callback: (user: User | null) => void): void => {
  auth().onAuthStateChanged(callback);
};

export const linkWithMicrosoft = async (user: User): Promise< User | null > => {
  try {
    const microsoftToken = await microsoftAuthenticationProvider.loginAsync({
      scopes: ['user.read'],
    });
    const microsoftCredential = auth.OAuthProvider('microsoft.com').credential(microsoftToken.accessToken);
    await user.linkWithCredential(microsoftCredential);
    return user;
  } catch (error) {
    console.error('Error linking with Microsoft:', error);
    return null;
  }
};

export const linkWithAmazon = async (user: User): Promise< User | null > => {
  try {
    const amazonToken = await cognitoIdentityProvider.signIn({
      ClientId: process.env.AWS_COGNITO_CLIENT_ID,
      Username: process.env.AWS_COGNITO_USERNAME,
      Password: process.env.AWS_COGNITO_PASSWORD,
    });
    const amazonCredential = auth.OAuthProvider('amazon.com').credential(amazonToken.AuthenticationResult.IdToken);
    await user.linkWithCredential(amazonCredential);
    return user;
  } catch (error) {
    console.error('Error linking with Amazon:', error);
    return null;
  }
};

export const createNewUser = async (userData: UserData): Promise< User | null > => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(userData.email, userData.password);
    const user = userCredential.user;
    await createUser(user.uid, userData);
    return user;
  } catch (error) {
    console.error('Error creating new user:', error);
    return null;
  }
};
