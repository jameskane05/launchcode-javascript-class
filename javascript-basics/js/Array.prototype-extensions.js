/*
 *
 non-mutating array sort method
 *
 */
if (!Array.prototype.order) {
    Array.prototype.order = function () {
        arrCopy = arr.slice(0);
        return arrCopy.sort();
    };
}

//TEST - PASSED
var arr = [3, 4, 2, 1, "James"];
var arrCopy = arr.order();
console.log("arr: " + arr);
console.log("arr.order(): " + arrCopy);



/*
 *
 .includes() polyfill method
 *
 */
if (!Array.prototype.includesPoly) {
    Array.prototype.includesPoly = function (query) {
        return arr.some(function (arrVal) {
            return arrVal == query
        })
    };
}

//TEST - PASSED
var includesTest = arr.includesPoly(3);
var includesTest2 = arr.includesPoly(5);
var includesTest3 = arr.includesPoly("James");
console.log("arr.includes(3): " + includesTest);
console.log("arr.includes(5): " + includesTest2);
console.log("arr.includes(\"James\"): " + includesTest3);



/*
 *
 .find() polyfill method
 *
 */
if (!Array.prototype.findPoly) {
    Array.prototype.findPoly = function (query) {
        if (arr.includesPoly(query)) return query
        return undefined;
    };
}

//TEST - PASSED
var find = arr.findPoly("James");
var find2 = arr.findPoly("Dave");
console.log("findPoly(\"James\"): " + find);
console.log("findPoly(\"Dave\"): " + find2);



/*
 *
 .findAll() polyfill method
 *
 */
if (!Array.prototype.findAllPoly) {
    Array.prototype.findAllPoly = function (query) {
        return arr.filter(function (arrVal) {
            return query == arrVal;
        });
    };
}

//TEST - PASSED
arr = [1, 2, 3, 3, 4, 5, "James"];
findAllArr = arr.findAllPoly(3);
console.log("newArr: " + arr);
console.log(".findAll(3) arr: " + findAllArr);