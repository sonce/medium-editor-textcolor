// rollup.config.js
// ES output
var common = require('./rollup.js');

module.exports = {
    input: 'src/index.' + common.type,
    output: {
        file: 'dist/medium-editor-textcolor.esm.js',
        format: 'esm',
        // When export and export default are not used at the same time, set legacy to true.
        // legacy: true,
        banner: common.banner,
    },
    plugins: [
        common.getCompiler()
    ]
};
