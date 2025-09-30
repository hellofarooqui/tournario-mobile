// styles/theme.js
import { colors } from './colors';
import { typography, fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } from './typography';
import { spacing, borderRadius, borderWidth, shadows, opacity, zIndex, layout, iconSize, avatarSize } from './spacing';

// Main theme object
export const theme = {
  colors,
  typography,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  spacing,
  borderRadius,
  borderWidth,
  shadows,
  opacity,
  zIndex,
  layout,
  iconSize,
  avatarSize,
  
  // Theme mode
  isDark: true,
  mode: 'dark',
};

// Common component styles
export const commonStyles = {
  // Screen container
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  
  screenWithPadding: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: layout.screenPaddingHorizontal,
  },
  
  // Profile components
  profileContainer: {
    alignItems: 'center',
    paddingVertical: layout.profileButtonMarginTop,
  },
  
  avatar: {
    width: layout.profileAvatarSize,
    height: layout.profileAvatarSize,
    borderRadius: borderRadius.full,
    borderWidth: borderWidth.avatar,
    borderColor: colors.avatarBorder,
  },
  
  profileName: {
    ...typography.profileName,
    marginTop: layout.profileNameMarginTop,
  },
  
  username: {
    ...typography.username,
    marginTop: layout.profileUsernameMarginTop,
  },
  
  // Card styles
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.card,
    padding: layout.cardPadding,
    marginTop: layout.cardMarginTop,
  },
  
  cardWithShadow: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.card,
    padding: layout.cardPadding,
    marginTop: layout.cardMarginTop,
    ...shadows.darkMd,
  },
  
  cardTitle: {
    ...typography.sectionTitle,
    marginBottom: layout.cardGap,
  },
  
  // Button styles
  buttonPrimary: {
    height: layout.buttonHeight,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.button,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: layout.buttonPaddingHorizontal,
    marginTop: layout.buttonMarginTop,
  },
  
  buttonSecondary: {
    height: layout.buttonHeight,
    backgroundColor: colors.buttonSecondary,
    borderRadius: borderRadius.button,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: layout.buttonPaddingHorizontal,
    marginTop: layout.buttonMarginTop,
  },
  
  buttonDanger: {
    height: layout.buttonHeight,
    backgroundColor: colors.error,
    borderRadius: borderRadius.button,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: layout.buttonPaddingHorizontal,
    marginTop: layout.buttonMarginTop,
  },
  
  buttonText: {
    ...typography.button,
  },
  
  // Header styles
  header: {
    height: layout.headerHeight,
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: layout.headerPaddingHorizontal,
    borderBottomWidth: 0,
  },
  
  headerTitle: {
    ...typography.h3,
  },
  
  // Tab styles
  tabBar: {
    flexDirection: 'row',
    height: layout.tabBarHeight,
    backgroundColor: colors.background,
    paddingHorizontal: layout.tabBarPaddingHorizontal,
    borderBottomWidth: borderWidth.thin,
    borderBottomColor: colors.border,
  },
  
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  tabActive: {
    borderBottomWidth: layout.tabIndicatorHeight,
    borderBottomColor: colors.tabActive,
  },
  
  tabTextActive: {
    ...typography.tabActive,
  },
  
  tabTextInactive: {
    ...typography.tabInactive,
  },
  
  // Input styles
  input: {
    height: layout.inputHeight,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.input,
    borderWidth: borderWidth.thin,
    borderColor: colors.border,
    paddingHorizontal: layout.inputPadding,
    color: colors.text,
    ...typography.body,
  },
  
  inputFocused: {
    borderColor: colors.primary,
    borderWidth: borderWidth.focus,
  },
  
  inputLabel: {
    ...typography.bodySmall,
    marginBottom: layout.labelMarginBottom,
  },
  
  // List item
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: layout.listItemHeight,
    paddingHorizontal: layout.listItemPadding,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
  },
  
  // Divider
  divider: {
    height: borderWidth.thin,
    backgroundColor: colors.border,
    marginVertical: spacing.lg,
  },
  
  // Text styles
  textPrimary: {
    color: colors.text,
  },
  
  textSecondary: {
    color: colors.textSecondary,
  },
  
  textTertiary: {
    color: colors.textTertiary,
  },
  
  // Flex helpers
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Bottom navigation
  bottomNav: {
    flexDirection: 'row',
    height: layout.bottomNavHeight,
    backgroundColor: colors.navBackground,
    borderTopWidth: borderWidth.thin,
    borderTopColor: colors.border,
  },
  
  bottomNavItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: layout.bottomNavPaddingVertical,
  },
  
  bottomNavLabel: {
    ...typography.navLabel,
    marginTop: layout.bottomNavLabelMarginTop,
  },
  
  bottomNavLabelActive: {
    ...typography.navLabelActive,
    marginTop: layout.bottomNavLabelMarginTop,
  },
};

export default theme;