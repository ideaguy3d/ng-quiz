/**
 * Created by Julius Alvarado on 7/22/2017.
 */

///<reference path="../_all.ts"/>

// fizzBuzz();
let anagram = new Anagrams('earth', 'heart');
// console.log(anagram.areAnagrams('earth', 'heart'));
// console.log(`palindrome? = ${palindrome('lol')}`);
let dataSet = [-4,3,-9,0,4,1];
plusMinus(dataSet);


console.log(); // to set my breakpoint
//-- algorithms:
function plusMinus(data) {
    let totals = {pos: 0, neg: 0, zero: 0};
    data.forEach((elem, idx) => {
       elem < 0 ? totals.neg += 1 :
           elem > 0 ? totals.pos += 1 :
               totals.zero += 1;
    });

    let precision = {
        round: function(number, precision) {
            let factor = Math.pow(10, precision);
            let tempNumber = number * factor;
            let roundedTempNumber = Math.round(tempNumber);
            return roundedTempNumber / factor;
        }
    };

    console.log(precision.round(totals.pos/data.length, 6));
    console.log(precision.round(totals.neg/data.length, 6));
    console.log(precision.round(totals.zero/data.length, 6));
}

function palindrome(str) {
    let reverse = str.split('').reverse().join('');
    console.log('reverse = '+reverse);
    return str === reverse;
}

function Anagrams(s1, s2) {
    this.s1 = s1.toLowerCase().split('').sort().join();
    this.s2 = s2.toLowerCase().split('').sort().join();
    this.areAnagrams = function () {
        return this.s1 === this.s2;
    }
}

function fizzBuzz() {
    const arr: ReadonlyArray<string> = ['foo', 'bar', 'baz'];
    const foo = [5, 2, 100, 57, 22, 19];
    console.log(foo.sort((a, d) => a - d).toString());
    const copy: Array<string> = arr.slice().sort();
    for (let index = 1; index < 101; index++) {
        const fizz = index % 3 === 0;
        const buzz = index % 5 === 0;
        const result = fizz && buzz ? 'FizzBuzz' :
            fizz ? 'Fizz' :
                buzz ? 'Buzz' :
                    index;
    }

    let items = [
        {name: 'Zeros', value: 37},
        {name: 'Edward', value: 21},
        {name: 'Sharpe', value: 37},
        {name: 'And', value: 45},
        {name: 'The', value: -12},
        {name: 'Magnetic', value: 14}
    ];

    items.sort((a, d) => {
        let aname = a.name.toLowerCase();
        let dname = d.name.toLowerCase();
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

module ContactManagerApp {
    export class Algorithms {
        public static fizzBuzz(): void {
            for (let i = 0; i < 101; i++) {
                let fizz = i % 3 === 0;
                let buzz = i % 5 === 0;
                let result = fizz && buzz ? 'FizzBuzz' :
                    fizz ? 'fizz' :
                        buzz ? 'buzz' :
                            i;
                console.log(result);
            }
        }
    }
    export class TestAlgorithms {
        fizzBuzz: any = Algorithms.fizzBuzz();
    }
}
