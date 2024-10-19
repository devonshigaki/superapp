import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connectWallet, getBalance, sendTransaction } from '../services/blockchain/blockchainService';
import { announceForAccessibility } from '../utils/accessibility';

const BlockchainDemo = () => {
  const navigation = useNavigation();
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState(0);
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleConnectWallet = async () => {
    setIsLoading(true);
    try {
      const address = await connectWallet();
      setWalletAddress(address);
      announceForAccessibility(`Wallet connected: ${address}`);
      setIsLoading(false);
    } catch (error) {
      console.error('Error connecting wallet:', error);
      setIsLoading(false);
    }
  };

  const handleGetBalance = async () => {
    setIsLoading(true);
    try {
      const currentBalance = await getBalance(walletAddress);
      setBalance(currentBalance);
      announceForAccessibility(`Balance: ${currentBalance}`);
      setIsLoading(false);
    } catch (error) {
      console.error('Error getting balance:', error);
      setIsLoading(false);
    }
  };

  const handleSendTransaction = async () => {
    setIsLoading(true);
    try {
      await sendTransaction(walletAddress, recipientAddress, amount);
      announceForAccessibility('Transaction sent successfully');
      setIsLoading(false);
    } catch (error) {
      console.error('Error sending transaction:', error);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blockchain Demo</Text>
      <Button title="Connect Wallet" onPress={handleConnectWallet} disabled={isLoading} />
      {walletAddress && (
        <View>
          <Text style={styles.walletAddress}>Wallet Address: {walletAddress}</Text>
          <Button title="Get Balance" onPress={handleGetBalance} disabled={isLoading} />
          {balance > 0 && <Text style={styles.balance}>Balance: {balance}</Text>}
          <View style={styles.transactionForm}>
            <Text style={styles.label}>Recipient Address:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setRecipientAddress}
              value={recipientAddress}
            />
            <Text style={styles.label}>Amount:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setAmount}
              value={amount}
              keyboardType="numeric"
            />
            <Button title="Send Transaction" onPress={handleSendTransaction} disabled={isLoading} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  walletAddress: {
    marginBottom: 10,
  },
  balance: {
    marginBottom: 20,
  },
  transactionForm: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default BlockchainDemo;
