/**
 * Created by Julius Alvarado on 7/22/2017.
 */
///<reference path="../_all.ts"/>
// fizzBuzz();
var anagram = new Anagrams('earth', 'heart');
// console.log(anagram.areAnagrams('earth', 'heart'));
// console.log(`palindrome? = ${palindrome('lol')}`);
var dataSet = [-4, 3, -9, 0, 4, 1];
plusMinus(dataSet);
console.log(); // to set my breakpoint
//-- algorithms:
function plusMinus(data) {
    var totals = { pos: 0, neg: 0, zero: 0 };
    data.forEach(function (elem, idx) {
        elem < 0 ? totals.neg += 1 :
            elem > 0 ? totals.pos += 1 :
                totals.zero += 1;
    });
    var precision = {
        round: function (number, precision) {
            var factor = Math.pow(10, precision);
            var tempNumber = number * factor;
            var roundedTempNumber = Math.round(tempNumber);
            return roundedTempNumber / factor;
        }
    };
    console.log(precision.round(totals.pos / data.length, 6));
    console.log(precision.round(totals.neg / data.length, 6));
    console.log(precision.round(totals.zero / data.length, 6));
}
function palindrome(str) {
    var reverse = str.split('').reverse().join('');
    console.log('reverse = ' + reverse);
    return str === reverse;
}
function Anagrams(s1, s2) {
    this.s1 = s1.toLowerCase().split('').sort().join();
    this.s2 = s2.toLowerCase().split('').sort().join();
    this.areAnagrams = function () {
        return this.s1 === this.s2;
    };
}
function fizzBuzz() {
    var arr = ['foo', 'bar', 'baz'];
    var foo = [5, 2, 100, 57, 22, 19];
    console.log(foo.sort(function (a, d) { return a - d; }).toString());
    var copy = arr.slice().sort();
    for (var index = 1; index < 101; index++) {
        var fizz = index % 3 === 0;
        var buzz = index % 5 === 0;
        var result = fizz && buzz ? 'FizzBuzz' :
            fizz ? 'Fizz' :
                buzz ? 'Buzz' :
                    index;
    }
    var items = [
        { name: 'Zeros', value: 37 },
        { name: 'Edward', value: 21 },
        { name: 'Sharpe', value: 37 },
        { name: 'And', value: 45 },
        { name: 'The', value: -12 },
        { name: 'Magnetic', value: 14 }
    ];
    items.sort(function (a, d) {
        var aname = a.name.toLowerCase();
        var dname = d.name.toLowerCase();
        if (aname < dname) {
            return -1;
        }
        if (dname < aname) {
            return 1;
        }
        return 0;
    });
    return true;
}
var ContactManagerApp;
(function (ContactManagerApp) {
    var Algorithms = (function () {
        function Algorithms() {
        }
        Algorithms.fizzBuzz = function () {
            for (var i = 0; i < 101; i++) {
                var fizz = i % 3 === 0;
                var buzz = i % 5 === 0;
                var result = fizz && buzz ? 'FizzBuzz' :
                    fizz ? 'fizz' :
                        buzz ? 'buzz' :
                            i;
                console.log(result);
            }
        };
        return Algorithms;
    }());
    ContactManagerApp.Algorithms = Algorithms;
    var TestAlgorithms = (function () {
        function TestAlgorithms() {
            this.fizzBuzz = Algorithms.fizzBuzz();
        }
        return TestAlgorithms;
    }());
    ContactManagerApp.TestAlgorithms = TestAlgorithms;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=algorithms.js.map