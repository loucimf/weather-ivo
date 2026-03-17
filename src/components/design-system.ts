
export const designSystemStyles = {
    // Fonts
    fontFamily: 'var(--font-family)' as const,

    // Font Sizes
    fontSizeXsm: 'var(--font-size-xsm)' as const,
    fontSizeSm: 'var(--font-size-sm)' as const,
    fontSizeMdSmall: 'var(--font-size-mdSmall)' as const,
    fontSizeMd: 'var(--font-size-md)' as const,
    fontSizeLg: 'var(--font-size-lg)' as const,
    fontSizeTitle: 'var(--font-size-title)' as const,
    fontSizeWarning: 'var(--font-size-warning)' as const,
    fontSizeMainAction: 'var(--font-size-main-action)' as const,
    fontSizeCancelAction: 'var(--font-size-cancel-action)' as const,
    fontSizeDropdownText: 'var(--font-size-dropdown-text)' as const,

    // Font Weights
    fontWeightText: 'var(--font-weight-text)' as const,
    fontWeightTitle: 'var(--font-weight-title)' as const,
    fontWeightWarning: 'var(--font-weight-warning)' as const,
    fontWeightMainAction: 'var(--font-weight-main-action)' as const,
    fontWeightCancelAction: 'var(--font-weight-cancel-action)' as const,
    fontWeightDropdownText: 'var(--font-weight-dropdown-text)' as const,

    // Font Colors
    fontColorPrimary: 'var(--font-color-primary)' as const,
    fontColorSecondary: 'var(--font-color-secondary)' as const,
    fontColorTertiary: 'var(--font-color-tertiary)' as const,

    // Line Heights
    lineHeightWarning: 'var(--line-height-warning)' as const,
    lineHeightNormal: 'var(--line-height-normal)' as const,

    // Border Radius
    cornerRadius: 'var(--corner-radius)' as const,
    cornerRadiusComponent: 'var(--corner-radius-component)' as const,
    radiusButton: 'var(--radius-button)' as const,
    radiusDropdown: 'var(--radius-dropdown)' as const,
    radiusItem: 'var(--radius-item)' as const,

    // Spacing
    spaceXtraSm: 'var(--space-xtra-sm)' as const,
    spaceSm: 'var(--space-sm)' as const,
    spaceMd: 'var(--space-md)' as const,
    spaceLg: 'var(--space-lg)' as const,

    // Margins
    marginSm: 'var(--margin-sm)' as const,
    marginMd: 'var(--margin-md)' as const,
    marginLg: 'var(--margin-lg)' as const,
    marginDropdownBottom: 'var(--margin-dropdown-bottom)' as const,
    marginItemBottom: 'var(--margin-item-bottom)' as const,

    // Padding
    paddingZero: '0' as const,
    paddingSm: 'var(--padding-sm)' as const,
    paddingMd: 'var(--padding-md)' as const,
    paddingLg: 'var(--padding-lg)' as const,
    paddingLgScreen: 'var(--padding-lg-screen)' as const,
    paddingHzComponent: 'var(--padding-hz-component)' as const,
    paddingPopup: 'var(--padding-popup)' as const,
    paddingPopupWithText: 'var(--padding-popup-with-text)' as const,
    paddingButton: 'var(--padding-button)' as const,
    paddingDropdownHorizontal: 'var(--padding-dropdown-horizontal)' as const,
    paddingDropdownExpandedVertical: 'var(--padding-dropdown-expanded-vertical)' as const,
    paddingItemLeft: 'var(--padding-item-left)' as const,

    // Gaps
    gapNone: "0px" as const,
    gapXxxSm: 'var(--gap-xxxSm)' as const,
    gapSm: 'var(--gap-sm)' as const,
    gapMd: 'var(--gap-md)' as const,
    gapLg: 'var(--gap-lg)' as const,
    gapBottomContainer: 'var(--gap-bottom-container)' as const,

    // Sizes
    sizeLargePopupWidth: 'var(--size-large-popup-width)' as const,
    sizeLargePopupHeight: 'var(--size-large-popup-height)' as const,
    sizeButtonWidth: 'var(--size-button-width)' as const,
    sizeButtonHeight: 'var(--size-button-height)' as const,
    sizeTabHeight: 'var(--size-tab-height)' as const,
    sizeLoading: 'var(--size-loading)' as const,
    sizeDropdownHeight: 'var(--size-dropdown-height)' as const,
    sizeDropdownExpandedHeight: 'var(--size-dropdown-expanded-height)' as const,
    sizeItemHeight: 'var(--size-item-height)' as const,
    sizeRowMedium: 'var(--size-row-medium)' as const,
    sizeIconWidth: 'var(--size-icon-width)' as const,
    sizeIconHeight: 'var(--size-icon-height)' as const,

    // Palette Colors
    colorBackgroundWhite: 'var(--color-background-white)' as const,
    colorGreen: 'var(--color-green)' as const,
    colorRed: 'var(--color-red)' as const,
    colorBackgroundGray2: 'var(--color-background-gray2)' as const,
    colorBackgroundGray3: 'var(--color-background-gray3)' as const,

    // Component Colors
    colorPopupBackground: 'var(--color-popup-background)' as const,
    colorMainAction: 'var(--color-main-action)' as const,
    colorTextInputBorder: 'var(--color-text-input-border)' as const,
    colorError: 'var(--color-error)' as const,
    colorCancelAction: 'var(--color-cancel-action)' as const,
    colorTintedAction: 'var(--color-main-tinted-action)' as const,
    colorDropdownBackground: 'var(--color-dropdown-background)' as const,
    colorDropdownHover: 'var(--color-dropdown-hover)' as const,
    colorDropdownText: 'var(--color-dropdown-text)' as const,
    colorItemBackground: 'var(--color-item-background)' as const,
    colorItemClickedBackground: 'var(--color-item-clicked-background)' as const,
    colorItemHoverBackground: 'var(--color-item-hover-background)' as const,
    colorDisabledBackground: 'var(--color-disabled-background)' as const,
    colorPresenteeismGreen: 'var(--color-presenteeism-green)' as const,
    colorPresenteeismRed: 'var(--color-presenteeism-red)' as const,
    colorPresenteeismYellow: 'var(--color-presenteeism-yellow)' as const,
    colorPresenteeismDefault: 'var(--color-presenteeism-default)' as const,
    colorUserInitialsBorder: 'var(--color-user-initials-border)' as const,
    colorUserInitialsBackground: 'var(--color-user-initials-background)' as const,
    colorIconButtonBackground: 'var(--color-background-gray4)' as const,
    colorPlaceholderBackground: 'var(--color-background-gray3)' as const,

    // Text Colors
    colorWarningText: 'var(--color-warning-text)' as const,
    colorTitleText: 'var(--color-title-text)' as const,
    colorText: 'var(--color-text)' as const,
    colorTextSecondary: 'var(--color-text-secondary)' as const,

    // Meaning Colors
    colorSuccess: 'var(--color-success)' as const,
    colorRejected: 'var(--color-rejected)' as const,

    // Transitions
    transitionEase: 'var(--transition-ease)' as const,
    opacityTransitionEase: 'opacity var(--transition-ease)' as const,

    // Font Combinations (from variables.css)
    interRegular: 'var(--inter-regular)' as const,
    interBold: 'var(--inter-bold)' as const,
    interTitle: 'var(--inter-title)' as const,

    borderDisabledButton: '1px solid var(--color-disabled-background)' as const,

    justifyContentRight: 'flex-end' as const,
    justifyContentLeft: 'flex-start' as const,

    shadowCard: '0px 2px 6px 0px rgba(0, 0, 0, 0.10)' as const,
    shadowTextInput: '0 2px 2px 0 rgba(33, 37, 41, 0.06), 0 0 1px 0 rgba(33, 37, 41, 0.08)' as const

} as const;