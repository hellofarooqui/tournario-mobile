// styles/colors.js


// naming for quick access
export const appColors = {
  // Background scheme
  // darkNavy: '#111721',
  // darkGray: '#242b36ff',
  // lightNavy: '#2A3D5C',
  //  lightNavy2: '#23334dff',

  bg_navy_900: '#111721',
  bg_navy_800: 'rgba(17,23,33,0.87)',
  bg_navy_700: 'rgba(17,23,33,0.74)',
  bg_navy_600: 'rgba(17,23,33,0.61)',
  bg_navy_500: 'rgba(17,23,33,0.48)',
  bg_navy_400: 'rgba(17,23,33,0.36)',
  bg_navy_300: 'rgba(17,23,33,0.24)',
  bg_navy_200: 'rgba(17,23,33,0.12)',
  bg_navy_100: 'rgba(17,23,33,0.06)',

  bg_gray_900: '#242b36ff',
  bg_gray_800: 'rgba(36,43,54,0.87)',
  bg_gray_700: 'rgba(36,43,54,0.74)',
  bg_gray_600: 'rgba(36,43,54,0.61)',
  bg_gray_500: 'rgba(36,43,54,0.48)',
  bg_gray_400: 'rgba(36,43,54,0.36)',
  bg_gray_300: 'rgba(36,43,54,0.24)',
  bg_gray_200: 'rgba(36,43,54,0.12)',
  bg_gray_100: 'rgba(36,43,54,0.06)',

  bg_blue_900: '#2B7FFF',
  bg_blue_800: 'rgba(43,127,255,0.87)',
  bg_blue_700: 'rgba(43,127,255,0.74)',
  bg_blue_600: 'rgba(43,127,255,0.61)',
  bg_blue_500: 'rgba(43,127,255,0.48)',
  bg_blue_400: 'rgba(43,127,255,0.36)',
  bg_blue_300: 'rgba(43,127,255,0.24)',
  bg_blue_200: 'rgba(43,127,255,0.12)',
  bg_blue_100: 'rgba(43,127,255,0.06)',
  
  // Primary actions
  electricBlue: '#2B7FFF',
  
  // Danger/Delete
  coral: '#FF6B6B',
  red_900: '#FF6B6B',
  red_800: 'rgba(255,107,107,0.87)',
  red_700: 'rgba(255,107,107,0.74)',
  red_600: 'rgba(255,107,107,0.61)',
  red_500: 'rgba(255,107,107,0.48)',
  red_400: 'rgba(255,107,107,0.36)',
  red_300: 'rgba(255,107,107,0.24)',
  red_200: 'rgba(255,107,107,0.12)',
  red_100: 'rgba(255,107,107,0.06)',
  
  // Text hierarchy

  text_white_900: '#FFFFFF',
  text_white_800: 'rgba(255,255,255,0.87)',
  text_white_700: 'rgba(255,255,255,0.74)',
  text_white_600: 'rgba(255,255,255,0.61)',
  text_white_500: 'rgba(255,255,255,0.48)',
  text_white_400: 'rgba(255,255,255,0.36)',
  text_white_300: 'rgba(255,255,255,0.24)',
  text_white_200: 'rgba(255,255,255,0.12)',
  text_white_100: 'rgba(255,255,255,0.06)'
};

// Gradient colors for potential use
export const gradients = {
  primary: ['#2B7FFF', '#1A5FCC'],
  background: ['#0A1628', '#1A2942'],
  card: ['#1E3250', '#2A3D5C'],
  button: ['#2B7FFF', '#2060DD'],
};


export const colors = {
  // Primary brand colors
  primary: '#2B7FFF',        // Bright blue (Edit profile button)
  primaryLight: '#4D94FF',
  primaryDark: '#1A5FCC',
  
  // Background colors
  background: '#0A1628',     // Dark navy background
  backgroundSecondary: '#1A2942', // Slightly lighter navy
  backgroundTertiary: '#2A3D5C',  // Card/section backgrounds
  
  // Surface colors (for cards, modals)
  surface: '#1E3250',        // Games & Stats card background
  surfaceElevated: '#2A3D5C',
  surfaceHighlight: '#3A4D6C',
  
  // Accent colors
  accent: '#2B7FFF',         // Same as primary
  accentSecondary: '#5A94FF',
  
  // Text colors
  text: '#FFFFFF',           // Primary white text
  textSecondary: '#8B9AAF',  // Gray text (@username)
  textTertiary: '#6B7A8F',
  textMuted: '#4A5966',
  textInverse: '#0A1628',
  
  // Action colors
  success: '#34C759',
  error: '#FF6B6B',          // Delete button red/coral
  errorLight: '#FF8585',
  errorDark: '#E55555',
  warning: '#FF9500',
  info: '#2B7FFF',
  
  // Button colors
  buttonPrimary: '#2B7FFF',
  buttonSecondary: '#1E3250',
  buttonDanger: '#FF6B6B',   // Delete button
  buttonLogout: '#1E3250',   // Logout button background
  
  // Border colors
  border: '#2A3D5C',
  borderLight: '#3A4D6C',
  borderDark: '#1A2942',
  
  // Icon colors
  iconActive: '#2B7FFF',     // Active profile icon
  iconInactive: '#5A6B7F',   // Inactive nav icons
  iconPrimary: '#FFFFFF',
  iconSecondary: '#8B9AAF',
  
  // Navigation colors
  navBackground: '#0F1E33',  // Bottom nav bar background
  navActive: '#2B7FFF',      // Active nav item
  navInactive: '#5A6B7F',    // Inactive nav items
  
  // Tab colors
  tabActive: '#2B7FFF',      // Active tab (About)
  tabInactive: '#5A6B7F',    // Inactive tabs (Stats, Accounts, Settings)
  tabIndicator: '#2B7FFF',   // Active tab underline
  
  // Avatar/Profile colors
  avatarBackground: '#3A5A7A',
  avatarBorder: '#4A6A8A',
  
  // Overlay
  overlay: 'rgba(10, 22, 40, 0.85)',
  overlayLight: 'rgba(10, 22, 40, 0.6)',
  overlayDark: 'rgba(10, 22, 40, 0.95)',
  
  // Disabled state
  disabled: '#2A3D5C',
  disabledText: '#4A5966',
  
  // Semantic UI colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
};

// Opacity variants
export const withOpacity = (color, opacity) => {
  return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
};

export default colors;