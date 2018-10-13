import buble from 'rollup-plugin-buble';

export default {
  input: 'index.js',
  output: {
    file: 'build/d3-compose.js',
    format: 'umd',
    extend: true,
    name: 'd3',
  },
  plugins: [
    buble({
      transforms: {
        dangerousForOf: true
      }
    })
  ]
};
