import React from 'react';
import { render } from '@testing-library/react-native';
import SimpleComponent from '../SimpleComponent';

describe('SimpleComponent', () => {
  it('renders correctly', () => {
    const { getByText } = render(<SimpleComponent />);
    expect(getByText('Hello, World!')).toBeTruthy();
  });
});
