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
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
                presets: [['@babel/preset-react', { "runtime": "automatic" }]],
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }),
            postcss({ // Adicione o plugin postcss
                extensions: ['.css', '.scss'],
                extract: 'index.css',
                minimize: true,
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