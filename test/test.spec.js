var expect = require('chai').expect;

// ts 测试编译后文件
var base = require('../src/index.js');

describe('单元测试', function() {
    this.timeout(1000);

    describe('功能1', function() {
        it('相等', function() {
            let dd = document.getElementById('sdf');
            expect(base()).to.equal('base');
        });
    });

    describe('功能2', function() {
        it('不相等', function() {
            expect(base()).not.to.equal(1);
        });
    });
    describe('功能3', function() {
        it('不为空', function() {
            expect(base()).not.to.empty;
        });
    });
});
