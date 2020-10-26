import { expect } from 'chai';
import base from '../src'

describe('单元测试', function () {
    this.timeout(1000);

    describe('功能1', function () {
        it('相等', function () {
            expect(base()).to.equal('base');
        });
    });

    describe('功能2', function () {
        it('不相等', function () {
            expect(base()).not.to.equal(1);
        });
    });
    describe('功能3', function () {
        it('不为空', function () {
            expect(base()).not.to.empty;
        });
    });
});
