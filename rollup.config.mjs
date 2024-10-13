import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import alias from '@rollup/plugin-alias';
import { dirname, resolve as pathResolve } from 'path';
import { fileURLToPath } from 'url';
import autoprefixer from 'autoprefixer';
import scss from 'rollup-plugin-scss'; // Adicione esta linha para importar o plugin SCSS

const __dirname = dirname(fileURLToPath(import.meta.url));

export default [
    {
        //input: './src/index.ts', # compile everything in one file
        input: {
            Atom: 'src/components/atoms/Atom/index.ts',
            //Button: 'src/components/atoms/Button/index.ts',
            Molecule: 'src/components/molecules/Molecule/index.ts',
            Organism: 'src/components/organisms/Organism/index.ts',
            Page: 'src/components/pages/Page/index.ts',
            Template: 'src/components/templates/Template/index.ts',
        },
        output: [
            /*             {
                            // output to directory
                            file: packageJson.module,
                            format: 'es',
                            sourcemap: true,
                        }, */
            {
                dir: 'dist/cjs',
                format: 'cjs',
                sourcemap: true,
                entryFileNames: '[name].js',  // Isso define que o nome do arquivo será baseado no nome da entrada
                chunkFileNames: 'chunks/[name]-[hash].js',
            },
            {
                dir: 'dist/esm',
                format: 'es',
                sourcemap: true,
                entryFileNames: '[name].js',  // Isso define que o nome do arquivo será baseado no nome da entrada
                chunkFileNames: 'chunks/[name]-[hash].js',
            }
        ],
        plugins: [
            external((id) => {
                const whitelist = ['some-package', 'another-package'];

                console.log("Verificando pacote externo:", id);

                // Ignora todos os pacotes de node_modules, exceto os que estão na whitelist
                return (
                    !whitelist.includes(id) &&
                    (id in pkg.dependencies || id in pkg.peerDependencies || builtinModules.includes(id))
                );
            }),
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