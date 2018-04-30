var getExtremums = require('get-extremums');

module.exports = function (list, latLabel, lngLabel) {
    if (!latLabel) latLabel = 'latitude';
    if (!lngLabel) lngLabel = 'longitude';
    let lat = getExtremums(list, latLabel);
    let lng = getExtremums(list, lngLabel);
    let array = [];
    let obj1 = {};
    obj1[latLabel] = lat.lowest[latLabel];
    obj1[lngLabel] = lng.highest[lngLabel];
    array.push(obj1);
    let obj2 = {};
    obj2[latLabel] = lat.highest[latLabel];
    obj2[lngLabel] = lng.lowest[lngLabel];
    array.push(obj2);
    return array;
};