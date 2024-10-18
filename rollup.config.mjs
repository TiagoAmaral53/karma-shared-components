import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
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
  if (id.includes('src/components/molecules/chart')) {
    console.log('chunck-client-only', id);
    return 'chunck-client-only';
  }
  if (id.includes('client-only.ts')) {
    console.log('client-only', id);
    return 'client-only'; // Agrupar componentes de átomos em um chunk
  }

  if (id.includes('node_modules')) {
    console.log('node_modules', id);
    return 'vendor';
  }
  if (id.includes('src/components/atoms')) {
    return 'atoms';
  }
  if (id.includes('src/components/molecules')) {
    return 'molecules';
  }
  if (id.includes('src/components/organisms')) {
    return 'organisms';
  }
  if (id.includes('src/components/pages')) {
    return 'pages';
  }
  if (id.includes('src/components/templates')) {
    return 'templates';
  }
  if (id.includes('src/components/ui')) {
    return 'ui';
  }
  console.log('other', id);

  return 'chunck';
};

export default [
  {
    input: {
      index: 'src/index.ts',
      'client-only': 'src/client-only.ts',
      global: 'src/global.css',
    },
    output: [
      {
        dir: 'dist/esm',
        format: 'es',
        sourcemap: true,
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].js',
        manualChunks(id) {
          return chunks(id);
        },
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
];
