let answerExplainationEl = document.querySelector('#explaination')
let answerEl = document.querySelector('#answer');

/* TWO SUM ALGORITHM START

let twoSum = function(nums, target) {
    
    let dict = {};
        
    for (let i = 0; i < nums.length; i++){
        let x = target - nums[i];
        if (x in dict){
            return [dict[x], i];
        }
        dict[nums[i]] = i;
    }  

};

let nums = [1,2,3,12,13];
let target = 25;

answerExplainationEl.textContent = "The Indicies that correspond to the addends that compose the target sum are: ";
answerEl.textContent = twoSum(nums, target);

TWO SUM ALGORITHM END*/

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* REVERSE INTEGER ALGORITHM START

let reverse = function(x) {
    
    x = x.toString().split('');
    
    if (x[0] == '-'){
        x = x.slice(1);
        x.push('-');
    }
    
    x = parseInt((x.reverse().join('')), 10);
    
    if (x > 2147483647 || x < -2147483648){
        x = 0;
    }
    
    return x; 
    
};

let x = -123

answerExplainationEl.textContent = "Given the input integer, its reverse is: "
answerEl.textContent = reverse(x);

REVERSE INTEGER ALGORITHM END*/

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* IS PALINDROME ALGORITHM START

let isPalindrome = function(x) {
    
    let palindrome = false;
    let stringX = x.toString();
    let reverseX = x.toString().split('').reverse().join('');

    if(stringX == reverseX){
        palindrome = true;
    }

    return palindrome;

};

let x = 10;

answerExplainationEl.textContent = "The given number a palindrome:"
answerEl.textContent = isPalindrome(x);

IS PALINDROME ALGORITHM END*/

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* ROMAN TO INTEGER START 

let romanToInt = function(s) {
    
let intS = 0;
let dict = {'I':1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M' : 1000};

for (i=0;i<s.length;i++){
    if(s[i] == 'I' || s[i] == 'X' || s[i] == 'C'){
        if(i == s.length - 1 || s[i+1] == s[i]){
            intS += dict[s[i]]
        }
        else{
            if (s[i] == 'I'){
                if(s[i+1] == 'V' || s[i+1] == 'X'){
                    intS -= dict[s[i]];
                }
            }else if (s[i] == 'X'){
                if(s[i+1] == 'L' || s[i+1] == 'C'){
                    intS -= dict[s[i]];
                }
                else{
                    intS += dict[s[i]];
                }
            }else if (s[i] == 'C'){
                if(s[i+1] == 'D' || s[i+1] == 'M'){
                    intS -= dict[s[i]];
                }
                else{
                    intS += dict[s[i]];
                }
            }
        }    
    }
    else{
        intS += dict[s[i]];
    }
}

return intS;

};

let s = 'MCMXC';

answerExplainationEl.textContent = "The integer form of the given roman numeral is: "
answerEl.textContent = romanToInt(s);

ROMAN TO INTEGER END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LONGEST COMMON PREFIX START

let longestCommonPrefix = function (strs) {

    let least = '';

    if (strs && strs.length > 1) {


        let tempStrs = strs.slice();
        let j = 0;
        let shortest = 0;
        let temp = '';

        //find the shortest string in the array
        for (i = 0; i < tempStrs.length; i++) {

            if (shortest == 0) {
                shortest = tempStrs[i].length;
            } else if (tempStrs[i].length < shortest) {
                shortest = tempStrs[i].length
            }

        }

        //reduce all strings to the shortest length
        for (i = 0; i < tempStrs.length; i++) {
            tempStrs[i] = tempStrs[i].slice(0, shortest);
        }

        //compare individual characters in each string to each other
        for (i = 0; i < tempStrs.length; i++) {

            //if it's the first character, use it as the comparison maker
            if (temp == '') {

                temp = tempStrs[i][j];

            //otherwise, compare to the comparison maker
            } else {
                
                //if the comparison maker and the char being compared don't match, exit the loop
                if (temp != tempStrs[i][j]) {

                    break

                //if they do match, and the loop has compared the same character in each word, and it hasn't yet compared all of the characters in the words
                } else if (temp == tempStrs[i][j] && i == tempStrs.length-1 && j < shortest){
                    
                    //restart the loop on the next letter
                    i = -1;
                    j += 1;

                    //add the matching letter to the least common prefix
                    least += temp;

                    //reset the comparison making character
                    temp = '';

                }
                //if the above conditions are not met, move to the next comparison
            }
        }
    //if there is only one element in the array, it's the least common prefix    
    }else if(strs.length == 1){
        least = strs[0];
    }

    return least;

};

let strs = [["cir","car"],["abca","aba","aaab"],["dog","racecar","car"],["flower","flow","flight"], ['a']];

answerExplainationEl.textContent = "The longest common prefix of the given strings is: "
answerEl.textContent = longestCommonPrefix(strs[4]);

 LONGEST COMMON PREFIX END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/*VALID PARENTHESES START*/

let isValid = function (s) {

    let dict = { ')' : '(', '}' : '{', ']' : '[' };
    let count = [0, 0, 0];

    let activeContainer = ""; //active container tracking string
    let aci = 0; //active container index

    if (!s) {
        return true;
    }
    else {

        for (let i = 0; i < s.length; i++) {

            if (activeContainer == ""){

                activeContainer += s[i];
                aci = 0;

            } else if (s[i] == '(' || s[i] == '[' || s[i] == '{') {

                activeContainer += s[i];
                aci += 1;

            } else {

                console.log('activeContainer: ',activeContainer);
                console.log('aci: ',  aci)
                console.log('s[i]: ', s[i]);
                console.log('dict[s[i]]: ', dict[s[i]]);
                
                if (activeContainer[aci] == dict[s[i]]){

                    activeContainer = activeContainer.slice(0,activeContainer.length-1)
                    aci -= 1;

                } else {

                    return false;

                }
            }

            switch (s[i]) {
                case '(':
                    count[0] += 1
                    break;
                case ')':
                    count[0] -= 1
                    break;
                case '[':
                    count[1] += 1
                    break;
                case ']':
                    count[1] -= 1
                    break;
                case '{':
                    count[2] += 1
                    break;
                case '}':
                    count[2] -= 1
                    break;
                default:
                    console.log('Oops, error in switch')
                    break;
            }

        }

        if (count[0] != 0 || count[1] != 0 || count[2] != 0){

            return false;
            
        } 

    }

    return true;

};

let s = ["()", "()[]{}", "(]", "([)]", "{[]}", "([{}])", "([]{()}[{()}])", "(){}}{", '){', "[([]])"]; //valid, valid, invalid, invalid, valid, valid, valid, invalid, invalid

answerExplainationEl.textContent = "The parentheses in the given string are valid: "
answerEl.textContent = isValid(s[7]);

/*VALID PARENTHESES END*/

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/