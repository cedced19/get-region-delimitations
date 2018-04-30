
var getRegionDelimitations = require('../');

var assert = require('assert');

var example = require('../example.json');

describe('Test the function', function () {
    
    it('should get the right points', function () {
        var points = getRegionDelimitations(example);
        assert.equal(points[0].latitude, 48.73688507080078);
        assert.equal(points[0].longitude, 7.279478073120117);
        assert.equal(points[1].latitude, 48.745025634765625);
        assert.equal(points[1].longitude, 7.2554779052734375);
    });
    
});
