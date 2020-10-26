// rollup.config.js
// commonjs
var common = require('./rollup.js');

module.exports = {
    input: 'src/index.' + common.type,
    output: {
        file: 'dist/medium-editor-textcolor.js',
        format: 'cjs',
        // When export and export default are not used at the same time, set legacy to true.
        // legacy: true,
        banner: common.banner,
    },
    plugins: [
        common.getCompiler({
            tsconfigOverride: {
                compilerOptions: {
                    declaration: true,
                    declarationDir: "dist/types",
                    module: 'ES2015'
                },
                exclude: [
                    "node_modules",
                    "test"
                ]
            },
            useTsconfigDeclarationDir: true
        })
    ]
};
