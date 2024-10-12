import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import packageJson from "./package.json" assert { type: "json" };
import dts from 'rollup-plugin-dts'; // Adicione isso para gerar arquivos de tipos
import postcss from 'rollup-plugin-postcss';

export default [
    {
        input: './src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: 'es',
                sourcemap: true
            }
        ],
        plugins: [
            external(),
            resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'] }),
            commonjs(),
            postcss({ // Adicione o plugin postcss
                extensions: ['.css', '.scss'],
                modules: {
                    generateScopedName: '[name]__[local]___[hash:base64:5]',  // Gera classes únicas para CSS Modules
                },
                use: [
                    ['sass', { includePaths: ['./src/reset.scss'] }]
                ],
                extract: true, // Extrai para um arquivo CSS separado
                minimize: true,
            }),
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
                presets: [['@babel/preset-react', { "runtime": "automatic" }]],
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }),
            terser()

        ]
    },
    {
        input: 'dist/types/index.d.ts', // Mude isso para apontar para o diretório correto
        output: [{ file: 'dist/esm/index.d.ts', format: 'es' }], // Gera o bundle das declarações
        plugins: [dts()],
        external: [/\.scss$/],// Use o plugin dts para gerar declarações
    }
]