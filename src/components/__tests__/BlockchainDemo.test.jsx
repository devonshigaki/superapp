import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import BlockchainDemo from '../BlockchainDemo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

describe('BlockchainDemo', () => {
  it('renders correctly', () => {
    render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="BlockchainDemo" component={BlockchainDemo} />
        </Stack.Navigator>
      </NavigationContainer>
    );

    expect(screen.getByText('Blockchain Demo')).toBeTruthy();
  });

  it('calls handleGenerateReport on button press', () => {
    const handleGenerateReportMock = jest.fn();
    render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BlockchainDemo"
            component={() => (
              <BlockchainDemo handleGenerateReport={handleGenerateReportMock} />
            )}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );

    fireEvent.press(screen.getByText('Generate Report'));
    expect(handleGenerateReportMock).toHaveBeenCalled();
  });

  it('calls handleAnalyzeReport on button press', () => {
    const handleAnalyzeReportMock = jest.fn();
    render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BlockchainDemo"
            component={() => (
              <BlockchainDemo handleAnalyzeReport={handleAnalyzeReportMock} />
            )}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );

    fireEvent.press(screen.getByText('Analyze Report'));
    expect(handleAnalyzeReportMock).toHaveBeenCalled();
  });
});
