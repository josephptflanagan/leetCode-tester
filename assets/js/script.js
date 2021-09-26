let answerExplainationEl = document.querySelector('#explaination')
let answerListEl = document.querySelector('#answerList');

/* TWO SUM ALGORITHM START - EASY

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

TWO SUM ALGORITHM END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* REVERSE INTEGER ALGORITHM START - EASY

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

REVERSE INTEGER ALGORITHM END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* IS PALINDROME ALGORITHM START - EASY

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

IS PALINDROME ALGORITHM END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* ROMAN TO INTEGER START - EASY 

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

ROMAN TO INTEGER END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LONGEST COMMON PREFIX START - EASY

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

LONGEST COMMON PREFIX END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/*VALID PARENTHESES START - EASY

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

VALID PARENTHESES END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MERGE TO SORTED LISTS START - EASY

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


class LinkedList {
    constructor() {
        this.head = null;
    }    
}

let insertNodeAtTail = function (head, data) {

    let newNode = new ListNode(data);
    if(head === null){
        head = newNode;
    }else if (head.next === null){
        head.next = newNode;
    }else{
        insertNodeAtTail(head.next, data);
    }
    return head;

}

let listConstructor = function (array) {

    let list = new LinkedList();

    for (i = 0; i < array.length; i++) {

        list.head = insertNodeAtTail(list.head, array[i])

    }

    return list;

}

var mergeTwoLists = function (l1, l2) {

let l3 = new ListNode(null,null);
let prev = l3;

while (l1 !== null && l2 !== null){
    if (l1.val <= l2.val){
        prev.next = l1;
        l1 = l1.next;
    } else {
        prev.next = l2;
        l2 = l2.next;
    }
    prev = prev.next;
}

if (l1 === null){
    prev.next = l2;
}
if (l2 === null){
    prev.next = l1;
}

return l3.next;

};

let l1 = [[], [], [1, 2, 4], [2, 4, 6, 9]];
let l2 = [[], [0], [1, 3, 4], [1, 3, 5, 7, 8]];

answerExplainationEl.textContent = "The following is a series of linked lists and a merged combination of the two: ";

for (let i = 0; i < l1.length; i++) {

    console.log('listConstructor for l1: ',listConstructor(l1[i]).head);
    console.log('listConstrictor for l2: ',listConstructor(l2[i]).head);

    let listEl = document.createElement('li');
    let mergedList = mergeTwoLists(listConstructor(l1[i]).head, listConstructor(l2[i]).head);
    let listArray = [];
    let listString = "";
    console.log('mergedList: ',mergedList)
    
    if(mergedList === null){
        listEl.textContent = "lists are empty";
    }
    else{

        while(mergedList.next !== null){
            listArray.push(mergedList.val);
            mergedList = mergedList.next;
        }
        listString = listArray.join(", ");


        listEl.textContent = "Merging " + l1[i] + " with " + l2[i] + " yields: " + listString;
    }

    answerListEl.appendChild(listEl);

}

 MERGE TWO SORTED LISTS END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* REMOVE DUPLICATES START - EASY

var removeDuplicates = function (nums) {

    let last = null;
    let removals = [];
    let k = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] == last){
            removals.push(i);
        }
        last = nums[i];

    }

    removals = removals.reverse();
    k = nums.length - removals.length;

    for (let i = 0; i < removals.length; i++) {

        nums.splice(removals[i], 1);
        nums.push('_');

    }

    return k;

};

let x = [[1, 1, 2], [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],[1,1]];

answerExplainationEl.textContent = "Given a series of ordered arrays with potential duplicated elements, the duplicates are removed and the first superfluous index returned ";

for (let i = 0; i < x.length; i++) {
    let listEl = document.createElement('li');
    listEl.textContent = "Given " + x[i] + ', the first superflous index with all duplicates removed is ' + removeDuplicates(x[i]);
    answerListEl.appendChild(listEl);
}

REMOVE DUPLICATES END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* REMOVE ELEMENT START - EASY

var removeElement = function(nums, val) {

    removals = [];
    let k = 0;

    nums.sort();

    for (i=0;i<nums.length;i++){

        if (nums[i] == val){
            removals.push(i)
        }

    }

    k = nums.length - removals.length;
    nums.splice(removals[0],removals.length);

    for(i=0;i<k;i++){
        nums.push('_');
    }

    return k;
        
};

let x = [[3,2,2,3],[0,1,2,2,3,0,4,2]];
let y = [3,2];

answerExplainationEl.textContent = "Given an array of numbers, remove all elements matching a given value in place, maintain the length of the array with '_' and return the number of removed elements";

for (let i = 0; i < x.length; i++) {
    let listEl = document.createElement('li');
    listEl.textContent = "Given " + x[i] + ", the first superflous index with all " + y[i]+ "'s removed is " + removeElement(x[i], y[i]);
    answerListEl.appendChild(listEl);
}

REMOVE ELEMENT END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* IMPLEMENT strStr() START - EASY

var strStr = function (haystack, needle) {

    let answer = "";

    if (!haystack && !needle) {

            answer = 0;

    } else {

        answer = haystack.indexOf(needle);

    }

    return answer

};

let x = ['hello', 'aaaaa', '', ''];
let y = ['ll', 'bba', '', 'a'];

answerExplainationEl.textContent = "Given a 'haystack' string and a 'needle' string, and searching for the needle in the haystack, return the first index of it if it's in the string, -1 if it's not, and 0 if the haystack is empty";

for (let i = 0; i < x.length; i++) {
    let listEl = document.createElement('li');
    let location = strStr(x[i], y[i]);

    if (location == -1) {
        listEl.textContent = "The haystack '" + x[i] + "' does not contain the needle '" + y[i] + "'";
    } else if (location == 0) {
        listEl.textContent = "The haystack is empty" ;
    } else {
        listEl.textContent = "The haystack '" + x[i] + "' contains the needle '" + y[i] + "' at index " + location;
    }
   
    answerListEl.appendChild(listEl);

}

IMPLEMENT strStr() END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SEARCH INSERT POSITION START - EASY 

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, 
// return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity. 

var searchInsert = function(nums, target) {

    for (let i = 0; i < nums.length; i++){

        if (nums[i] >= target){
            return i;
        }
        else if (i == nums.length - 1){
            return nums.length;
        }

    }
    
};

let x = [[1,3,5,6], [1,3,5,6], [1,3,5,6], [1,3,5,6], [1]];
let y = [5,2,7,0,0];

answerExplainationEl.textContent = "Given an array of numbers and a target number, find the target in the array, or the index where it should be entered";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let location = searchInsert(x[i], y[i]);

    listEl.textContent = "'" + y[i] + "' is located at, or could be located at index " + location + " within '" + x[i] + "'" ;

    answerListEl.appendChild(listEl);

}

SEARCH INSERT POSITION END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MAXIMUM SUBARRAY START - EASY 

//Given an integer array nums, find the contiguous subarray (containing at least one number) which 
//has the largest sum and return its sum.

//A subarray is a contiguous part of an array.

var maxSubArray = function(nums) {

        let tempSum = 0;
        let maxSum = nums[0];

        if(nums.length == 0){
            maxSum = 0;
        }

        for (let i = 0; i < nums.length; i++){
            if (nums[i] > nums[i] + tempSum){
                tempSum = nums[i];
            } else {
                tempSum = nums[i] + tempSum;
            }

            if (tempSum > maxSum){
                maxSum = tempSum;
            }

        }

        return maxSum;
    
};

let x = [[-2,1,-3,4,-1,2,1,-5,4], [1], [5,4,-1,7,8]]; //6, 1, 23

answerExplainationEl.textContent = "Given an array of numbers find the subarray that sums to the greatest number";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let sum = maxSubArray(x[i]);

    let strArray = x[i].join(', ');

    listEl.textContent = "The greatest sum of the elements of a sub array of [" + strArray + "] is " + sum + ".";

    answerListEl.appendChild(listEl);

}
 MAXIMUM SUBARRAY END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SUM OF SQUARE NUMBERS START - DAILY CHALLENGE - MEDIUM

//Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

var judgeSquareSum = function(c) {

    let rootC = Math.floor(Math.sqrt(c));
    let iterator = 0;
    let valid = false;

    while(iterator <= rootC){
        let sum = iterator * iterator + rootC * rootC;
        if(sum === c){
            valid = true;
            break;
        } else if (sum < c){
            iterator++;
        } else {
            rootC --
        }
    }

    return valid;

};

let x = [100,99,25,5,3,4,2,1] //true, false, true, true, true

answerExplainationEl.textContent = "Given a number 'c', determine if it can be found as the sum of two squares (a^2 + b^2 = c)";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let sumOfSquares = judgeSquareSum(x[i]);
    let coloring = " cannot be found as the sum of squares.";

    if (sumOfSquares){
        coloring = " can be found as the sum of squares.";
    }

    listEl.textContent = x[i] + coloring;

    answerListEl.appendChild(listEl);

}

SUM OF SQUARE NUMBERS END - DAILY CHALLENGE - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LENGTH OF LAST WORD START - EASY

//Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

//A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    let sArray = s.split(" ");
    let wordArray = [];

    for(let i = 0; i<sArray.length;i++){

        if(sArray[i] !== ""){

            wordArray.push(sArray[i]);
            
        }

    }

    return wordArray[wordArray.length-1].length;
};

let x = ["Hello World","   fly me   to   the moon  ","luffy is still joyboy"] //5,4,6

answerExplainationEl.textContent = "Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let length = lengthOfLastWord(x[i]);

    listEl.textContent = "The last word of '" + x[i] + "' is " + length + " letters in length";

    answerListEl.appendChild(listEl);

}

LENGTH OF LAST WORD END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* PLUS ONE START - EASY 

//Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

//The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

//You may assume the integer does not contain any leading zero, except the number 0 itself.

var plusOne = function (digits) {

    let reversed = digits.reverse();
    let concluded = false;

    let i = 0;

    while (!concluded){

        reversed[i] = reversed[i] +=1;

        if(i == reversed.length-1 && reversed[i] > 9){

            reversed[i] = 0;
            reversed.push(1);
            concluded = true;
            
        } else if (reversed[i] > 9){
            reversed[i] = 0;
        } else{
            concluded = true;
        }
        i++;
    }

    reversed = reversed.reverse();

    return reversed;

};

let x = [[1, 2, 3], [4, 3, 2, 1], [0], [9], [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]] //[1,2,4], [4,3,2,2], [1]

answerExplainationEl.textContent = "Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let unincremented = x[i].join(", ");
    let incremented = plusOne(x[i]).join(", ");


    listEl.textContent = "Given the original array of '[" + unincremented + "]', the incremented array appears as '[" + incremented + "]'";

    answerListEl.appendChild(listEl);

}

 PLUS ONE END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* ADD BINARY START - EASY 

//Given two binary strings a and b, return their sum as a binary string.

let zfill = function (str, len) {

    let strArray = str.split("");
    strArray = strArray.reverse();

    for (let i = 0; i < len - str.length; i++) {
        strArray.push('0');
    }

    strArray = strArray.reverse();

    let newStr = strArray.join("");

    return newStr;

}

let reverseString = function (str) {

    str = str.split('').reverse().join('');

    return str;

}

let max = function (numA, numB) {

    let maxNum = 0;

    maxNum = (numA >= numB ? numA : numB);

    return maxNum;
}

var addBinary = function (a, b) {

    //Unforunately this can't handle very large numbers
    //let tenA = parseInt(a,2);
    //let tenB = parseInt(b,2);
    //let binarySum = (tenA+tenB).toString(2);

    return binarySum;

    let result = "";
    let carry = 0;
    let max_len = max(a.length, b.length);

    a = zfill(a, max_len);
    b = zfill(b, max_len);

    a = reverseString(a);
    b = reverseString(b);

    for (let i = 0; i < max_len; i++){
        let r = carry;
        r+= (a[i] == '1' ? 1 : 0);
        r+= (b[i] == '1' ? 1 : 0);
        result = (r % 2 == 1 ? '1' : '0') + result;
        carry = (r < 2 ? 0 : 1);
    }

    if(carry != 0){
        result = '1' + result
    }

    result = zfill(result, max_len);

    return result;

};

//100 10101
let x = ["11", "1010"];
let y = ["1", "1011"];

answerExplainationEl.textContent = "Given two binary strings a and b, return their sum as a binary string";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    listEl.textContent = x[i] + " + " + y[i] + " = " + addBinary(x[i], y[i]);

    answerListEl.appendChild(listEl);

}

 ADD BINARY END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* ADD TWO NUMBERS - START - MEDIUM 

//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, 
//and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

//You may assume the two numbers do not contain any leading zero, except the number 0 itself.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


class LinkedList {
    constructor() {
        this.head = null;
    }    
}

let insertNodeAtTail = function (head, data) {

    let newNode = new ListNode(data);
    if(head === null){
        head = newNode;
    }else if (head.next === null){
        head.next = newNode;
    }else{
        insertNodeAtTail(head.next, data);
    }
    return head;

}

let listConstructor = function (array) {

    let list = new LinkedList();

    for (i = 0; i < array.length; i++) {

        list.head = insertNodeAtTail(list.head, array[i])

    }

    return list;

}

let listToArray = function (list) {

    let array = [];

    while(list.head != null){
        array.push(list.head.val);
        list.head = list.head.next;

    }

    return array;

}

let zfill = function (str, len) {

    let strArray = str.split("");
    strArray = strArray.reverse();

    for (let i = 0; i < len - str.length; i++) {
        strArray.push('0');
    }

    strArray = strArray.reverse();

    let newStr = strArray.join("");

    return newStr;

}

let reverseString = function (str) {

    str = str.split('').reverse().join('');

    return str;

}

let max = function (numA, numB) {

    let maxNum = 0;

    maxNum = (numA >= numB ? numA : numB);

    return maxNum;
}


//[7,0,8](342 + 465 = 807), [0], [8,9,9,9,0,0,0,1], [7,0,4,0,1], [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
let x = [[2,4,3],[0],[9,9,9,9,9,9,9],[2,4,9],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]];
let y = [[5,6,4],[0],[9,9,9,9],[5,6,4,9],[5,6,4]]
let correct = [[7,0,8], [0], [8,9,9,9,0,0,0,1], [7,0,4,0,1], [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]];

var addTwoNumbers = function(l1, l2) {

    let result = "";
    let str1 = listToArray(l1).join('');
    let str2 = listToArray(l2).join('');

    let carry = 0;
    let max_len = max(str1.length, str2.length);

    str1 = reverseString(str1);
    str2 = reverseString(str2);

    str1 = zfill(str1, max_len);
    str2 = zfill(str2, max_len);

    str1 = reverseString(str1);
    str2 = reverseString(str2);

    for (let i = 0; i < max_len; i++){
        let r = carry;
        r+= parseInt(str1[i]);
        r+= parseInt(str2[i]);
        result = (r >= 10 ? (r-10).toString() : r.toString()) + result;
        carry = (r >= 10 ? 1 : 0);
    }

    if(carry != 0){
        result = '1' + result
    }

    let resultArray = result.split('').reverse(0);
    let resultIntArray = [];

    for (let i = 0; i < resultArray.length; i++){
        resultIntArray.push(parseInt(resultArray[i]));
    }
    
    let sumList = listConstructor(resultIntArray);

    return sumList;
    
};

answerExplainationEl.textContent = "Given two single linked lists, return their sum as a third single linked list";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let listX = listConstructor(x[i]);
    let listY = listConstructor(y[i]);

    let arrayX = listToArray(listX);
    let arrayY = listToArray(listY);

    let sum = addTwoNumbers(listConstructor(x[i]), listConstructor(y[i]))

    let displaySum = listToArray(sum);

    listEl.textContent = "[" + arrayX + "] + [" + arrayY + "] = [" + displaySum + "]";

    answerListEl.appendChild(listEl);

}

 ADD TWO NUMBERS - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LENGTH OF LONGEST SUBSCRIPT - START - MEDIUM

//Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {

    let tempString = "";
    let maxString = (s.length ? s[0] : "");

    if(s){

        for(let i = 0; i < s.length; i++){

            if(!tempString.includes(s[i])){ 

                tempString += s[i];

            } else {                

                tempString = tempString.slice(tempString.indexOf(s[i])+1) + s[i];  

            }

            maxString = (tempString.length > maxString.length ? tempString : maxString);

        }
    }

    return maxString.length;

};

let x = ["abcabcbb","bbbbb", "pwwkew", "", " ", "au", "dvdf"];
let correct = [3,1,3,0,1,2,3] //"abc, b, wke, none, , "au", "vdf"

answerExplainationEl.textContent = "Given a string s, find the length of the longest subString without repeating characters.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let xLeng = lengthOfLongestSubstring(x[i])

    let proper = (xLeng == correct[i] ? "this is correct" : "this is wrong");

    listEl.textContent = "The longest sub string in '" + x[i] + "' is: " + xLeng + " characters long, " + proper;

    answerListEl.appendChild(listEl);

}

 LENGTH OF LONGEST SUBSCRIPT - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MEDIAN OF TWO SORTED ARRAYS - START - HARD 

//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

//The overall run time complexity should be O(log (m+n)).

var findMedianSortedArrays = function(nums1, nums2) {

    let combinedArray = nums1.concat(nums2).sort(function(a,b){return a - b});
    let medianIndex = Math.floor((combinedArray.length-1)/2);

    if(combinedArray.length % 2 != 0){

        return  combinedArray[medianIndex].toFixed(5);

    } else{

        return  ((combinedArray[medianIndex] + combinedArray[medianIndex+1]) / 2).toFixed(5);

    }
    
};

let x = [[1,3],[1,2],[0,0],[],[2],[3],[100000]];
let y = [[2],[3,4],[0,0],[1],[],[-2,-1],[100001]];
let correct = [2.00000,2.50000,0.00000,1.00000,2.00000,-1.00000,100000.50000]
answerExplainationEl.textContent = "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays..";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let median = findMedianSortedArrays(x[i],y[i]);

    let proper = (median == correct[i] ? "this is correct" : "this is wrong");

    listEl.textContent = "The median of array [" + x[i] + "] and [" + y[i] + "] is " + median + ", " + proper;

    answerListEl.appendChild(listEl);

}


 MEDIAN OF TWO SORTED ARRAYS - END - HARD */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LONGEST PALINDROMIC SUBSTRING - START - MEDIUM 

//Given a string s, return the longest palindromic substring in s.

let isPalindrome = function(x) {
    
    let palindrome = false;
    let stringX = x.toString();
    let reverseX = x.toString().split('').reverse().join('');

    if(stringX == reverseX){
        palindrome = true;
    }

    return palindrome;

};

var longestPalindrome = function(s) {

    let longest = '';
    
    for (let i=0; i<s.length; i++){
        expandCheck(i, i);
        expandCheck(i, i+1);
    }
    
    function expandCheck(l, r){
        while (l>=0 && r<s.length && s[l]===s[r]){
            if (r-l+1 > longest.length){
                longest = s.slice(l, r+1);
            }
            l--;
            r++;
        }
    }
    
    return longest;

};

let x = ["babad","cbbd","a","ac"];
let correct = ["bab", "bb", "a", "a"];
answerExplainationEl.textContent = "Given a string s, return the longest palindromic substring in s.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let greatestPalindrome = longestPalindrome(x[i]);

    let proper = (greatestPalindrome == correct[i] ? "this is correct" : "this is wrong");

    listEl.textContent = "Given the string '" + x[i] + "' the longest palindrome is '" + greatestPalindrome + "', " + proper;

    answerListEl.appendChild(listEl);

}

 LONGEST PALINDROMIC SUBSTRING - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* ZIG ZAG CONVERSATION - START - MEDIUM 

//The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

//  P   A   H   N
//  A P L S I I G
//  Y   I   R

//  And then read line by line: "PAHNAPLSIIGYIR"

//  Write the code that will take a string and make this conversion given a number of rows:


var convert = function(s, numRows) {

    let rows = [];
    let position = 0;
    let direction = true; //false = up, true = down

    if(numRows == 1){
        return s;
    }

    for(i = 0; i < numRows; i++){
        rows.push([]);
    }

    for(i = 0; i < s.length; i++){

        if(direction){

            rows[position].push(s[i]);

            if(position == numRows - 1){

                direction = false;
                position--;

            } else { 

            position++;

            } 

        } else {

            rows[position].push(s[i]);

            if(position > 0){

            position--;

            } else {

                direction = true;
                position++;

            }
            
        }
    }

    for (let i = 0; i < rows.length; i++){  
        rows[i] = rows[i].join("");
    }

    return rows.join("");
    
};

let x = ["PAYPALISHIRING","PAYPALISHIRING","A"];
let y = [3, 4, 1]
let correct = ["PAHNAPLSIIGYIR","PINALSIGYAHRPI","A"];

//example 2 explaination
//P     I    N
//A   L S  I G
//Y A   H R
//P     I

answerExplainationEl.textContent = "Given a String and a number of rows to arrange the string into a zig zag pattern, the resulting string is.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let converted = convert(x[i], y[i]);

    let proper = (converted == correct[i] ? "this is correct" : "this is wrong");

    listEl.textContent = "Arrainging the string '" + x[i] + "', in a zigzag pattern in " + y[i] + " row(s), yields " + converted + ", " + proper;

    answerListEl.appendChild(listEl);

}

 ZIG ZAG CONVERSATION - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* ZIG ZAG CONVERSATION - START - MEDIUM

//Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

//The algorithm for myAtoi(string s) is as follows:

//Read in and ignore any leading whitespace.
//Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. 
//Assume the result is positive if neither is present.
//Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.
//Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
//If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, 
//and integers greater than 231 - 1 should be clamped to 231 - 1.
//Return the integer as the final result.
//Note:

//Only the space character ' ' is considered a whitespace character.
//Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

var myAtoi = function (s) {

    if (!s) {
        return 0;
    }

    let stringInProgress = s.slice();

    let unusable = /[a-z\.+-\s]/;

    workable = false;
    
    while(!workable){

        if (stringInProgress[0] == " "){
            stringInProgress = stringInProgress.slice(1);
        }
        else {
            workable = true;
        }
    }

    if (stringInProgress[0] == '-') {
        stringInProgress = stringInProgress.slice(1);
    } else if (stringInProgress[0] == '+') {
        stringInProgress = stringInProgress.slice(1);
    }

    if (!stringInProgress || stringInProgress[0].match(unusable)) {
        return 0;
    }

    let integer = s;

    integer = parseInt(integer);

    if (integer > 2147483647) {
        integer = 2147483647;
    } else if (integer < -2147483648) {
        integer = -2147483648;
    }

    return integer;

};

let x = ["42", "   -42", "4193 with words", "words and 987", "-91283472332", "21474836460", "00000-42a1234", "+-12","  +  413"];
let correct = [42, -42, 4193, 0, -2147483648, 2147483647, 0, 0, 0];

answerExplainationEl.textContent = "This algorithm converts strings to integers like c/c++'s atoi function";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let converted = myAtoi(x[i]);

    let proper = (converted == correct[i] ? "this is correct" : "this is wrong");

    listEl.textContent = "The string '" + x[i] + "', becomes " + converted + " using myAtoi function, " + proper;

    answerListEl.appendChild(listEl);

}

 ZIG ZAG CONVERSATION - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* REGULAR EXPRESSION MATCHING - START - HARD 

//Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

//'.' Matches any single character.​​​​
//'*' Matches zero or more of the preceding element.

//The matching should cover the entire input string (not partial).

var isMatch = function (s, p) {

    let regex = new RegExp(p);

    return s == s.match(regex);

};

let x = ["aa", "aa", "ab", "aab", "mississippi"];
let y = ["a", "a*", ".*", "c*a*b", "mis*is*p*."];
let correct = [false, true, true, true, false];

answerExplainationEl.textContent = "Given a string and a pattern, determine if the string matches the pattern";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let matches = isMatch(x[i],y[i]);
    let matchColor = (matches ? "' does match the string '" : "' does not match the string ");

    let proper = (matches == correct[i] ? ",' this is correct" : ",' this is wrong");

    listEl.textContent = "The pattern '" + y[i] + matchColor + x[i] + proper;

    answerListEl.appendChild(listEl);

}

 REGULAR EXPRESSION MATCHING - END - HARD */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* CONTAINER WITH THE MOST WATER - START - MEDIUM 

// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn
// such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a 
// container, such that the container contains the most water.

//  Notice that you may not slant the container.

var maxArea = function(height) {

    if (height.length < 2){
        return 0;
    }

    let i = 0;
    let j = height.length-1;
    let tempArea = 0;
    let maxArea = 0;

    while (i != j){
        
        if (height[i] > height[j]){
            tempArea = height[j] * (j - i)
            j--;
        } else {
            tempArea = height[i] * (j - i);
            i++;
        }

        maxArea = (tempArea > maxArea ? tempArea : maxArea);

    }
    
    return maxArea;

};

let x = [[1,8,6,2,5,4,8,3,7], [1,1], [4,3,2,1,4], [1,2,1]];
let correct = [49,1,16,2];

answerExplainationEl.textContent = "Given an array of heights, find the greatest area of water that could fit between two points";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let area = maxArea(x[i]);

    let proper = (area == correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = "Given the array [" + x[i] + "], the greatest area that can exist between two of those points is " + area + proper;

    answerListEl.appendChild(listEl);

}

 CONTAINER WITH THE MOST WATER - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* INTEGER TO ROMAN - START - MEDIUM 

var intToRoman = function (num) {

    let mun = num.toString().split("").reverse().join(""); //reverse num
    let length = mun.length;
    let romanNum = "";
    let fives = ["V", "L", "D"];
    let nines = ["IX", "XC", "CM"];
    let dicts = [{ 1: 'I', 2: 'II', 3: 'III', 4: 'IV'}, { 1 : 'X', 2 : 'XX', 3 : 'XXX', 4 : 'XL'}, { 1 : 'C', 2 : 'CC', 3 : 'CCC', 4 : 'CD'}];

    for (let i = 0; i < length; i++) {

        let cNum = parseInt(mun[i]); //current num
        let tNum = ""; //temp num      

        if (i < 3) {

            cNum -= 5;
            
            if (cNum >= 0){
                tNum = fives[i];
            } else {
                cNum +=5;
            }

            if (cNum){
                if(tNum && cNum == 4){
                    tNum = nines[i];
                } else {
                    tNum += dicts[i][cNum]
                }
            }

        } else {

            let remainder = parseInt(mun.slice(3).split("").reverse().join(""));

            while (remainder > 0){
                tNum += 'M'
                remainder --;
            }

            i = length - 1;

        }

        romanNum = tNum + romanNum;

    }

    return romanNum;

};

let x = [3, 4, 9, 58, 1994, 10994];
let correct = ["III", "IV", "IX", "LVIII", "MCMXCIV", "MMMMMMMMMMCMXCIV"];

answerExplainationEl.textContent = "Given an integer, convert it to a roman numeral.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let roman = intToRoman(x[i]);

    let proper = (roman == correct[i] ? ",' this is correct" : ",' this is wrong");

    listEl.textContent = "The integer '" + x[i] + ",' converts to the roman numeral '" + roman + proper;

    answerListEl.appendChild(listEl);

}

 INTEGER TO ROMAN - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* 3SUM - START - MEDIUM 

//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
//and nums[i] + nums[j] + nums[k] == 0.

//Notice that the solution set must not contain duplicate triplets.

var threeSum = function(nums) {

    let trip = [];

    if(nums.length < 3){
        return trip;
    }

    nums.sort((a,b)=>a-b);

    for (let i=0; i<nums.length-2; i++){

        if (nums[i]==nums[i-1]){
            continue
        };

        let subTarget = 0 - nums[i];
        let left = i+1;
        let right = nums.length-1;
        
        while (left < right){

            let sum = nums[left] + nums[right];

            if (sum===subTarget){

                trip.push([nums[i], nums[left], nums[right]]);

                while (nums[left]==nums[left+1]){
                     left++;
                }
                while (nums[right]==nums[right-1]){
                    right--;
                }

                left++;
                right--;

            } else if (sum < subTarget) {

                left++;

            } else {

                right--;
            }
        }
    }

    return trip;
    
};

let x = [[-1,0,1,2,-1,-4], [], [0]];
let correct = [[[-1,-1,2],[-1,0,1]], [], []];

answerExplainationEl.textContent = "Given an integer array nums, return all the triplets.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let triplets = threeSum(x[i]);

    let colorText = (triplets.length != 0 ? "] contains the triplets [" + triplets + "]" : "] does not contain any triplets");

    let proper = " ";

    if ( triplets.length == 0){
        proper = (correct[i].length == 0 ? ", this is correct." : ", this is wrong.");
    } else {
                
            console.log ('index ' + i + ', evaluate on a case by case basis');
        }    

    listEl.textContent = "The array [" + x[i] + colorText + proper;

    answerListEl.appendChild(listEl);

}

 3SUM - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* 3SUM CLOSEST - START - MEDIUM 

//Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

//Return the sum of the three integers.

//You may assume that each input would have exactly one solution.

var threeSumClosest = function (nums, target) {

    nums.sort((a, b) => a - b);

    let sumArray = [];

    for (let i = 0; i < nums.length - 2; i++) {

      let j = i + 1;
      let k = nums.length - 1;

      while (j < k) {

        let sum = nums[i] + nums[j] + nums[k];

        if (sum === target) {

          return sum;

        } else if (sum < target) {

          j++;

        } else if (sum > target) {

          k--;

        }

        sumArray.push(sum);

      }
    }

    let result = sumArray[0];
    let closet = Math.abs(target - sumArray[0]);

    for (let i = 0; i < sumArray.length; i++) {

        let closeCheck = Math.abs(target - sumArray[i]);

      if (closeCheck < closet) {

        closet = closeCheck;
        result = sumArray[i];

      }

    }
   
    return result;
    
  };

let x = [[-1,2,1,-4], [0,0,0]];
let y = [1,1]
let correct = [2,0];

answerExplainationEl.textContent = "Given an integer array nums, and an integer target, return the sum of the three elements in the array closest to the target.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let closest = threeSumClosest(x[i], y[i]);

    let proper = (closest == correct[i] ? ",' this is correct" : ",' this is wrong");

    listEl.textContent = "The closest sum to the target " + y[i] + " is " + closest + proper;

    answerListEl.appendChild(listEl);

}

 3SUM CLOSEST - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MAXIMUM NUMBER OF BALLOONS - START - EASY

//Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

//You can use each character in text at most once. Return the maximum number of instances that can be formed.

var maxNumberOfBalloons = function (text) {

    const bChars = [1, 1, 2, 2, 1]//b a ll oo n
    let bCharCount = [0, 0, 0, 0, 0];//b a l o n
    let bCount = 0; //balloon count
    let stillPossible = true;

    for (let i = 0; i < text.length; i++) {

        switch (text[i]) {
            case 'b':
                bCharCount[0]++;
                break;
            case 'a':
                bCharCount[1]++;
                break;
            case 'l':
                bCharCount[2]++;
                break;
            case 'o':
                bCharCount[3]++;
                break;
            case 'n':
                bCharCount[4]++;
                break;
            default:
                break;
        }

    }

    while (stillPossible) {

        for (let i = 0; i < 5; i++) {

            if(bCharCount[i] - bChars[i] > -1){

                bCharCount[i] -= bChars[i];

                if(i == 4){
                    bCount++;
                }

            } else {

                stillPossible = false;
                break;

            }
        }
    }

    return bCount;

};

let x = ["nlaebolko", "loonbalxballpoon", "leetcode", "balon"];
let correct = [1, 2, 0, 0];

answerExplainationEl.textContent = "Given string of text, return the number of times that the word balloon can be spelled from the characters within the sting.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let count = maxNumberOfBalloons(x[i]);

    let proper = (count == correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = "The number of times the letters of 'balloon' appear in '" + x[i] + ",' is " + count + proper;

    answerListEl.appendChild(listEl);

}

MAXIMUM NUMBER OF BALLOONS - END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* REVERSE ONLY LETTERS - START - EASY 

//Given a string s, reverse the string according to the following rules:

//All the characters that are not English letters remain in the same position.
//All the English letters (lowercase or uppercase) should be reversed.

//Return s after reversing it.

var reverseOnlyLetters = function(s) {

    let letters = [];     //array containing all the letters of string s
    let nonLetters = [];  //array containing all the indices of non letters of string s

    let reverseS = ""     // string s with only the letters reversed, the returned string

    let nlr = /[0-9-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/; //non letter regex 

    for (let i = 0; i < s.length; i++){

       if (s[i].match(nlr)) {
           nonLetters.push(i)
       } else {
           letters.push(s[i])
       }
    }

    if (letters) letters.reverse();

    for (let i = 0; i < s.length; i++){
        if (nonLetters.includes(i)){
            reverseS += s[i]
        } else {
            reverseS += letters[0];
            if (letters.length > 1){
                letters = letters.slice(1);
            }
            
        }
    }

    return reverseS;
    
};

let x = ["ab-cd", "a-bC-dEf-ghIj", "Test1ng-Leet=code-Q!", 's', '-', '123'];
let correct = ["dc-ba", "j-Ih-gfE-dCba", "Qedo1ct-eeLg=ntse-T!", 's', '-', '123'];

answerExplainationEl.textContent = "Given string of text, that string with only the letters reversed.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let reversed = reverseOnlyLetters(x[i]);

    let proper = (reversed == correct[i] ? ",' this is correct" : ",' this is wrong");

    listEl.textContent = "The string '" + x[i] + ",' with only the letters reversed is '" + reversed + proper;

    answerListEl.appendChild(listEl);

}

 REVERSE ONLY LETTERS - END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LONGEST TURBULENT SUBARRAY - START - MEDIUM 

//Given an integer array arr, return the length of a maximum size turbulent subarray of arr.

//A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

//More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:

//For i <= k < j:
//    arr[k] > arr[k + 1] when k is odd, and
//    arr[k] < arr[k + 1] when k is even.
//Or, for i <= k < j:
//    arr[k] > arr[k + 1] when k is even, and
//    arr[k] < arr[k + 1] when k is odd.

var maxTurbulenceSize = function (arr) {

    let longest = 0;
    let tempLength = 0;
    let last = 0;
    let currentDirection = "none";

    for (let i = 0; i < arr.length; i++) {

        if (i == 0) {
            last = arr[i];
            tempLength = 1;
        }
        else if (currentDirection == "none") {

            if (last > arr[i]) {
                currentDirection = "up";
            } else if (last < arr[i]) {
                currentDirection = "down";
            } else {
                continue;
            }

            last = arr[i];
            tempLength++;

        } else if (currentDirection == "down") {

            if (last > arr[i]) {
                currentDirection = "up";
                tempLength++;
            } else {
                longest = (tempLength > longest ? tempLength : longest);
                if (last < arr[i]) {
                    currentDirection = "down"
                    tempLength = 2;
                } else {
                    currentDirection = "none"
                    tempLength = 1;
                }
            }

            last = arr[i];

        } else if (currentDirection == "up") {

            if (last < arr[i]) {
                currentDirection = "down";
                tempLength++;
            } else {
                longest = (tempLength > longest ? tempLength : longest);
                if (last > arr[i]) {
                    currentDirection = "up"
                    tempLength = 2;
                } else {
                    currentDirection = "none"
                    tempLength = 1;
                }
            }

            last = arr[i];

        }

    }

    longest = (tempLength > longest ? tempLength : longest);

    return longest;

};

let x = [[9, 4, 2, 10, 7, 8, 8, 1, 9], [4, 8, 12, 16], [100], [1, 8, 4, 5, 3, 9, 5]];
let correct = [5, 2, 1, 7];

answerExplainationEl.textContent = "Given an integer array arr, return the length of a maximum size turbulent subarray of arr.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let subArraySize = maxTurbulenceSize(x[i]);

    let proper = (subArraySize == correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = "The largest turbulent subarray of the array [" + x[i] + "], is " + subArraySize + " elements long" + proper;

    answerListEl.appendChild(listEl);

}

 LONGEST TURBULENT SUBARRAY - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SPIRAL MATRIX - START - MEDIUM 

// Given an m x n matrix, return all elements of the matrix in spiral order.

var spiralOrder = function (matrix) {

    let xLength = matrix[0].length
    let yLength = matrix.length;

    let spiralArray = [];

    let topRow = 0;
    let bottomRow = yLength-1;
    let leftCol = 0;
    let rightCol = xLength-1;
    let direction = "east";

    while (topRow <= bottomRow && leftCol <= rightCol){

        if (direction == "east"){
            for (i=leftCol;i<rightCol+1;i++){
                spiralArray.push(matrix[topRow][i]);
            }

            topRow++;
            direction = "south";

        } else if(direction == "south"){

            for (i=topRow;i<bottomRow+1;i++){
                spiralArray.push(matrix[i][rightCol]);
            }

            rightCol--;
            direction = "west";            

        } else if(direction == "west"){

            for (i=rightCol;i>leftCol-1;i--){
                spiralArray.push(matrix[bottomRow][i]);
            }

            bottomRow--;
            direction = "north";            

        }else if(direction == "north"){

            for (i=bottomRow;i>topRow-1;i--){
                spiralArray.push(matrix[i][leftCol]);
            }

            leftCol++;
            direction = "east";            

        }

    }

    return spiralArray;

};

let x = [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]];
let correct = [[1, 2, 3, 6, 9, 8, 7, 4, 5], [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]];

answerExplainationEl.textContent = "Given an m x n matrix, return all elements of the matrix in spiral order.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let spiral = spiralOrder(x[i]);
    let right = true;

    for (let j = 0; j < correct[i].length; j++) {
        if (correct[i][j] != spiral[j]) {
            right = false;
            break;
        }
    }

    let proper = (right ? ", this is correct" : ", this is wrong");

    listEl.textContent = "Given the matrix [" + x[i] + "], the order of elements when organized in a clockwise spiral is [" + spiral + "]" + proper;

    answerListEl.appendChild(listEl);

}

 SPIRAL MATRIX - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* INTERSECTION OF TWO ARRAYS II - START - EASY 

//Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many
// times as it shows in both arrays and you may return the result in any order.

var intersect = function(nums1, nums2) {

    let shortArr = [];
    let longArr = [];
    let inter = [];

    if (nums1.length < nums2.length){
        shortArr = nums1.slice();
        longArr = nums2.slice();
    } else {
        shortArr = nums2.slice();
        longArr = nums1.slice();
    }

    let opIndex = 0;

    for (let i = 0; i < shortArr.length; i++){

        opIndex = longArr.indexOf(shortArr[i])
        
        if (opIndex != -1){
            
            inter.push(shortArr[i]);
            longArr.splice(opIndex,1);
            
        }

    }

    return inter;
    
};

let x = [[1,2,2,1], [4,9,5]];
let y = [[2,2],[9,4,9,8,4]];
let correct = [[2,2], [4,9]];

answerExplainationEl.textContent = "Given two integer arrays nums1 and nums2, return an array of their intersection.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let intersection = intersect(x[i], y[i]);
    let right = true;

    for (let j = 0; j < correct[i].length; j++) {

        if (correct[i][j] != intersection[j]) {
            right = false;
            break;
        }
        
    }

    let proper = (right ? "], this is correct" : "], this is wrong");

    listEl.textContent = "In intersection of the array [" + x[i] + "], and the array [" + y[i] + "], is [" + intersection + proper;

    answerListEl.appendChild(listEl);

}

 INTERSECTION OF TWO ARRAYS II - END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LETTER COMBINATIONS OF A PHONE NUMBER - START - MEDIUM 

//Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
//Return the answer in any order.

//A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
//2 = abc
//3 = def
//4 = ghi
//5 = jkl
//6 = mno
//7 = pqrs
//8 = tuv
//9 = wxyz

var letterCombinations = function (digits) {

    let combinations = [];
    let numsArr = [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"], ["j", "k", "l"], ["m", "n", "o"], ["p", "q", "r", "s"], ["t", "u", "v"], ["w", "x", "y", "z"]];

    if (digits.length > 0) {

        for (let i = 0; i < numsArr[digits[0] - 2].length; i++) {

            let tempCombo = numsArr[digits[0] - 2][i];
            combinator(digits, numsArr, tempCombo, 1, combinations);
            
        }

    }

    return combinations;

};

let combinator = function (digits, numsArr, tempCombo, location, combinations) {

    if (digits.length - 1 < location) {
        combinations.push(tempCombo);
        return
    }

    for (let i = 0; i < numsArr[digits[location] - 2].length; i++) {
        combinator(digits, numsArr, tempCombo + numsArr[digits[location] - 2][i], location + 1, combinations);
    }

}

let x = ["23", "", "2"];
let correct = [["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"], [], ["a", "b", "c"]];

answerExplainationEl.textContent = "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');   
    let combos = letterCombinations(x[i]);
    let right = true;

    for (let j = 0; j < correct[i].length; j++) {

        if (correct[i][j] != combos[j]) {
            right = false;
            break;
        }

    }

    let proper = (right ? "], this is correct" : "], this is wrong");

    listEl.textContent = "In possible letter combinations from the array [" + x[i] + "] is [" + combos + proper;

    answerListEl.appendChild(listEl);

}

LETTER COMBINATIONS OF A PHONE NUMBER - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* FIND WINNER ON A TIC TAC TOE GAME - START - EASY 

var tictactoe = function (moves) {

    // ATTEMPT 2

    let avenues = [[0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0]]; 
    let outcome = "Pending";

    for (let i = 0;i < moves.length;i++){

        let currentPlayer = (i % 2 == 1 ? 1 : 0);

        if (moves[i][0] == 0 && moves[i][1] == 0){ // TOP LEFT

            avenues[currentPlayer][0]++;
            avenues[currentPlayer][3]++;
            avenues[currentPlayer][6]++;

        } else if (moves[i][0] == 1 && moves[i][1] == 0){ // TOP MIDDLE

            avenues[currentPlayer][0]++;
            avenues[currentPlayer][4]++;

        } else if (moves[i][0] == 2 && moves[i][1] == 0){ // TOP RIGHT

            avenues[currentPlayer][0]++;
            avenues[currentPlayer][5]++;
            avenues[currentPlayer][7]++;

        } else if (moves[i][0] == 0 && moves[i][1] == 1){ // MIDDLE LEFT

            avenues[currentPlayer][1]++;
            avenues[currentPlayer][3]++;

        } else if (moves[i][0] == 1 && moves[i][1] == 1){ // MIDDLE MIDDLE

            avenues[currentPlayer][1]++;
            avenues[currentPlayer][4]++;
            avenues[currentPlayer][6]++;
            avenues[currentPlayer][7]++;

        } else if (moves[i][0] == 2 && moves[i][1] == 1){ // MIDDLE RIGHT

            avenues[currentPlayer][1]++;
            avenues[currentPlayer][5]++;

        } else if (moves[i][0] == 0 && moves[i][1] == 2){ // BOTTOM LEFT

            avenues[currentPlayer][2]++;
            avenues[currentPlayer][3]++;
            avenues[currentPlayer][7]++;

        } else if (moves[i][0] == 1 && moves[i][1] == 2){ // BOTTOM MIDDLE

            avenues[currentPlayer][2]++;
            avenues[currentPlayer][4]++;

        } else if (moves[i][0] == 2 && moves[i][1] == 2){ // BOTTOM RIGHT

            avenues[currentPlayer][2]++;
            avenues[currentPlayer][5]++;
            avenues[currentPlayer][6]++;

        }

        if (avenues[0].includes(3)){
            outcome = "A";
            break;
        } else if (avenues[1].includes(3)){
            outcome = "B";
            break;
        } else if (i == 8){
            outcome = "Draw";
        }

    }

    return outcome;

    //ATTEMPT 1

    // let outcome = ""
    // let board = ["", "", "",
    //     "", "", "",
    //     "", "", ""];
    // let boardPosition = null;

    // if (moves.length < 5) {

    //     outcome = "Pending"

    // } else {

    //     for (let i = 0; i < moves.length; i++) {

    //         if (moves[i][1] == 0) {
    //             boardPosition = moves[i][0];
    //         } else if (moves[i][1] == 1) {
    //             boardPosition = moves[i][0] + 3;
    //         } else if (moves[i][1] == 2) {
    //             boardPosition = moves[i][0] + 6;
    //         }

    //         board[boardPosition] = (i % 2 == 0 ? "A" : "B")

    //     }

    //     if (board[0] == board[1] && board[0] == board[2] && board[0]) { // TOP ROW

    //         outcome = board[0];

    //     } else if (board[3] == board[4] && board[3] == board[5] && board[3]) { // MIDDLE ROW

    //         outcome = board[3];

    //     } else if (board[6] == board[7] && board[6] == board[8] && board[6]) { // BOTTOM ROW

    //         outcome = board[6];

    //     } else if (board[0] == board[3] && board[0] == board[6] && board[0]) { // LEFT COLUMN

    //         outcome = board[0];

    //     } else if (board[1] == board[4] && board[1] == board[7] && board[1]) { // MIDDLE COLUMN

    //         outcome = board[1];

    //     } else if (board[2] == board[5] && board[2] == board[8] && board[2]) { //RIGHT COLUMN

    //         outcome = board[2];

    //     } else if (board[0] == board[4] && board[0] == board[8] && board[0]) { //TOP LEFT TO BOTTOM RIGHT

    //         outcome = board[0];

    //     } else if (board[2] == board[4] && board[2] == board[6] && board[2]) { //TOP RIGHT TO BOTTOM LEFT

    //         outcome = board[2];

    //     } else if (moves.length < 9) { // UNFINISHED, NO WINNER

    //         outcome = "Pending"

    //     } else if (i == moves.length - 1) { // ALL FULL, NO WINNER

    //         outcome = "Draw"

    //     }

    // }

    // return outcome;

};

let x = [[[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]],
[[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]],
[[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]],
[[0, 0], [1, 1]],
[[1, 0], [2, 2], [2, 0], [0, 1], [1, 1]],
[[0, 2], [2, 0], [2, 1], [0, 1], [1, 2]],
[],
[[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1]]];

let correct = ["A", "B", "Draw", "Pending", "Pending", "Pending", "Pending", "Pending"];

answerExplainationEl.textContent = "Given a set of moves as coordinates on a tic-tac-toe grid, what is the outcome?";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let outcome = tictactoe(x[i]);

    let proper = (outcome == correct[i] ? ", this is correct" : ", this is wrong");

    let coloring = "";

    let xString = "[";

    for (let j = 0; j < x[i].length; j++) {

        if (j < x[i].length - 1) {
            xString += "[" + x[i][j] + "], ";
        } else {
            xString += "[" + x[i][j] + "]";
        }
    }

    xString += "],";

    if (outcome == "A" || outcome == "B") {
        coloring = " the winner is ";
    } else if (outcome == "Draw") {
        coloring = " the game is a ";
    } else {
        coloring = " the game has not yet finished, the result is ";
    }

    coloring += outcome;

    listEl.textContent = "Given the set of moves: " + xString + coloring + proper;

answerListEl.appendChild(listEl);

}
 FIND WINNER ON A TIC TAC TOE GAME - END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* FIND MAX CONSECUTIVE ONES - START - EASY 

var findMaxConsecutiveOnes = function (nums) {

    let max = 0
    let tempMax = 0;

    for (let i = 0; i < nums.length; i++){
        
        if(nums[i] == 1){

            tempMax++;
            max = (tempMax > max ? tempMax : max);

        } else {

            tempMax = 0;
            
        }
    }

    return max

};

let x = [[1, 1, 0, 1, 1, 1], [1, 0, 1, 1, 0, 1]];
let correct = [3, 2];

answerExplainationEl.textContent = "Given a binary array nums, return the maximum number of consecutive 1's in the array.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let ones = findMaxConsecutiveOnes(x[i]);

    let proper = (ones == correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = "In the binary number array [" + x[i] + "], the longest sequence of 1's is " + ones + " long" + proper;

    answerListEl.appendChild(listEl);

}

 FIND MAX CONSECUTIVE ONES - END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MAXIMUM LENGTH OF A CONCATENATED STRING WITH UNIQUE CHARACTERS - START - MEDIUM 

//Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.

//Return the maximum possible length of s.

//After much consternation I found this answer to the question. I love it, and I plan to incorporate much of what I see here in
//future algorithms

var maxLength = function (arr) {
    return recursive(0, '', arr);
};

let recursive = function (index, string, arr) {
    // termination condition

    // if we reached the last element of the array
    // we check if we have a valid string, return its length if yes,
    // otherwise zero
    if (index === arr.length) {
        return isValid(string) ? string.length : 0;
    }

    // We can either pick the current word in the array, or we can leave it
    // so there are two recursion path. We return then one that gives us the max
    // value
    let pick = recursive(index + 1, string + arr[index], arr);
    let notPick = recursive(index + 1, string, arr);

    return Math.max(pick, notPick);
}

let isValid = function (string) {
    let hash = {};
    for (let char of string) { // I love this form of for loop, I hadn't been exposed to this in JS before
        if (hash[char]) {
            return false;
        }
        hash[char] = true;
    }
    return true;
}

let x = [["un", "iq", "ue"], ["cha", "r", "act", "ers"], ["abcdefghijklmnopqrstuvwxyz"], ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"], ["ab", "ba", "cd", "dc", "ef", "fe", "gh", "hg", "ij", "ji", "kl", "lk", "mn", "nm", "op", "po"]];
let correct = [4, 6, 26, 16, 16];

answerExplainationEl.textContent = " Given an array of strings arr, return the maximum possible length of a concatenated string containing only unique characters.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let max = maxLength(x[i]);

    let proper = (max == correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = "When concatenating strings in the array [" + x[i] + "], the longest sequence of unique characters is " + max + " chars long" + proper;

    answerListEl.appendChild(listEl);

}

 MAXIMUM LENGTH OF A CONCATENATED STRING WITH UNIQUE CHARACTERS - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* BREAK A PALINDROME - START - MEDIUM 

//Given a palindromic string of lowercase English letters palindrome, replace exactly one character with any lowercase English
// letter so that the resulting string is not a palindrome and that it is the lexicographically smallest one possible.

//Return the resulting string. If there is no way to replace a character to make it not a palindrome, return an empty string.

//A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, a
// has a character strictly smaller than the corresponding character in b. For example, "abcc" is lexicographically smaller
// than "abcd" because the first position they differ is at the fourth character, and 'c' is smaller than 'd'.

let isPalindrome = function (x) {

    let palindrome = false;
    let stringX = x.toString();
    let reverseX = x.toString().split('').reverse().join('');

    if (stringX == reverseX) {
        palindrome = true;
    }

    return palindrome;

};

let isAllA = function (palindrome){

    let aCount = 0;

    for (let i = 0; i < palindrome.length; i++) {
        if (palindrome[i] == 'a') aCount++;
    }

    return aCount == palindrome.length;

}

let allA = function (palindrome){

    let nonPalindrome = "";

    if (palindrome.length > 2) {

        nonPalindrome = palindrome.slice(0, 1) + 'b' + palindrome.slice(2);

        if (isPalindrome(nonPalindrome)) {

            nonPalindrome = (palindrome.length == 3 ? palindrome.slice(0, 2) + 'b' : palindrome.slice(0, 2) + 'b' + palindrome.slice(3));
        }

    } else {

        nonPalindrome = palindrome.slice(0, 1) + 'b'

    }

    return nonPalindrome;

};

var breakPalindrome = function (palindrome) {

    let nonPalindrome = ""

    if (palindrome.length > 1) {

        let aCount = 0;

        for (let i = 0; i < palindrome.length; i++) {
            if (palindrome[i] == 'a') aCount++;
        }

        if (isAllA(palindrome)) {

            nonPalindrome = allA(palindrome);

        } else {

            for (let i = 0; i < palindrome.length; i++) {

                if (palindrome[i] != 'a') {

                    if (i == 0) {

                        nonPalindrome = 'a' + palindrome.slice(1);
                        break;

                    } else if (i > 0 && i < palindrome.length - 1) {

                        nonPalindrome = palindrome.slice(0, i) + 'a' + palindrome.slice(i + 1);

                        if (isAllA(nonPalindrome)) {

                            nonPalindrome = palindrome.slice(0, palindrome.length-1) + 'b';
                
                        }

                        break;

                    } else {

                        nonPalindrome = palindrome.slice(0, i) + 'a';
                        break;

                    }
                }
            }
        }
    }

    return nonPalindrome;

};

let x = ["abccba", "a", "aa", "aba","bbb","aabaa"];
let correct = ["aaccba", "", "ab", "abb","abb","aabab"];

answerExplainationEl.textContent = " Given an palindromic string, break it in the least costly way possible.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let broken = breakPalindrome(x[i]);

    let coloring = (broken == "" ? ",' cannot be broken because it is too short," : ",' can be broken to become '" + broken + ",'");


    let proper = (broken == correct[i] ? " this is correct" : " this is wrong");

    listEl.textContent = "The palindrome '" + x[i] + coloring + proper;

    answerListEl.appendChild(listEl);

}

 BREAK A PALINDROME - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* ROTATE IMAGE - START - MEDIUM */

//You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

//ou have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
//DO NOT allocate another 2D matrix and do the rotation.

var spiralOrder = function (matrix) {

    let xLength = matrix[0].length
    let yLength = matrix.length;

    let ringCount = Math.ceil(xLength / 2);

    let spiralRingArray = [];

    for (let i = 0; i < ringCount; i++) {
        spiralRingArray.push([]);
    }

    let topRow = 0;
    let bottomRow = yLength - 1;
    let leftCol = 0;
    let rightCol = xLength - 1;
    let direction = "east";

    let currArray = 0;

    while (topRow <= bottomRow && leftCol <= rightCol) { //Grabbing each ring of the matrix

        if (direction == "east") {
            for (i = leftCol; i < rightCol + 1; i++) {
                spiralRingArray[currArray].push(matrix[topRow][i]);
            }

            topRow++;
            direction = "south";

        } else if (direction == "south") {

            for (i = topRow; i < bottomRow + 1; i++) {
                spiralRingArray[currArray].push(matrix[i][rightCol]);
            }

            rightCol--;
            direction = "west";

        } else if (direction == "west") {

            for (i = rightCol; i > leftCol - 1; i--) {
                spiralRingArray[currArray].push(matrix[bottomRow][i]);
            }

            bottomRow--;
            direction = "north";

        } else if (direction == "north") {

            for (i = bottomRow; i > topRow - 1; i--) {
                spiralRingArray[currArray].push(matrix[i][leftCol]);
            }

            leftCol++;
            currArray++;
            direction = "east";

        }

    }

    spiralRingArray.reverse();

    for (let i = 0; i < spiralRingArray.length; i++) { //rotating the matrix rings

        let rotatedSpiral = [];
        let ringLength = spiralRingArray[i].length;
        let rot = ringLength / 4;

        if (ringLength == 1) {

            rotatedSpiral = spiralRingArray[i];

        } else {

            for (let j = 0; j < ringLength; j++) {
                rotatedSpiral.push(0);
            }

            for (let j = 0; j < ringLength; j++) {

                let rotIndex = (j + rot >= ringLength ? j + rot - ringLength : j + rot);

                rotatedSpiral[rotIndex] = spiralRingArray[i][j]

            }

        }

        spiralRingArray[i] = rotatedSpiral

    }

    spiralRingArray.reverse();

    topRow = 0;
    bottomRow = yLength - 1;
    leftCol = 0;
    rightCol = xLength - 1;
    direction = "east";

    currArray = 0;
    let currEl = 0;

    while (topRow <= bottomRow && leftCol <= rightCol) { //replacing the elements of the matrix with the rotated versions

        if (direction == "east") {
            for (i = leftCol; i < rightCol + 1; i++) {
                matrix[topRow][i] = spiralRingArray[currArray][currEl];
                currEl++;
            }

            topRow++;
            direction = "south";

        } else if (direction == "south") {

            for (i = topRow; i < bottomRow + 1; i++) {
                matrix[i][rightCol] = spiralRingArray[currArray][currEl];
                currEl++;
            }

            rightCol--;
            direction = "west";

        } else if (direction == "west") {

            for (i = rightCol; i > leftCol - 1; i--) {
                matrix[bottomRow][i] = spiralRingArray[currArray][currEl];
                currEl++;
            }

            bottomRow--;
            direction = "north";

        } else if (direction == "north") {

            for (i = bottomRow; i > topRow - 1; i--) {
                matrix[i][leftCol] = spiralRingArray[currArray][currEl];
                currEl++;
            }

            leftCol++;
            currArray++;
            currEl = 0;
            direction = "east";

        }


    }


    return matrix;

};


var rotate = function (matrix) {

    let xLength = matrix[0].length
    let yLength = matrix.length;

    let ringCount = Math.ceil(xLength / 2);

    let spiralRingArray = [];

    for (let i = 0; i < ringCount; i++) {
        spiralRingArray.push([]);
    }

    let topRow = 0;
    let bottomRow = yLength - 1;
    let leftCol = 0;
    let rightCol = xLength - 1;
    let direction = "east";

    let currArray = 0;

    while (topRow <= bottomRow && leftCol <= rightCol) { //Grabbing each ring of the matrix

        if (direction == "east") {
            for (i = leftCol; i < rightCol + 1; i++) {
                spiralRingArray[currArray].push(matrix[topRow][i]);
            }

            topRow++;
            direction = "south";

        } else if (direction == "south") {

            for (i = topRow; i < bottomRow + 1; i++) {
                spiralRingArray[currArray].push(matrix[i][rightCol]);
            }

            rightCol--;
            direction = "west";

        } else if (direction == "west") {

            for (i = rightCol; i > leftCol - 1; i--) {
                spiralRingArray[currArray].push(matrix[bottomRow][i]);
            }

            bottomRow--;
            direction = "north";

        } else if (direction == "north") {

            for (i = bottomRow; i > topRow - 1; i--) {
                spiralRingArray[currArray].push(matrix[i][leftCol]);
            }

            leftCol++;
            currArray++;
            direction = "east";

        }
    }

    spiralRingArray.reverse();

    for (let i = 0; i < spiralRingArray.length; i++) { //rotating the matrix rings

        let rotatedSpiral = [];
        let ringLength = spiralRingArray[i].length;
        let rot = ringLength / 4;

        if (ringLength == 1) {

            rotatedSpiral = spiralRingArray[i];

        } else {

            for (let j = 0; j < ringLength; j++) {
                rotatedSpiral.push(0);
            }

            for (let j = 0; j < ringLength; j++) {

                let rotIndex = (j + rot >= ringLength ? j + rot - ringLength : j + rot);

                rotatedSpiral[rotIndex] = spiralRingArray[i][j]

            }

        }

        spiralRingArray[i] = rotatedSpiral

    }

    spiralRingArray.reverse();

    topRow = 0;
    bottomRow = yLength - 1;
    leftCol = 0;
    rightCol = xLength - 1;
    direction = "east";

    currArray = 0;
    let currEl = 0;

    while (topRow <= bottomRow && leftCol <= rightCol) { //replacing the elements of the matrix with the rotated versions

        if (direction == "east") {
            for (i = leftCol; i < rightCol + 1; i++) {
                matrix[topRow][i] = spiralRingArray[currArray][currEl];
                currEl++;
            }

            topRow++;
            direction = "south";

        } else if (direction == "south") {

            for (i = topRow; i < bottomRow + 1; i++) {
                matrix[i][rightCol] = spiralRingArray[currArray][currEl];
                currEl++;
            }

            rightCol--;
            direction = "west";

        } else if (direction == "west") {

            for (i = rightCol; i > leftCol - 1; i--) {
                matrix[bottomRow][i] = spiralRingArray[currArray][currEl];
                currEl++;
            }

            bottomRow--;
            direction = "north";

        } else if (direction == "north") {

            for (i = bottomRow; i > topRow - 1; i--) {
                matrix[i][leftCol] = spiralRingArray[currArray][currEl];
                currEl++;
            }

            leftCol++;
            currArray++;
            currEl = 0;
            direction = "east";

        }
    }

    return matrix;

};

let x = [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]], [[1]], [[1, 2], [3, 4]]];
let correct = [[[7, 4, 1], [8, 5, 2], [9, 6, 3]], [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]], [[1]], [[3, 1], [4, 2]]];

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let rotated = rotate(x[i]);
    let right = true;

    for (let j = 0; j < correct[i].length; j++) {

        if (correct[i][j] != rotated[j]) {
            right = false;
            break;
        }

    }

    let proper = (right ? "], this is correct" : "], this is wrong");

    listEl.textContent = "The array [" + x[i] + "], when rotated clockwise becomes [" + rotated + proper;

    answerListEl.appendChild(listEl);

}

/* ROTATE IMAGE - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

