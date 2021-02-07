const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const colors = require('./src/styles/colors.json');
const fonts = require('./src/styles/fonts.json');
const spaces = require('./src/styles/spaces.json');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': colors.primary,
            '@link-color': colors.link,
            '@success-color': colors.primary,
            '@warning-color': colors.warning,
            '@error-color': colors.warning,
            '@font-size-base': fonts.size,
            '@heading-color': colors.glyphGray,
            '@text-color': colors.glyphGray,
            '@text-color-secondary': colors.glyphGraySecondary,
            '@disabled-color': colors.glyphGrayQuaternary,
            '@border-radius-base': '4px',
            '@border-color-base': colors.primary,
            '@primary-1': colors.primary,
            '@primary-2': colors.secondary,
            '@primary-3': colors.tertiary,
            '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)',
            '@btn-primary-bg': colors.primary,
            '@dropdown-selected-color': colors.primary,
            '@typography-title-margin-top': 0,
            '@typography-title-margin-bottom': 0,
            '@divider-text-padding': 0,
            // Input
            '@input-height-base': '48px',
            '@input-height-sm': '32px',
            '@input-border-color': colors.glyphGrayTertiary,
            '@input-hover-border-color': colors.glyphGrayTertiary,
            '@input-placeholder-color': colors.glyphGrayTertiary,
            '@input-padding-vertical-base': '0.8rem',
            '@input-disabled-bg': colors.glyphSecondary,
        },
    })
);
