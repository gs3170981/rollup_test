import {
  publicConf
} from './rollup.config'

import {
  uglify
}
from 'rollup-plugin-uglify'

export default publicConf.map((config, index) => {
  config.output.sourcemap = false;
  config.plugins = [
    ...config.plugins,
    // ...[
    //   uglify()
    // ]
  ]
  return config;
});