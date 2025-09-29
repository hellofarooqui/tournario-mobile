// styles/colors.js

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

// Alternative naming for quick access
export const appColors = {
  // Background scheme
  darkNavy: '#0A1628',
  navy: '#1A2942',
  lightNavy: '#2A3D5C',
  
  // Primary actions
  electricBlue: '#2B7FFF',
  
  // Danger/Delete
  coral: '#FF6B6B',
  
  // Text hierarchy
  white: '#FFFFFF',
  lightGray: '#8B9AAF',
  mediumGray: '#6B7A8F',
  darkGray: '#4A5966',
};

// Gradient colors for potential use
export const gradients = {
  primary: ['#2B7FFF', '#1A5FCC'],
  background: ['#0A1628', '#1A2942'],
  card: ['#1E3250', '#2A3D5C'],
  button: ['#2B7FFF', '#2060DD'],
};

// Opacity variants
export const withOpacity = (color, opacity) => {
  return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
};

export default colors;