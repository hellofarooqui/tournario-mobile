// styles/typography.js
import { Platform } from 'react-native';

// Font families
export const fontFamily = {
  regular: Platform.select({
    ios: 'System',
    android: 'Roboto',
    default: 'System',
  }),
  medium: Platform.select({
    ios: 'System',
    android: 'Roboto-Medium',
    default: 'System',
  }),
  semibold: Platform.select({
    ios: 'System',
    android: 'Roboto-Medium',
    default: 'System',
  }),
  bold: Platform.select({
    ios: 'System',
    android: 'Roboto-Bold',
    default: 'System',
  }),
};

// Font weights
export const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
};

// Font sizes
export const fontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 40,
};

// Line heights
export const lineHeight = {
  xs: 16,
  sm: 20,
  base: 24,
  lg: 26,
  xl: 28,
  '2xl': 32,
  '3xl': 36,
  '4xl': 40,
  '5xl': 48,
};

// Letter spacing
export const letterSpacing = {
  tight: -0.5,
  normal: 0,
  wide: 0.5,
  wider: 1,
};

// Typography presets
export const typography = {
  // Profile name
  profileName: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.xl,
    lineHeight: lineHeight.xl,
    fontWeight: fontWeight.bold,
    color: '#FFFFFF',
  },
  
  // Username (@username)
  username: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.sm,
    fontWeight: fontWeight.regular,
    color: '#8B9AAF',
  },
  
  // Headings
  h1: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize['4xl'],
    lineHeight: lineHeight['4xl'],
    fontWeight: fontWeight.bold,
    color: '#FFFFFF',
  },
  
  h2: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize['3xl'],
    lineHeight: lineHeight['3xl'],
    fontWeight: fontWeight.bold,
    color: '#FFFFFF',
  },
  
  h3: {
    fontFamily: fontFamily.semibold,
    fontSize: fontSize['2xl'],
    lineHeight: lineHeight['2xl'],
    fontWeight: fontWeight.semibold,
    color: '#FFFFFF',
  },
  
  h4: {
    fontFamily: fontFamily.semibold,
    fontSize: fontSize.xl,
    lineHeight: lineHeight.xl,
    fontWeight: fontWeight.semibold,
    color: '#FFFFFF',
  },
  
  // Body text
  body: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.base,
    lineHeight: lineHeight.base,
    fontWeight: fontWeight.regular,
    color: '#FFFFFF',
  },
  
  bodyLarge: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.lg,
    lineHeight: lineHeight.lg,
    fontWeight: fontWeight.regular,
    color: '#FFFFFF',
  },
  
  bodySmall: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.sm,
    fontWeight: fontWeight.regular,
    color: '#8B9AAF',
  },
  
  // Button text
  button: {
    fontFamily: fontFamily.semibold,
    fontSize: fontSize.base,
    lineHeight: lineHeight.base,
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing.wide,
    color: '#FFFFFF',
  },
  
  buttonSmall: {
    fontFamily: fontFamily.semibold,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.sm,
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing.wide,
    color: '#FFFFFF',
  },
  
  // Tab text
  tabActive: {
    fontFamily: fontFamily.semibold,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.sm,
    fontWeight: fontWeight.semibold,
    color: '#2B7FFF',
  },
  
  tabInactive: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.sm,
    fontWeight: fontWeight.regular,
    color: '#5A6B7F',
  },
  
  // Section title (Games & Stats)
  sectionTitle: {
    fontFamily: fontFamily.semibold,
    fontSize: fontSize.lg,
    lineHeight: lineHeight.lg,
    fontWeight: fontWeight.semibold,
    color: '#FFFFFF',
  },
  
  // Nav labels
  navLabel: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.xs,
    lineHeight: lineHeight.xs,
    fontWeight: fontWeight.medium,
    color: '#5A6B7F',
  },
  
  navLabelActive: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.xs,
    lineHeight: lineHeight.xs,
    fontWeight: fontWeight.medium,
    color: '#2B7FFF',
  },
  
  // Caption/helper text
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.xs,
    lineHeight: lineHeight.xs,
    fontWeight: fontWeight.regular,
    color: '#6B7A8F',
  },
};

export default typography;