'use strict';

var expect = require('chai').expect;
var stringus = require('../index');

describe('#stringus', function() {
    it('should return a string', function() {
        var result = stringus();
        expect(result).to.equal('dit werkte');
    });
});