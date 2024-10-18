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

const __dirname = dirname(fileURLToPath(import.meta.url));

const externalPlugin = (id) => {
  const whitelist = ['some-package', 'another-package'];

  console.log('Verificando pacote externo:', id);

  // Ignora todos os pacotes de node_modules, exceto os que estão na whitelist
  return whitelist.includes(id);
};

const chunks = (id) => {
  /*   if (id.includes('src/components/molecules/chart')) {
      console.log('chunck-client-only', id);
      return 'chunck-client-only';
    }
    if (id.includes('client-only.ts')) {
      console.log('client-only', id);
      return 'client-only'; // Agrupar componentes de átomos em um chunk
    }
   */
  if (id.includes('node_modules')) {
    console.log('node_modules', id);
    return 'vendor'; // Separar pacotes externos num chunk chamado 'vendor'
  }
  if (id.includes('src/components/atoms')) {
    return 'atoms'; // Agrupar componentes de átomos em um chunk
  }
  if (id.includes('src/components/molecules')) {
    return 'molecules'; // Agrupar componentes de moléculas em outro chunk
  }
  if (id.includes('src/components/organisms')) {
    return 'organisms'; // Organismos em um chunk separado
  }
  if (id.includes('src/components/pages')) {
    return 'pages'; // Organismos em um chunk separado
  }
  if (id.includes('src/components/templates')) {
    return 'templates'; // Organismos em um chunk separado
  }
  if (id.includes('src/components/ui')) {
    return 'ui'; // Organismos em um chunk separado
  }
  console.log('other', id);

  return 'chunck'; // Outros componentes ficam no chunk principal
};

export default [
  {
    //input: './src/index.ts', # compile everything in one file
    input: {
      index: 'src/index.ts',
      //'client-only': 'src/components/client-only.ts',
      global: 'src/global.css',
    },
    output: [
      /*             {
                            // output to directory
                            file: packageJson.module,
                            format: 'es',
                            sourcemap: true,
                        }, */
      /*  IMPORTANT: disabled the commonJS build for now. Since is not being used     {
              dir: 'dist/cjs',
              format: 'cjs',
              sourcemap: true,
              chunkFileNames: 'chunks/[name].js',
              entryFileNames: '[name].js', // Isso define que o nome do arquivo será baseado no nome da entrada
              manualChunks(id) {
                return chunks(id);
              },
            }, */
      {
        dir: 'dist/esm',
        format: 'es',
        sourcemap: true,
        entryFileNames: '[name].js', // Isso define que o nome do arquivo será baseado no nome da entrada
        chunkFileNames: 'chunks/[name].js',
        manualChunks(id) {
          return chunks(id);
        },
        //inlineDynamicImports: true, // Evitar chunks adicionais
      },
    ],
    plugins: [
      external((id) => externalPlugin(id)),
      alias({
        entries: [
          {
            find: '@karma',
            replacement: pathResolve(__dirname, 'src'),
          },
          {
            find: '@',
            replacement: pathResolve(__dirname, 'src'),
          },
        ],
      }),
      resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'] }),
      commonjs(),
      postcss({
        // Adicione o plugin postcss
        extract: 'karma.css', // Não extrair para um arquivo CSS
        minimize: true,
        modules: false,
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: [['@babel/preset-react', { runtime: 'automatic' }]],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      terser(),
    ],
  },
  {
    // Gera os tipos a partir dos entry points
    input: {
      index: 'src/index.ts',
      //'client-only': 'src/components/client-only.ts',
    },
    output: [{ dir: 'dist/esm', format: 'es' }], // Gera o bundle das declarações
    plugins: [dts()],
    external: [/\.css$/, /\.scss$/], // Ignorar arquivos CSS/SCSS ao gerar declarações de tipos
  },
];
