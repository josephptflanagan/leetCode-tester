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

/* MEDIAN OF TWO SORTED ARRAYS - START - HARD */

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


/* MEDIAN OF TWO SORTED ARRAYS - END - HARD */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/