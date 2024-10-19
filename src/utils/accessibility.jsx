import { AccessibilityInfo } from 'react-native';

export const announceForAccessibility = (message: string) => {
  AccessibilityInfo.announceForAccessibility(message);
};

export const isScreenReaderEnabled = async () => {
  return await AccessibilityInfo.isScreenReaderEnabled();
};

export const setAccessibilityFocus = (ref: any) => {
  if (ref && ref.current) {
    AccessibilityInfo.setAccessibilityFocus(ref.current);
  }
};
