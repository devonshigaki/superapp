import { Platform, AccessibilityInfo } from 'react-native';

export const announceForAccessibility = (message: string) => {
  if (Platform.OS === 'ios') {
    AccessibilityInfo.announceForAccessibility(message);
  } else if (Platform.OS === 'android') {
    AccessibilityInfo.setAccessibilityFocus(message);
  }
};

export const setAccessibilityFocus = (ref: any) => {
  if (Platform.OS === 'ios') {
    ref.current.focus();
  } else if (Platform.OS === 'android') {
    AccessibilityInfo.setAccessibilityFocus(ref.current);
  }
};
