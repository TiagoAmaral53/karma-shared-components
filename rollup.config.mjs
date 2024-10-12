import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import packageJson from "./package.json" assert { type: "json" };
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import alias from '@rollup/plugin-alias';
import { dirname, resolve as pathResolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

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
            alias({
                entries: [
                    {
                        find: '@karma',
                        replacement: pathResolve(__dirname, 'src'),
                    }
                ]
            }),
            resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'] }),
            commonjs(),
            postcss({ // Adicione o plugin postcss
                extract: true, // Não extrair para um arquivo CSS
                minimize: true,
                modules: false,
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
        external: [/\.css$/, /\.scss$/],  // Ignorar arquivos CSS/SCSS ao gerar declarações de tipos
    }
]