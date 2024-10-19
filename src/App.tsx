import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import ReportManagement from './pages/ReportManagement';
import ReportDetails from './pages/ReportDetails';
import OfferDetails from './pages/OfferDetails';
import ProviderDashboard from './pages/ProviderDashboard';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="ReportManagement" component={ReportManagement} />
        <Stack.Screen name="ReportDetails" component={ReportDetails} />
        <Stack.Screen name="OfferDetails" component={OfferDetails} />
        <Stack.Screen name="ProviderDashboard" component={ProviderDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
