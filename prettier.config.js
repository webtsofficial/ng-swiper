/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
    singleQuote: true,
    htmlWhitespaceSensitivity: 'strict',
    endOfLine: 'lf',
    tabWidth: 4,
    printWidth: 80,
    bracketSameLine: true,
    objectWrap: 'preserve',
    plugins: [
        'prettier-plugin-organize-imports',
        'prettier-plugin-organize-attributes',
        'prettier-plugin-multiline-arrays',
    ],
};

export default config;
