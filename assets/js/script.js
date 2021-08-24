let answerExplainationEl = document.querySelector('#explaination')
let answerListEl = document.querySelector('#answerList');

/* TWO SUM ALGORITHM START */

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

let nums = [[1,2,3,12,13], [1,2,3], [4,5,6]];
let target = [25, 5, 9];

answerExplainationEl.textContent = "The Indicies that correspond to the addends that compose the target sum are: ";

for(let i = 0; i < nums.length;i++){

    let listEl = document.createElement('li');
    let ansString = twoSum(nums[i], target[i]).join(" and ");

    listEl.textContent = "The indecies of the array elements in " + nums[i] + " that sum to the target " + target[i] + " are " + ansString;
    answerListEl.appendChild(listEl);

}


/* TWO SUM ALGORITHM END*/

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

answerExplainationEl.textContent = "Given the input integer, its reverse is: ";

let x = [-123, 234, 81234234123122, -565, 123123, 6754];

for(let i = 0; i < x.length;i++){

    let listEl = document.createElement('li');
    let reversed = reverse(x[i]);
    let coloring = ' is ' + reversed;
    
    if(reversed == 0){

        coloring = " is too large to fit the memory of an integer";

    }

    listEl.textContent = "The reverse of " + x[i] + coloring;
    answerListEl.appendChild(listEl);

}

REVERSE INTEGER ALGORITHM END */

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

answerExplainationEl.textContent = "Given values and an explaination of if they are palindromes or not"

let x = [10, 121, 3456, 7645467, -121];

for(let i = 0; i < x.length;i++){

    let listEl = document.createElement('li');
    let palindrome = isPalindrome(x[i]);
    let coloring = " is not a palindrome"
    
    if(palindrome){

        coloring = " is a palindrome";

    }

    listEl.textContent = x[i] + coloring;
    answerListEl.appendChild(listEl);

}

IS PALINDROME ALGORITHM END */

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

let s = ['MCMXC', 'III', 'IV', 'MMXXI', 'XLVII', "MDCLVIII" ];

answerExplainationEl.textContent = "The following is a series of strings of roman numerals and their integer form: ";

for(let i = 0; i < s.length;i++){

    let listEl = document.createElement('li');

    listEl.textContent = s[i] + " is equivalent to " + romanToInt(s[i]);

    answerListEl.appendChild(listEl);

}

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

answerExplainationEl.textContent = "The following is a series of strings, and the longest common prefix among them: ";

for(let i = 0; i < strs.length;i++){

    let listEl = document.createElement('li');

    strsString = strs[i].join(", ");

    if(longestCommonPrefix(strs[i])){
    listEl.textContent = longestCommonPrefix(strs[i]) + " is the longest prefix among " + strsString;
    }
    else{
        listEl.textContent = "There is no common prefix among " + strsString;
    }

    answerListEl.appendChild(listEl);

}

LONGEST COMMON PREFIX END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/*VALID PARENTHESES START

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

            if(count[0] < 0 || count[1] < 0 || count[2] < 0){
                return false;
            }

        }

        if (count[0] != 0 || count[1] != 0 || count[2] != 0){

            return false;
            
        } 

    }

    return true;

};

answerExplainationEl.textContent = "The following is a series of strings of parentheses, braces and brackets and an examination of their validity: ";

let s = ["()", "()[]{}", "(]", "([)]", "{[]}", "([{}])", "([]{()}[{()}])", "(){}}{", '){', "[([]])"]; //valid, valid, invalid, invalid, valid, valid, valid, invalid, invalid

for(let i = 0; i < s.length;i++){

    let listEl = document.createElement('li');
    let validString = " is not a valid set of parentheses, braces, and brackets";

    if(isValid(s[i])){

        validString = " is a valid set of parentheses, braces, and brackets";

    }

    listEl.textContent = s[i] + validString;
    answerListEl.appendChild(listEl);

}

VALID PARENTHESES END*/

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/