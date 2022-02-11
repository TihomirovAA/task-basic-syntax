import { parse } from "path";

export function romanToInteger(str) {
    let dict = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let result = 0;
    let digits = Object.keys(dict);
    
    for (var i = 0; i < str.length; i++) {
        if (digits.indexOf(str[i]) < digits.indexOf(str[i+1])) {
            result -= dict[str[i]];
        } else {
            result += dict[str[i]];
        }
      }
    return  result;
}