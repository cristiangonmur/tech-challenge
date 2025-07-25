// eslint.config.mjs
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    {
        ignores: ['.next', 'node_modules', 'dist', 'out'],
    },
    ...compat.extends(
        'next/core-web-vitals',
        'next',
        'plugin:@typescript-eslint/recommended',
        'plugin:styled-components-a11y/recommended',
        'prettier'
    ),
];

export default eslintConfig;
