var typescript = require('rollup-plugin-typescript2');
var babel = require('rollup-plugin-babel');
var config = require('../jslib.json');
var pkg = require('../package.json');

var name = pkg.name.split('/').pop();
var version = pkg.version;

var banner =
`/*!
 * ${pkg.name} ${version} (https://github.com/sonce/BTGrid)
 * API https://github.com/sonce/BTGrid/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} sonce. All Rights Reserved
 * Licensed under MIT (https://github.com/sonce/BTGrid/blob/master/LICENSE)
 */
`;
var type = pkg.srctype === 'ts' ? 'ts' : 'js';

function getCompiler(opt) {
    if (type === 'js') {
        return babel({
            babelrc: false,
            presets: [
                [
                    '@babel/preset-env',
                    {
                        'targets': {
                          'browsers': 'last 2 versions, > 1%, ie >= 6, Android >= 4, iOS >= 6, and_uc > 9',
                          'node': '0.10'
                        },
                        'modules': false,
                        'loose': false
                    }
                ]
            ],
            plugins: [
                [
                    '@babel/plugin-transform-runtime',
                    {
                        'helpers': false,
                        'regenerator': false
                    }
                ]
            ],
            runtimeHelpers: true,
            exclude: 'node_modules/**'
        });
    }

    opt = opt || {
        tsconfigOverride: { compilerOptions : { module: 'ES2015' } }
    }

    return typescript(opt);
}

exports.type = type;
exports.name = name;
exports.config = config;
exports.banner = banner;
exports.getCompiler = getCompiler;
