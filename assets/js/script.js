let answerExplainationEl = document.querySelector('#explaination')
let answerListEl = document.querySelector('#answerList');

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Function to insert nodes in level order
function insertLevelOrder(arr, root, i) {
    // Base case for recursion
    if (i < arr.length) {
        let temp = new TreeNode(arr[i]);
        root = temp;

        // insert left child
        root.left = insertLevelOrder(arr, root.left,
            2 * i + 1);

        // insert right child
        root.right = insertLevelOrder(arr, root.right,
            2 * i + 2);
    }
    return root;
}

function bstFromPreorder(preorder) {

    let i = 0;

    let helper = (limit) => {

        if (i > preorder.length - 1 || preorder[i] > limit) {
            return null;
        }

        let node = new TreeNode(preorder[i], null, null)

        i++;

        node.left = helper(node.val)
        node.right = helper(limit)

        return node
    }

    return helper(Infinity)

}

function binaryTreeConstructor(array) {

    if (array.length === 0) {
        return null;
    }

    let root = new TreeNode(array.shift());
    let insertionPosition = [root]
    let currentNode = insertionPosition.shift();

    while (array.length > 0) {

        let newLeftNode = new TreeNode(array.shift());
        if (newLeftNode.val) {
            currentNode.left = newLeftNode;
            insertionPosition.push(newLeftNode);
        }

        if (array.length > 0) {
            let newRightNode = new TreeNode(array.shift())
            if (newRightNode.val) {
                currentNode.right = newRightNode;
                insertionPosition.push(newRightNode);
            }
        }

        currentNode = insertionPosition.shift();

    }

    return root;

}

function bstConstructor(array) {

    if (array.length < 1) {
        return null;
    }

    let root = new TreeNode(array.shift())

    function insert(val) {

        if (val == null) {
            return root;
        }

        let tempNode = root;
        let newNode = new TreeNode(val);

        while (true) {

            if (newNode.val === tempNode.val) {

                return root;

            } else if (newNode.val < tempNode.val) {
                if (tempNode.left) {
                    tempNode = tempNode.left;
                }
                else {
                    tempNode.left = newNode;
                    return root;
                }
            } else if (newNode.val > tempNode.val) {

                if (tempNode.right) {
                    tempNode = tempNode.right;
                }
                else {
                    tempNode.right = newNode;
                    return root;
                }
            }

        }

    }

    while (array.length > 0) {

        let val = array.shift();
        root = insert(val);

    }

    return root;

}

function leetCodeBTConstructor(array) {

    if (array.length < 1) {
        return null;
    }

    let root = new TreeNode(array.shift());
    let queue = [root];

    while (array.length > 0) {

        let currentNode = queue.shift();

        let leftChildVal = array.shift();
        let rightChildVal = null;

        if (array.length > 0) {
            rightChildVal = array.shift();
        }

        if (leftChildVal !== null) {
            let leftChild = new TreeNode(leftChildVal);
            currentNode.left = leftChild;
            queue.push(leftChild);
        }

        if (rightChildVal !== null) {
            let rightChild = new TreeNode(rightChildVal);
            currentNode.right = rightChild;
            queue.push(rightChild);
        }

    }

    return root;

}

function bstToArray(root) {

    let queue = [];
    let contents = [];

    if (!root) {
        return null;
    }

    queue.push(root);

    while (queue.length > 0) {
        if (queue[0].left) {
            queue.push(queue[0].left)
        }
        if (queue[0].right) {
            queue.push(queue[0].right)
        }
        contents.push(queue.shift().val)
    }

    return contents;

}

function isAlpha(char) {

    let code = char.charCodeAt(0)

    if (!(code > 64 && code < 91) && !(code > 96 && code < 123)) {

        return false;

    }

    return true;

}

function isNum(char) {

    let code = char.charCodeAt(0)

    if (!(code > 47 && code < 58)) {

        return false;

    }

    return true;

}

function isAlphaNum(char) {

    let code = char.charCodeAt(0)

    if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {

        return false;

    }

    return true;
}

function compareArrays(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;

}

function compareNestedArrays(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (!compareArrays(arr1[i], arr2[i])) {
            return false;
        }
    }

    return true;

}

function compareTreeArrays(arr1, arr2) {

    let compArr1 = [];
    let compArr2 = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != null) {
            compArr1.push(arr1[i])
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] != null) {
            compArr2.push(arr2[i])
        }
    }

    if (compArr1.length !== compArr2.length) {
        return false;
    }

    for (let i = 0; i < compArr1.length; i++) {
        if (compArr1[i] !== compArr2[i]) {
            return false;
        }
    }

    return true;
}

let arrayItemRemoval = function (idx, array) {

    let localArray = array.slice();

    if (idx == 0) {

        localArray.shift();

    } else if (idx > 0 < links.length - 1) {

        localArray = localArray.slice(0, idx) + localArray.slice(idx + 1);

    } else {
        localArray.pop();

    }

    return localArray;

}

let stringElementRemover = function (str, i) {

    if (i == 0) {
        str = str.slice(1);
    } else if (i < str.length - 1) {
        str = str.slice(0, i) + str.slice(i + 1);
    } else {
        str = str.slice(0, i);
    }

    return str;

}

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
    if (head === null) {
        head = newNode;
    } else if (head.next === null) {
        head.next = newNode;
    } else {
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

let listToArrayTypeOne = function (list) {

    let array = [];

    while (list.head != null) {
        array.push(list.head.val);
        list.head = list.head.next;

    }

    return array;

}

let listToArrayTypeTwo = function (head) {

    let array = [];
    let currNode = head;

    while (currNode != null) {
        array.push(currNode.val);
        currNode = currNode.next;

    }

    return array;

}

let displayNestedArray = function (array) {

    let str = "[";

    for (let i = 0; i < array.length; i++) {

        str += "[" + array[i] + "]";

        if (i !== array.length - 1) {
            str += ",";
        }

    }

    str += "]"

    return str;
}

let pluralize = function (val) {

    return val <= 0 || val > 1 ? "s" : "";

}

let isAre = function (num) {
    return num <= 1 ? "is" : "are";
}

function suffix(num) {

    let numString = num.toString();

    if (numString[numString.length - 1] == "1") {

        if (numString.length > 1) {
            if (numString[numString.length - 2] == "1") {
                numString += "th";
            } else {
                numString += "st";
            }
        } else {
            numString += "st";
        }

    } if (numString[numString.length - 1] == "2") {

        if (numString.length > 1) {
            if (numString[numString.length - 2] == "1") {
                numString += "th";
            } else {
                numString += "nd";
            }
        } else {
            numString += "nd";
        }
    } else if (numString[numString.length - 1] == "3") {

        if (numString.length > 1) {
            if (numString[numString.length - 2] == "1") {
                numString += "th";
            } else {
                numString += "rd";
            }
        } else {
            numString += "rd";
        }
    } else {
        numString += "th";
    }

    return numString

}
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

/* STRING TO INTEGER - START - MEDIUM

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

MY A TO I - END - MEDIUM */

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

/* ROTATE IMAGE - START - MEDIUM 

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

 ROTATE IMAGE - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* UNIQUE EMAIL ADDRESSES - START - EASY 

var numUniqueEmails = function (emails) {

    let emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    let proper = 0;

    for (let i = 0; i < emails.length; i++){

        let atAddress = emails[i].indexOf('@');
        let plusAddress = emails[i].indexOf('+');


        if (plusAddress != -1 && plusAddress < atAddress){
            emails[i] = emails[i].slice(0,plusAddress) + emails[i].slice(atAddress);
        }

        atAddress = emails[i].indexOf('@');

        for (let j = 0; j < atAddress; j++){
            if(emails[i][j]=="."){
                emails[i] = emails[i].slice(0,j) + emails[i].slice(j+1);
                    atAddress = emails[i].indexOf('@');
                    j = 0;
            }
        }

        console.log(emails[i])

        if (emails[i].match(emailRegex)) proper++;

    }

    for (let i = 0; i < emails.length-1; i++){
        if (emails.slice(i+1).indexOf(emails[i]) != -1) proper --;
    }

    return proper;

};

let x = [["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"], ["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]];
let correct = [2, 3];

answerExplainationEl.textContent = " Given a series of email addresses, return the quantity that conform to email address requirements.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let accurate = numUniqueEmails(x[i]);

    let proper = (accurate == correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = "From the given email addresses, " + accurate + " are proper email addresses" + proper;

    answerListEl.appendChild(listEl);

}

 UNIQUE EMAIL ADDRESSES - END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SORT ARRAY BY PARITY II - START - EASY 

//Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

//Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

//Return any answer array that satisfies this condition.

var sortArrayByParityII = function (nums) {

    let odds = [];
    let evens = [];
    let sorted = [];
    let oddI = 0;
    let evenI = 0;

    for (let i = 0; i < nums.length; i++){
        if (nums[i] % 2 === 0){

            evens.push(nums[i]);

        } else {

            odds.push(nums[i]);

        }
    }

    for (let i = 0; i < nums.length; i++){

        if (i % 2 === 0){
            sorted.push(evens[evenI]);
            evenI++;
        } else {
            sorted.push(odds[oddI]);
            oddI++;
        }

    }

    return sorted;

};

let x = [[4, 2, 5, 7], [2, 3]];
let correct = [[4, 5, 2, 7], [2, 3]];

answerExplainationEl.textContent = " Given an array of integers nums, sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let sorted = sortArrayByParityII(x[i]);

    let right = true;

    for (let j = 0; j < correct[i].length; j++) {

        if (correct[i][j] != sorted[j]) {
            right = false;
            break;
        }

    }

    let proper = (right ? "], this is correct" : "], this is wrong");

    listEl.textContent = "Given an array of integers nums, [" + x[i] + "], when sorted as indicated becomes [" + sorted + proper;

    answerListEl.appendChild(listEl);

}

 SORT ARRAY BY PARITY II - END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SPLIT LINKED LIST IN PARTS - START - MEDIUM 

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
    if (head === null) {
        head = newNode;
    } else if (head.next === null) {
        head.next = newNode;
    } else {
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
let listToArrayFromHead = function (head) {

    let array = [];

    while (head !== null) {
        array.push(head.val);
        head = head.next;

    }

    return array;

}

var splitListToParts = function(head, k) {
        
    let listArray = listToArrayFromHead(head);
    let splitArray = [];
    let partLength = [];
    let itemsPerPart = Math.ceil(listArray.length / k);

    let itemCount = 0;

    for (let i = 0; i < k; i++) {
        partLength.push(itemsPerPart);
        itemCount += itemsPerPart
    }

    let itterator = 0;

    while (itemCount != listArray.length) {

        if (itemCount > listArray.length) {

            for (let i = 0; i < partLength.length; i++) {
                partLength[i]--;
                itemCount--;
            }

        } else if (itemCount < listArray.length) {
            partLength[itterator]++;
            itemCount++;
            itterator++;
        }

    }

    let start = 0;

    for (let i = 0; i < partLength.length; i++) {

        let tempList = listConstructor(listArray.slice(start, start + partLength[i]))

        splitArray.push(tempList.head);

        start += partLength[i];
    }

    return splitArray;

};


let x = [[1, 2, 3], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];
let y = [5, 3]
let correct = [[[1], [2], [3], [], []], [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]];

answerExplainationEl.textContent = "Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let list = listConstructor(x[i]);
    let split = splitListToParts(list.head, y[i]);
    let splitArray = [];

    for (let i = 0; i < split.length; i++){
        let tempArray = listToArrayFromHead(split[i])
        splitArray.push(tempArray);
    }

    let right = true;

    for (let j = 0; j < correct[i].length; j++) {

        if (correct[i][j] != splitArray[j]) {
            right = false;
            break;
        }

    }

    let proper = (right ? ", this is correct" : ", this is wrong"); //Due to the nature of arrays, correct answers will show up as wrong here

    listEl.textContent = "Given a singly linked list and an the integer " + y[i] + ", the linked list becomes [" + splitArray + "] when split into " + y[i] + " parts" + proper;

    answerListEl.appendChild(listEl);

}

 SPLIT LINKED LIST IN PARTS - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* PARTITION TO K EQUAL SUM SUBSETS - START - MEDIUM 

var canPartitionKSubsets = function(nums, k) {
    
    let totalSum = 0;
    let maxNum = 0;

    nums.forEach(num => {
        totalSum += num;
        maxNum = (num > maxNum ? num : maxNum);
    });

    let target = totalSum / k;

    if(!k || totalSum % k !== 0 || maxNum > target) {
        return false;
    }

    const visited = Array(nums.length).fill(0);
	

    function helper(start, k, currSum = 0) {
    	
        if(k === 0) {
            return true;
        }
    	
        if(currSum === target) {
            return helper(0, k - 1, 0)
        }
    	
        for(let i = start; i < nums.length; ++i) {
        	
            if(!visited[i] && currSum + nums[i] <= target) {
            	
                visited[i] = 1;
            	
                if(helper(i + 1, k, currSum + nums[i])) {
                    return true;
                }
            	
                visited[i] = 0;
            }
        }
    	
        return false;
    }

    return helper(0, k);

};

let x = [[4, 3, 2, 3, 5, 2, 1], [1, 2, 3, 4],[1,1,1,1,2,2,2,2]];
let y = [4, 3, 2]
let correct = [true, false, true];

answerExplainationEl.textContent = "Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let partitionable = canPartitionKSubsets(x[i], y[i]);
    let coloring = (partitionable ? "] is partitionable into " + y[i] + " subsets" : "] cannot be partitioned into " + y[i] + " subsets");

    let proper = (partitionable == correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = "The array of integers [" + x[i] + coloring + proper;

    answerListEl.appendChild(listEl);

}

 PARTITION TO K EQUAL SUM SUBSETS - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LONGEST COMMON SUBSEQUENCE - START - MEDIUM 

var longestCommonSubsequence = function (text1, text2) {

    // let longest = "";

    // if (text1 && text2) {

    //     console.log ("text1.length: ", text1.length);
    //     console.log ('text2.length: ', text2.length);

    //     if (text2.includes(text1)) {
    //         longest = text1;
    //     } else if (text1.includes(text2)) {
    //         longest = text2;
    //     } else {

    //         let common1 = "";
    //         let common2 = "";

    //         for (let i = 0; i < text1.length; i++) {
    //             if (text2.includes(text1[i])) {
    //                 common1 += text1[i];
    //             }
    //         }

    //         if (common1.length > 0) {

    //             for (let i = 0; i < text2.length; i++) {
    //                 if (common1.includes(text2[i])) {
    //                     common2 += text2[i];
    //                 }
    //             }

    //             console.log("common1: ", common1);
    //             console.log("common2: ", common2);

    //             let longStr = (common1.length >= common2.length ? common1 : common2);
    //             let shortStr = (common1.length >= common2.length ? common2 : common1);

    //             for (let i = 0; i < shortStr.length; i++) {

    //                 let tempLongStr = longStr.slice();
    //                 let tempShortStr = shortStr.slice(i);

    //                 for (let j = 0; j < shortStr.length; j++) {

    //                     if (tempLongStr[j] && tempShortStr[j] !== tempLongStr[j]) {

    //                         tempLongStr = tempLongStr.slice(0, j) + tempLongStr.slice(j + 1);
    //                         j--;
    //                         console.log("tempLongStr: ", tempLongStr);

    //                     }
    //                 }

    //                 longest = (tempLongStr.length > longest.length ? tempLongStr : longest);
    //                 console.log("longest: ", longest);
    //             }

    //             for (let i = 0; i < shortStr.length; i++) {

                    
    //                 let tempShortStr = shortStr.slice();
    //                 let tempLongStr = longStr.slice(i);

    //                 for (let j = 0; j < shortStr.length; j++) {

    //                     if (tempShortStr[j] && tempShortStr[j] !== tempLongStr[j]) {

    //                         tempShortStr = tempShortStr.slice(0, j) + tempShortStr.slice(j + 1);
    //                         j--;
    //                         console.log("tempShortStr: ", tempShortStr);

    //                     }
    //                 }

    //                 longest = (tempShortStr.length > longest.length ? tempShortStr : longest);
    //                 console.log("longest: ", longest);
    //             }

    //         }
    //     }

    // }

    // return longest.length;

    let len1 = text1.length;
    let len2 = text2.length;
    let dp = [...new Array(len1 + 1)].map(ele => new Array(len2 + 1).fill(0));


    for (let i = 1; i < len1 + 1; i++) {
        for (let j = 1; j < len2 + 1; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[len1][len2]

};

let x = ["abcde", "abc", "abc", "abcdeee", "ezupkr", "oxcpqrsvwf", "hofubmnylkra",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "ylqpejqbalahwr"];
let y = ["ace", "abc", "def", "aec", "ubmrapg", "shmtulqrypy", "pqhgxgdofcvmr",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "yrkzavgdmdgtqpg"];
let correct = [3, 3, 0, 2, 2, 2, 5, 210, 3];

answerExplainationEl.textContent = "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let longest = longestCommonSubsequence(x[i], y[i]);

    let answerX = (x[i].length > 20 ? 'stupid long string' : x[i]);
    let answerY = (y[i].length > 20 ? 'stupid long string' : y[i]);

    let coloring = (longest ? " the longest common substring is " + longest + " characters long" : "' there is no common substring");

    let proper = (longest == correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = "Given the strings '" + answerX + ",' and '" + answerY + ",' " + coloring + proper;

    answerListEl.appendChild(listEl);

}

LONGEST COMMON SUBSEQUENCE - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* ISLAND PERIMETER - START - EASY 

var islandPerimeter = function (grid) {

    let coastline = 0;
    let xMax = grid[0].length-1;
    let yMax = grid.length-1;

    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){

            if (grid[i][j] == 1){

                let left = j-1;
                let up = i-1;
                let right = j+1;
                let down = i+1;

                if (left >= 0){
                    if (grid[i][left] === 0){
                        coastline++;
                    }
                } else {
                    coastline++;
                }

                if (up >= 0){
                    if (grid[up][j] === 0){
                        coastline++;
                    }
                } else {
                    coastline++;
                }

                if (right <= xMax){
                    if (grid[i][right] === 0){
                        coastline++;
                    }
                } else {
                    coastline++;
                }

                if (down <= yMax){
                    if (grid[down][j] === 0){
                        coastline++;
                    }
                } else {
                    coastline++;
                }
            }
        }
    }

    return coastline;

};

let x = [[[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]], [[1]], [[1, 0]]];
let correct = [16, 4, 4];

answerExplainationEl.textContent = "Given a grid of 1's and 0's, with 1's being land and 0's being water, find the length of the coast";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let coastLength = islandPerimeter(x[i]);
    let answerX = "";

    for (let j = 0; j < x[i].length; j++) {

        answerX += ("[" + x[i][j] + "]")

        if (j != x[i].length-1){
            answerX += ",";
        }
    }

    let coloring = (coastLength ? " the coastline is " + coastLength + " long" : "' there is no island, and thus no coastline");

    let proper = (coastLength == correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = "Given the grid [" + answerX + "], " + coloring + proper;

    answerListEl.appendChild(listEl);

}

 ISLAND PERIMETER - END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* CLIMBING STARTS - START - EASY 

var climbStairs = function (n) {

    let a = 0;
    let b = 1;
    let temp = 0;

    for (let i = 0; i < n; i++) {

        temp = b;
        b = a + b;
        a = temp;

    }

    return b;

};

let x = [2, 3];
let correct = [2, 3];

answerExplainationEl.textContent = "Given that you can take stairs a mix of one or two at a time, given a number of steps, " +
    "how many ways are there to climb the stairs";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let ways = climbStairs(x[i]);

    let proper = (ways == correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = "You can take " + x[i] + " steps in " + ways + " different ways" + proper;

    answerListEl.appendChild(listEl);

}

 CLIMBING STARTS - END - EASY */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* FIND ALL DUPLICATES IN AN ARRAY - START - MEDIUM 

// var findDuplicates = function (nums) { //too slow

//     let dupes = [];
//     let workingArr = nums.slice();

//     while (workingArr.length > 0) {

//         let tempArr = workingArr.slice(1);
//         let currNum = workingArr[0]

//         if (tempArr.includes(currNum)) {

//             let dupIdx = tempArr.indexOf(currNum) + 1;

//             dupes.push(currNum);

//             workingArr.splice(dupIdx, 1);

//         } 

//         workingArr.splice(0, 1);

//     }

//     return dupes;

// };
var findDuplicates = function (nums) {

    let dupes = [];

    nums.reduce((previousVal, currentVal) => {

        if (previousVal[currentVal]) {

            dupes.push(currentVal)

        } else {

            previousVal[currentVal] = currentVal

        }

        return previousVal
        
    }, {})

    return dupes

};

let x = [[4, 3, 2, 7, 8, 2, 3, 1], [1, 1, 2], [1]];
let correct = [[2, 3], [1], []];

answerExplainationEl.textContent = "Given an array of integers return an array of integers that appear twice";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let duplicates = findDuplicates(x[i]);

    let right = true;

    if (duplicates) {

        let localCorrect = correct[i].slice();
        let dupeCopy = duplicates.slice(0);

        while (dupeCopy.length > 0) {

            let currNum = dupeCopy[0];

            if (!localCorrect.includes(currNum)) {

                right = false;
                break; ``

            } else {

                correctIdx = localCorrect.indexOf(currNum);
                duplicatesIdx = dupeCopy.indexOf(currNum);

                localCorrect.splice(correctIdx, 1);
                dupeCopy.splice(duplicatesIdx, 1);

            }

        }

    }

    let proper = (right ? "], this is correct" : "], this is wrong");

    listEl.textContent = "Given the integer array [" + x[i] + "], the duplicates are [" + duplicates + proper;

    answerListEl.appendChild(listEl);

}

 FIND ALL DUPLICATES IN AN ARRAY - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/*WORD SEARCH - START - MEDIUM 

var exist = function (board, word) {

    let yMax = board.length;
    let xMax = board[0].length;
    let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]] //UP DOWN LEFT RIGHT

    for (let i = 0; i < yMax; i++) { //CYCLE ROWS

        for (let j = 0; j < xMax; j++) { //CYCLE ROW

            if (word[0] == board[i][j]) { //FIRST ELEMENT == CURRENT ITEM ?

                if (searchWord(i, j)) { //SEARCH WORD FUNCTION

                    return true;

                }

            }
        }
    }

    return false;

    function searchWord(i, j, len = 0) { //Takes y position, x position, creates length

        if (i < 0 || i > yMax - 1 || j < 0 || j > xMax - 1 || board[i][j] == null || board[i][j] !== word[len]) {

            return false;

        }

        if (len === word.length - 1) {

            return true;

        }

        let val = board[i][j];
        board[i][j] = null;

        for (let dir of dirs) { //SEARCHING IN EACH DIRECTION

            if (searchWord(i + dir[0], j + dir[1], len + 1)) { //RECURSIVE SEARCH

                return true;

            }

        }

        board[i][j] = val;
        return false;
    }

};

let x = [[["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]];
let y = ["ABCCED", "SEE", "ABCB"];
let correct = [true, true, false]

answerExplainationEl.textContent = "Given a matrix of letters and a word, see if the word can be found in the matrix";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');
    let inMatrix = exist(x[i], y[i]);

    let proper = (inMatrix == correct[i] ? ", this is correct" : ", this is wrong");

    let coloring = (inMatrix ? "contains the word " + y[i] : "does not contain the given word");

    listEl.textContent = "The given matrix " + coloring + proper;

    answerListEl.appendChild(listEl);

}

 WORD SEARCH - END - MEDIUM */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* IMPLEMENT TRIE (PREFIX TREE) - MEDIUM - START 

var Trie = function () {

    this.root = {};

};

// 
//  @param {string} word
//  @return {void}
//  
Trie.prototype.insert = function (word) {

    let node = this.root;

    for (let char of word) {

        if (!node[char]) {

            node[char] = {};

        }

        node = node[char];

    }

    node["end"] = true;
};


//  @param {string} word
//  @return {boolean}
 
Trie.prototype.search = function (word) {

    let node = this.root;

    for (let char of word) {

        if (!node[char]) {

            return false;

        }

        node = node[char];

    }

    return node["end"] === true;

};

//  @param {string} prefix
//  @return {boolean}
 
Trie.prototype.startsWith = function (prefix) {

    let node = this.root;

    for (let char of prefix) {

        if (!node[char]) {

            return false;

        }

        node = node[char];

    }

    return true;

};


  Your Trie object will be instantiated and called as such:
  var obj = new Trie()
  obj.insert(word)
  var param_2 = obj.search(word)
  var param_3 = obj.startsWith(prefix)
 

 IMPLEMENT TRIE (PREFIX TREE) - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* DIAMETER OF BINARY TREE - EASY - START 

var diameterOfBinaryTree = function (root) {

    let diameter = 0;

    helper(root);

    return diameter

    function helper(root) {

        if (!root) return 0;

        let left = helper(root.left);
        let right = helper(root.right);

        diameter = Math.max(left + right, diameter);

        return 1 + Math.max(left, right)
    }

};

let x = [[1, 2, 3, 4, 5], [1, 2], [8, 10, 12, 5, 3, 6]];
let correct = [3, 1, 4];

answerExplainationEl.textContent = "Given the root of a binary tree, return the length of the diameter";
//diameter of a binary tree is the longest path between any two nodes of the tree, this path may not necessarily pass through the root. 

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let root;
    root = insertLevelOrder(x[i], root, 0);

    let diameter = diameterOfBinaryTree(root);

    let proper = (diameter == correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = "The given binary tree has a diameter of " + diameter + proper;

    answerListEl.appendChild(listEl);

}

 DIAMETER OF BINARY TREE - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* GUESS NUMBER HIGHER OR LOWER - EASY - START 

// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns 3 possible results:

// -1: The number I picked is lower than your guess (i.e. pick < num).
// 1: The number I picked is higher than your guess (i.e. pick > num).
// 0: The number I picked is equal to your guess (i.e. pick == num).

// Return the number that I picked.

let turn = 0;
let picks = [6,1,1,2];

var guess = function (num){

    let pick = picks[turn];
    let response;

    if (pick < num){
        response = -1;
    } else if (pick > num){
        response = 1
    } else {
        reponse = 0;
    }

    return response;

}

var guessNumber = function (n) {

    let minimum = 0 
    let maximum = n - 1;

    while (minimum <= maximum) {

        let middle = Math.floor((minimum + maximum) / 2);
        let response = guess(middle);

        if (response == 0) {

            return middle;

        } else if (response == 1) {

            minimum = middle + 1;

        } else {

            maximum = middle - 1;

        }
    }
    
    return minimum;

};

let x = [10, 1, 2, 2];
let correct = [6, 1, 1, 2];

answerExplainationEl.textContent = "Guessing Game, the computer picks a number between 1 and n, create a program to guess that number";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let guessed = guessNumber(x[i]);
    turn++;

    let proper = (guessed == correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = "In a range of numbers from 1 to "  + x[i] + " the computer picked " + guessed + proper;

    answerListEl.appendChild(listEl);

}

 GUESS NUMBER HIGHER OR LOWER - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* CONSTRUCT BINARY SEARCH TREE FROM PREORDER TRAVERSAL - MEDIUM - START 

var bstFromPreorder = function(preorder) {

    let i = 0;
    
    let helper = (limit) => {

        if (i > preorder.length-1 || preorder[i] > limit){
            return null;
        } 
        
        let node = new TreeNode(preorder[i], null, null)

        i++;
        
        node.left = helper(node.val)
        node.right = helper(limit)
        
        return node
    }
    
    return helper(Infinity)   

}

let x = [[8, 5, 1, 7, 10, 12], [1, 3]];
let correct = [[8, 5, 10, 1, 7, null, 12], [1, null, 3]];

answerExplainationEl.textContent = "Given an array if numbers, construct a binary search tree from preorder traversal";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let tree = bstFromPreorder(x[i]);
    console.log("tree: ", tree);

    let proper = (tree == correct[i] ? "], this is correct" : "], this is wrong");

    listEl.textContent = "[" + tree + "] is a binary search tree constructed from [" + x[i] + proper;

    answerListEl.appendChild(listEl);

}

 CONSTRUCT BINARY SEARCH TREE FROM PREORDER TRAVERSAL - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* PERFECT SQUARES - MEDIUM - START 

// Given an integer n, return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, 
// it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

var numSquares = function (n) {

    let cache = [];

    return backtrack(n, 0);

    function backtrack(n) {

        if (cache[n] !== undefined) {

            return cache[n];

        }

        if (n === 0) {

            return 0;

        } else if (n === 1) {

            return 1;

        }

        let min = 10000
        let res;

        for (let i = 1; i * i <= n; i++) {

            res = backtrack(n - i * i) + 1;
            min = Math.min(min, res);

        }

        cache[n] = min;
        return min;
        
    }

};

let x = [12, 13, 16];
let correct = [3, 2, 1];

answerExplainationEl.textContent = "Given an integer n, return the least number of perfect square numbers that sum to n.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let num = numSquares(x[i]);

    let coloring = (num > 0 ? x[i] + " can be the sum of " + num + " perfect squares" : x[i] + " cannot be the sum of perfect squares")

    let proper = (num == correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = coloring + proper;

    answerListEl.appendChild(listEl);

}

 PERFECT SQUARES - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* BEST TIME TO BUY AND SELL A STOCK WITH COOLDOWN - MEDIUM - START 

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share
// of the stock multiple times) with the following restrictions:

// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

var maxProfit = function (prices) {

    if (prices.length === 0) {
        return 0;
    }

    let dp = [...Array(prices.length)].map(e => Array(4).fill(0));
    dp[0][0] = -prices[0];
    dp[0][1] = 0;
    dp[0][2] = 0;
    dp[0][3] = 0;

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i], dp[i - 1][3] - prices[i]);
        dp[i][1] = dp[i - 1][0] + prices[i];
        dp[i][2] = dp[i - 1][1];
        dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2]);
    }

    return Math.max(dp[prices.length - 1][1], dp[prices.length - 1][2], dp[prices.length - 1][3]);

};

let x = [[1, 2, 3, 0, 2], [1], [1, 2, 4]];
let correct = [3, 0, 3];

answerExplainationEl.textContent = "Given an array of integers and the posiblity to buy and sell with a cooldown after selling, what is the max proit that can be achieved.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let profit = maxProfit(x[i]);

    let coloring = (profit > 0 ? "The highest profit that can be achieved given [" + x[i] + "] is " + profit : " No profit can be achieved given [" + x[i] + "]")

    let proper = (profit == correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = coloring + proper;

    answerListEl.appendChild(listEl);

}

 BEST TIME TO BUY AND SELL A STOCK WITH COOLDOWN - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* COUSINS IN BINARY TREE - EASY - START 

//Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y, 
//return true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise.

//Two nodes of a binary tree are cousins if they have the same depth with different parents.

//Note that in a binary tree, the root node is at the depth 0, and children of each depth k node are at the depth k + 1.

let findParentAndDepth = (curNode, value, curDepth = 0, parentValue) => {

    if (!curNode) {
        return;
    }

    if (curNode.val === value) {
        return [curDepth, parentValue];
    }

    return findParentAndDepth(curNode.left, value, curDepth + 1, curNode.val) || findParentAndDepth(curNode.right, value, curDepth + 1, curNode.val);

};

var isCousins = function (root, x, y) {
    //993
    let [xDepth, xParent] = findParentAndDepth(root, x);
    let [yDepth, yParent] = findParentAndDepth(root, y);

    return xDepth === yDepth && xParent !== yParent;

};

let root = [[1, 2, 3, 4], [1, 2, 3, null, 4, null, 5], [1, 2, 3, null, 4]];
let x = [4, 5, 2];
let y = [3, 4, 3]
let correct = [false, true, false];

answerExplainationEl.textContent = "Given an array of integers and the posiblity to buy and sell with a cooldown after selling, what is the max proit that can be achieved.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let rootTree = insertLevelOrder(root[i]);

    console.log("rootTree: ", rootTree);

    let areCousins = isCousins(rootTree, x[i], y[i]);

    let displayRoot = [];

    for (let j = 0; j < root[i].length; j++) {

        if (root[i][j] == null) {

            displayRoot.push("null");

        } else {

            displayRoot.push(root[i][j]);

        }

    }

    let coloring = (areCousins === true ? " are cousins" : " are not cousins")

    let proper = (areCousins == correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = "Given a binary tree with the components [" + displayRoot + "], " + x[i] + " and " + y[i] + coloring + proper;

    answerListEl.appendChild(listEl);

}

 COUSINS IN BINARY TREE - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* NEXT GREATER ELEMENT I - EASY - START 

// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j]
// in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

var nextGreaterElement = function (nums1, nums2) {

    let answerArray = [];

    for (let i = 0; i < nums1.length; i++) {

        let reducedNums2 = nums2.slice(nums2.indexOf(nums1[i]))

        for (let j = 0; j < reducedNums2.length; j++) { //Not a fan of this solution, (O)n^2
            if (reducedNums2[j] > nums1[i]) {
                answerArray.push(reducedNums2[j]);
                break;
            }
        }

        if (answerArray.length < i + 1) {
            answerArray.push(-1);
        }

    }

    return answerArray;

};

let x = [[4, 1, 2], [2, 4], [1, 3, 5, 2, 4]];
let y = [[1, 3, 4, 2], [1, 2, 3, 4], [6, 5, 4, 3, 2, 1, 7]];
let correct = [[-1, 3, -1], [3, -1], [7, 7, 7, 7, 7]];

answerExplainationEl.textContent = "Given two arrays of integers, search the second array for each element in the first array. If its there, check to see if an element to it's right is greater. If there is, return it, otherwise return -1.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let result = nextGreaterElement(x[i], y[i]);

    let right = true;

    for (let j = 0; j < correct[i].length; j++) {
        if (result[j] !== correct[i][j]) {
            right = false;
            break;
        }
    }

    let coloring = "Given the first array [" + x[i] + "] and the second array [" + y[i] + "] the resulting array from the algorithm is [" + result + "]";

    let proper = (right ? ", this is correct" : ", this is wrong");

    listEl.textContent = coloring + proper;

    answerListEl.appendChild(listEl);

}

 NEXT GREATER ELEMENT I - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* REVERSE WORDS IN A STRING - MEDIUM - START 

// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have
//  a single space separating the words. Do not include any extra spaces.

var reverseWords = function (s) {

    let reversed = "";
    let sArr = s.split(" ");
    let cleanArr = [];

    for (let i = sArr.length-1; i >= 0; i--) {
        if (sArr[i]) {
            cleanArr.push(sArr[i]);
        }
    }

    //cleanArr.reverse();

    reversed = cleanArr.join(" ");

    return reversed;

};

let x = ["the sky is blue", "  hello world  ", "a good   example", "  Bob    Loves  Alice   ", "Alice does not even like bob"];
let correct = ["blue is sky the", "world hello", "example good a", "Alice Loves Bob", "bob like even not does Alice"];

answerExplainationEl.textContent = "Given a string of words separated by spaces, return a string with a reversed order of the words.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let reversed = reverseWords(x[i]);

    let coloring = "reversing the word order in '" + x[i] + "' yields '" + reversed;

    let proper = (reversed == correct[i] ? "', this is correct" : "', this is wrong");

    listEl.textContent = coloring + proper;

    answerListEl.appendChild(listEl);

}

REVERSE WORDS IN A STRING - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SORT CHARACTERS BY FREQUENCY - MEDIUM - START 

// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is
// the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

var frequencySort = function(s) {

    let obj = {};

    for (let i = 0; i < s.length; i++){
        obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1
    }

    let letters = [];

    for (let i in obj){
        letters.push([i, obj[i]]);
    }

    letters.sort(function(a,b){
        return b[1] - a[1];
    })

    let idx = 0;
    s = "";

    while (idx < letters.length){
        s += letters[idx][0];
        if (letters[idx][1] > 1){
            letters[idx][1]--;
        } else {
            idx++;
        }
    }
    
    return s;
    
};

let x = ["tree", "cccaaa", "Aabb"];
let correct1 = ["eert", "aaaccc", "bbAa"];
let correct2 = ["eetr", "cccaaa", "bbaA"];

answerExplainationEl.textContent = "Given a string of letters, sort them based on frequency.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let sorted = frequencySort(x[i]);

    console.log("sorted: ", sorted);

    let coloring = "'" + x[i] + "' sorted by frequency yields '" + sorted;

    let proper = (sorted == correct1[i] || sorted == correct2[i] ? "', this is correct" : "', this is wrong");

    listEl.textContent = coloring + proper;

    answerListEl.appendChild(listEl);

}

 SORT CHARACTERS BY FREQUENCY - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SORT COLORS - MEDIUM - START

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the
// same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

var sortColors = function (nums) {

    let red = 0;
    let white = 0;
    let blue = 0;
    let idx = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 0) {
            red++;
        } else if (nums[i] === 1) {
            white++;
        } else {
            blue++;
        }

    }

    while (idx < nums.length) {

        if (red > 0) {
            nums[idx] = 0;
            red--;
        } else if (white > 0) {
            nums[idx] = 1;
            white--;
        } else {
            nums[idx] = 2;
            blue--;
        }

        idx++;
    }

};

let x = [[2, 0, 2, 1, 1, 0], [2, 0, 1], [0], [1]];
let correct = [[0, 0, 1, 1, 2, 2], [0, 1, 2], [0], [1]];

answerExplainationEl.textContent = "Given an array of numbers from 0 to 2, sort them without using a library fuction.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let coloring = "[" + x[i] + "] when sorted becomes [";

    sortColors(x[i])

    coloring += x[i];

    let right = true;

    for (let j = 0; j < x[i].length; j++) {
        if(x[i][j] != correct[i][j]){
            right = false;
            break;
        }
    }
    let proper = (right ? "], this is correct" : "], this is wrong");

    listEl.textContent = coloring + proper;

    answerListEl.appendChild(listEl);

}

 SORT COLORS - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* ROTTING ORANGES - MEDIUM - START 

// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

var orangesRotting = function (grid) {

    let queue = []
    let freshOranges = 0
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    let minutes = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {

            if (grid[i][j] === 1) {

                freshOranges++

            } else if (grid[i][j] === 2) {

                queue.push([i, j])

            }
        }
    }

    while (queue.length > 0 && freshOranges > 0) {
        let size = queue.length

        while (size) {
            let [x, y] = queue.shift()

            // each loop is one minute
            for (let [dx, dy] of directions) {
                let nextX = x + dx
                let nextY = y + dy

                // Find next fresh oranges to remove
                if (nextX < 0 || nextX >= grid.length || nextY < 0 || nextY >= grid[0].length || grid[nextX][nextY] !== 1) continue

                freshOranges--
                grid[nextX][nextY] = 2
                queue.push([nextX, nextY])
            }
            size--
        }
        minutes++
    }

    return freshOranges ? -1 : minutes
    
};

let x = [[[2, 1, 1], [1, 1, 0], [0, 1, 1]], [[2, 1, 1], [0, 1, 1], [1, 0, 1]], [[0, 2]],
[[2, 0, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
[1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
[[2, 1, 1],
[1, 1, 1],
[0, 1, 2]]];
let correct = [4, -1, 0, 58, 2];

answerExplainationEl.textContent = "Given a matrix of oranges, return how long it takes for all the oranges to rot.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let rot = orangesRotting(x[i]);

    let coloring;

    if (rot === -1) {
        coloring = "Not all of the oranges can rot";
    } else if (rot === 0) {
        coloring = "All of the oranges are already rotten";
    } else {
        coloring = "All of the oranges will rot within " + rot + " minutes";
    }

    let proper = (rot === correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = coloring + proper;

    answerListEl.appendChild(listEl);

}

/* ROTTING ORANGES - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MINIMUM COST TO MOVE CHIPS TO THE SAME POSITION - EASY - START 

function minCostToMoveChips(position){

    let odds = 0;
    let evens = 0;

    for (let i = 0; i < position.length;i++){
        if (position[i] % 2 === 0){
            evens++;
        } else {
            odds++;
        }
    }

    if (odds > evens){
        return evens;
    } 

    return odds;

}

let x = [[1,2,3],[2,2,2,3,3], [1,1000000000]]
let correct = [1,2,1];

answerExplainationEl.textContent = "Given an array of positions of chips, determine the cost of moving those chips into a single column. Chips located an odd number of spaces from the destination column cost 1 to move, even spaces cost none";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let cost = minCostToMoveChips(x[i]);

    let coloring = "The cost of moving all the chips in [" + x[i] + "] to a single column is " + cost;

    let proper = (cost === correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = coloring + proper;

    answerListEl.appendChild(listEl);

}

/* MINIMUM COST TO MOVE CHIPS TO THE SAME POSITION - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* CONVERT BINARY NUMBER IN A LINKED LIST TO AN INTEGER - EASY - START 

function getDecimalValue(head){

    let listArr = [];
    let integer = 0;

    //First I'll convert the list into an array

    while(head != null){
        
        listArr.push(head.val); //adds the value of the link to the array
        head = head.next; //progresses through the list
    }

    //Now I'll convert the array into a decimal number
    //starting with the reversing of the array
    listArr = listArr.reverse();
    
    //Now to convert by multiplying each digit by the appropriate power of two
    for (let i = 0; i < listArr.length; i++){

        integer += (listArr[i] * Math.pow(2,i));

    }

    return integer;

}

let x = [[1,0,1],[0], [1],[1,0,0,1,0,0,1,1,1,0,0,0,0,0,0],[0,0]]
let correct = [5,0,1,18880,0];

answerExplainationEl.textContent = "Given a linked list in which every link is a digit of a binary number, return that number as a decimal number";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xList = listConstructor(x[i]);

    let decimal = getDecimalValue(xList.head);

    let coloring = "[" + x[i] + "] is a list containing a binary number that is equivalent to " + decimal + " as an integer";

    let proper = (decimal === correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = coloring + proper;

    answerListEl.appendChild(listEl);

}

/* CONVERT BINARY NUMBER IN A LINKED LIST TO AN INTEGER - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* CONSECUTIVE CHARACTERS - EASY - START 

function maxPower(s){
    //take in a string and return the length of the longest run of consecutive characters.
    //Time Complexity O(n) dependent on input string length
    //Space Complexity O(n) based on comparison string

    let maxCount = 1;  //the variable to be returned, stores the length of the longest run of consecutive characters

    //These variables are the working variables, used to determine if a run of consecutive characters is continuing,
    //of if it's time to check the length of the last run and to see if it's the longest
    let currentCount = 1;
    let currentChar = s[0];

    //cycle through all characters
    for (let i = 1; i < s.length; i++){

        //if the newly examined character is equal to the character creating the current run of consecutive characters
        if(currentChar == s[i]){

            //simply add one to the count
            currentCount++;

            //then check if this new count is higher than the previous maxCount. If yes, replace the maxCount
            maxCount = currentCount > maxCount ? currentCount : maxCount;

        } else {

            //otherwise, if the new character is different than the previous run, reset the working variables
            //so they can be used going forward
            currentChar = s[i];
            currentCount = 1;

        }

    }

    //once the loop has run its course, return the maxCount
    return maxCount;

}

let x = ["leetcode", "abbcccddddeeeeedcba", "triplepillooooow", "hooraaaaaaaaaaay", "tourist", "cc"]
let correct = [2,5,5,11,1,2];

answerExplainationEl.textContent = "Given a sting of characters, return the count of the element that appears consecutively the most";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let highest = maxPower(x[i]);

    let coloring = "The highest number of consecutive characters in '" + x[i] + ",' is " + highest;

    let proper = (highest === correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = coloring + proper;

    answerListEl.appendChild(listEl);

}

/* CONSECUTIVE CHARACTERS - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* POWER OF TWO - EASY - START 

function isPowerOfTwo(n){ 
    //Given an integer n, return true if it is a power of two. Otherwise, return false.
    //Time Complexity O(n) because of the array.includes
    //Space Complexity O(1) 

    //This array contains all powers of two less than the integer limit of 2147483647
    let powersOfTwo = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024,
         2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144,
          524288, 1048576, 2097152, 4194304, 8388608, 16777216,
           33554432, 67108864, 134217728, 268435456, 536870912,
            1073741824];

    //this checks if the number is one of the powers of two smaller than the integer limit of 2147483647
    return powersOfTwo.includes(n);

}

let x = [1,16,3]
let correct = [true,true,false];

answerExplainationEl.textContent = "Given a sting of characters, return the count of the element that appears consecutively the most";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let highest = isPowerOfTwo(x[i]);

    let coloring = highest ? x[i] + " is a power of two" : x[i] + " is not a power of two";

    let proper = (highest === correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = coloring + proper;

    answerListEl.appendChild(listEl);

}

/* POWER OF TWO - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* POWER OF TWO - EASY - START 

function findJudge(n, trust){ 
    //Given n people and an array of a series of identifiers for individuals and who they trust, return the id of one individual that is trusted by everyone
    //Time Complexity O(n) based on for loop
    //Space Complexity O(n) based on length of trust array

    //set the trusted individual based on the first individual in the trust array
    let trusted = trust[0][1];

    //if the trusted indivdual doesn't exist, return -1
    if (trusted > n){
        return -1;
    }

    //if the length of the array is 1, return the id of the trusted individual by the first individual 
    if (trust.length == 1){
        return trust[0][1];
    }

    //check if everyone else trusts the same individual, returning -1 if they are not the same
    for (let i = 1; i < trust.length;i++){
        if (trust[i][1] != trusted){
            return -1;
        }
    }

    //if nothing else has broken the function yet, return the trusted individual
    return trusted;

}

let x = [2,3,3,4];
let y = [[[1,2]], [[1,3],[2,3]], [[1,3],[2,3],[3,1]], [[1,3],[1,4],[2,3],[2,4],[4,3]]];
let correct = [2,3,-1,3];

answerExplainationEl.textContent = "Given that a 'secret judge' might exist in the population, that there are n people in town, and that everyone but the judge trusts the judge, return the id of the secret judge if they exist, or -1 if they dont exist";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let judge = findJudge(x[i], y[i]);

    let coloring = judge != -1 ? "The judge is the person ID'd as " + judge : "There is no secret judge";

    let proper = (judge === correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = coloring + proper;

    answerListEl.appendChild(listEl);

}

/* POWER OF TWO - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SUM ROOT TO LEAF BINARY NUMBERS - EASY - START 

var sumRootToLeaf = function (root) {

    function rootToLeafSearch(root) {

        let data = []; //holds the paths
        let currentRun = Array(100).fill(0); //placeholder array to store current paths

        //recursive helper function to traverse the tree and construct the paths
        function traverse(node, currentRun, runLength) {

            if (node == null) {
                return;
            }

            currentRun[runLength] = node.val; //populates the placeholder array
            runLength++; //iterates the current path length

            if (node.left == null && node.right == null) //Leaf Found, adding path to data array
                data.push(currentRun.slice(0, runLength));
            else { //Branch Found, recursing to next node
                traverse(node.left, currentRun, runLength);
                traverse(node.right, currentRun, runLength);
            }
        }

        traverse(root, currentRun, 0);

        return data;

    }

    function binaryToDecimalConverter(binaryNum) {

        let decimalNum = 0;

        //reverses the binary number to make it easier to use
        binaryNum = binaryNum.reverse().join("");

        for (let i = 0; i < binaryNum.length; i++) {

            //populates the decimal number by adding each binary digit's value to it
            decimalNum += binaryNum[i] * Math.pow(2, i);

        }

        return decimalNum;

    };

    let binaryStrings = rootToLeafSearch(root);
    let decimalNumber = 0;

    for (let i = 0; i < binaryStrings.length; i++) {
        decimalNumber += binaryToDecimalConverter(binaryStrings[i]);
    }

    return decimalNumber;

};

let x = [[1, 0, 1, 0, 1, 0, 1], [0]];
let correct = [22, 0];

answerExplainationEl.textContent = "Given the root of a Binary Tree filled with binary numbers, return the decimal equivalent of the binary number created by the path through those binary numbers";

for (let i = 0; i < x.length; i++) {

    let xCopy = x[i].slice();

    let listEl = document.createElement('li');

    let xRoot = binaryTreeConstructor(x[i]);

    let digitalSum = sumRootToLeaf(xRoot);

    let coloring = "A binary tree containing the binary numbers [" + xCopy + "], generates binary numbers on root to leaf paths that sum to " + digitalSum;

    let proper = (digitalSum === correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = coloring + proper;

    answerListEl.appendChild(listEl);

}

/* SUM ROOT TO LEAF BINARY NUMBERS - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* INSERT INTO A BINARY SEARCH TREE - MEDIUM - START 

var insertIntoBST = function (root, val) {

    let newNode = new TreeNode(val);
    let tempNode = root;


    if (!root) {
        root = newNode;
        return root;
    }

    while (true) {

        if (newNode.val === tempNode.val) {

            return root;

        } else if (newNode.val < tempNode.val) {
            if (tempNode.left) {
                tempNode = tempNode.left;
            }
            else {
                tempNode.left = newNode;
                return root;
            }
        } else if (newNode.val > tempNode.val) {
            if (tempNode.right) {
                tempNode = tempNode.right;
            }
            else {
                tempNode.right = newNode;
                return root;
            }
        }

    }

};

function prepArr(array){
    
    let returnArray = [];

    for(let i = 0; i < array.length;i++){
        if (array[i] != null){
            returnArray.push(array[i]);
        }
    }
    
    return returnArray;
}

let x = [[40, 20, 60, 10, 30, 50, 70], [4, 2, 7, 1, 3, null, null, null, null, null, null]];
let y = [25, 5]
let correct = [[40, 20, 60, 10, 30, 50, 70, null, null, 25], [4, 2, 7, 1, 3, 5]];

answerExplainationEl.textContent = "Given the root of a binary search tree (BST) and a value to insert into the BST, insert the value and return the root";

for (let i = 0; i < x.length; i++) {

    let xCopy = x[i].slice();

    let listEl = document.createElement('li');

    let xRoot = bstConstructor(x[i]);

    let updatedTreeRoot = insertIntoBST(xRoot, y[i]);

    let treeArray = bstToArray(updatedTreeRoot);

    let preparedXCopy = prepArr(xCopy)

    let coloring = "Inserting the value " + y[i] + " into the binary search tree containing the values [" + preparedXCopy + "], results in a binary search tree containing [" + treeArray + "]";

    let proper = compareTreeArrays(treeArray, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = coloring + proper;

    answerListEl.appendChild(listEl);

}

/* INSERT INTO A BINARY SEARCH TREE - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MINIMUM NUMBER OF ARROWS TO BURST BALLOONS - MEDIUM - START  

var findMinArrowShots = function(points) {

    let localPoints = points.slice();

    function populate(array){

        let start = array[0];
        let end = array[1] + 1;
        let fullArray = [];

        for (let i = start; i < end;i++){
            fullArray.push(i);
        }
        return fullArray;
    }

    for (let i = 0; i < localPoints.length;i++){
        localPoints[i] = populate(localPoints[i]);
    }

    let combinedArray = [].concat(...localPoints);

    combinedArray.sort();

    console.log(combinedArray);

};

let x = [[[10,16],[2,8],[1,6],[7,12]], [[1,2],[3,4],[5,6],[7,8]], [[1,2],[2,3],[3,4],[4,5]]];
let correct = [2, 4, 2];

answerExplainationEl.textContent = "Given an array of points corresponding to the left and right x coordinates of a series of balloons, determine the minimum number of arrows required to pop them all (looking for overlaps)";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let arrowCount = findMinArrowShots(x[i]);

    let coloring = "A series of balloons with x coordinates of [" + x[i] + "], you would need to fire " + arrowCount + " to pop them all";

    let proper = (arrowCount === correct[i] ? ", this is correct" : ", this is wrong");

    listEl.textContent = coloring + proper;

    answerListEl.appendChild(listEl);

}

/* SUM ROOT TO LEAF BINARY NUMBERS - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* STRING TO INTEGER (A TO I) (ATTEMPT 2, IMPROVE WORKING FUNCTION) - MEDIUM - START 

var myAtoi = function (s) {

    // Local copy of provided string
    let stringInProcess = s.slice();

    // Unusable Characters RegEx
    let unusable = /[a-z\.+-\s]/;

    // Remove leading zeros
    while (true) {

        if (stringInProcess[0] == " ") {
            stringInProcess = stringInProcess.slice(1);
        } else {
            break;
        }

    }

    // Remove leading unuseable positive and negative characters
    if (stringInProcess[0] == '-' || stringInProcess[0] == '+') {
        stringInProcess = stringInProcess.slice(1);
    }

    // Check for empty strings or strings with unusable characters
    if (!stringInProcess || stringInProcess[0].match(unusable)) {
        return 0;
    }

    //Use JS built in function
    let integer = parseInt(s);

    //Catch out of bounds
    integer = integer > 2147483647 ? 2147483647 : integer;
    integer = integer < -2147483648 ? -2147483648 : integer;

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

/* STRING TO INTEGER (A TO I) (ATTEMPT 2, IMPROVE WORKING FUNCTION) - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* WORD PATTERN - EASY - START 

var wordPattern = function (pattern, s) {
    //Convert pattern and s into compariable versions

    // string split into individual words
    let words = [];

    if (s.indexOf(" ") == -1){ //one word, no need to split
        words.push(s);
    } else {
        words = s.split(" ")
    }
    
    //comparing lengths for early rejection
    if (words.length != pattern.length){
        return false
    }

    //variables to construct comparison versions
    let wordsWordOrder = [];
    let patternLetterOrder = [];
    
    let patternFromWords = "";
    let reconstructedPattern = "";
    let currentWordIdx = 0;
    let currentPatternIdx = 0;

    for (let i = 0; i < words.length; i++) {

        //checks if the letter of the pattern or the word in the word order have been found yet, returning its index if it does and -1 if it doesn't
        let wordIndex = wordsWordOrder.indexOf(words[i]);
        let patternIndex = patternLetterOrder.indexOf(pattern[i]);

        // if the word is not yet in the wordsWordOrder array, add it, set the wordIndex to the next empty spot, iterate the currentWordIdx to prep it for the next new word 
        if (wordIndex < 0) {
            wordsWordOrder.push(words[i]);
            wordIndex = currentWordIdx;
            currentWordIdx++;
        }

        // if the letter is not yet in the patternLetterOrder array, add it, set the patternIndex to the next empty spot, iterate the currentPatternIdx to prep it for the next new letter
        if(patternIndex < 0){
            patternLetterOrder.push(pattern[i]);
            patternIndex = currentPatternIdx;
            currentPatternIdx++
        }

        //construct strings of numbers from the relevant indecies
        patternFromWords += wordIndex;
        reconstructedPattern += patternIndex;

    }

    //converting the strings of numbers into actual numbers
    patternFromWords = parseInt(patternFromWords);
    reconstructedPattern = parseInt(reconstructedPattern);

    //returning a boolean of if the integers are equal
    return patternFromWords == reconstructedPattern;

};

let x = ["abba", "abba", "aaaa", 'e'];
let y = ["dog cat cat dog", "dog cat cat fish", "dog cat cat dog", 'eureka'];
let correct = [true, false, false, true];

answerExplainationEl.textContent = "This algorithm checks if a given string of words corresponds to a given pattern of words";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let compared = wordPattern(x[i], y[i]);

    let color = compared ? "The sentence '" + y[i] + ",' meets the pattern '" + x[i] + ",'" : "The sentence '" +  y[i] + ",' does not meet the pattern '" + x[i] + ",'";

    let proper = (compared == correct[i] ? " this is correct" : " this is wrong");

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* WORD PATTERN - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* CAN PLACE FLOWERS - EASY - START 

var canPlaceFlowers = function (flowerbed, n) {
    //attempt to place flowers, if any are unplaceable, return false

    if (n == 0) { //early return for obvious answer
        return true;
    }

    let plantedBed = flowerbed.slice();
    let idx = 0;

    if (plantedBed.length === 1) { //single space edge case
        if (plantedBed[idx] === 0 && n === 1) {
            return true;
        } else {
            return false;
        }
    }

    while (true) { //cycle the bed looking for spots until n is depleted, or until there are no more possible spots

        if (idx == plantedBed.length - 1) { //last spot, if n is not zero and the spot is not fillable, return false

            if (plantedBed[idx - 1] === 0 && plantedBed[idx] === 0) {

                plantedBed[idx] = 1;
                n--;

            }

            if (n != 0) {
                return false;
            }

        } else if (idx === 0) { //first spot, only looking at spot and forward

            if (plantedBed[idx] === 0 && plantedBed[idx + 1] === 0) {

                plantedBed[idx] = 1;
                n--;

            }

            idx++;

        } else { //middle spots, looking ahead and back

            if (plantedBed[idx - 1] === 0 && plantedBed[idx] === 0 && plantedBed[idx + 1] === 0) {

                plantedBed[idx] = 1;
                n--;

            }

            idx++;

        }

        if (n == 0) {  //if n had been depleted, return true
            return true;
        }

    }

};

let x = [[1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1], [0], [1], [1, 0, 1, 1, 0, 0], [1, 0, 1, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0],[0,0,0],[0,1,0],[0,0,0,0,0]];
let y = [1, 2, 1, 2, 1, 1, 0, 1, 1, 2, 2, 1, 3];
let correct = [true, false, true, false, true, false, true, true, true, true, true,false, true];

answerExplainationEl.textContent = "Given an array representing a flower bed of spots with 1's meaning full spots and 0's meaning empty spots (in which no flowers may be adjacent), and a number of flowers to plant, determine if that many flowers can be planted";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let placeable = canPlaceFlowers(x[i], y[i]);

    let color = placeable ? "The flower bed [" + x[i] + "], can handle " + y[i] + " flowers" : "The flower bed [" + x[i] + "], cannot handle " + y[i] + " flowers";

    let proper = (placeable == correct[i] ? ", this is correct" : " this is wrong");

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* CAN PLACE FLOWERS - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LINKED LIST CYCLE II - MEDIUM - START 

var detectCycle = function (head) {
    //given the head of of a singly linked list, determine if there is a cycle somewhere in the list

    //my attempts yielded the ability to detect a cycle, but not its origin point. this algorithm I found does both

    let fast = head;
    let slow = head;
    let hasCycle = false;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) { 
            hasCycle = true 
            break;
        };
    }
    
    if (!hasCycle) return null;
	
    let slow2 = head;
    while (slow2!==slow) {
        slow = slow.next;
        slow2 = slow2.next;
    }
    return slow2; 

};

let cycleListCreator = function (array, position) {

    let newList = new LinkedList;
    let currentNode;

    for (let i = 0; i < array.length; i++) {

        let newNode = new ListNode(array[i]);

        if (newList.head == null) {
            newList.head = newNode;
            currentNode = newList.head;
        } else {

            currentNode.next = newNode;
            currentNode = newNode;

            if (i == array.length - 1 && position > -1) {

                let localCurrentNode = newList.head;

                for (let j = 0; j < position + 1; j++) {

                    if (j == position) {
                        currentNode.next = localCurrentNode;
                    } else {
                        localCurrentNode = localCurrentNode.next;
                    }

                }
            }
        }
    }

    return newList.head;

}

let x = [[3, 2, 0, -4], [1, 2], [1]];
let y = [1, 0, -1]
let correct = [1, 0, null];

answerExplainationEl.textContent = "given the head of of a singly linked list, determine if there is a cycle somewhere in the list";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xList = cycleListCreator(x[i], y[i]);

    let cycleOrNot = detectCycle(xList);

    let color = cycleOrNot != null ? "there is a cycle in [" + x[i] + "]" : "There is no cycle in [" + x[i] + "]";

    let proper = ((cycleOrNot != null && correct[i] != null) || (cycleOrNot == null && correct[i] == null) ? ", this is correct" : ", this is wrong");

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* LINKED LIST CYCLE II - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* KOKO EATING BANANAS - MEDIUM - START

var minEatingSpeed = function (piles, h) {

    // Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
    // Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. 
    //     If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
    // Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.   
    // Return the minimum integer k such that she can eat all the bananas within h hours.

    let k = Infinity;
    let min = 1
    let max = Math.max(...piles);

    let compute = function (n) {

        let count = 0;

        for (let i = 0; i < piles.length; i++) {

            count += Math.ceil(piles[i] / n);

            if (count > h) {
                return false;
            }
        }

        return !(count > h);
    }

    while (min <= max) {

        let avg = Math.floor((min + max) / 2);

        if (compute(avg)) {

            k = Math.min(k, avg);
            max = avg - 1;

        } else {

            min = avg + 1;

        }
    }

    return k;

};

let x = [[3, 6, 7, 11], [30, 11, 23, 4, 20], [30, 11, 23, 4, 20]];
let y = [8, 5, 6]
let correct = [4, 30, 23];

answerExplainationEl.textContent = "given an array of piles of bananas and number of hours before the keeper returns, what is the rate at which the gorilla eats the bananas";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let rate = minEatingSpeed(x[i], y[i]);

    let color = "Koko eats the piles of bananas at a rate of " + rate + " per hour";

    let proper = (rate == correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* KOKO EATING BANANAS - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* GAS STATION - MEDIUM - START 

var canCompleteCircuit = function (gas, cost) {

    // There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

    // You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station.
    // You begin the journey with an empty tank at one of the gas stations.

    // Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction,
    // otherwise return -1. If there exists a solution, it is guaranteed to be unique

    // let possibleOrigins = gas.length;
    // let origin = 0;
    // let localGas = gas.slice();
    // let localCost = cost.slice();

    // let cycleOrigin = function(){

    //     let gasStart = localGas.shift();
    //     let costStart = localCost.shift();

    //     localGas.push(gasStart);
    //     localCost.push(costStart);

    // }

    // while (possibleOrigins > 0){


    //     let tank = 0;

    //     for (let i = 0; i < gas.length; i++){

    //         tank = tank + localGas[i] - localCost[i];

    //         if (tank < 0){
    //             break;
    //         }

    //     }

    //     if (tank >= 0){
    //         return origin;
    //     }

    //     possibleOrigins--;
    //     origin++;
    //     cycleOrigin();

    // }

    // return -1;

    let origin = 0;
    let tank = 0;
    let total = 0;

    for (let i = 0; i < gas.length; i++) {

        tank += gas[i] - cost[i];
        total += gas[i] - cost[i];

        if (tank < 0) {
            origin = i + 1;
            tank = 0;
        }

    }

    return (total >= 0) ? origin : -1;

};

let x = [[1, 2, 3, 4, 5], [2, 3, 4]]; //amount of gas at gas station gas[i]
let y = [[3, 4, 5, 1, 2], [3, 4, 3]]; //cost of gas to travel to the next station
let correct = [3, -1];

answerExplainationEl.textContent = "given a series of gas stations with a certain amount of gas, set a certain distance apart, determine if a cycle through all gas stations can be completed";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let origin = canCompleteCircuit(x[i], y[i]);

    let color = (origin > -1) ? "It is possible to start a circuit of the stations if you start at station " + origin : "It is not possible to complete a circuit of the stations";

    let proper = (origin == correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* GAS STATION - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* DETECT CAPITAL - EASY - START 

var detectCapitalUse = function(word) {

    // We define the usage of capitals in a word to be right when one of the following cases holds:

    // All letters in this word are capitals, like "USA".
    // All letters in this word are not capitals, like "leetcode".
    // Only the first letter in this word is capital, like "Google".

    // Given a string word, return true if the usage of capitals in it is right.

    //Regular Expressions for all three correct options
    let allCaps = /^[A-Z]+$/;
    let noCaps = /^[a-z]+$/;
    let firstCap = /^[A-Z][a-z]*$/;

    if (word.match(allCaps) || word.match(noCaps) || word.match(firstCap)){
        return true;
    }

    return false;

};

let x = ["USA", "FlaG", "fakE", "EVere", "asdasfa"];
let correct = [true, false, false, false, true];

answerExplainationEl.textContent = "Given a string word, return true if the usage of capitals in it is right.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let capitalized = detectCapitalUse(x[i]);

    let color = capitalized ? x[i] + " is properly capitalized" : x[i] + " is not properly capitalized";

    let proper = (capitalized === correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* DETECT CAPITAL - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* VALID MOUNTAIN ARRAY - EASY - START 

var validMountainArray = function (arr) {

    // Given an array of integers arr, return true if and only if it is a valid mountain array.

    // Recall that arr is a mountain array if and only if:

    // arr.length >= 3
    // There exists some i with 0 < i < arr.length - 1 such that:
    // arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    // arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

    if (arr.length >= 3) {

        let goingUp = true;
        let previousNum = arr[0];

        for (let i = 1; i < arr.length; i++) {

            //exit loop if this item is the same as the last, if it's going down immediately, or if it starts going up when it's only supposed to go down
            if ((previousNum == arr[i]) || (previousNum > arr[i] && i == 1) || (previousNum < arr[i] && !goingUp)) {
                break;
            } else if (previousNum > arr[i] && goingUp){ 
                goingUp = false;
            }
            //if no condition has been broken and it's the last item, 
            if (i == arr.length-1 && !goingUp){
                return true;
            }

            previousNum = arr[i];

        }
    }

    return false;

};

let x = [[2, 1], [3, 5, 5], [0, 3, 2, 1], [1,3,2],[2,0,2],[0,1,2,3,4,5,6,7,8,9],[9,8,7,6,5,4,3,2,1,0]];
let correct = [false, false, true, true, false, false, false];

answerExplainationEl.textContent = "Given an array of integers arr, return true if and only if it is a valid mountain array.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let mountain = validMountainArray(x[i]);

    let color = mountain ? x[i] + " is a proper mountain array" : x[i] + " is not a mountain array";

    let proper = (mountain === correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* VALID MOUNTAIN ARRAY - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* ALL ELEMENTS IN TWO BINARY SEARCH TREES - MEDIUM - START 

var getAllElements = function (root1, root2) {

    // Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.

    function bstToArray(root) {

        let queue = [];
        let contents = [];

        if (!root) {
            return null;
        }

        queue.push(root);

        while (queue.length > 0) {
            if (queue[0].left) {
                queue.push(queue[0].left)
            }
            if (queue[0].right) {
                queue.push(queue[0].right)
            }
            contents.push(queue.shift().val)
        }

        return contents;

    }

    let arr1 = root1 ? bstToArray(root1) : [];
    let arr2 = root2 ? bstToArray(root2) : [];

    return arr1.concat(arr2).sort((a, b) => a - b);

};

let x = [[2, 1, 4], [1, null, 8], [0, -10, 10], []];
let y = [[1, 0, 3], [8, 1], [5, 1, 7, 0, 2], [5, 1, 7, 0, 2]]
let correct = [[0, 1, 1, 2, 3, 4], [1, 1, 8, 8], [-10, 0, 0, 1, 2, 5, 7, 10], [0, 1, 2, 5, 7]];

answerExplainationEl.textContent = "Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.";

for (let i = 0; i < x.length; i++) {

    let xCopy = x[i].slice();
    let yCopy = y[i].slice();

    let listEl = document.createElement('li');

    let xRoot = bstConstructor(x[i]);
    let yRoot = bstConstructor(y[i]);

    let combined = getAllElements(xRoot, yRoot);

    let color = "The combination of [" + xCopy + "] and [" + yCopy + "] is [" + combined + "]";

    let proper = compareArrays(combined, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* ALL ELEMENTS IN TWO BINARY SEARCH TREES - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MAXIMUM XOR OF TWO NUMBERS IN AN ARRAY - MEDIUM - START 

var findMaximumXOR = function (nums) {

    // Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 <= i <= j < n.

    let decimalToBinary = function (decimalNum) {

        //This algorithm works by checking increasingly large exponents of 2 against the number. 
        //When the exponent of 2 exceeds the user number, the previous exponent of 2 is subtracted from the decimal number.
        //The algorithm whittles down the decimal number to 0. At 0 the binary number is ready and the while loop ends

        //empty array that will store the digits of the binary number
        let binaryNum = [];

        //number that will determine how many digits there are in the binaryNum
        let position = 0;

        //currentNum is the current exponent of 2 being checked against the user number
        let currentNum = 0;

        //bool that details if this is the first exponent of 2 being subtracted from the user number or not
        let first = true;

        //immediately ejects 0
        if (decimalNum == 0) {
            binaryNum.push(decimalNum);
        }
        else {

            //Main Loop
            while (decimalNum > 0) {

                //As the loop starts the previous exponent of 2 is set to the current exponent of 2
                let lastNum = currentNum;
                //The current exponent of 2 is updated to the next highest
                currentNum = Math.pow(2, position);

                //if the user number is greater than the current exponent of 2, position increases
                if (decimalNum > currentNum) {
                    position += 1;
                }
                else {

                    //if this is the first time the binaryNum array is being interacted with
                    if (binaryNum.length == 0) {

                        //this for loop fills every spot with 0's except the last, which gets a 1
                        for (let i = 0; i < position + 1; i++) {

                            if (i == position) {
                                binaryNum[binaryNum.length - 1] = "1";
                            }
                            else {
                                binaryNum.push("0");
                            }
                        }

                    }
                    //as the decimal number decreases, the position will decrease, and lower positions in the array will be replaced with 1's as is warranted. 
                    else {
                        if (decimalNum == currentNum) {
                            binaryNum[position] = "1"
                        }
                        else {
                            binaryNum[position - 1] = "1"
                        }
                    }

                    //if the decimal number and exponent of 2 are equal, the exponent of 2 is subtracted from the decimalnumber to make 0
                    if (decimalNum == currentNum) {
                        decimalNum = 0;
                    }
                    //otherwise the last exponent of 2 is subtracted from 2
                    else {
                        decimalNum -= lastNum;
                    }

                    //a catch for exponents of 2 that cause a mistake in the algorithm otherwise. I will endeavor to figure out why, but without this 2,4,8,16, etc... come out one digit short
                    if (first && decimalNum == 0) {
                        binaryNum[binaryNum.length - 1] = "0";
                        binaryNum.push("1");
                    }

                    //sets first to false, resets counting and comparing variables
                    first = false;
                    position = 0;
                    currentNum = 0;

                }
            }
        }

        //reverses the binaryNum array and turns it into a string
        let binaryNumStr = binaryNum.reverse().join("");

        return binaryNumStr;
    }

    let binaryToDecimal = function (binaryNum) {

        let decimalNum = 0;

        //reverses the binary number to make it easier to use
        binaryNum = binaryNum.split("").reverse().join("");

        for (let i = 0; i < binaryNum.length; i++) {

            //populates the decimal number by adding each binary digit's value to it
            decimalNum += binaryNum[i] * Math.pow(2, i);

        }

        return decimalNum;
    }

    let XORComparator = function (binary1, binary2) {

        //raw returnable XOR outcome
        let xor = "";

        //bringing the lengths of the binary nums in alignment
        while (binary1.length < binary2.length) {
            binary1 = "0" + binary1;
        }

        while (binary2.length < binary1.length) {
            binary2 = "0" + binary2;
        }

        //XOR comparison, exlusive or, as (1 and 0 is 1) or (0 and 1 is 1). Alternatively, (0 and 0 is 0) and (1 and 1 is 0)
        for (let k = 0; k < binary1.length; k++) {

            if ((binary1[k] == "1" && binary2[k] == "1") || (binary1[k] == "0" && binary2[k] == "0")) {
                xor += "0";
            } else {
                xor += "1";
            }

        }

        return xor;

    }

    
    let maxXOR = 0;


    for (let i = 0; i < nums.length; i++) {

        for (let j = i+1; j < nums.length;j++){

        //get binary versions of the numbers
        //as the XOR comparison requires this format
        let binaryI = decimalToBinary(nums[i]);
        let binaryJ = decimalToBinary(nums[j]);

        //run a xor comparison on binaryI and binaryJ
        //convert the result to decimal
        let currentXOR = binaryToDecimal(XORComparator(binaryI, binaryJ));

        //compare the XOR result from the current comparison to the previous largest XOR result
        maxXOR = currentXOR > maxXOR ? currentXOR : maxXOR;

        }

    }

    //return the maximum
    return maxXOR;

};

let x = [[3, 10, 5, 25, 2, 8], [14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70], [8, 10, 2]];
let correct = [28, 127, 10];

answerExplainationEl.textContent = "Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 <= i <= j < n.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let maximum = findMaximumXOR(x[i]);

    let color = "The maximum result of nums[i] XOR nums[j] of [" + x[i] + "] is " + maximum;

    let proper = (maximum == correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* MAXIMUM XOR OF TWO NUMBERS IN AN ARRAY - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* DESIGN AND ADD SEARCH WORDS DATA STRUCTURE - MEDIUM - START 

var WordDictionary = function () {
    this.root = {}
};


WordDictionary.prototype.addWord = function (word) {
    let node = this.root;
    for (let char of word) {
        if (!node[char]) {
            node[char] = {}
        }
        node = node[char]
    }
    node['end'] = true;
};

WordDictionary.prototype.search = function (word, node = this.root, start = 0) {
    for (let i = start; i < word.length; i++) {
        let char = word[i];
        if (char === '.') {
            for (let key of Object.keys(node)) {
                if (key === 'end') continue
                if (this.search(word, node[key], i + 1)) {
                    return true
                }
            }
            return false
        } else {
            if (!node[char]) return false;
            node = node[char]
        }
    }
    if (node['end']) return true;

    return false
};

let populate = function (arr) {
    let obj = new WordDictionary();
    for (let word in arr) {
        obj.addWord(word)
    }
    return obj;
}

let addables = ["bad", "dad", "mad"];
let searchables = ["pad", "bad", ".ad", "b.."];
let correct = [false, true, true, true];

answerExplainationEl.textContent = "Design a data structure that supports adding new words and finding if a string matches any previously added string.";

for (let i = 0; i < searchables.length; i++) {

    let listEl = document.createElement('li');

    let dict = populate(addables);
    console.log(dict);

    let present = dict.search(searchables[i])

    let color = present ? "The wordSearch data structure contains the word " + searchables[i] : "The wordSearch data structure does not contains the word";

    let proper = (present == correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* DESIGN AND ADD SEARCH WORDS DATA STRUCTURE - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* RICHEST CUSTOMER WEALTH - EASY - START 

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

var maximumWealth = function(accounts) {

    let max = 0;

    for (let i = 0; i < accounts.length;i++){

        let currentSum = accounts[i].reduce((partialSum, a) => partialSum + a, 0) //sum the elements of the array with array.reduce

        max = currentSum > max ? currentSum : max; //compare max to currentSum, max becomes the higher of the two

    }

    return max;
    
};

let x = [[[1,2,3],[3,2,1]],[[1,5],[7,3],[3,5]],[[2,8,7],[7,1,3],[1,9,5]]];
let correct = [6,10,17];

answerExplainationEl.textContent = "Given a series of arrays referring customer assets in banks, return the wealth of the assets of the wealthiest customer";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let highest = maximumWealth(x[i]);

    let color = "The wealthiest customer has a wealth of " + highest;

    let proper = (highest == correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* RICHEST CUSTOMER WEALTH - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* BEST TIME TO BUY AND SELL STOCK - EASY - START 

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function (prices) {

    let buyDay = 0;
    let sellDay = 1;
    let max = 0;

    while (sellDay < prices.length){
        if (prices[buyDay] < prices[sellDay]){
            max = max < prices[sellDay] - prices[buyDay] ? prices[sellDay] - prices[buyDay]: max;
        } else {
            buyDay = sellDay;
        }
        sellDay++;
    }

    return max;

};

let x = [[7, 1, 5, 3, 6, 4], [7, 6, 4, 3, 1]];
let correct = [5, 0];

answerExplainationEl.textContent = "Given an array prices where prices[i] is the price of a given stock on the ith day, return the day on which you can achieve maximum profit. If you cannot achieve any profit, return 0";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let bestDay = maxProfit(x[i]);

    let color = bestDay > 0 ? "The best day to sell is " + bestDay : "You cannot make a profit with the given prices";

    let proper = (bestDay == correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* BEST TIME TO BUY AND SELL STOCK - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* FIND ALL ANAGRAMS IN A STRING - MEDIUM - START 

// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var findAnagrams = function (s, p) {

    
    let alphaP = p.split("").sort().join("");
    let pLeng = p.length;
    let left = 0;
    let right = left + pLeng;
    let locations = [];

    while(right < s.length + 1){
        let localS = s.slice(left, left + pLeng).split("").sort().join("");
        if(localS == alphaP){
            locations.push(left);
        }
        left++;
        right = left + pLeng;
    }

    return locations

};

let x = ["cbaebabacd", "abab", "acdcaeccde"];
let y = ["abc", "ab", "c"]
let correct = [[0, 6], [0, 1, 2], [1, 3, 6, 7]];

answerExplainationEl.textContent = "Given an array prices where prices[i] is the price of a given stock on the ith day, return the day on which you can achieve maximum profit. If you cannot achieve any profit, return 0";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let indecies = findAnagrams(x[i], y[i]);

    let color = "Anagrams of [" + y[i] + "] can be found at [" + indecies + "] within [" + x[i] + "]";

    let proper = compareArrays(indecies, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* FIND ALL ANAGRAMS IN A STRING - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* FIND THE DIFFERENCE - EASY - START 

//You are given two strings s and t.

//String t is generated by random shuffling string s and then add one more letter at a random position.

//Return the letter that was added to t.

var findTheDifference = function (s, t) {

    // if (s.length === 0){
    //     return t;
    // }

    // let dictS = {};
    // let dictT = {};

    // for (let i = 0; i < s.length;i++){

    //     if(!dictS[s[i]]){
    //         dictS[s[i]] = 1;
    //     } else {
    //         dictS[s[i]]++;
    //     }

    //     if(!dictT[t[i]]){
    //         dictT[t[i]] = 1;
    //     } else {
    //         dictT[t[i]]++;
    //     }

    //     if(i === s.length - 1){
    //         if(!dictT[t[i+1]]){
    //             dictT[t[i+1]] = 1;
    //         } else {
    //             dictT[t[i+1]]++;
    //         }

    //     }

    // }

    // for (key in dictT){
    //     if (!dictS[key] || dictS[key] !== dictT[key]){
    //         return key
    //     } 
    // }

    if (s.length === 0) {
        return t;
    }

    let sCopy = s.split("").sort().join("");
    let tCopy = t.split("").sort().join("");

    for (let i = 0; i < sCopy.length; i++) {

        if (sCopy[i] !== tCopy[i]) {
            return tCopy[i];
        }

        if (i === sCopy.length - 1) {
            return tCopy[i + 1];
        }
    }

};

let x = ["abcd", "", "abcde", "fghj"];
let y = ["abcde", "y", "aabcde", "fghij"];
let correct = ["e", "y", "a", "i"];

answerExplainationEl.textContent = "Given two strings s and t, with string t being string s with an extra letter included in a random spot, return the extra letter in t";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let extra = findTheDifference(x[i], y[i]);

    let color = "When comparing '" + x[i] + "' and '" + y[i] + "' the extra letter in the second string is '" + extra + "'";

    let proper = extra == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* FIND THE DIFFERENCE - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* ADD DIGITS - EASY - START 

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

var addDigits = function(num) {

    if (num === 0){
        return 0;
    }

    let numArr = num.toString().split("");

    while (numArr.length > 1){

        let num0 = Number(numArr.shift());
        let num1 = Number(numArr.shift());
        let sum = num0 + num1;

        if (sum > 9){
            let sumString = sum.toString();
            sum = Number(sumString[0]) + Number(sumString[1]);
        }

        numArr.unshift(sum);

    }

    return numArr[0];

};

let x = [38,0];
let correct = [2,0];

answerExplainationEl.textContent = "Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i];

    let digit = addDigits(xCopy);

    let color = "By adding the individual digits of " + xCopy + " until this is only one digit left, it becomes " + digit;

    let proper = digit == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* ADD DIGITS - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* BINARY TREE IN ORDER TRAVERSAL - EASY - START 

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

var inOrderTraversal = function (root) {

    if (root === null){
        return [];
    }

    let data = [];

    function traverse(node) {

        node.left && traverse(node.left);
        data.push(node.val);
        node.right && traverse(node.right);
        
    }

    traverse(root);

    return data;

};

let x = [[1, null, 2, 3], [], [1]];
let correct = [[1, 3, 2], [], [1]];

answerExplainationEl.textContent = "Given the root of a binary tree, return the inorder traversal of its nodes' values.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xTree = binaryTreeConstructor(x[i]);

    let inOrder = inOrderTraversal(xTree);

    let color = "The binary supplied binary tree, when traversed in order returns " + inOrder;

    let proper = compareArrays(inOrder, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* BINARY TREE IN ORDER TRAVERSAL - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SINGLE NUMBER - EASY - START 

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
    
    let dict = {};
    
    for (let i = 0;i < nums.length;i++){
        
        if (!dict[nums[i]]){
            dict[nums[i]] = 1;
        } else{
            dict[nums[i]]++;
        }
            
    }
    
    for (key in dict){
        if (dict[key] === 1){
            return key;
        }
    }
    
    
};

let x = [[2,2,1],[4,1,2,1,2],[1]];
let correct = [1,4,1];

answerExplainationEl.textContent = "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let single = singleNumber(x[i]);

    let color = "In the array [" + x[i] + "], the only element that appears once is '" + single + "'";

    let proper = single == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* SINGLE NUMBER - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MAJORITY ELEMENT - EASY - START 

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

var majorityElement = function(nums) {
    
    let dict = {};
    let n = nums.length;
    
    for (let i = 0;i < nums.length;i++){
        
        if (!dict[nums[i]]){
            dict[nums[i]] = 1;
        } else{
            dict[nums[i]]++;
        }
            
    }
    
    for (key in dict){
        if (dict[key] > n / 2){
            return key;
        }
    }
    
};

let x = [[3,2,3],[2,2,1,1,1,2,2]];
let correct = [3,2];

answerExplainationEl.textContent = "Given an array nums of size n, return the majority element.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let majority = majorityElement(x[i]);

    let color = "In the array [" + x[i] + "], the majority element is '" + majority + "'";

    let proper = majority == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* MAJORITY ELEMENT - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* REMOVE NTH NODE FROM END OF LIST - MEDIUM - START 

// Given the head of a linked list, remove the nth node from the end of the list and return its head.
let singlyLinkedListConstructor = function (arr) {

    let list = new LinkedList;
    let currentNode;

    for (let i = 0; i < arr.length; i++) {

        let node = new ListNode(arr[i]);

        if (list.head == null) {
            list.head = node;
            currentNode = list.head;
        } else {
            currentNode.next = node;
            currentNode = node;
        }

    }

    return list.head;

}

let arrConstructor = function (head) {

    if (head === null) {
        return [];
    }

    let arr = [];
    let currNode = head;

    while (currNode) {
        arr.push(currNode.val);
        currNode = currNode.next;
    }

    return arr;

}

var removeNthFromEnd = function (head, n) {

    if (head.next === null) {
        return null;
    }

    let listLength = 0;
    let currNode = head;

    while (currNode) {
        listLength++;
        currNode = currNode.next;
    }

    if (listLength == n){
        return head.next;
    }

    let removeAt = listLength - n;
    currNode = head;

    for (let i = 0; i < removeAt; i++) {

        if (i === removeAt - 1) {
            let removedNode = currNode.next;
            currNode.next = removedNode.next;
            removedNode.next = null;
        }

        currNode = currNode.next;

    }

    return head;

};

let x = [[1, 2, 3, 4, 5], [1], [1, 2], [1, 2]];
let y = [2, 1, 1, 2]
let correct = [[1, 2, 3, 5], [], [1],[2]];

answerExplainationEl.textContent = "Given the head of a linked list, remove the nth node from the end of the list and return its head.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xList = singlyLinkedListConstructor(x[i]);

    let remainingList = removeNthFromEnd(xList, y[i]);

    console.log(remainingList);

    let remainingArr = arrConstructor(remainingList);

    let color = "Given a linked list with the elements [" + x[i] + "] and a number n of  '" + y[i] + "', the list with the nth element from the end removed is [" + remainingArr + "]";

    let proper = compareArrays(remainingArr, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* REMOVE NTH NODE FROM END OF LIST - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SUMMARY RANGES - EASY - START 

// You are given a sorted unique integer array nums.

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b

var summaryRanges = function (nums) {

    let ranges = [];
    let lastNum = 0;
    let rangeStart = 0;
    
    if (nums.length === 1) {

        ranges.push(nums[0].toString());

    } else {

        for (let i = 1; i < nums.length + 1; i++) {

            if (nums[i] !== nums[lastNum] + 1) {

                if (lastNum === rangeStart) {
                    ranges.push(nums[lastNum].toString());
                } else {
                    ranges.push((nums[rangeStart].toString() + "->" + nums[lastNum].toString()));
                }

                lastNum = i;
                rangeStart = i;

            } else {

                lastNum++;

            }
        }
    }

    return ranges;

};

let x = [[0, 1, 2, 4, 5, 7], [0, 2, 3, 4, 6, 8, 9], [-1]];
let correct = [["0->2", "4->5", "7"], ["0", "2->4", "6", "8->9"], ["-1"]];

answerExplainationEl.textContent = "Given a sorted array of unique integers, return the smallest sorted list of ranges that cover all the numbers in the array exactly.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let ranges = summaryRanges(x[i]);

    let color = "Given an array with the elements [" + x[i] + "], those elements can be covered with the ranges [" + ranges + "]";

    let proper = compareArrays(ranges, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* SUMMARY RANGES - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* COUNTING BITS - EASY - START 

// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

var countBits = function (n) {

    let sumArr = function (arr) {

        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += Number(arr[i]);
        }

        return sum;

    }

    let bits = [];

    for (let i = 0; i < n + 1; i++) {

        bits.push(sumArr(i.toString(2).split("")));

    }

    return bits;

};

let x = [2, 5];
let correct = [[0, 1, 1], [0, 1, 1, 2, 1, 2]];

answerExplainationEl.textContent = "Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let bits = countBits(x[i]);

    let color = "The array [" + bits + "], contains the individual sums of all the bits of all the integers leading up to and including '" + x[i] + "'";

    let proper = compareArrays(bits, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* COUNTING BITS - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* IS SUBSEQUENCE - EASY - START 

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of
// the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

var isSubsequence = function (s, t) {

    let sPointer = 0
    let tPointer = 0;

    if (s.length === 0){
        return true;
    }

    while (tPointer < t.length) {

        if (t[tPointer] !== s[sPointer]) {

            tPointer++;

        } else {

            tPointer++;
            sPointer++;

            if (sPointer == s.length) {

                return true;

            }
        }

    }

    return false;

};

let x = ["abc", "axc", ""];
let y = ["ahbgdc", "ahbgdc", "ahbgdc"];
let correct = [true, false, true];

answerExplainationEl.textContent = "Given two strings s and t, return true if s is a subsequence of t, or false otherwise.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let isSub = isSubsequence(x[i], y[i]);

    let color = isSub ? "'" + x[i] + "' is a  subsequence of '" + y[i] + "'" : "'" + x[i] + "' is not a  subsequence of '" + y[i] + "'";

    let proper = isSub === correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* IS SUBSEQUENCE - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LINKED LIST CYCLE - EASY - START 

//Given head, the head of a linked list, determine if the linked list has a cycle in it.

//There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
//Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

//Return true if there is a cycle in the linked list. Otherwise, return false.

var hasCycle = function (head) {

    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            return true;
        };
    }

    return false;

};

let cycleListCreator = function (array, position) {

    let newList = new LinkedList;
    let currentNode;

    for (let i = 0; i < array.length; i++) {

        let newNode = new ListNode(array[i]);

        if (newList.head == null) {
            newList.head = newNode;
            currentNode = newList.head;
        } else {

            currentNode.next = newNode;
            currentNode = newNode;

            if (i == array.length - 1 && position > -1) {

                let localCurrentNode = newList.head;

                for (let j = 0; j < position + 1; j++) {

                    if (j == position) {
                        currentNode.next = localCurrentNode;
                    } else {
                        localCurrentNode = localCurrentNode.next;
                    }

                }
            }
        }
    }

    return newList.head;

}

let x = [[3, 2, 0, -4], [1, 2], [1]];
let y = [1, 0, -1]
let correct = [true, true, false];

answerExplainationEl.textContent = "Given head, the head of a linked list, determine if the linked list has a cycle in it.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xList = cycleListCreator(x[i], y[i]);

    let cycleOrNot = hasCycle(xList);

    let color = cycleOrNot ? "There is a cycle in [" + x[i] + "]" : "There is no cycle in [" + x[i] + "]";

    let proper = cycleOrNot === correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* LINKED LIST CYCLE - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SIMPLIFY PATH - MEDIUM - START 

// Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system,
// convert it to the simplified canonical path.

// In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level,
// and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods
// such as '...' are treated as file/directory names.

// The canonical path should have the following format:

//    The path starts with a single slash '/'.
//    Any two directories are separated by a single slash '/'.
//    The path does not end with a trailing '/'.
//    The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')
// Return the simplified canonical path.

var simplifyPath = function (path) {

    let newArr = path.split('/');
    let stack = [];

    for (let i = 0; i < newArr.length; i++) {

        if (newArr[i]) {

            if (newArr[i] === '..') {

                stack.pop();

            } else if (newArr[i] !== '.') {

                stack.push(newArr[i]);

            }
        }
    }

    return '/' + stack.join('/');

};

let x = ["/home/", "/../", "/home//foo/", "g", "/a/./b/../../c/"];
let correct = ["/home", "/", "/home/foo", "/g", "/c"];

answerExplainationEl.textContent = "Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let canonicalPath = simplifyPath(x[i]);

    let color = "This: '" + canonicalPath + "' is the canonical path gleaned from: '" + x[i] + "'";

    let proper = canonicalPath === correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* SIMPLIFY PATH - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* VALIDATE STACK SEQUENCES - MEDIUM - START 

// Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a
// sequence of push and pop operations on an initially empty stack, or false otherwise.

var validateStackSequences = function (pushed, popped) {

    let pushedCopy = pushed.slice().reverse();
    let lastElement1 = 0;
    let lastElement2 = 0;
    let constructedStack1 = [];
    let constructedStack2 = [];

    constructedStack1.push(pushedCopy.pop());

    while (true) {

        if (constructedStack2.length === popped.length) {
            return true;
        }

        if (constructedStack1[lastElement1] === popped[lastElement2]) {

            constructedStack2.push(constructedStack1.pop());
            lastElement1--;
            lastElement2++;

        } else if (pushedCopy.length > 0) {

            constructedStack1.push(pushedCopy.pop());
            lastElement1++;

        } else {

            return false;

        }

    }

};

let x = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]];
let y = [[4, 5, 3, 2, 1], [4, 3, 5, 1, 2]];
let correct = [true, false];

answerExplainationEl.textContent = "Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let possible = validateStackSequences(x[i], y[i]);

    let color = possible ? "It's possible to convert [" + x[i] + "] into [" + y[i] + "] with a series of pushes and pops" : "It's not possible to convert [" + x[i] + "] into [" + y[i] + "] with a series of pushes and pops";

    let proper = possible === correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* VALIDATE STACK SEQUENCES - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SCORE OF PARENTHESES - MEDIUM - START 

// Given a balanced parentheses string s, return the score of the string.

// The score of a balanced parentheses string is based on the following rule:

//    "()" has score 1.
//    AB has score A + B, where A and B are balanced parentheses strings.
//    (A) has score 2 * A, where A is a balanced parentheses string.

var scoreOfParentheses = function (s) {

    let scoreByDepth = [0];

    for (let i = 0; i < s.length; i++) {

        if (s[i] === "(") {

            scoreByDepth.push(0);

        } else {

            let currDepthScore = scoreByDepth[scoreByDepth.length - 1] > 0 ? 2 * scoreByDepth[scoreByDepth.length - 1] : 1;
            scoreByDepth.pop();
            scoreByDepth[scoreByDepth.length - 1] += currDepthScore;

        }

    }

    return scoreByDepth[0];

};

let x = ["()", "(())", "()()", "(()(()))"];
let correct = [1, 2, 2, 6];

answerExplainationEl.textContent = "Given a balanced parentheses string s, return the score of the string.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let score = scoreOfParentheses(x[i]);

    let color = "The score of the string '" + x[i] + "' is " + score;

    let proper = score === correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* SCORE OF PARENTHESES - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* REMOVE DUPLICATE LETTERS - MEDIUM - START 

// Given a string s, remove duplicate letters so that every letter appears once and only once.
// You must make sure your result is the smallest in lexicographical order among all possible results.

var removeDuplicateLetters = function (s) {

    let last_occ = {};
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        last_occ[s[i]] = i
    }

    for (let i = 0; i < s.length; i++) {
        if (stack.indexOf(s[i]) == -1) {
            while (stack.length > 0 && stack[stack.length - 1] > s[i] && last_occ[stack[stack.length - 1]] > i) {
                stack.pop();
            }
            stack.push(s[i])
        }
    }

    return stack.join("");

};

let x = ["bcabc", "cbacdcbc"];
let correct = ["abc", "acdb"];

answerExplainationEl.textContent = "Given a string of characters remove duplicate letters and return the result with the smallest lexographical order.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let simplified = removeDuplicateLetters(x[i]);

    let color = "The string '" + x[i] + "' reduced to match the specifications is " + simplified;

    let proper = simplified === correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* REMOVE DUPLICATE LETTERS - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* PARTITION LABELS - MEDIUM - START 

// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.

var partitionLabels = function (s) {

    let dict = {};
    let i = 0;

    while (i < s.length) {

        if (!dict[s[i]]) {
            dict[s[i]] = i;
        } else {
            dict[s[i]] = i;
        }

        i++;

    }

    i = 0;
    let output = [];
    let temp = 0;

    while (i < s.length) {
        temp = dict[s[i]];
        let j = 0;
        while (i + j <= temp) {
            if (dict[s[i + j]] > temp) {
                temp = dict[s[i + j]];
            }
            j++;
        }
        output.push(j);
        i += j;
    }

    return output;

};

let x = ["ababcbacadefegdehijhklij", "eccbbbbdec"];
let correct = [[9, 7, 8], [10]];

answerExplainationEl.textContent = "Given a string s, partition the string into as many parts as possible so that each letter appears in at most one part, return a list of integers representing the size of these parts.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let sizes = partitionLabels(x[i]);

    let color = "The string '" + x[i] + "' when partitioned into as many parts as possible become segments that are [" + sizes + "] characters long each";

    let proper = compareArrays(sizes, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* PARTITION LABELS - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* GET SMALLEST STRING - MEDIUM - START 

// The numeric value of a lowercase character is defined as its position (1-indexed) in the alphabet, so the numeric value of a is 1, 
// the numeric value of b is 2, the numeric value of c is 3, and so on.

// The numeric value of a string consisting of lowercase characters is defined as the sum of its characters' numeric values. For example,
//  the numeric value of the string "abe" is equal to 1 + 2 + 5 = 8.

// You are given two integers n and k. Return the lexicographically smallest string with length equal to n and numeric value equal to k.

// Note that a string x is lexicographically smaller than string y if x comes before y in dictionary order, that is, either x is a prefix
//  of y, or if i is the first position such that x[i] != y[i], then x[i] comes before y[i] in alphabetic order.

var getSmallestString = function (n, k) {

    // let alpha = {
    //     'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13,
    //     'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
    // }

    let alphaReverse = {
        1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i', 10: 'j', 11: 'k', 12: 'l', 13: 'm',
        14: 'n', 15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't', 21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z'
    }

    let result = [];
    let localK = k;
    let localN = n;

    while (localK > 0) {
        localN -= 1;
        let diff = Math.min(localK - localN, 26);
        result.push(alphaReverse[diff]);
        localK -= diff;
    }

    return result.reverse().join("");

};

let x = [3, 5];
let y = [27, 73]
let correct = ["aay", "aaszz"];

answerExplainationEl.textContent = "Given a number of characters and a sum, return a string that is the length of the number of characters and composed of characters whose values add up to the sum.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let smallestString = getSmallestString(x[i], y[i]);

    let color = "'" + smallestString + "' is the smallest string that is both " + x[i] + " characters long and has characters that sum to " + y[i];

    let proper = smallestString == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* GET SMALLEST STRING - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* BROKEN CALCULATOR - MEDIUM - START 

// There is a broken calculator that has the integer startValue on its display initially. In one operation, you can:

//      multiply the number on display by 2, or
//      subtract 1 from the number on display.

// Given two integers startValue and target, return the minimum number of operations needed to display target on the calculator.

var brokenCalc = function (startValue, target) {

    let ops = 0;
    let currentValue = startValue;

    while (currentValue !== target) {

        if (currentValue > target) {

            ops += currentValue - target;
            currentValue = target;

        } else if (target % 2 == 1) {

            target++;
            ops++

        } else {

            target = Math.floor(target / 2);
            ops++;
        }
    }

    return ops;

};

let x = [2, 5, 3, 1024];
let y = [3, 8, 10, 1]
let correct = [2, 2, 3, 1023];

answerExplainationEl.textContent = "Given a broken calculator that can only subtract 1 or multiply by 2, a starting number and a target return the minimum number of operations required to reach the target.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let operations = brokenCalc(x[i], y[i]);

    let color = "It takes " + operations + " operations to get from " + x[i] + " to " + y[i];

    let proper = operations == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* BROKEN CALCULATOR - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* BOATS TO SAVE PEOPLE - MEDIUM - START 

// You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat
// can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of
// those people is at most limit.

//Return the minimum number of boats to carry every given person.

var numRescueBoats = function (people, limit) {

    people.sort((a, b) => { return a - b });

    let boats = 0;
    let low = 0;
    let high = people.length - 1;

    while (low <= high) {

        if (people[low] + people[high] <= limit) {

            low++;
            high--;

        } else {

            high--;

        }

        boats++;

    }

    return boats;

};

let x = [[1, 2], [3, 2, 2, 1], [3, 5, 3, 4], [3, 4, 2, 1, 3, 5, 4, 1, 1, 1, 3, 2, 4], [21, 40, 16, 24, 30], [44, 10, 29, 12, 49, 41, 23, 5, 17, 26]];
let y = [3, 3, 5, 5, 50, 50]
let correct = [1, 3, 4, 7, 3, 6];

answerExplainationEl.textContent = "Given an array of weights of people and a weight limit per boat, return the minimum number of boats that would carry everyone.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let boats = numRescueBoats(x[i], y[i]);

    let color = "It takes " + boats + " boat(s) with a weight limit of " + y[i] + " to save " + x[i].length + " people of given weights";

    let proper = boats == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* BOATS TO SAVE PEOPLE - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* TWO CITY SCHEDULING - MEDIUM - START 

// A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the
// ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

// Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

var twoCitySchedCost = function (costs) {

    costs.sort((a, b) => {

        let aDiff = a[0] - a[1];
        let bDiff = b[0] - b[1];

        return aDiff - bDiff;

    });

    let sum = 0;

    for (let i = 0; i < costs.length; i++) {

        if (i >= costs.length / 2) {

            sum += costs[i][1];

        } else {

            sum += costs[i][0];

        }
    }

    return sum;

};

let x = [[[10, 20], [30, 200], [400, 50], [30, 20]], [[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]], [[515, 563], [451, 713], [537, 709], [343, 819], [855, 779], [457, 60], [650, 359], [631, 42]]];
let correct = [110, 1859, 3086];

answerExplainationEl.textContent = "Given an array of the costs to fly job applicants to two different cities, return the minimum cost to fly half to one city and half to the other.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let minimumCost = twoCitySchedCost(x[i]);

    let color = "It costs at least " + minimumCost + " to fly half the applicants to city 'a' and half to  city 'b'";

    let proper = minimumCost == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* TWO CITY SCHEDULING - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SEARCH IN ROTATED SORTED ARRAY II - MEDIUM - START 

// There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

// Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting
// array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7]
// might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

// Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

// You must decrease the overall operation steps as much as possible.

var search = function (nums, target) {

    // let idx = nums.indexOf(target);

    // if (idx != -1) {
    //     return true;
    // } else {
    //     return false;
    // }

    return nums.indexOf(target) != -1

};

let x = [[2, 5, 6, 0, 0, 1, 2], [2, 5, 6, 0, 0, 1, 2]];
let y = [0, 3]
let correct = [true, false];

answerExplainationEl.textContent = "Given an array of integers that has been sorted and then rotated, return if a target integer exists within the array.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let isInArray = search(x[i], y[i]);

    let color = isInArray ? "The target " + y[i] + " exists with the rotated array " + x[i] : "The target " + y[i] + " is not in the rotated array " + x[i];

    let proper = isInArray == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* SEARCH IN ROTATED SORTED ARRAY II - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* FIND THE DUPLICATE NUMBER - MEDIUM - START 

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

var findDuplicate = function (nums) {

    let map = {};

    for (let i = 0; i < nums.length; i++) {

        if (map[nums[i]]) {

            return nums[i];

        } else {

            map[nums[i]] = 1;

        }
    }

};

let x = [[1, 3, 4, 2, 2], [3, 1, 3, 4, 2]];
let correct = [2, 3];

answerExplainationEl.textContent = "Given an array of integers that includes a duplicate number, return that duplicate number";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let duplicate = findDuplicate(x[i]);

    let color = "The duplicate number in the array [" + x[i] + "], is " + duplicate;

    let proper = duplicate == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* FIND THE DUPLICATE NUMBER - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SEARCH A 2D MATRIX - MEDIUM - START 

// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

//      Integers in each row are sorted from left to right.
//      The first integer of each row is greater than the last integer of the previous row.

var searchMatrix = function (matrix, target) {

    let up = 0;
    let right = matrix[0].length - 1;
    let down = matrix.length - 1;
    let left = 0;
    let vertical = -1;

    if (target < matrix[up][left] || target > matrix[down][right]) {
        return false;
    }

    while (up <= down) {

        if (target === matrix[up][left] || target === matrix[down][left] || target === matrix[up][right] || target === matrix[down][right]) {
            return true;
        } else if (target > matrix[up][left] && target < matrix[up][right]) {
            vertical = up;
            break;
        } else if (target > matrix[down][left] && target < matrix[down][right]) {
            vertical = down;
            break;
        } else {
            up++;
            down--;
        }
    }

    while (vertical !== -1 && left <= right) {

        if (target === matrix[vertical][left] || target === matrix[vertical][right]) {
            return true;
        } else {
            left++;
            right--;
        }
    }

    return false;

};

let x = [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], [[1], [3]]];
let y = [3, 13, 2];
let correct = [true, false, false];

answerExplainationEl.textContent = "Given a 2D Matrix of integers and a target integer, return whether or not the target exists in the matrix ";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let present = searchMatrix(x[i], y[i]);

    let color = present ? "The matrix contains the target" : "The matrix does not contain the target";

    let proper = present == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* SEARCH A 2D MATRIX - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SPLIT ARRAY LARGEST SUM - HARD - START 

// Given an array nums which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays.

// Write an algorithm to minimize the largest sum among these m subarrays.

var splitArray = function (nums, m) {

    let low = Math.max(...nums);
    let maxSum = 0;

    let high = nums.reduce((prev, curr) => {
        return prev + curr;
    }, 0);

    while (low <= high) {

        const mid = Math.floor(low + (high - low) / 2);

        if (isSplitPossible(nums, mid, m)) {

            maxSum = mid;
            high = mid - 1;

        } else {

            low = mid + 1;

        }
    }

    return maxSum;

};

var isSplitPossible = function (nums, mid, m) {

    let sum = 0;
    let pairCount = 1;

    for (let i = 0; i < nums.length; i++) {

        sum += nums[i];

        if (sum > mid) {

            pairCount++;
            sum = nums[i];

        }
    }

    return pairCount <= m;
};

let x = [[7, 2, 5, 10, 8], [1, 2, 3, 4, 5], [1, 4, 4]];
let y = [2, 2, 3];
let correct = [18, 9, 4];

answerExplainationEl.textContent = "Given an array of integers and an number of subarrays to spilt that array into, find the minimum largest sum among the subarrays ";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let minimumMaxSum = splitArray(x[i], y[i]);

    let color = "The minimum maximum sum that can be obtained from the array [" + x[i] + "] when that array is split into " + y[i] + " parts is " + minimumMaxSum;

    let proper = minimumMaxSum == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* SPLIT ARRAY LARGEST SUM - HARD - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* REVERSE STRING - EASY - START 

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

var reverseString = function (s) {
    return s.reverse();
};

let x = [["h", "e", "l", "l", "o"], ["H", "a", "n", "n", "a", "h"]];
let correct = [["o", "l", "l", "e", "h"], ["h", "a", "n", "n", "a", "H"]];

answerExplainationEl.textContent = "Given a string (in the form of an array), return the reverse of that string (in the form of an array)";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();

    let reversed = reverseString(x[i]);

    let color = "The reverse of [" + xCopy + "] is [" + reversed + "]";

    let proper = compareArrays(reversed, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* REVERSE STRING - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SWAPPING NODES IN A LINKED LIST - MEDIUM - START 

// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end
//(the list is 1-indexed).

var swapNodes = function (head, k) {

    let currNode = head;
    let length = 0;
    let temp1;
    let temp2;

    while (currNode != null) {
        length++;
        if (length == k) temp1 = currNode.val;
        currNode = currNode.next;
    }

    let fromEnd = length - k;
    let idx = 0;
    currNode = head;

    while (currNode != null) {
        if (idx == fromEnd) {
            temp2 = currNode.val;
            currNode.val = temp1;
        }
        idx++;
        currNode = currNode.next;
    }

    idx = 0;
    currNode = head;

    while (currNode != null) {

        idx++;
        if (idx == k) {
            currNode.val = temp2;
            break;
        }
        currNode = currNode.next;
    }

    return head;


};

let x = [[1, 2, 3, 4, 5], [7, 9, 6, 6, 7, 8, 3, 0, 9, 5]];
let y = [2, 5];
let correct = [[1, 4, 3, 2, 5], [7, 9, 6, 6, 8, 7, 3, 0, 9, 5]];

answerExplainationEl.textContent = "Given a singly linked list and an integer k, swap the elements found at node k from the head and k from the end";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();

    let xList = listConstructor(x[i]);

    let altered = swapNodes(xList.head, y[i]);

    let alteredArray = listToArrayTypeTwo(altered);

    let color = "The list [" + xCopy + "] with the nodes '" + y[i] + "' from the start and the end is [" + alteredArray + "]";

    let proper = compareArrays(alteredArray, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* SWAPPING NODES IN A LINKED LIST - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* CONTAINER WITH MOST WATER - MEDIUM - START 

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line
// are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

var maxArea = function (height) {

    if (height.length < 2) {
        return 0;
    }

    let i = 0;
    let j = height.length - 1;
    let tempArea = 0;
    let maxArea = 0;

    while (i != j) {

        if (height[i] > height[j]) {
            tempArea = height[j] * (j - i)
            j--;
        } else {
            tempArea = height[i] * (j - i);
            i++;
        }

        maxArea = tempArea > maxArea ? tempArea : maxArea;

    }

    return maxArea;

};

let x = [[1, 8, 6, 2, 5, 4, 8, 3, 7], [1, 1]];
let correct = [49, 1];

answerExplainationEl.textContent = "Given a singly linked list and an integer k, swap the elements found at node k from the head and k from the end";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let volume = maxArea(x[i]);

    let color = "The greatest volume that can be obtained in [" + x[i] + "] is " + volume;

    let proper = volume == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* CONTAINER WITH MOST WATER - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LAST STONE WEIGHT - EASY - START

// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together.
// Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the smallest possible weight of the left stone. If there are no stones left, return 0.

var lastStoneWeight = function (stones) {

    while (stones.length > 1) {

        stones.sort((a, b) => a - b);

        let x = stones.pop();
        let y = stones.pop();

        if (x != y) {
            stones.push(Math.abs(x - y));
        }

    }

    return stones[0] ? stones[0] : 0;

};

let x = [[2, 7, 4, 1, 8, 1], [1], [2, 2], [8, 10, 4], [7, 6, 7, 6, 9]];
let correct = [1, 1, 0, 2, 3];

answerExplainationEl.textContent = "Given an array of weights of stones, smash pairs of them together (heaviest to lightest), returning the weight of the last remaining stone. equal sized stones destroy eachother, smaller ones break of equivalent material from the other";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();

    let lastStone = lastStoneWeight(x[i]);

    let color = "From the original array of weight of stones [" + xCopy + "], after smashing them together we get the last stone weight of " + lastStone;

    let proper = lastStone == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* LAST STONE WEIGHT - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LETTER COMBINATIONS OF A PHONE NUMBER - MEDIUM - START 

var letterCombinations = function (digits) {

    if (!digits) return [];

    let phone = { "2": ["a", "b", "c"], "3": ["d", "e", "f"], "4": ["g", "h", "i"], "5": ["j", "k", "l"], "6": ["m", "n", "o"], "7": ["p", "q", "r", "s"], "8": ["t", "u", "v"], "9": ["w", "x", "y", "z"] };

    let combinations = [""];

    for (let i = 0; i < digits.length; i++) {

        let temp = [];

        for (let j = 0; j < combinations.length; j++) {

            let localAlpha = phone[digits[i]];

            for (let k = 0; k < localAlpha.length; k++) {

                temp.push(combinations[j] + localAlpha[k]);
            }
        }

        combinations = temp;

    }

    return combinations;

};

let x = ["23", "", "2"];
let correct = [["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"], [], ["a", "b", "c"]];

answerExplainationEl.textContent = "Given a string of numbers, return all possible letter combinations that can be created by that number, using a phone's keys as a guide.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();

    let combos = letterCombinations(x[i]);

    let color = "Given the string of numbers '" + x[i] + "', the possible letter combinations are [" + combos + "]";

    let proper = compareArrays(combos, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}


/* LETTER COMBINATIONS OF A PHONE NUMBER - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* CRITICAL CONNECTIONS IN A NETWORK - HARD - START 

var criticalConnections = function (n, connections) {

    const disc = Array(n).fill(0) //discovery time
    const low = Array(n).fill(0) //low value

    let time = 0;
    const res = []
    const graph = {}
    const visited = new Set

    for (let [u, v] of connections) {
        if (!graph[u]) graph[u] = []
        if (!graph[v]) graph[v] = []

        graph[u].push(v)
        graph[v].push(u)
    }

    function dfs(i, prev) {
        visited.add(i)
        time++
        disc[i] = time
        low[i] = disc[i]

        for (let nei of graph[i]) {
            if (!visited.has(nei)) {
                dfs(nei, i)

                low[i] = Math.min(low[i], low[nei])
            } else if (nei !== prev) {
                low[i] = Math.min(low[i], disc[nei])
            }

            if (low[nei] > disc[i]) {
                res.push([i, nei])
            }
        }
    }

    dfs(0, -1)

    return res
};

let x = [4, 2];
let y = [[[0, 1], [1, 2], [2, 0], [1, 3]], [[0, 1]]];
let correct = [[[3, 1]], [[0, 1]]];

answerExplainationEl.textContent = "Given an array of server connections, return any critical connections i.e. those that if lost would disconnect servers from the network.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let critical = criticalConnections(x[i], y[i]);

    let isAre = critical.length > 1 ? "connections are" : "connection is";

    let color = "Given " + x[i] + " servers with [" + y[i] + "] connections, the critical " + isAre + " [" + critical + "]";

    let proper = compareNestedArrays(critical, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}


/* CRITICAL CONNECTIONS IN A NETWORK - HARD - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* NEXT PERMUATION - MEDIUM - START 

var nextPermutation = function (nums) {

    //Weed out of small and simple arrays of nums
    if (nums.length == 1) {
        return nums;
    } else if (nums.length == 2) {
        return nums.reverse();
    }

    //When Supplied with an array and the indecies of two elements, returns the array with the elements swapped
    let swap = function (array, idx1, idx2) {

        let temp = array[idx1];

        array[idx1] = array[idx2];
        array[idx2] = temp;

        return array;

    }

    //When Supploes with an array and the index of an element, this returns the next greatest element in the array (assumes there is one)
    let nextGreaterIdx = function (array, targetIdx) {

        let temp;
        let leastGreaterIdx;

        for (let i = 0; i < targetIdx; i++) {

            if (array[i] > array[targetIdx]) {

                if (!temp) {

                    temp = array[i];
                    leastGreaterIdx = i;

                } else if (array[i] < temp && array[i] > array[targetIdx]) {

                    leastGreaterIdx = i;
                }
            }
        }

        return leastGreaterIdx;

    }

    // Supplied with an array and an index at which to split the array, this function splits that array into two, sorts the first section, and returns a combined array
    let sortSec = function (array, splitIdx) {

        let part1 = array.slice(0, splitIdx);
        let part2 = array.slice(splitIdx);

        part1.sort((a, b) => (b - a));

        return part1.concat(part2);

    }

    //reverse the array for easier use, instantiate the first element to be used in comparison
    let numsRev = nums.reverse();
    let last = nums[0];

    //while loop control variables
    let idx = 1;

    while (true) {

        //triggered when encountering the first lesser element in the array
        if (numsRev[idx] < last) {

            //find the index of the second element to swap
            let swapIdx = nextGreaterIdx(numsRev, idx)

            //swap the index of the next greater element with the lower element
            numsRev = swap(numsRev, idx, swapIdx);

            //sort the section of the array that will fall after the element in descending order
            numsRev = sortSec(numsRev, idx);

            //reverse the array
            numsRev.reverse();

            //exit the while loop
            break;

        }

        idx++;

        //triggered when the array has been run
        if (idx === numsRev.length) {
            //does not re-reverse the array, leaving it in the next permutation by default
            //exit the while loop
            break;
        }

    }

    console.log(numsRev);

    return numsRev;

};

let x = [[1, 2, 3], [3, 2, 1], [1, 1, 5], [1, 3, 2]];
let correct = [[1, 3, 2], [1, 2, 3], [1, 5, 1], [2, 1, 3]];

answerExplainationEl.textContent = "Given an array of integers, return the next greatest permuation of that array of integers. If the given array is already the greatest permutation, return the least greatest permuation.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();

    let next = nextPermutation(x[i]);

    let color = "Given the array [" + xCopy + "], the next greatest perumation is [" + next + "]";

    let proper = compareArrays(next, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}


/* NEXT PERMUATION - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* UNIQUE PATHS II - MEDIUM - START

var uniquePathsWithObstacles = function (obstacleGrid) {

    // PROBLEM STATEMENT

    //You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). 
    //The robot tries to move to the bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down or right at any point in time.

    //An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

    //Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

    //The testcases are generated so that the answer will be less than or equal to 2 * 109.

// WORKS, BUT TOO SLOWLY
// let m = obstacleGrid.length - 1; //maximum vertical index
// let n = obstacleGrid[0].length - 1; //maximum horizontal index
// // destination = [m, n];

// // a quick exit for unpathable grids
// if (obstacleGrid[0][0] === 1 || obstacleGrid[m][n] === 1) {

//     return 0;

// // a quick exit for single item grids that are not unpathable
// } else if (m === 0 && n === 0) {

//     return 1;

// }

// let origin = [0, 0]; //start point for the robot

// let uniquePaths = 0; //return variable

// let queue = [origin]; //initialize the queue with the origin as the first space

// while (queue.length > 0) {

//     //retrieve a new temporary origin to look for paths forward
//     let currentOrigin = queue.shift();

//     //not 100% necessary, but it does make the code easier to read
//     let x = currentOrigin[0];
//     let y = currentOrigin[1];

//     //look right
//     //first make sure the item to the right is on the grid
//     if (y + 1 <= n) {

//         //then check if the item to the right is the destination
//         if (x == m && (y + 1) == n) {

//             //if it is, add 1 to unique paths, and restart the loop
//             uniquePaths++;
//             continue;

//             //otherwise, check if there's an obstacle in the grid space to the right
//         } else if (obstacleGrid[x][y + 1] === 0) {

//             //if there is an open space, add that as a new origin to the queue
//             queue.push([x, y + 1]);

//         }
//     }

//     //look down
//     //first make sure the item below is on the grid
//     if (x + 1 <= m) {

//         //then check if the item below is the destination
//         if ((x + 1) == m && y == n) {

//             //if it is, add 1 to unique paths, and restart the loop
//             uniquePaths++;
//             continue;

//             //otherwise, check if there's an obstacle in the grid space below
//         } else if (obstacleGrid[x + 1][y] === 0) {

//             //if there is an open space, add that as a new origin to the queue
//             queue.push([x + 1, y]);

//         }
//     }
// }

// return uniquePaths;

//Dynamic Programming Approach
let m = obstacleGrid.length;
let n = obstacleGrid[0].length;

//creating an empty grid that is 1 element wider and 1 element taller composed of 0's
const dp = [...Array(m + 1)].map((e) => Array(n + 1).fill(0));

//"dp = [...Array(m+1)]" means create an array of m + 1 empty elements and concatenate it into an empty array, dp
//"Array(n+1).fill(0))"  means create an array of n + 1 elements and populate each with a 0
//".map((e)=> ^ABOVE^);" means fill each empty element of the m+1 long array with an array n+1 long full of zeros
//

//creating the path origin element
dp[0][1] = 1;

//these loops populate the dp grid with the number of paths that reach each individual element
//obstacles block unique paths resulting in a zero, otherwise each element is the sum of the
//    unique paths to reach the elements to their left and above them
for (let i = 1; i < m + 1; i++) {

    for (let j = 1; j < n + 1; j++) {

        dp[i][j] = obstacleGrid[i - 1][j - 1] == 1 ? 0 : dp[i][j - 1] + dp[i - 1][j];
        //  The top row and left column of the dp grid are used only as reference to fill the remaining dp grid
        //     "obstacleGrid[i - 1][j - 1] == 1 ? 0" means check the obstacle grid for obstacles.
        //         if there is one, populate that spot on the dp grid with a 0, other wise move on
        //     "dp[i][j - 1] + dp[i - 1][j]" grabs the values of elements to the left and above the
        //         current element and adds them, showing the total number of unique paths
        //         to reach the current element
        // 
    }
}

//return the summed unique paths that have reached the destination element
return dp[m][n];

};

let x = [[[0, 0, 0], [0, 1, 0], [0, 0, 0]], [[0, 1], [0, 0]], [[0]]];
let correct = [2, 1, 1];

answerExplainationEl.textContent = "Given a grid that can potentially contain obstacles, starting from the top left, find how many unique paths there are that can be taken to reach the bottom right";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    console.log("x[i]: ", x[i]);

    let paths = uniquePathsWithObstacles(x[i]);

    let color = "Given the grid [" + x[i] + "], there are " + paths + " unique paths to reach the destination";

    let proper = (paths == correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}


/* UNIQUE PATHS II - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* PATH LENGTH - AMAZON - START 

//  Based on what I remember from my failed Amazon Evaluation
// Given a 2D grid representing a map, with 0s representing no road, 1s representing a road, and 9 representing the destination,
// starting from the top left return the shortest length traveled to reach the destination

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length > 0) {
            let adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    DFSRecursive(start) {

        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;

        let dfs = function (vertex) {

            if (!vertex) {
                return null;
            }

            result.push(vertex);
            visited[vertex] = true;
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfs(neighbor)
                }
            })

        }

        dfs(start);

        return result;

    }
    DFSIterative(start) {
        let result = [];
        let visited = {};
        let stack = [start];
        while (stack.length > 0) {

            let vertex = stack.pop();

            if (!visited[vertex]) {
                visited[vertex] = true;
                result.push(vertex);
                this.adjacencyList[vertex].forEach(neighbor => {
                    if (!visited[neighbor]) {
                        stack.push(neighbor)
                    }
                })
            }
        }

        return result;
    }
    BFS(start) {
        let queue = [start];
        let visited = {};
        let result = [];

        while (queue.length > 0) {

            let vertex = queue.pop();

            if (!visited[vertex]) {
                visited[vertex] = true;
                result.push(vertex);
                this.adjacencyList[vertex].forEach(neighbor => {
                    if (!visited[neighbor]) {
                        queue.unshift(neighbor)
                    }
                })
            }

        }

        return result;

    }
}

class HeapNode {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {

        let newNode = new HeapNode(val, priority);
        this.values.push(newNode);
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {

        const min = this.values[0];
        const end = this.values.pop();

        if (this.values.length > 0) {

            this.values[0] = end;
            let idx = 0;
            const length = this.values.length;
            const element = this.values[0];

            while (true) {

                let leftChildIdx = 2 * idx + 1;
                let rightChildIdx = 2 * idx + 2;
                let leftChild, rightChild;
                let swap = null;

                if (leftChildIdx < length) {
                    leftChild = this.values[leftChildIdx];
                    if (leftChild.priority < element.priority) {
                        swap = leftChildIdx;
                    }
                }
                if (rightChildIdx < length) {
                    rightChild = this.values[rightChildIdx];
                    if (
                        (swap === null && rightChild.priority < element.priority) ||
                        (swap !== null && rightChild.priority < leftChild.priority)
                    ) {
                        swap = rightChildIdx;
                    }
                }
                if (swap === null) break;

                this.values[idx] = this.values[swap];
                this.values[swap] = element;
                idx = swap;

            }
        }

        return min;

    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [] //to return at end
        let smallest;
        //build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}


var pathLength = function (grid) {

    if (grid[0][0] == 9) {
        return 0;
    }

    let gridGraph = new WeightedGraph();
    let legend = {};
    let shortest = -1;

    let nameI = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {

            if (i == 0 && j == 0) {
                gridGraph.addVertex("Origin");
                legend[[0, 0]] = "Origin";
                continue;
            }

            if (grid[i][j] == 9) {
                gridGraph.addVertex("Destination");
                legend[[i, j]] = "Destination";
            } else if (grid[i][j] == 1) {
                let name = "Road" + nameI.toString();
                gridGraph.addVertex(name);
                legend[[i, j]] = name;
                nameI++;
            }
        }
    }

    for (key in legend) {

        let a = parseInt(key[0]);
        let b = parseInt(key[2]);

        let right = b + 1;
        let down = a + 1;

        let dir = [[a, right], [down, b]];

        for (let i = 0; i < dir.length; i++) {

            if (legend[dir[i]]) {
                gridGraph.addEdge(legend[key], legend[dir[i]], 1);
            }
        }
    }

    let minimumVertecies = gridGraph.Dijkstra("Origin", "Destination").length;

    console.log (gridGraph.Dijkstra("Origin", "Destination"));

    if (minimumVertecies - 1 != 0) {
        shortest = minimumVertecies - 1;
    }

    return shortest;

}

let x = [[[1, 0, 0], [1, 0, 0], [1, 9, 1]], [[1, 0, 0], [1, 0, 9], [1, 0, 1]], [[1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1], [1, 0, 1, 1, 1, 1, 0, 1], [1, 0, 1, 0, 0, 0, 0, 1], [1, 0, 1, 0, 9, 0, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0], [1, 0, 1, 1, 1, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1, 0]],[[1,0,0,0,0,0],[1,0,0,0,0,0],[1,0,0,0,0,0],[1,0,0,0,0,0],[1,1,1,1,1,9],[0,0,0,0,0,0]]];
let correct = [3, -1, 18,9];

answerExplainationEl.textContent = "Given a 2D grid, starting from the top left, return the length of the shortest path to reach the destination.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let length = pathLength(x[i]);

    let color = length != -1 ? "With the given grid, the shortest path to the destination is " + length : "With the given grid, there is no path to the destination";

    let proper = (length == correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* PATH LENGTH - AMAZON - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* NUMBER OF 1 BITS - EASY - START 

var hammingWeight = function (n) {

    return n.toString(2).split("0").join("").length; // convert the decimal represenation to binary, remove the 0s from the binary string, return the length of the string of 1s

};

//The function is supposed to supply an unsigned int. because there is no unsigned int in JS, LeetCode supplies a decimal representation of the binary string.
//In order to make my function work here as it does on LeetCode, I have to do  my own conversion of binaryString to decimal representation.
let leetCodeAdapter = function (n) {

    return n.toString(10); //convert the binary string into a decimal representation

}

let x = ['00000000000000000000000000001011', '00000000000000000000000010000000', '11111111111111111111111111111101'];
let correct = [3, 1, 31];

answerExplainationEl.textContent = "Given a binary number as a string, return the Hamming Weight (the number of 1 bits).";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    console.log('x[i]:', x[i]);

    let xCopy = x[i];

    let oneBits = hammingWeight(leetCodeAdapter(x[i]));

    let color = "For the binary string '" + xCopy + ",' the Hamming weight is " + oneBits;

    let proper = (oneBits == correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* NUMBER OF 1 BITS - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* NUMBER OF STEPS TO REDUCE A NUMBER TO ZERO - EASY - START 

var numberOfSteps = function (num) {

    let steps = 0;

    while (num > 0) {

        // if (num % 2 !== 0) {
        //     num--;
        // } else {
        //     num /= 2;
        // }

        num = num % 2 !== 0 ? num - 1 : num / 2; // Single line version of the above

        steps++;

    }

    return steps;

};

let x = [14, 8, 123];
let correct = [6, 4, 12];

answerExplainationEl.textContent = "Given a calculator that can only divide by 2 or subtract one, how many steps does it take to reduce a given number to zero.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i];

    let operations = numberOfSteps(x[i]);

    let color = "It takes " + operations + " operations to reduce " + xCopy + " to zero";

    let proper = (operations == correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* NUMBER OF STEPS TO REDUCE A NUMBER TO ZERO - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* CHECK IF A STRING CONTAINS ALL BINARY CODES OF SIZE K - MEDIUM - START 

var hasAllCodes = function (s, k) {

    // Works, but Too Slow
    // function allBinaryPermutations(n) {

    //     let perm = [];
    //     let permCount = Math.pow(2, n);

    //     for (let i = 0; i < permCount; i++) {

    //         let currentPerm = i.toString(2).split("");

    //         while (currentPerm.length < n) {
    //             currentPerm.unshift("0");
    //         }

    //         perm.push(currentPerm.join(""));

    //     }

    //     return perm;

    // }

    // let allPermutations = allBinaryPermutations(k);

    // for (let i = 0; i < allPermutations.length; i++) {

    //     if (s.indexOf(allPermutations[i]) == -1) {
    //         return false;
    //     }

    // }

    // Works, but Still Too Slow
    // let permCount = Math.pow(2, k);

    // for (let i = 0; i < permCount; i++) {

    //     let currentPerm = i.toString(2).split("");

    //     while (currentPerm.length < k) {
    //         currentPerm.unshift("0");
    //     }

    //     if (s.indexOf(currentPerm.join("")) == -1) {
    //         return false;
    //     }

    // }

    // return true;

    const set = new Set();

    //runs through the string adding unique substrings to the set
    for (let i = k; i <= s.length; i++) {

        set.add(s.slice(i - k, i));

    }

    //checks the size of the set compared to the size a complete set should be
    return set.size == Math.pow(2, k);

};

let x = ["00110110", "0110", "0110", "00010100110010110111"];
let y = [2, 1, 2, 3];
let correct = [true, true, false, true];

answerExplainationEl.textContent = "Given a binary string s and an integer k, return true if every binary code of length k is a substring of s. Otherwise, return false.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i];

    let hasCodes = hasAllCodes(x[i], y[i]);

    let color = "The binary string '" + xCopy + (hasCodes ? "' contains every binary code of length " : "' does not contains every binary code of length ") + y[i];

    let proper = (hasCodes == correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* CHECK IF A STRING CONTAINS ALL BINARY CODES OF SIZE K - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* RUNNING SUM OF 1D ARRAY - EASY - START 

//Works, but looking for a faster option
// var runningSum = function (nums) {

//     let runSum = [nums[0]];

//     for (let i = 1; i < nums.length; i++) {
//         runSum.push(nums[i] + runSum[i - 1]);
//     }

//     return runSum;

// };

//works, but is only marginally faster
//var runningSum = ((nums, val = 0) => nums.map(x => val = val + x))

//slightly faster
var runningSum = function (nums) {
    let sum = 0;
    return nums.map(i => { sum += i; return sum })
};

let x = [[1, 2, 3, 4], [1, 1, 1, 1, 1], [3, 1, 2, 10, 1], [4]];
let correct = [[1, 3, 6, 10], [1, 2, 3, 4, 5], [3, 4, 6, 16, 17], [4]];

answerExplainationEl.textContent = "Given an array of integers, nums, return an array of the running sum of the elements of said array, nums.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i];

    let numsSums = runningSum(x[i]);

    let color = "The running sum of the array [" + xCopy + "] is [" + numsSums + "]";

    let proper = compareArrays(numsSums, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* RUNNING SUM OF 1D ARRAY - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* TRANSPOSE MATRIX - EASY - START

// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

//[[1][2][3]]
//[[4][5][6]]

//[[1][4]]
//[[2][5]]
//[[3][6]]

var transpose = function (matrix) {

    let transposedArray = [...Array(matrix[0].length)].map((e) => Array(matrix.length).fill(0));

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            transposedArray[j][i] = matrix[i][j];
        }
    }

    return transposedArray;

};

let x = [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 2, 3], [4, 5, 6]]];
let correct = [[[1, 4, 7], [2, 5, 8], [3, 6, 9]], [[1, 4], [2, 5], [3, 6]]];

answerExplainationEl.textContent = "Given a 2D integer array matrix, return the transpose of matrix.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();

    let transposedX = transpose(x[i]);

    let color = "The array " + displayNestedArray(xCopy) + " when transposed becomes " + displayNestedArray(transposedX);

    let proper = compareNestedArrays(transposedX, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* TRANSPOSE MATRIX - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* RANGE SUM QUERY 2D - MEDIUM - START 

// Given a 2D matrix matrix, handle multiple queries of the following type:
// Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right
// corner (row2, col2).

// Implement the NumMatrix class:
// NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
// int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined 
// by its upper left corner (row1, col1) and lower right corner (row2, col2).

// @param {number[][]} matrix
// var NumMatrix = function(matrix) {

// };


// @param {number} row1 
// @param {number} col1 
// @param {number} row2 
// @param {number} col2
// @return {number}
// NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {

// };

// Your NumMatrix object will be instantiated and called as such:
// var obj = new NumMatrix(matrix)
// var param_1 = obj.sumRegion(row1,col1,row2,col2)

class NumMatrix {
    constructor(matrix) {
        this.matrix = matrix;
    }
    sumRegion(row1, col1, row2, col2) {

        //Simple, Slow, but Fast Enough
        let sum = 0;

        for (let i = row1; i <= row2; i++) {
            for (let j = col1; j <= col2; j++) {
                sum += this.matrix[i][j];
            }
        }

        return sum;

        //Too Slow
        // let region = [];

        // for (let i = row1; i <= row2; i++) {
        //     region = region.concat(this.matrix[i].slice(col1, col2 + 1));
        // }

        // return region.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    }
}

let x = [[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]; //matrix elements
let y = [[2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]] //sumRegion Coords
let correct = [8, 11, 12]; //sums of sumRegion Coords

answerExplainationEl.textContent = "Given a 2D integer matrix, and the coordinates of the top left and bottom right corners of a section of that matrix, return the sum of the elements within that region.";

let baseMatrix = new NumMatrix(x);

for (let i = 0; i < y.length; i++) {

    let listEl = document.createElement('li');

    regionSum = baseMatrix.sumRegion(y[i][0], y[i][1], y[i][2], y[i][3]);

    let color = "The sum of the elements of the matrix within the given region is " + regionSum;

    let proper = regionSum == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* RANGE SUM QUERY 2D - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* INTERSECTION OF TWO LINKED LISTS - EASY - START 

var getIntersectionNode = function (headA, headB) {

    let map = new Map();

    while (headA) {
        map.set(headA, headA);
        headA = headA.next;
    }

    while (headB) {
        if (map.has(headB)) {
            return headB;
        }
        headB = headB.next;
    }

    return null;

};

let x = [[4, 1, 8, 4, 5], [1, 9, 1, 2, 4], [2, 6, 4]]; //
let y = [[5, 6, 1, 8, 4, 5], [3, 2, 4], [1, 5]]; //
let correct = [8, 2, null];

answerExplainationEl.textContent = "Given two singly linked lists that potentially intersect, return the value of the node at which they do intesect, otherwise return null.";

for (let i = 0; i < x.length; i++) {

    let listA = listConstructor(x[i]);
    let listB = listConstructor(y[i]);

    let listEl = document.createElement('li');

    let intersection = getIntersectionNode(listA.head, listB.head);

    let color = (intersection !== null) ? "The two lists intersect at a node valued at " + intersection : "The two lists do not intersect";

    let proper = intersection == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* INTERSECTION OF TWO LINKED LISTS - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MERGE SORTED ARRAY - EASY - START 

var merge = function (nums1, m, nums2, n) {

    let a = m - 1; //nums1 Pointer
    let b = n - 1; //nums2 Pointer

    for (let i = nums1.length - 1; i >= 0 && b >= 0; i--) {

        if (nums1[a] > nums2[b]) {

            nums1[i] = nums1[a--];

        } else {

            nums1[i] = nums2[b--];

        }
    }

};

var w = [[1, 2, 3, 0, 0, 0], [1], [0]]; // nums1
let x = [3, 1, 0]; // m
let y = [[2, 5, 6], [], [1]]; // nums2
let z = [3, 0, 1]; // n
let correct = [[1, 2, 2, 3, 5, 6], [1], [1]];

answerExplainationEl.textContent = "Given two sorted arrays to merge, and numbers representing the number of elements of each array that are to be merged, return a merged array";

for (let i = 0; i < w.length; i++) {

    let listEl = document.createElement('li');

    merge(w[i], x[i], y[i], z[i]);

    console.log("w[i] now: ", w[i].slice());

    let color = "When the two arrays are merged under the given conditions, they become [" + w[i] + "]";

    let proper = compareArrays(w[i], correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* MERGE SORTED ARRAY - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* REMOVE PALINDROMIC SUBSEQUENCES - EASY - START 

// You are given a string s consisting only of letters 'a' and 'b'. In a single step you can remove one palindromic subsequence from s.

// Return the minimum number of steps to make the given string empty.

// A string is a subsequence of a given string if it is generated by deleting some characters of a given string without changing its order.
//  Note that a subsequence does not necessarily need to be contiguous. <= this makes the question a trick question

// A string is called palindrome if is one that reads the same backward as well as forward.

//This is how to really do this, sans the joke of an answer caused by a stupid instruction
// var longestPalindrome = function (s) {

//     let longest = '';

//     for (let i = 0; i < s.length; i++) {
//         expandCheck(i, i);
//         expandCheck(i, i + 1);
//     }

//     function expandCheck(l, r) {
//         while (l >= 0 && r < s.length && s[l] === s[r]) {
//             if (r - l + 1 > longest.length) {
//                 longest = s.slice(l, r + 1);
//             }
//             l--;
//             r++;
//         }
//     }

//     return longest;

// };

// var removePalindromeSub = function (s) {

//     let removals = 0;

//     while (s.length > 0) {
//         let currentPalindrome = longestPalindrome(s);
//         let idx = s.indexOf(currentPalindrome);
//         s = s.slice(0, idx) + s.slice(idx + currentPalindrome.length);
//         removals++;
//     }

//     return removals;

// };

//this is how the question works due to the instruction: "Note that a subsequence does not necessarily need to be contiguous" 
var removePalindromeSub = function (s) {

    return s === s.split('').reverse().join('') ? 1 : 2;

};

let x = ["ababa", "abb", "baabb", "a", "bbaabaaa"];
let correct = [1, 2, 2, 1, 2];

answerExplainationEl.textContent = "Given the ability to remove palindromes in one move, or individual elements in 1 move, return the number of moves to empty a string";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();

    let moveCount = removePalindromeSub(x[i]);

    let color = "With the given rules, the string '" + xCopy + "' can be reduced to being empty in " + moveCount + " moves";

    let proper = moveCount == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* REMOVE PALINDROMIC SUBSEQUENCES - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* TWO SUM II INPUT ARRAY IS SORTED - MEDIUM - START 

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up
//  to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

var twoSum = function (numbers, target) {

    let dict = {};

    for (let i = 0; i < numbers.length; i++) {

        let remaining = target - numbers[i];

        if (dict[numbers[i]] !== undefined) {

            return [(dict[numbers[i]] + 1), (i + 1)];

        } else {

            dict[remaining] = i;

        }

    }


};

let x = [[2, 7, 11, 15], [2, 3, 4], [-1, 0], [0, 0, 3, 4]];
let y = [9, 6, -1, 0]
let correct = [[1, 2], [1, 3], [1, 2], [1, 2]];

answerExplainationEl.textContent = "Given the ability to remove palindromes in one move, or individual elements in 1 move, return the number of moves to empty a string";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();

    let addendIndecies = twoSum(x[i], y[i]);

    let color = "The target of '" + y[i] + "' can be reached through the summation of elements " + addendIndecies[0] + " and " + addendIndecies[1] + " in the array [" + xCopy + "]";

    let proper = compareArrays(addendIndecies, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* TWO SUM II INPUT ARRAY IS SORTED - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LENGTH OF LONGEST SUBSCRIPT - START - MEDIUM

//Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function (s) {

    let maxString = (s.length ? s[0] : "");

    if (s) {

        let tempString = "";

        for (let i = 0; i < s.length; i++) {

            if (!tempString.includes(s[i])) {

                tempString += s[i];

            } else {

                tempString = tempString.slice(tempString.indexOf(s[i]) + 1) + s[i];

            }

            maxString = (tempString.length > maxString.length ? tempString : maxString);

        }
    }

    return maxString.length;

};

let x = ["abcabcbb", "bbbbb", "pwwkew", "", " ", "au", "dvdf"];
let correct = [3, 1, 3, 0, 1, 2, 3] //"abc, b, wke, none, , "au", "vdf"

answerExplainationEl.textContent = "Given a string s, find the length of the longest subString without repeating characters.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let longSub = lengthOfLongestSubstring(x[i])

    let color = "The longest sub string in '" + x[i] + "' is " + longSub + " characters long";

    let proper = longSub == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* LENGTH OF LONGEST SUBSCRIPT - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MINIUMUM OPERATIONS TO REDUCE X TO ZERO - MEDIUM - START 

// You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost
//  element from the array nums and subtract its value from x. Note that this modifies the array for future operations.

// Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.

var minOperations = function (nums, x) {

    const n = nums.length; //for use in creation of sum
    const sum = nums.reduce((r, n) => r + n, 0); //sum of the contents of nums array
    const target = sum - x; //nums array sum less the supplied target, resulting in a target to work towards

    let current = 0;
    let ans = -1; //return element

    for (let l = 0, r = 0; r < n; r++) { //sliding window, moving r right
        current += nums[r];

        while (current > target) { //as the sum 'current' grows larget than target, l moves right, current loses the left most element addend
            current -= nums[l];
            l++;
        }

        if (current === target) { //'current' sum is equal to the sum of nums less x, makes ans the max of itself or r-l +1
            ans = Math.max(ans, r - l + 1);
        }
    }

    return ans === -1 ? -1 : n - ans; //returns -1 if no selection meets the criteria, or n-ans if it does

};

let x = [[1, 1, 4, 2, 3], [5, 6, 7, 8, 9], [3, 2, 20, 1, 1, 3]];
let y = [5, 4, 10];
let correct = [2, -1, 5];

answerExplainationEl.textContent = "Given an array of integers and a target integer, determine the number of shifts and pops of the integer array that are required to reduce the target integer to zero";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();

    let operationCount = minOperations(x[i], y[i]);

    let color = operationCount !== -1 ? y[i] + " can be reduced to zero with " + operationCount + " operations on the array [" + xCopy + "]" : y[i] + " cannot be reduced to zero with any number of operations on [" + xCopy + "]";

    let proper = operationCount == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* MINIUMUM OPERATIONS TO REDUCE X TO ZERO - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* TRIANGLE - MEDIUM - START 

// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row,
//  you may move to either index i or index i + 1 on the next row.

var minimumTotal = function (triangle) {

    for (let i = triangle.length - 2; i > -1; i--) {

        for (let j = 0; j < triangle[i].length; j++) {

            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);

        }

    }

    return triangle[0][0];

};

let x = [[[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]], [[-10]], [[-1], [2, 3], [1, -1, -3]]];
let correct = [11, -10, -1];

answerExplainationEl.textContent = "Given a triangular array, return the minimum path sum from top to bottom";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();

    let minPath = minimumTotal(x[i]);

    let color = "The minimum path from top to bottom in the triangular array " + displayNestedArray(xCopy) + " is " + minPath;

    let proper = minPath == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* TRIANGLE - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LONGEST STRING CHAIN - MEDIUM - START 

// You are given an array of words where each word consists of lowercase English letters.

// wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere in wordA without changing the order of the
//  other characters to make it equal to wordB.

// For example, "abc" is a predecessor of "abac", while "cba" is not a predecessor of "bcad".
// A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor of word2, word2 is a
//  predecessor of word3, and so on. A single word is trivially a word chain with k == 1.

// Return the length of the longest possible word chain with words chosen from the given list of words.

var longestStrChain = function (words) {

    //sort words by length
    let sorted = words.sort((a, b) => b.length - a.length);

    //populate an array dp the same size as words, filled with ones, ensuring a minimum longest of 1 is returned
    let dp = new Array(sorted.length).fill(1);

    //checks if word2 is a longer word chain of word1
    function longerStrChain(word1, word2) {

        //quick rejection for equal length words
        if (word1.length + 1 != word2.length) {
            return false;
        }

        let first = 0;
        let second = 0;

        while (second < word2.length) {

            if (word1[first] == word2[second]) {
                first++;
            }

            second++;

        }

        return (first == word1.length && second == word2.length);

    }

    //cycle through the elements of the sorted words array for longer word chains
    for (let i = 0; i < sorted.length; i++) {

        for (let j = 0; j < i; j++) {

            //if sorted[j] is a longer word chain of sorted[i], add it to the array
            if (longerStrChain(sorted[i], sorted[j])) {

                dp[i] = Math.max(dp[i], dp[j] + 1);

            }
        }
    }

    return Math.max(...dp);

};

let x = [["a", "b", "ba", "bca", "bda", "bdca"], ["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"], ["abcd", "dbqca"]];
let correct = [4, 5, 1];

answerExplainationEl.textContent = "Given an array of strings, return the length of the longest possible word chain";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();

    let longest = longestStrChain(x[i]);

    let color = "Given the array of strings [" + xCopy + "], the longest word chain is " + longest + " characters long";

    let proper = longest == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* LONGEST STRING CHAIN - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LONGEST PALINDROMIC SUBSTRING - MEDIUM - START 

//Given a string s, return the longest palindromic substring in s.

var longestPalindrome = function (s) {

    let longest = '';

    for (let i = 0; i < s.length; i++) {
        expandCheck(i, i);
        expandCheck(i, i + 1);
    }

    function expandCheck(l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > longest.length) {
                longest = s.slice(l, r + 1);
            }
            l--;
            r++;
        }
    }

    return longest;

};

let x = ["babad", "cbbd", "a", "ac"];
let correct = ["bab", "bb", "a", "a"];

answerExplainationEl.textContent = "Given a string s, return the longest palindromic substring in s.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let longPalindrome = longestPalindrome(x[i]);

    let color = "Given the string '" + x[i] + ",' the longest palindrome is " + longPalindrome;

    let proper = longPalindrome == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* LONGEST PALINDROMIC SUBSTRING - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* BINARY TREE CAMERAS - HARD - START 

// You are given the root of a binary tree. We install cameras on the tree nodes where each camera at a node can monitor its parent, 
// itself, and its immediate children.

// Return the minimum number of cameras needed to monitor all nodes of the tree.

var minCameraCover = function (root) {

    // It has camera : return 0
    // It needs camera : return -1
    // leaves, don't have or need a camera : return 1

    let cameraCount = 0;
    const helper = (root) => {

        //caught at leaves
        if (!root) {
            return 1;
        }

        const left = helper(root.left);
        const right = helper(root.right);

        if (left === -1 || right === -1) {

            cameraCount++;
            return 0;

        } else if (left === 0 || right === 0) {

            return 1;

        } else {

            return -1;

        }
    }
    const out = helper(root);
    return out === -1 ? cameraCount + 1 : cameraCount;

};

let x = [[0, 0, null, 0, 0], [0, 0, null, 0, null, 0, null, null, 0]];
let correct = [1, 2];

answerExplainationEl.textContent = "Given the root of a binary tree, and camera that can watch the parent and children of the node they are attached to, return the number of cameras required to watch all the nodes.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();

    let xRoot = leetCodeBTConstructor(x[i]);

    let cameraCount = minCameraCover(xRoot);

    let color = "At least " + cameraCount + " cameras are required to cover every node of the tree [" + xCopy + "]";

    let proper = cameraCount == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* BINARY TREE CAMERAS - HARD - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SHORT ENCODING OF WORDS - MEDIUM - START 

// A valid encoding of an array of words is any reference string s and array of indices indices such that:

// words.length == indices.length
// The reference string s ends with the '#' character.
// For each index indices[i], the substring of s starting from indices[i] and up to (but not including) the next '#' character is equal to words[i].

// Given an array of words, return the length of the shortest reference string s possible of any valid encoding of words.

var minimumLengthEncoding = function (words) {

    //bring the longest words to the front of the array
    words.sort((a, b) => b.length - a.length);

    //instantiate encoded and indecies with the first, longest, word
    let encoded = words.shift() + "#";
    let indices = [0];

    //loop through words, searching for the current word in the encoded section, adding the word if it isn't in the code, continuing on if it is
    while (words.length > 0) {

        let currentWord = words.shift() + "#";
        let idx = encoded.indexOf(currentWord);

        //if the word isn't in the code, add it
        if (idx == -1) {

            indices.push(encoded.length);
            encoded += (currentWord);

            //if the word is already in the code, simply add the word's address within the code to the indices array
        } else {

            indices.push(idx);

        }

    }

    return encoded.length;

};

let x = [["time", "me", "bell"], ["t"], ["feipyxx", "e"]];
let correct = [10, 2, 10];

answerExplainationEl.textContent = "Given a series of words, return the length of the shortest valid encoding of those words.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();

    let codeLength = minimumLengthEncoding(x[i]);

    let color = "The shortest valid encoding of [" + xCopy + "] is " + codeLength + " characters long";

    let proper = codeLength == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* SHORT ENCODING OF WORDS - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* FURTHEST BUILDING YOU CAN REACH - MEDIUM - START 

// You are given an integer array heights representing the heights of buildings, some bricks, and some ladders.

// You start your journey from building 0 and move to the next building by possibly using bricks or ladders.

// While moving from building i to building i+1 (0-indexed),

// If the current building's height is greater than or equal to the next building's height, you do not need a ladder or bricks.
// If the current building's height is less than the next building's height, you can either use one ladder or (h[i+1] - h[i]) bricks.

// Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally.

var furthestBuilding = function (heights, bricks, ladders) {

    let queue = new Array(ladders).fill(0);
    let i = 1;

    for (i; i < heights.length; i++) {

        let diff = heights[i] - heights[i - 1];

        if (diff > 0) { // positive difference means a ladder or bricks must be expended

            if (diff > queue[0]) { // difference greater than shortest ladder?

                let curr = queue.length - 1;  //find which ladder to replace, starting at longest

                while (curr >= 0 && queue[curr] > diff) curr--; //while current ladder is longer, go down

                bricks -= queue.shift(); // remove shortest ladder and convert to bricks.
                queue.splice(curr, 0, diff); //add new ladder to queue.

            } else {

                bricks -= diff; // if no ladders remain, use bricks

            }

            if (bricks < 0) {

                break; //if bricks are negative, exit loop.

            }
        }
    }

    return i - 1;

};

let x = [[4, 2, 7, 6, 9, 14, 12], [4, 12, 2, 7, 3, 18, 20, 3, 19], [14, 3, 19, 3]]; // buildings
let y = [5, 10, 17]; // bricks
let z = [1, 2, 0]; // ladders
let correct = [4, 7, 3];

answerExplainationEl.textContent = "Given an array of building heights, a number of bricks, and a number of ladders, return how far you can traverse the array of buildings";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();
    let yCopy = y[i];
    let zCopy = z[i];

    let reached = furthestBuilding(x[i], y[i], z[i]);

    let color = "Given the buildings [" + xCopy + "], " + yCopy + " brick" + pluralize(yCopy) + " and " + zCopy + " ladder" + pluralize(zCopy) + ", you can potentially reach building " + reached;

    let proper = reached == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* FURTHEST BUILDING YOU CAN REACH - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* KTH LARGEST ELEMENT IN AN ARRAY - MEDIUM - START 

// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

var findKthLargest = function (nums, k) {

    nums.sort((a, b) => b - a);
    return nums[k - 1];

};

let x = [[3, 2, 1, 5, 6, 4], [3, 2, 3, 1, 2, 4, 5, 5, 6]]; // nums
let y = [2, 4]; // kth element
let correct = [5, 4];

answerExplainationEl.textContent = "Given an array of integers, return the kth largest element";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();

    let kthLargest = findKthLargest(x[i], y[i]);

    let color = "Given the array of integers [" + xCopy + "], the " + y[i] + "th largest element is " + kthLargest;

    let proper = kthLargest == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* KTH LARGEST ELEMENT IN AN ARRAY - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* COURSE SCHEDULE III - HARD - START 

// There are n different online courses numbered from 1 to n. You are given an array courses where courses[i] = [durationi, lastDayi] 
// indicate that the ith course should be taken continuously for durationi days and must be finished before or on lastDayi.

// You will start on the 1st day and you cannot take two or more courses simultaneously.

// Return the maximum number of courses that you can take.

class PriorityQueue {
    constructor() {
        this.queue = [];
        this.totalTime = 0;
    }

    get length() {
        return this.queue.length;
    }

    get maxDuration() {
        return this.queue[this.queue.length - 1] || 0;
    }

    getInsertIndex(duration) {
        let start = 0;
        let end = this.queue.length - 1;
        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            if (this.queue[mid] === duration) return mid;

            if (duration < this.queue[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return start;
    }

    insert(duration) {
        this.totalTime += duration;

        if (!this.queue.length || duration > this.queue[this.queue.length - 1]) {
            this.queue.push(duration);
        } else if (duration < this.queue[0]) {
            this.queue.unshift(duration);
        } else {
            this.queue.splice(this.getInsertIndex(duration), 0, duration);
        }
    }

    swap(duration) {
        if (duration < this.maxDuration) {
            this.dequeue();
            this.insert(duration);
        }
    }

    enqueue([duration, deadline]) {
        this.totalTime + duration > deadline ? this.swap(duration) : this.insert(duration);
    }

    dequeue() {
        const duration = this.queue.pop() || 0;
        this.totalTime -= duration;
    }
}

var scheduleCourse = function (courses) {

    //filter out courses that are too long, then sort the remainder
    courses = courses.filter((a) => a[0] <= a[1]).sort((a, b) => a[1] - b[1]);

    const priorityQueue = new PriorityQueue();

    //attempt to enqueue all courses into the priorityQueue
    for (const course of courses) {
        priorityQueue.enqueue(course);
    }

    return priorityQueue.length;

};

let x = [[[100, 200], [200, 1300], [1000, 1250], [2000, 3200]], [[1, 2]], [[3, 2], [4, 3]], [[1, 19], [2, 2], [1, 17]]]; // courses
let correct = [3, 1, 0, 3];

answerExplainationEl.textContent = "Given lengths and end dates of possible courses that can be taken (that can only be taken one at a time), return the total number of courses that can be taken ";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();

    let courseCount = scheduleCourse(x[i]);

    let color = "Given the courses " + displayNestedArray(xCopy) + ", you can potentially take " + courseCount;

    let proper = courseCount == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* COURSE SCHEDULE III - HARD - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* PARTITIONING INTO MINIMUM NUMBER OF DECI-BINARY NUMBERS - MEDIUM - START 

// A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100
//  are deci-binary, while 112 and 3001 are not.

// Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that 
// they sum up to n.

// I found this solution online. It simply converts the string into an array, then it returns the highest number in the array.
// This works because of the nature of deci-binary numbers, in that it will take a minium of one deci-binary number to remove each
// level of integer present in the given number. i.e. 2222222222222 takes 2 deci-binary numbers to remove, so does 2222002000220.
// 455234662349 takes 9 because of the sole 9 at the back. 
// 455234662349 = 111111111111 + 111111111111 + 111011110111 + 111001110011 + 11000110001 + 110001 + 1 + 1 + 1 (9 operations)
//                344123551238   233012440127   122001330016   011000220005   00000110004   000003   2   1   0
// Therefore, the highest digit in a number determines the number of deci-binary digits it takes to sum to that number
var minPartitions = (n => Math.max(...n));

let x = ["32", "82734", "27346209830709182346"];
let correct = [3, 8, 9];

answerExplainationEl.textContent = " ";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let deciBinaryCount = minPartitions(x[i]);

    let xCopy = x[i];

    let color = "The number " + xCopy + ", is the sum of a minimum of " + deciBinaryCount + " deci-binary numbers";

    let proper = deciBinaryCount == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* PARTITIONING INTO MINIMUM NUMBER OF DECI-BINARY NUMBERS - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MINIMUM DELETIONS TO PRODUCE UNIQUE FREQUENCY STRINGS - MEDIUM - START 

// A string s is called good if there are no two different characters in s that have the same frequency.

// Given a string s, return the minimum number of characters you need to delete to make s good.

// The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab",
//  the frequency of 'a' is 2, while the frequency of 'b' is 1.

var minDeletions = function (s) {

    //create a dictionary with each character acting as the key for the number of occurrences of that character; 
    let dict = {};

    //populate dict
    for (let i = 0; i < s.length; i++) {
        if (dict[s[i]]) {
            dict[s[i]]++;
        } else {
            dict[s[i]] = 1;
        }
    }

    // occurences works as an index of values while removals keeps track of the deletions required to fill occurences with unique values
    let occurences = [];
    let removals = 0;

    for (key in dict) {

        //if the character count already exists in occurences, or the character count hasn't already been worn down to zero, decrement the count. 
        while (occurences.indexOf(dict[key]) != -1 && dict[key] != 0) {
            dict[key]--;
            removals++;
        }

        // once the character count is unique, or zero, add it to the occurences index
        occurences.push(dict[key]);

    }

    return removals;

};

let x = ["aab", "aaabbbcc", "ceabaacb"];
let correct = [0, 2, 2];

answerExplainationEl.textContent = " Given a string of characters, return the number of character deletions required to have a unique number of each character in the string";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let deletions = minDeletions(x[i]);

    let color = "The string " + x[i] + " requires " + deletions + " deletions to create a good string";

    let proper = deletions == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* MINIMUM DELETIONS TO PRODUCE UNIQUE FREQUENCY STRINGS - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* QUEUE RECONSTRUCTION BY HEIGHT - MEDIUM - START 

// You are given an array of people, people, which are the attributes of some people in a queue (not necessarily in order).
// Each people[i] = [hi, ki] represents the ith person of height hi with exactly ki other people in front who have a height greater than or equal to hi.

// Reconstruct and return the queue that is represented by the input array people. The returned queue should be formatted as an array queue,
//  where queue[j] = [hj, kj] is the attributes of the jth person in the queue (queue[0] is the person at the front of the queue).

var reconstructQueue = function (people) {

    //sort people by num ahead in the case they are the same height, otherwise, sort by height
    people.sort((a, b) => b[0] !== a[0] ? b[0] - a[0] : a[1] - b[1]);

    const queue = [];

    for (let i = 0; i < people.length; i++) {

        //splice people into the queue based on the number of those ahead
        queue.splice(people[i][1], 0, people[i]);

    }

    return queue;

};

let x = [[[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]], [[6, 0], [5, 0], [4, 0], [3, 2], [2, 2], [1, 4]]];
let correct = [[[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]], [[4, 0], [5, 0], [2, 2], [3, 2], [1, 4], [6, 0]]];

answerExplainationEl.textContent = "Given an array of people represented by arrays composed of the person's height and the number of individuals of the same height or taller in front of them, return a properly sorted array";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();

    let reconstructed = reconstructQueue(x[i]);

    let color = "The array " + displayNestedArray(xCopy) + " is properly reconstruced as " + displayNestedArray(reconstructed);

    let proper = compareNestedArrays(reconstructed, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* QUEUE RECONSTRUCTION BY HEIGHT - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MINIMUM MOVES TO EQUAL ARRAY ELEMENTS II - MEDIUM - START

// Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

// In one move, you can increment or decrement an element of the array by 1.

// Test cases are designed so that the answer will fit in a 32-bit integer.

var minMoves2 = function (nums) {

    // sort the array
    nums.sort((a, b) => a - b);

    //placeholder value for median and median index
    let median, mIdx;

    //find the median
    if (nums.length % 2 === 0) {
        mIdx = nums.length / 2;
        median = (nums[mIdx] + nums[mIdx - 1]) / 2;
    } else {
        mIdx = (nums.length + 1) / 2;
        median = nums[mIdx - 1];
    }

    //return the sum of the differences between the median and the individual elements of nums
    return nums.reduce((diffSum, num) => diffSum + Math.abs(median - num), 0);

};

let x = [[1, 2, 3], [1, 10, 2, 9], [1, 0, 0, 8, 6]];
let correct = [2, 16, 14];

answerExplainationEl.textContent = "Given an array of integers and the ability to increment or decrement each element by one, how many of those steps would it take to reach an equal value for each element";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();

    let moves = minMoves2(x[i]);

    let color = "The array [" + xCopy + "] can be brought to equalibrium in " + moves + " moves";

    let proper = moves == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* MINIMUM MOVES TO EQUAL ARRAY ELEMENTS II - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MAMIMUM UNITS ON A TRUCK - EASY - START 

// You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

// numberOfBoxesi is the number of boxes of type i.
// numberOfUnitsPerBoxi is the number of units in each box of the type i.

// You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

// Return the maximum total number of units that can be put on the truck.

var maximumUnits = function (boxTypes, truckSize) {

    //sort by items per box descending
    boxTypes.sort((a, b) => b[1] - a[1]);

    //return element, items packed
    let packed = 0;

    //loop so long as there is space on the truck, and boxes that can be packed
    while (truckSize > 0 && boxTypes.length > 0) {

        //pack a box
        let cbc = boxTypes[0][1]; //currentBoxCapacity
        boxTypes[0][0]--;

        //if there are no more boxes of type 0, remove that type from the array, next largest box moves up
        if (boxTypes[0][0] === 0) {
            boxTypes.shift();
        }

        //load the box on the truck
        packed += cbc;
        truckSize--;

    }

    return packed;

};

let x = [[[1, 3], [2, 2], [3, 1]], [[5, 10], [2, 5], [4, 7], [3, 9]]]; // box quantity, capacity
//[[1,2],[2,2],[3,1]] means there is 1 box of type 0, type 0 boxes can hold 3 items each
//                          there are 2 boxes of type 1, type 1 boxes can hold 2 items each
//                          there are 3 boxes of type 2, type 2 boxes can hold 1 item each
let y = [4, 10]; // box capacity per truck
let correct = [8, 91]

answerExplainationEl.textContent = "Given an array of boxes, boxTypes, where boxTypes[i]=[number of box i, number of units per box i], and a truck capacity, return the total number of units that can be moved.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();

    console.log("xCopy: ", xCopy);

    let unitsMoved = maximumUnits(x[i], y[i]);

    let color = "With the available boxes " + displayNestedArray(xCopy) + ", and a truck that can hold " + y[i] + " boxes, you can move " + unitsMoved + " items";

    let proper = unitsMoved == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* MAMIMUM UNITS ON A TRUCK - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LONGEST CONSECUTIVE - MEDIUM - START 

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.



var longestConsecutive = function (nums) {

    //quick return for empty arrays
    if (nums.length === 0) {
        return 0
    }

    //sort and remove duplicates
    nums.sort((a, b) => b - a);
    let numSet = new Set(nums);
    nums = Array.from(numSet);

    //loop vars
    let lastNum = nums.pop();
    let seqLen = 1;
    let maxSeqLen = 1;

    //loop through once for and find the longest consecutive sequence
    while (nums.length > 0) {

        let currentNum = nums.pop();

        seqLen = currentNum === lastNum + 1 ? seqLen + 1 : 1;

        maxSeqLen = seqLen > maxSeqLen ? seqLen : maxSeqLen;

        lastNum = currentNum;

    }

    return maxSeqLen;

};

let x = [[100, 4, 200, 1, 3, 2], [0, 3, 7, 2, 5, 8, 4, 6, 0, 1], [], [1, 2, 0, 1]];
let correct = [4, 9, 0, 3]

answerExplainationEl.textContent = "Given an unsorted array of numbers, return the length of the longest consecutive sequence of numbers";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();

    console.log("xCopy: ", xCopy);

    let longestCon = longestConsecutive(x[i]);

    let color = "Given the array [" + xCopy + "], the longest consecutive sequence is " + longestCon + " characters long";

    let proper = longestCon == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* LONGEST CONSECUTIVE - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* FIBONACCI NUMBER - EASY - START 

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the
// sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

// Given n, calculate F(n).

// Constraints:
// 0 <= n <= 30

var fib = function (n) {

    const Fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040]

    return Fibonacci[n];

};

let x = [2, 3, 4];
let correct = [1, 2, 3]

answerExplainationEl.textContent = "Given a number, return the corresponding number in a Fibonacci sequence.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let fibonacci = fib(x[i]);

    let color = "The " + suffix(x[i]) + " number in a Fibonacci sequence is " + fibonacci;

    let proper = fibonacci == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}

/* FIBONACCI NUMBER - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* DETECT CAPITAL - EASY - START 

//We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".

// Given a string word, return true if the usage of capitals in it is right.

var detectCapitalUse = function (word) {

    if (word.length == 1) { //quick return for single letter words
        return true;
    }

    let capsMax = 90; //stores the upper range of capital characters

    let zero = word.charCodeAt(0); //finds the code for the first character of the word

    let begin = zero <= capsMax; //checking the first character of the word, if a capital, returns true, else, false

    let sum = begin ? 1 : 0;

    for (let i = 1; i < word.length; i++) {

        let currentCharCode = word.charCodeAt(i);
        sum += currentCharCode <= capsMax ? 1 : 0;

    }

    if (begin == true) {
        return (sum === 1 || sum === word.length);
    } else {
        return (sum === 0)
    }

};

let x = ["USA", "FlaG", "uSA", "UsA", "Usa", "A", "AA", "Aa", "aA"];
let correct = [true, false, false, false, true, true, true, true, false];
    
answerExplainationEl.textContent = "Given a word, return wether the word makes proper use of capital letters";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let properCapitals = detectCapitalUse(x[i]);

    let color = properCapitals !== false ? x[i] + " is in accordance with capitalization rules" : x[i] + " doesn't follow capitalization rules";

    let proper = properCapitals == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);
}

/* DETECT CAPITAL - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* DELETE COLUMNS TO MAKE SORTED - EASY - START 

// You are given an array of n strings strs, all of the same length.

// The strings can be arranged such that there is one on each line, making a grid. For example, strs = ["abc", "bce", "cae"] can be arranged as:

// abc
// bce
// cae

// You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted while column 1 ('b', 'c', 'a') is not, so you would delete column 1.

// Return the number of columns that you will delete.

var minDeletionSize = function(strs) {
    
    let deletions = 0;

    for (let i = 0; i < strs[0].length;i++){

        let last = "";

        for(let j = 0; j < strs.length;j++){

            if (last == ""){

                last = strs[j][i];
                
            } else {

                if (last > strs[j][i]){
                    deletions += 1;
                    break;
                }

                last = strs[j][i];

            }            
        }
    }

    return deletions;

};

let x = [["cba","daf","ghi"], ["a","b"], ["zyx","wvu","tsr"]];
let correct = [1,0,3];
    
answerExplainationEl.textContent = "Given an array of strings of the same length and arranged like a grid, return the number of columns of the grid that are not lexigraphically sorted and have to be deleted";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let deletedColumns = minDeletionSize(x[i]);

    let color = deletedColumns > 0 ? "you have to delete " + deletedColumns + " to have all the columns sorted lexigraphically" : "All columns are sorted lexigraphically, none have to be deleted";

    let proper = deletedColumns == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);
}

/* DELETE COLUMNS TO MAKE SORTED - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* WORD PATTERN - EASY - START 

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

var wordPattern = function(pattern, s) {

    let sArr = s.split(" ");

    if (pattern.length != sArr.length) return false; //quick eject for mismatch of pattern and sentence length

    let dict = {};

    let patternIdx = 0;
    let generatedPattern = [];
    let outOfKeys = false;
    let patternSet = Array.from(new Set(pattern.split("")));

    for (let i = 0; i < pattern.length; i++){
        
        if (!dict[sArr[i]]){

            if(outOfKeys){
                return false;
            }

            dict[sArr[i]] = patternSet[patternIdx];

            if(patternIdx + 1 < patternSet.length){
                patternIdx++;
            } else {
                outOfKeys = true;
            }
            
        }

        generatedPattern.push(dict[sArr[i]])

        if (pattern[i] != generatedPattern[i]) return false;

    }

    return true;
    
};

let x = ["abba", "abba", "aaaa","e"];
let y = ["dog cat cat dog", "dog cat cat fish", "dog cat cat dog","eukera"];
let correct = [true, false, false, true];
    
answerExplainationEl.textContent = "Given a word pattern and a sentence, determine if the sentence fits the word pattern";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let matched = wordPattern(x[i],y[i]);

    let color = matched ? "The sentence "+ y[i] +" matches the pattern " + x[i] : "The sentence "+ y[i] +" does not match the pattern " + x[i];

    let proper = matched == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);
}

/* WORD PATTERN - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MINIMUM ROUNDS TO COMPLETE ALL TASKS - MEDIUM - START 

//You are given a 0-indexed integer array tasks, where tasks[i] represents the difficulty level of a task. In each round, you can complete either 
//2 or 3 tasks of the same difficulty level.

//Return the minimum rounds required to complete all the tasks, or -1 if it is not possible to complete all the tasks.

var minimumRounds = function (tasks) {

    let reducer = function (num){
        
        let reductions = 0;

        while (num > 0){

            if (num <= 3){

                reductions ++;
                break;

            } else {

                num-=3; //interestingly, the 2 or 3 requirement doesn't really matter too much here. 
                reductions ++; //(e.g. 4 - 3 = 1, 1 <= 3, add a reduction and break, 2 reductions, same as reducing by 2 twice)
                // or 2 - 3 = -1, +1 to reduction, breaks the loop, same as 2 - 2, 1 reduction = 1 reduction

            }

        }

        return reductions;

    }

    if (tasks.length < 2) { //quick eject for single item task lists
        return -1;
    }

    let dict = {};
    let sum = 0;

    for (let i = 0; i < tasks.length; i++) { //converts the tasks array into a object

        if (!dict[tasks[i]]) {

            dict[tasks[i]] = 1;

        } else {

            dict[tasks[i]] += 1;

        }
    }

    for (key in dict){ 

        if (dict[key] < 2){ 
            return -1; //semi quick eject for tasks with single occurrence tasks
        }

        sum += reducer(dict[key]); //finds the number of 2 or 3 reductions to reduce each group of tasks to zero

    }

    return sum;


};

let x = [[2, 2, 3, 3, 2, 4, 4, 4, 4, 4], [2, 3, 3]];
let correct = [4, -1];

answerExplainationEl.textContent = "Given a series of tasks of varying difficulty, and the ability to complete 2 or 3 tasks of the same difficulty in the same round, return the number of rounds it would take to complete the given list of tasks, or -1 if you cannot complete the given list of tasks, given the 2 to 3 at a time restriction";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let rounds = minimumRounds(x[i]);

    let color = rounds != -1 ? "The given tasks can be completed in " + rounds + " rounds" : "The given tasks cannot be completed";

    let proper = rounds == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);
}

/* MINIMUM ROUNDS TO COMPLETE ALL TASKS - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MINIMUM NUMBER OF ARROWS TO BURST BALLOONS - MEDIUM - START 

// There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points
// where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the
// exact y-coordinates of the balloons.

// Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is
// burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up
// infinitely, bursting any balloons in its path.

// Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

var findMinArrowShots = function(points) {

    points.sort((a,b) => a[1] - b[1]); //sort points to line them up by location

    let count = 1; //number of arrows
    let pos = points[0][1]; //starting point (max of first balloon)

    for(let i=1; i < points.length; i++){

        if (pos >= points[i][0]) continue; //if the max of the last balloon is greater than the min of the next, continue
                                           //otherwise
        count++;                           //add an arrow
        pos = points[i][1];                //move on to the next balloon

    }

    return count;

};

let x = [[[10,16],[2,8],[1,6],[7,12]],[[1,2],[3,4],[5,6],[7,8]], [[1,2],[2,3],[3,4],[4,5]]];
let correct = [2,4,2];

answerExplainationEl.textContent = "Given a series of overlapping balloons, what is the minimum number of arrows required to burst all the balloons";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let miniumumArrows = findMinArrowShots(x[i]);

    let color = "It takes at least " + miniumumArrows + " arrows to burst all the balloons";

    let proper = miniumumArrows == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);
}

/* MINIMUM NUMBER OF ARROWS TO BURST BALLOONS - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MAXIMUM ICE CREAM BARS - MEDIUM - START 

// It is a sweltering summer day, and a boy wants to buy some ice cream bars.

// At the store, there are n ice cream bars. You are given an array costs of length n, where costs[i] is the price of the ith ice cream bar in
// coins. The boy initially has coins coins to spend, and he wants to buy as many ice cream bars as possible. 

// Return the maximum number of ice cream bars the boy can buy with coins coins.

// Note: The boy can buy the ice cream bars in any order.

var maxIceCream = function(costs, coins) {

    let sortedCosts = costs.sort((a,b) => b-a);
    let bars = 0;

    while (coins > 0 && sortedCosts.length > 0){

        let currentBar = sortedCosts.pop();

        coins -= currentBar;

        if (coins>=0){
            bars++;
        }

    }
    
    return bars;

};

let x = [[1,3,2,4,1], [10,6,8,7,7,8], [1,6,3,1,2,5]];
let y = [7,5,20]
let correct = [4,0,6];

answerExplainationEl.textContent = "Given an array of ice cream bars by price, and a number of coins held by a boy, return the number of ice cream bars that a boy can purchase";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let purchased = maxIceCream(x[i], y[i]);

    let color = purchased > 0 ? "The boy can purchase " + purchased + " ice cream bars" : "The boy cannot purchase any ice cream bars";

    let proper = purchased == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);
}

/* MAXIMUM ICE CREAM BARS - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MAX POINTS ON A LINE - HARD - START

// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same
// straight line.

var maxPoints = function(points) {
    
    if (points.length === 1) return 1; //quick ejection for single point data sets
    
    const slopes = {}; //an object to contain the equations of each line between two points
    let dx; //delta x
    let dy; //delta y
    let xbase; //the x coordinate of the starting point
    let ybase; //the y coordinate of the starting point
    let xref; //the x coordinate of the ending point
    let yref; //the y coordinate of the ending point
    let key; //constructed equations for the slopes obj
    
    for(let i = 0; i < points.length; i++) {

        [xbase, ybase] = points[i]; //extracting the coords of the starting point
        
        for(let j = i + 1; j < points.length; j++) {                       
            
            [xref, yref] = points[j]; //extracting the coords of the ending point
            
            if (xref === xbase) {
                key = `x = ${xref}`; //quick creation of a vertical line equation
                
            } else {

                dx = xref - xbase; //change in x
                dy = yref - ybase; //change in y
                
                let m = dy / dx; //slope
                let b = yref - m * xref; // x axis intercept
                
                m = m.toFixed(4); //convert to string, 4 digits long
                b = b.toFixed(4);
                
                key = `y = ${m}x + ${b}`;  //construct equation

            }
            
            slopes[key] || (slopes[key] = 0); //add equation to slopes obj if not present
            slopes[key]++; //add to the number of times that equation has been seen
        }
    }
    
    const maxLinear = Math.max(...Object.values(slopes)); //capture the number of times that the most common equation appears.
    
    if (maxLinear === 2) { //if the equation only shows up twice in slopes, and is found to be the max, 2 is correct
        return 2;
    }
    
    for(let i = 1; i <= 300; i++) { //otherwise, we have to remove duplicates
        if (i * (i - 1) / 2 === maxLinear) {
            return i;
        }
    }
    
    return 0; //final catch for no max linear connections

};

let x = [[[1,1],[2,2],[3,3]],[[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]];
let correct = [3,4];

answerExplainationEl.textContent = "Given an array of x y coordinates of points on a graph, return the highest number of points that lie on the same line";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let pointCount = maxPoints(x[i]);

    let color = "There are at most " + pointCount + " points that lie on the same line";

    let proper = pointCount == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);
}

/* MAX POINTS ON A LINE - HARD - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* GAS STATION - MEDIUM - START 

// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey
// with an empty tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise
// return -1. If there exists a solution, it is guaranteed to be unique

var canCompleteCircuit = function(gas, cost) {
    
    let origin = 0;
    let tank = 0;
    let total = 0;

    for (let i = 0; i < gas.length; i++) {

        tank += gas[i] - cost[i];
        total += gas[i] - cost[i];

        if (tank < 0) {
            origin = i + 1;
            tank = 0;
        }

    }

    return (total >= 0) ? origin : -1;

};

let x = [[1,2,3,4,5], [2,3,4],[1,2,3,4,5]];
let y = [[3,4,5,1,2],[3,4,3],[3,4,5,1,2]]
let correct = [3,-1, 3];

answerExplainationEl.textContent = "Given a series of gas stations with a certain amount of gas, set a certain distance apart, determine if a cycle through all gas stations can be completed";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let origin = canCompleteCircuit(x[i], y[i]);

    let color = (origin > -1) ? "It is possible to start a circuit of the stations if you start at station " + origin : "It is not possible to complete a circuit of the stations";

    let proper = (origin == correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* GAS STATION - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* BINARY TREE PREORDER TRAVERSAL - EASY - START 

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

let prepFunc = function(arr){

    if(!arr[0]){
        return [];
    }

    return bstConstructor(arr);

}

var preorderTraversal = function(root) {

    let dfsPreOrder = function(root){ //depth first search - pre order

        let data = [];

        function traverse (node){
            if(!node) return;
            data.push(node.val);
            traverse(node.left);
            traverse(node.right);
        }
        traverse(root);
        return data;
    }

    return dfsPreOrder(root);
    
};

let x = [[1,null,2,3],[],[1]];
let correct = [[1,2,3],[],[1]];

answerExplainationEl.textContent = "Given the root of a binary tree, return the preorder traversal of its nodes' values.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let dfsTree = prepFunc(x[i]);

    let dfsData = preorderTraversal(dfsTree);

    let color = "the value of the nodes in the tree are [" + dfsData + "]";

    let proper = compareArrays(dfsData, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* BINARY TREE PREORDER TRAVERSAL - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SAME TREE - EASY - START 

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

var isSameTree = function (p, q) {

    let check = true;

    let iterate = (node1,node2) => {
        if(!node1 && !node2) return;

        if(node1?.val != node2?.val) {
            check = false;
            return;
        }
        iterate(node1?.left,node2?.left)
        iterate(node1?.right,node2?.right)
    }

    iterate(p,q)
    return check;
    
};

let x = [[1, 2, 3], [1, 2],[],[],[0]];
let y = [[1, 2, 3], [1, null, 2],[0],[],[1]];
let correct = [true, false,false,true,false];

answerExplainationEl.textContent = "Given the roots of two binary tree, determine if they are equal to each other";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let treeP = leetCodeBTConstructor(x[i]);
    let treeQ = leetCodeBTConstructor(y[i]);

    let equalTrees = isSameTree(treeP, treeQ);

    let color = equalTrees ? "The trees are equal" : "The trees are not equal";

    let proper = equalTrees == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* SAME TREE - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MINIMUM TIME TO COLLECT ALL APPLES IN A TREE - MEDIUM - START 

// Given an undirected tree consisting of n vertices numbered from 0 to n-1, which has some apples in their vertices. You spend 1 second to walk
// over one edge of the tree. Return the minimum time in seconds you have to spend to collect all apples in the tree, starting at vertex 0 and coming
// back to this vertex.

// The edges of the undirected tree are given in the array edges, where edges[i] = [ai, bi] means that exists an edge connecting the vertices
// ai and bi. Additionally, there is a boolean array hasApple, where hasApple[i] = true means that vertex i has an apple; otherwise, it does
// not have any apple.

var minTime = function(n, edges, hasApple) {
   
    let collected = 0;  //return variable

    if(hasApple.indexOf(true) != -1){ //quick ejection of appleless trees

        let adj = new Array(n); //creating an adjacency array

        for (let i = 0; i < n; i++) { //populating the adj array with empty arrays
            adj[i] = [];
        }

        for (let edge of edges) {  //filling those empty arrays
            adj[edge[0]].push(edge[1]);
            adj[edge[1]].push(edge[0]);
        }

        collected = dfs(-1, 0, adj, hasApple);

    }

    return collected;

};

let dfs = function (prev, curr, adj, hasApple) {

    let ans = 0;

    for (let i of adj[curr]) {

        if (i !== prev) {

            let res = dfs(curr, i, adj, hasApple);

            if (res > 0 || hasApple[i]) {

                ans += (res + 2);

            }
        }
    }

    return ans;

}

let x = [7,7,7];
let y = [[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]]];
let z = [[false,false,true,false,true,true,false], [false,false,true,false,false,true,false],[false,false,false,false,false,false,false]];
let correct = [8,6,0];

answerExplainationEl.textContent = "Given a series of apple trees with n spots of apples to form, edges that connect them that take a minute to traverse, and a list of which of those n spots have apples, return the length of time to collect all apples";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let collectionTime = minTime(x[i],y[i],z[i]);

    let color = collectionTime > 0 ? "It will take " + collectionTime + " seconds to collect all the apples on tree " + (i + 1) : "There are no apples to pick on tree " + (i+1);

    let proper = collectionTime == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* MINIMUM TIME TO COLLECT ALL APPLES IN A TREE - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* NUMBER OF NODES IN THE SUB-TREE WITH THE SAME LABEL - MEDIUM - START 

// You are given a tree (i.e. a connected, undirected graph that has no cycles) consisting of n nodes numbered from 0 to n - 1 and exactly n - 1
// edges. The root of the tree is the node 0, and each node of the tree has a label which is a lower-case character given in the string labels (i.e.
// The node with the number i has the label labels[i]).

// The edges array is given on the form edges[i] = [ai, bi], which means there is an edge between nodes ai and bi in the tree.

// Return an array of size n where ans[i] is the number of nodes in the subtree of the ith node which have the same label as node i.

// A subtree of a tree T is the tree consisting of a node in T and all of its descendant nodes.

var countSubTrees = function (n, edges, labels) {

    /*let subTreeConstructor = function (n, nodes) { //Leetcode's premise does not match what they were actually looking for so, while this works for what they asked for, it doesn't work for what they actually wanted

        let helper = function (root) { //creating the subtrees (not really, just an array of the contents of the subtree)

            let helperQueue = [root];
            let subTree = []

            while (helperQueue.length > 0) {
                if (nodes[helperQueue[0]].children.length > 0) {
                    helperQueue = helperQueue.concat(nodes[helperQueue[0]].children)
                }
                subTree.push(nodes[helperQueue[0]].label);
                helperQueue.shift();
            }

            return subTree;

        }

        let trees = [];

        for (let i = 0; i < n; i++) {//cycle through the nodes, putting each through the process of creating a subTree

            let tree = [];

            tree = tree.concat(helper(i));

            trees.push(tree);

        }

        return trees;

    }

    let nodes = { label: "", children: [] };

    for (let i = 0; i < n; i++) { //create an object that is the node, key is the number of the node, label the letter, children the child node numbers

        let subs = [];

        for (let j = 0; j < edges.length; j++) {
            if (edges[j][0] == i) subs.push(edges[j][1])
        }

        nodes[i] = { label: labels[i], children: subs };

    }

    let occurences = new Array(n).fill(1); //placeholder for eventual return
    let subTrees = subTreeConstructor(n, nodes); //constructing arrays of the contents of the subtrees of each node

    for (let i = 0; i < occurences.length; i++) { //filling the placeholder with the number of occurences in each subtree of the root nodes' label

        if (subTrees[i].length !== 1) {

            for (let j = 1; j <= subTrees[i].length; j++) {

                if (subTrees[i][j] == subTrees[i][0]) {
                    occurences[i] += 1;
                }
            }
        }
    }

    return occurences;

let occurences = new Array(n);  //output array

    // creating adjacency list
    let adj = new Array(n);
    for (let i = 0; i < n; i++) {
        adj[i] = [];
    }
    for (let x of edges) {
        adj[x[0]].push(x[1]);
        adj[x[1]].push(x[0]);
    }

    dfs(-1, 0, adj, labels,occurences);
    return occurences;
}

function dfs(prev, curr, adj, labels,occurences) {
    const ans = new Array(26).fill(0);

    for (let x of adj[curr]) {
        if (prev !== x) {
        // array return by the children node
            const res = dfs(curr, x, adj, labels, occurences);  
        // combining the frequencies of left and right subtrees into one array
            for (let i = 0; i < 26; i++)  
                ans[i] += res[i];
        }
    }
    // incrementing the freq of curr node label and storing in output array
    occurences[curr] = ++ans[labels.charCodeAt(curr) - 'a'.charCodeAt(0)];
    return ans;

};

let x = [7, 4, 5, 7, 4];
let y = [[[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], [[0, 1], [1, 2], [0, 3]], [[0, 1], [0, 2], [1, 3], [0, 4]], [[0, 1], [1, 2], [2, 3], [2, 4], [3, 5], [0, 6]], [[0, 2], [0, 3], [1, 2]]];
let z = ["abaedcd", "bbbb", "aabab", "cdcecff", "aeed"];
let correct = [[2, 1, 1, 1, 1, 1, 1], [4, 2, 1, 1], [3, 2, 1, 1, 1], [3, 1, 2, 1, 1, 1, 1], [1, 1, 2, 1]];

answerExplainationEl.textContent = "Given a series of apple trees with n spots of apples to form, edges that connect them that take a minute to traverse, and a list of which of those n spots have apples, return the length of time to collect all apples";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let sameLabels = countSubTrees(x[i], y[i], z[i]);

    let color = "Given the tree of nodes with the labels '" + z[i] + "', the number of sub trees with the same label as the root of those sub trees is [" + sameLabels + "]";

    let proper = compareArrays(sameLabels, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* NUMBER OF NODES IN THE SUB-TREE WITH THE SAME LABEL - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LONGEST PATH WITH DIFFERENT ADJACENT CHARACTERS - HARD - START 

// You are given a tree (i.e. a connected, undirected graph that has no cycles) rooted at node 0 consisting of n nodes numbered from 0 to
// n - 1. The tree is represented by a 0-indexed array parent of size n, where parent[i] is the parent of node i. Since node 0 is the root,
// parent[0] == -1.

// You are also given a string s of length n, where s[i] is the character assigned to node i.

// Return the length of the longest path in the tree such that no pair of adjacent nodes on the path have the same character assigned to them.

var longestPath = function(parent, s) {

    //create an adjacency list
    let adjacent = new Array(parent.length) //create an array with the same number of elements as there are nodes

    for (let i = 0; i < parent.length; i++) {

        adjacent[i] = new Array() //fill that array with empty arrays

    }

    for (let i = 1; i < parent.length; i++) {

        adjacent[parent[i]].push(i) //fill those arrays with the locations of adjacent nodes

    }

    s = s.split(""); //convert s to an array
    let longestPath = 0; //comparator, return value

    let dfs = function(node) { 

        let longest1 = 0;
        let longest2 = 0;

        for (let adj of adjacent[node]) {

            let lengthPath = dfs(adj);

            if (s[node] == s[adj]) continue; //if the adjacent node has the same character, move on

            if (longest1 < lengthPath) { 

                longest2 = longest1;
                longest1 = lengthPath;

            } else if (longest2 < lengthPath) {

                longest2 = lengthPath;

            }
        }

        longestPath = Math.max(longestPath, longest1 + longest2 + 1); 

        return longest1 + 1;

    }

    dfs(0);
    return longestPath;
};

let x = [[-1,0,0,1,1,2], [-1,0,0,0]];
let y = ["abacbe", "aabc"];
let correct = [3,3];

answerExplainationEl.textContent = "Given a tree of nodes of different characters, return the length of the longest path through those nodes in which each adjacent node has a different character";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let longest = longestPath(x[i], y[i]);

    let color = "The longest path through the given tree contains " + longest + " nodes";

    let proper = longest == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* LONGEST PATH WITH DIFFERENT ADJACENT CHARACTERS - HARD - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* INSERT INTERVAL - MEDIUM - START 

// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the
// ith interval and intervals is sorted in ascending order by start i. You are also given an interval newInterval = [start, end] that
// represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any
// overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

var insert = function (intervals, newInterval) {
    
    //Time limit exceeded - START
    // newInterval = [newInterval]; //convert to nested array for future use

    // if (intervals.length == 0) { //quick catch for empty intervals
    //     return newInterval;
    // }

    // let insertIdx; //store the insert index for the purpose of curing the final intervals

    // for (let i = 0; i < intervals.length; i++) { //INSERTION

    //     if (newInterval[0][0] <= intervals[i][0]) { // new interval insert location found

    //         if (newInterval[0][0] == intervals[i][0]) { //if newInterval is equal to an existing interval, or contained within an existing interval no need to insert it;
    //             if (newInterval[0][1] <= intervals[i][1]) {
    //                 return intervals;
    //             }
    //         }

    //         insertIdx = i; //update insert index for curing purposes

    //         if (i == 0) {

    //             intervals.unshift(newInterval[0]); //if newInterval is less than the lowest interval of intervals, insert at the front

    //         } else {

    //             let preSlice = intervals.slice(0, i); //if the spot for newInterval is within intervals, not before or at the end, slice intervals and reassemble
    //             let postSlice = intervals.slice(i);

    //             intervals = preSlice.concat(newInterval).concat(postSlice);

    //         }

    //         break;

    //     } else if (i == intervals.length - 1) { //final index, no proper insert location found, add to end
    //         intervals.push(newInterval[0]);
    //         insertIdx = intervals.length - 1;
    //         break;
    //     }
    // }

    // if (insertIdx == intervals.length - 1) { //insert @ end

    //     if (intervals[intervals.length - 2][1] >= intervals[intervals.length - 1][0]) { //if the end and second to end overlap, combine them

    //         if (intervals[intervals.length - 2][1] < intervals[intervals.length - 1][1]) { // if the end of the second to end is less than the end of the end

    //             intervals[intervals.length - 2][1] = intervals[intervals.length - 1][1]; // replace the end of the second to end with the end of the end

    //         }
    //         intervals.pop();
    //     }


    // } else if (insertIdx == 0) { //insert @ start
    //     while (true) {
    //         if (intervals.length == 1) break;
    //         if (intervals[0][1] >= intervals[1][0]) {
    //             intervals[1][0] = intervals[0][0];
    //             if (intervals[0][1] > intervals[1][1]) {
    //                 intervals[1][1] = [intervals[0][1]];
    //             }
    //             intervals.shift();

    //         } else {
    //             break;
    //         }
    //     }
    // } else { //insert within

    //     //eliminate pre insert location issues
    //     if (intervals[insertIdx - 1][1] >= intervals[insertIdx][0]) { //if the end of the preceding interval is greater than or equal to the start of the inserted interval

    //         if (intervals[insertIdx - 1][1] < intervals[insertIdx][1]) { //if the end of the preceding interval is less than the start of the inserted interval
    //             intervals[insertIdx - 1][1] = intervals[insertIdx][1];
    //         }

    //         intervals = intervals.slice(0, insertIdx).concat(intervals.slice(insertIdx + 1));
    //         insertIdx--;
    //     }

    //     //eliminate post insert location issues
    //     while (true) {

    //         if (intervals.length == 1 || insertIdx == intervals.length-1) break; //catch of single interval intervals, removal of all post intervals

    //         if (intervals[insertIdx][1] >= intervals[insertIdx + 1][0]) { //if the end of the current item is greater than or equal to the start of the next

    //             intervals[insertIdx + 1][0] = intervals[insertIdx][0]; //change the start of the next to be the start of the current item

    //             if (intervals[insertIdx][1] > intervals[insertIdx + 1][1]) {  //if the end of the current item greater than the end of the next

    //                 intervals[insertIdx + 1][1] = [intervals[insertIdx][1]]; //change the end of the next into the end of the current

    //             }

    //             intervals = intervals.slice(0, insertIdx).concat(intervals.slice(insertIdx + 1));

    //         } else {
    //             break;
    //         }
    //     }


    // }
    // return intervals;

    //Time limit exceeded - END

    let newArr = [...intervals] //copying the intervals array
    newArr.push(newInterval) //adding the new interval
    newArr.sort((a,b)=>a[0]-b[0]) //sorting the array by the start elements
    
    let res = []; //response array for return

    for(let [x,y] of newArr){ //for each element of the array

        if(!res.length || res[res.length-1][1] < x){ //if the response array is empty or if the loop has reached the last element, and it's smaller than that element
            res.push([x,y]) //push the first or last element in
        }else{
            res[res.length-1][1] = Math.max(res[res.length-1][1],y) //otherwise add a newly constructed array to the response array
        }
    }

    return res;

};

let x = [[[1, 3], [6, 9]], [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [[1, 3], [6, 9]], [[2, 3], [6, 9]], [[2, 3], [6, 9]], [[2, 3], [6, 9]], [[1, 5]], [[1, 5]], [[1, 5], [6, 8]], [[0, 5], [8, 9]],[[0,5],[9,12]]];
let y = [[2, 5], [4, 8], [10, 12], [0, 1], [0, 2], [0, 7], [2, 3], [5, 7], [5, 6], [3, 4], [7,16]];
let correct = [[[1, 5], [6, 9]], [[1, 2], [3, 10], [12, 16]], [[1, 3], [6, 9], [10, 12]], [[0, 1], [2, 3], [6, 9]], [[0, 3], [6, 9]], [[0, 9]], [[1, 5]], [[1, 7]], [[1, 8]], [[0, 5], [8, 9]],[[0,5],[7,16]]];

answerExplainationEl.textContent = "Given a series of intervals in ascending order and a new interval, add the new interval and combine any overlapping intervals into single intervals";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let xCopy = x[i].slice();
    let yCopy = [y[i].slice()];

    let resultingInterval = insert(x[i], y[i]);

    let color = "Inserting [" + yCopy + "] into " + displayNestedArray(xCopy) + " results in the creation of " + displayNestedArray(resultingInterval);

    let proper = compareNestedArrays(resultingInterval, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* INSERT INTERVAL - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* FLIP STRING TO MONOTONE INCREASING - MEDIUM - START 

// A binary string is monotone increasing if it consists of some number of 0's (possibly none), followed by some number of 1's (also possibly
// none).

// You are given a binary string s. You can flip s[i] changing it from 0 to 1 or from 1 to 0.

// Return the minimum number of flips to make s monotone increasing.

var minFlipsMonoIncr = function (s) {

    //Didn't work, but I like this sort
    // let binarySort = function (arr) { //I'm fairly certain this is O(n) time complexity, if so it's faster than the standard js sort
    //     let zeros = [];
    //     let ones = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i] == "0") {
    //             zeros.push("0");
    //         } else {
    //             ones.push("1");
    //         }
    //     }
    //     zeros = zeros.concat(ones);
    //     return zeros;
    // }

    // if (s == binarySort(s)) return 0; //quick return for already sorted strings

    // let zeroCount = 0;
    // let oneCount = 0;

    // //zero side sort
    // let zeroArr = s.slice().split("");
    // for (let j = 0; j < s.length; j++) {
    //     if (zeroArr[j] == "1") {
    //         zeroArr[j] = "0";
    //         zeroCount++;
    //     }
    //     if (zeroArr.join("") == binarySort(zeroArr).join("")) break;
    // }

    // //one side sort
    // let oneArr = s.slice().split("");
    // for (let k = s.length - 1; k >= 0; k--) {
    //     if (oneArr[k] == "0") {
    //         oneArr[k] = "1";
    //         oneCount++;
    //     }
    //     if (oneArr.join("") == binarySort(oneArr).join("")) break;
    // }

    // //minor flip (when one side greatly outnumbers the)
    // let zeroChars = 0;
    // let oneChars = 0;
    // for (let l = 0; l < s.length; l++) {
    //     if (s[l] == "0") {
    //         zeroChars++;
    //     } else {
    //         oneChars++;
    //     }
    // }
    // let minFlip = Math.min(zeroChars, oneChars);


    // return Math.min(zeroCount, oneCount, minFlip);

    let result = 0; 
    let count = 0;

    for (const str of s) {

        if(str== '1') {

            count++

        }else if(str =='0' && count> 0){

            result++
            count--

        }

    }

    return result;

};

let x = ["00110", "010110", "00011000", "10011111110010111011"];
let correct = [1, 2, 2, 5];

answerExplainationEl.textContent = "Given a binary string, flip as few characters as possible to make the values ascending";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let minFlips = minFlipsMonoIncr(x[i]);

    let color = minFlips == 0 ? "The string is already sorted, no flips are required" : "It takes " + minFlips + " flips to turn the string ascending";

    let proper = minFlips == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* FLIP STRING TO MONOTONE INCREASING - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MAXIMUM SUB CIRCULAR ARRAY - MEDIUM - START 

// Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.

// A circular array means the end of the array connects to the beginning of the array. Formally, the next element of nums[i] is nums[(i + 1) %
// n] and the previous element of nums[i] is nums[(i - 1 + n) % n].

// A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray nums[i], nums[i + 1], ...,
// nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.

var maxSubarraySumCircular = function(nums) {
    
    let preMin = nums[0]; //intermediary variables used to find the highest high and lowest low
    let preMax = nums[0]; 

    let max = nums[0]; //serves to hold the greatest possible sum
    let min = nums[0]; //serves to hold the least possible sum

    let total = nums[0]; //serves as a sum of the entire array

    for (let i = 1; i < nums.length; i++) {

        let n = nums[i]; //quick refence for the current element of nums
        
        preMax = Math.max(n, n+preMax); //sets preMax to the greater of the current number, or the current number and the previous maximum

        max = Math.max(max,preMax) //sets max to the greater of the maximum, or the previous maximum

        preMin = Math.min(n,preMin+n); //sets preMin to the lesser of the current number or the previous minimum and the current number

        min = Math.min(min,preMin);   //sets min to the lesser of the minium or the previous minimum

        total+=n; //adds the current mumber to the overall sum

    }

    return max < 0 ? max : Math.max(max ,total - min) //if max is negative, return it, otherwise return the greater of the max or total - min

};

let x = [[1,-2,3,-2],[5,-3,5],[-3,-2,-3]];
let correct = [3,10,-2];

answerExplainationEl.textContent = "Given a circular array of varying values, return the maximum possible value attainable by summing the elements of a sub array of those values";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let maxSum = maxSubarraySumCircular(x[i]);

    let color = "The greatest sum that can be extracted from a subarray of [" + x[i] + "] is " + maxSum;

    let proper = maxSum == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* MAXIMUM SUB CIRCULAR ARRAY - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* NON-DECREASING SUBSEQUENCES - MEDIUM - START 

// Given an integer array nums, return all the different possible non-decreasing subsequences of the given array with at least two elements. You may
// return the answer in any order.

var findSubsequences = function(nums) {

    if (nums.length < 2) return [[]]; //quick rejection of rule breaking input

    let subs = []; //return array to hold subsequences
    let map = {}; //stores flags for already found subsequences, prevents duplication

    let iterate = (idx, temp) => {

        if(map[temp])return; //if the subsequence is already in the return array, move to the next item 

        if(temp.length>=2){ //makes sure that the currently examined sub array of nums is long enough to potentially add to the return array

            subs.push(temp);

        }

        for(let i =idx;i<nums.length;i++){

            if(temp[temp.length-1]>nums[i]) continue;

            map[temp] = true; //sets the map value for the sub array being added to true, allowing for rejection of duplicates

            iterate(i+1,[...temp,nums[i]]); //continue the cycle

        }

    }

    iterate(0,[]); //begin the cycle of nums

    return subs;
};

let x = [[4,6,7,7], [4,4,3,2,1],[0]];
let correct = [[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]], [[4,4]],[[]]];

answerExplainationEl.textContent = "Given an array of integers, return all the non-decreasing subarrays with at least 2 elements";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let subArrays = findSubsequences(x[i]);

    let color = "The non decreasing subsequence" + pluralize(subArrays.length) +" within [" + x[i] + "] " + isAre(subArrays.length) + " " + displayNestedArray(subArrays);

    let proper = compareNestedArrays(subArrays, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* NON-DECREASING SUBSEQUENCES - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* CONSTRUCT STRING FROM BINARY TREE - EASY - START 

// Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it.

// Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.



var tree2str = function (root) {

    let ans = '';

    function helper(root) { // Pre Order Traversal
       
        if (root === null) { // Base case
            return; 
        }

        // Append the current node's value to the string
        ans += root.val.toString();

        // If the current node has a left child or a right child, include parentheses
        if (root.left !== null || root.right !== null) {
            ans += '(';
            helper(root.left); // Recursive call to process the left subtree
            ans += ')';
        }

        // If the current node has a right child, include parentheses
        if (root.right !== null) {
            ans += '(';
            helper(root.right); // Recursive call to process the right subtree
            ans += ')';
        }
    }

    helper(root);

    return ans;

};

let x = [[1, 2, 3, 4], [1, 2, 3, null, 4]];
let correct = ["1(2(4))(3)", "1(2()(4))(3)"];

answerExplainationEl.textContent = "Given the root of a binary tree, return a string consisting of parenthesis and integers from a binary tree with pre-order traversal, omitting all empty parenthesis pairs";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let newRoot = x[i].slice();

    let treeString = tree2str(leetCodeBTConstructor(newRoot));

    let color = "The tree [" + x[i] + "] becomes the string '" + treeString + "'";

    let proper = treeString == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* CONSTRUCT STRING FROM BINARY TREE - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MAXIMUM PRODUCT OF TWO ELEMENTS IN AN ARRAY - EASY - START 

// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

var maxProduct = function(nums) {
    
    let first, second = 0;

    if (nums[0] > nums[1]){

        first = nums[0];
        second = nums[1];

    } else{
        
        first = nums[1];
        second = nums[0];
    }

    if (nums.length !== 2){

        for (let i = 2; i < nums.length; i++){

            if (nums[i] > second){

                if (nums[i] > first){

                    let temp = first;
                    first = nums[i];
                    second = temp;

                } else {

                    second = nums [i];

                }
            }

        }

    }

    return (first - 1) * (second - 1);

};

let x = [[3,4,5,2], [1,5,4,5], [3,7]];
let correct = [12, 16, 12];

answerExplainationEl.textContent = "Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let numsArray = x[i].slice();

    let reportedProduct = maxProduct(numsArray);

    let color = "The maximum product that can be attained from the elements of the array [" + x[i] + "] is " + reportedProduct;

    let proper = reportedProduct == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* MAXIMUM PRODUCT OF TWO ELEMENTS IN AN ARRAY - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SPECIAL POSITIONS IN A BINARY MATRIX - EASY - START 

// Given an m x n binary matrix mat, return the number of special positions in mat.

// A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

// Works, but VERY INEFFICIENT
// var numSpecial = function(mat) {

//     let potentials = [];

//     let matX = mat[0].length;
//     let matY = mat.length;

//     for (let i = 0; i < matY; i++){
//         for (let j = 0; j < matX; j++){
//             if (mat[i][j] == 1){
//                 potentials.push([j,i]);
//             }
//         }
//     }

//     let specialCount = 0;

//     for (let i = 0; i < potentials.length; i++){

//         let x = potentials[i][0];
//         let y = potentials[i][1];
//         let triggered = false;

//         for (let j = 0;j < potentials.length;j++){

//             if(i == j){
//                 continue;
//             }

//             if(potentials[j][0] == x || potentials[j][1] == y){
//                 triggered = true;
//             }

//         }

//         if (!triggered){
//             specialCount++;
//         }

//     }

//     return specialCount;

// };

var numSpecial = function(mat) {
    let specials = 0;

    for (let i = 0; i < mat.length; i++) {
        let index = checkRow(mat, i);
        if (index >= 0 && checkColumn(mat, i, index))
            specials++;
    }

    return specials;

    function checkRow(mat, i) {
        let index = -1;
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) {
                if (index >= 0)
                    return -1;
                else
                    index = j;
            }
        }
        return index;
    }

    function checkColumn(mat, i, index) {
        for (let j = 0; j < mat.length; j++) {
            if (mat[j][index] === 1 && j !== i)
                return false;
        }
        return true;
    }
};

let x = [[[1, 0, 0], [0, 0, 1], [1, 0, 0]], [[1, 0, 0], [0, 1, 0], [0, 0, 1]]];
let correct = [1, 3];

answerExplainationEl.textContent = "Given an m x n binary matrix mat, return the number of special positions in mat.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let currentMatrix = x[i].slice();

    let specialCount = numSpecial(currentMatrix);

    let color = "The number of special positions in the matrix [" + x[i] + "] is " + specialCount;

    let proper = specialCount == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* SPECIAL POSITIONS IN A BINARY MATRIX - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* DIFFERENCE BETWEEN ONES AND ZEROS IN ROW AND COLUMN - MEDIUM - START 

// You are given a 0-indexed m x n binary matrix grid.

// A 0-indexed m x n difference matrix diff is created with the following procedure:

// Let the number of ones in the ith row be onesRowi.
// Let the number of ones in the jth column be onesColj.
// Let the number of zeros in the ith row be zerosRowi.
// Let the number of zeros in the jth column be zerosColj.
// diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj

// Return the difference matrix diff.

var onesMinusZeros = function (grid) {

    let x = grid[0].length;
    let y = grid.length;

    let rowOnes = new Array(y).fill(0);
    let colOnes = new Array(x).fill(0);

    let difference = [];

    for (let i = 0; i < y; i++) {

        for (let j = 0; j < x; j++) {
            rowOnes[i] += grid[i][j];
            colOnes[j] += grid[i][j];
        }

    }

    // Final Compilation
    for (let i = 0; i < y; i++) {

        let diffRow = [];

        for (let j = 0; j < x; j++) {

            //assemble difference row while creating each element
            diffRow.push(2 * (rowOnes[i] + colOnes[j]) - x - y);

        }
        
        //assemble difference matrix from newly constructed row
        difference.push(diffRow);

    }

    return difference;

};

let x = [[[0, 1, 1], [1, 0, 1], [0, 0, 1]], [[1, 1, 1], [1, 1, 1]]];
let correct = [[[0, 0, 4], [0, 0, 4], [-2, -2, 2]], [[5, 5, 5], [5, 5, 5]]];

answerExplainationEl.textContent = "Given a 0-indexed m x n binary matrix grid, return a difference matrix.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let currentMatrix = x[i].slice();

    let differenceMatrix = onesMinusZeros(currentMatrix);

    let color = "the matrix [" + x[i] + "] yields a difference matrix of [" + differenceMatrix + "]";

    let proper = compareNestedArrays(differenceMatrix, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* DIFFERENCE BETWEEN ONES AND ZEROS IN ROW AND COLUMN - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MAXIMUM PRODUCT DIFFERENCE BETWEEN TWO PAIRS - EASY - START 

// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product
// difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

// Return the maximum such product difference.

var maxProductDifference = function(nums) {

    //Version 1 (58ms 44.22MB)
    let firstSet = nums.slice(0,4).sort((a,b) => a - b);

    let firstLow = firstSet[0];
    let secondLow = firstSet[1];
    let secondHigh = firstSet[2];
    let firstHigh = firstSet[3];

    if (nums.length > 4){

        for (let i = 4; i < nums.length; i++){

            if (nums[i] < secondLow){
                if (nums[i] < firstLow){
                    let temp = firstLow;
                    firstLow = nums[i];
                    secondLow = temp;
                } else {
                    secondLow = nums[i];
                }
            } else if (nums[i] > secondHigh){
                if (nums[i] > firstHigh){
                    let temp = firstHigh;
                    firstHigh = nums[i];
                    secondHigh = temp;
                } else {
                    secondHigh = nums[i];
                }
            }
        }

    }

    return (firstHigh * secondHigh) - (firstLow * secondLow);

    //Version 2 (71ms 44.86MB)
    // let sortedSet = nums.sort((a,b) => a - b);

    // return (sortedSet[sortedSet.length-1] * sortedSet[sortedSet.length-2]) - (sortedSet[0] * sortedSet[1]);
};

let x = [[5,6,2,7,4], [4,2,5,9,7,4,8]];
let correct = [34, 64];

answerExplainationEl.textContent = "Given an array of integers, return the maximum product difference between two pairs of those numbers.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let currentSet = x[i].slice();

    let maximumProductDifference = maxProductDifference(currentSet);

    let color = "the maximum product difference between the elements of [" + x[i] + "] is " + maximumProductDifference;

    let proper = maximumProductDifference == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* MAXIMUM PRODUCT DIFFERENCE BETWEEN TWO PAIRS - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* BUY TWO CHOCOLATES - EASY - START 

// You are given an integer array 'prices' representing the prices of various chocolates in a store. You are also given a single integer 'money',
//  which represents your initial amount of money.

// You must buy exactly two chocolates in such a way that you still have some non-negative leftover money. You would like to minimize the
//  sum of the prices of the two chocolates you buy.

// Return the amount of money you will have leftover after buying the two chocolates. If there is no way for you to buy two chocolates without
//  ending up in debt, return money. Note that the leftover must be non-negative.

var buyChoco = function (prices, money) {


    //option 1: 95 ms, 45.48 MB
    // let sums = [];

    // for (let i = 0; i < prices.length - 1; i++) {
    //     for (let j = i + 1; j < prices.length; j++) {

    //         let tempSum = prices[i] + prices[j];

    //         if (sums.indexOf(tempSum) && tempSum <= money){
    //             sums.push(tempSum);
    //         }
    //     }
    // }

    // let lowestSum = sums.length ? Infinity : 0;

    // for (let i = 0; i < sums.length;i++){
    //     lowestSum = sums[i] < lowestSum ? sums[i] : lowestSum;
    // }

    // return money - lowestSum;

    //option 2: 79 ms, 46.94 MB
    prices = prices.sort((a, b) => a - b);

    return money - (prices[0] + prices[1]) > -1 ? money - (prices[0] + prices[1]) : money;


};

let x = [[1, 2, 2], [3, 2, 3]];
let y = [3, 3];
let correct = [0, 3];

answerExplainationEl.textContent = "You are given an integer array of cholocate prices and a sum of money, and must buy exactly two chocolates in a way to return non-negative left over money.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let currentSet = x[i].slice();

    let currentCash = y[i];

    let remainingCash = buyChoco(currentSet, currentCash);

    let color = remainingCash == y[i] ? "There is no possible combination of chocolates that can be purchased in accordance with the rules" : "the maximum cash remaining from the chocolate purchase is " + remainingCash;

    let proper = remainingCash == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* BUY TWO CHOCOLATES - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* WIDEST VERTICAL AREA BETWEEN TWO POINTS CONTAINING NO POINTS - MEDIUM - START 

// Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.

// A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.

// Note that points on the edge of a vertical area are not considered included in the area.

var maxWidthOfVerticalArea = function(points) {

    
    points.sort((a, b) => a[0] - b[0]);

    let greatest = 0;

    for (let i = 1; i < points.length; i++){

        greatest = points[i][0] - points[i-1][0] > greatest ? points[i][0] - points[i-1][0] : greatest;
    }

    return greatest;

};

let x = [[[8,7],[9,9],[7,4],[9,7]], [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]];
let correct = [1, 3];

answerExplainationEl.textContent = "Given n points on a 2D plane, return the widest vertical area between two points such that no points are inside the area.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let currentSet = x[i].slice();

    let maxWidth = maxWidthOfVerticalArea(currentSet);

    let color = "Given the points: " + displayNestedArray(x[i]) + ", the widest possible vertical area is " + maxWidth + " wide";

    let proper = maxWidth == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* WIDEST VERTICAL AREA BETWEEN TWO POINTS CONTAINING NO POINTS - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/*  MINIMUM TIME TO MAKE ROPE COLORFUL - MEDIUM - START 

// Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where colors[i] is the color of the ith balloon.

// Alice wants the rope to be colorful. She does not want two consecutive balloons to be of the same color, so she asks Bob for help. 
// Bob can remove some balloons from the rope to make it colorful. You are given a 0-indexed integer array neededTime where neededTime[i]
// is the time (in seconds) that Bob needs to remove the ith balloon from the rope.

// Return the minimum time Bob needs to make the rope colorful.

var minCost = function(colors, neededTime) {
    
    // First Solution 187ms 89.69MB
    let time = 0;
    let adjElements = []; 
    let currentItem = colors[0];
    let currentRun = [neededTime[0]];

    for (let i = 1; i < colors.length; i++){

        if (colors[i] !== currentItem){

            if (currentRun.length > 1){

                adjElements.push(currentRun.sort((a,b) => b-a));

            }

            currentItem = colors[i];
            currentRun = [neededTime[i]];

        } else {

            currentRun.push(neededTime[i]);

        }

        if (i == colors.length-1 && currentRun.length > 1){

            adjElements.push(currentRun.sort((a,b) => b-a));

        }

    }
   
    for (let i = 0; i < adjElements.length;i++){

        while (adjElements[i].length > 1){
            time += adjElements[i].pop();
        }

    }

    return time;

};

let x = ["abaac", "abc", "aabaa", "aaabbbabbbb"];
let y = [[1,2,3,4,5], [1,2,3], [1,2,3,4,1], [3,5,10,7,5,3,5,5,4,8,1]];
let correct = [3, 0, 2, 26];

answerExplainationEl.textContent = "Given a rope with a series of balloons of various colors, return the time to make the rope 'colorful' (remove same color adjacent balloons).";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let currentPattern = x[i].slice();
    let currentTimeContraints = y[i].slice();

    let colorTime = minCost(currentPattern, currentTimeContraints);

    let color = "Given the balloons represented by: " + x[i] + ", the time to make the rope colorful is " + colorTime;

    let proper = colorTime == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* MINIMUM TIME TO MAKE ROPE COLORFUL - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/*  MINIMUM DIFFICULTY OF A JOB SCHEDULE - HARD - START 

// You want to schedule a list of jobs in d days. Jobs are dependent (i.e To work on the ith job, you have to finish all the jobs j where 0 <= j < i).

// You have to finish at least one task every day. The difficulty of a job schedule is the sum of difficulties of each day of the d days.
// The difficulty of a day is the maximum difficulty of a job done on that day.

// You are given an integer array jobDifficulty and an integer d. The difficulty of the ith job is jobDifficulty[i].

// Return the minimum difficulty of a job schedule. If you cannot find a schedule for the jobs return -1.

var minDifficulty = function (jobDifficulty, d) {

    if (d > jobDifficulty.length) {
        return -1;
    }
    
    let helper = function (jobDifficulty, d, position) {

        let minSum = 0;
        if (position == 0) {
            let mainBody = jobDifficulty.slice(0, (jobDifficulty.length - d + 1))
            minSum += Math.max(...mainBody);
            for (let i = 1; i < d; i++) {
                minSum += jobDifficulty[mainBody.length -1 + i];
            }

        } else if (position > 0 && position < d - 1) {

            //left
            for (let i = 0; i < position; i++) {
                minSum += jobDifficulty[i];
            }

            //main
            let middle = jobDifficulty.slice(position, position + (jobDifficulty.length - d + 1));
            minSum += Math.max(...middle)

            //right
            for (let i = position + 1; i < d; i++) {
                minSum += jobDifficulty[i];
            }
        } else {
            

            for (let i = 0; i < position; i++) {
                minSum += jobDifficulty[i];
            }
            let mainBody = jobDifficulty.slice(jobDifficulty.length - d + 1);
            minSum += Math.max(...mainBody);

        }

        return minSum;
    }

    let minDiff = []

    for (let i = 0; i < d; i++) {
        
        minDiff.push(helper(jobDifficulty, d, i));

    }

    return Math.min(...minDiff);

};

let x = [[6, 5, 4, 3, 2, 1], [9, 9, 9], [1, 1, 1], [4, 3, 6, 2, 9], [7, 1, 7, 1, 7, 1], [11, 111, 22, 222, 33, 333, 44, 444]];
let y = [2, 4, 3, 1, 3, 6];
let correct = [7, -1, 3, 9, 15, 843];

answerExplainationEl.textContent = "Given a series of jobs and a number of days, return the minimum difficulty of a job schedule";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let jobs = x[i].slice();
    let days = y[i];

    let minSchedule = minDifficulty(jobs, days);

    let color = minSchedule == -1 ? "There is no way to schedule those jobs according to the rules" :
        "Given a series of jobs with difficulty levels of [" + x[i] + "] and " + y[i] + " days, the minimum difficulty of the schedule is " + minSchedule;

    let proper = minSchedule == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* MINIMUM DIFFICULTY OF A JOB SCHEDULE - HARD - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/*  CONVERT AN ARRAY INTO A 2D ARRAY WITH CONDITIONS - MEDIUM - START 

// You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:

// The 2D array should contain only the elements of the array nums.
// Each row in the 2D array contains distinct integers.
// The number of rows in the 2D array should be minimal.
// Return the resulting array. If there are multiple answers, return any of them.

// Note that the 2D array can have a different number of elements on each row.

var findMatrix = function(nums) {

    // 280ms, 50.81MB
    let twoD = [[nums.shift()]];

    while (nums.length > 0){

        let currentNum = nums.shift();

        for (let i = 0; i < twoD.length; i++){

            if (twoD[i].indexOf(currentNum) == -1){
                twoD[i].push(currentNum);
                currentNum = -1
                break;
            }

        }

        if (currentNum != -1){
            twoD.push([currentNum]);
        }

    }

    console.log (twoD)

    return twoD;

};

let x = [[1,3,4,1,2,3,1], [1,2,3,4], [1]];
let correct = [[[1,3,4,2],[1,3],[1]], [[1,2,3,4]], [[1]] ];

answerExplainationEl.textContent = "Given an array of numbers, return a 2D array where each sub array has no elements in common";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let currentNums= x[i].slice();

    let twoDArray = findMatrix(currentNums);

    let color = "Given the integer array [" + x[i] + "], and the conditions given, the 2D array " + displayNestedArray(twoDArray) + " can be created"

    let proper = compareNestedArrays(twoDArray, correct[i]) ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* CONVERT AN ARRAY INTO A 2D ARRAY WITH CONDITIONS - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MINIMUM NUMBER OF OPERATIONS TO MAKE ARRAY EMPTY - MEDIUM - START 

// You are given a 0-indexed array nums consisting of positive integers.

// There are two types of operations that you can apply on the array any number of times:

// Choose two elements with equal values and delete them from the array.
// Choose three elements with equal values and delete them from the array.
// Return the minimum number of operations required to make the array empty, or -1 if it is not possible.

var minOperations = function(nums) {
    
    //135ms 53.29MB
    let numCount = {};
    let keys = [];
    let operationCount = 0;

    for (let i = 0; i < nums.length; i++){

        if (nums[i] in numCount){

            numCount[nums[i]]++;

        } else {

            numCount[nums[i]] = 1;
            keys.push(nums[i]);

        }

    }

    for (let i = 0; i < keys.length; i++){

        let currentNumCount = numCount[keys[i]]

        if (currentNumCount == 1){ //impossible to use
            return -1;
        } 

        if (currentNumCount == 2 || currentNumCount == 4){ //early versions that match later patterns, but can quickly be eliminated here (removal slows the program slightly)
            operationCount += (currentNumCount / 2);
            continue;
        }

        if (currentNumCount / 3 == Math.round(currentNumCount / 3)){ //multiples of 3
            operationCount += currentNumCount / 3;
            continue;
        }

        if ((currentNumCount - 4) / 3 == Math.round((currentNumCount - 4) / 3)){ //remove 4 to get to multiples of 3
            operationCount += ((currentNumCount - 4) / 3) + 2;
            continue;
        }

        if ((currentNumCount - 2) / 3 == Math.round((currentNumCount - 2) / 3)){ //remove 2 to get to multiples of 3
            operationCount += ((currentNumCount - 2) / 3) + 1;
            continue;
        }

    }

    return operationCount;

};

let x = [[2,3,3,2,2,4,2,3,4], [2,1,2,2,3,3], [14,12,14,14,12,14,14,12,12,12,12,14,14,12,14,14,14,12,12]];
let correct = [4,-1, 7];
answerExplainationEl.textContent = "Given an array of integers, what is the minimum number of operations must be performed to reduce the element count to zero, given that you can remove two identical, or three identical elements at a time";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let currentNums= x[i].slice();

    let opCount = minOperations(currentNums);

    let colorOne = "Given the array [" + x[i] + "], "

    let colorTwo = opCount == -1 ? "there is no possible set of operations with the given conditions"  : " it takes " + opCount + " operations";

    let colorThree = " to reduce the array element count to zero";
  
    let proper = opCount == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = colorOne + colorTwo + colorThree + proper;

    answerListEl.appendChild(listEl);

}
/* MINIMUM NUMBER OF OPERATIONS TO MAKE ARRAY EMPTY - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LONGEST INCREASING SUBSEQUENCE - MEDIUM - START 

// Given an integer array nums, return the length of the longest strictly increasing subsequence.

var lengthOfLIS = function(nums) {

    let lISArr = new Array(nums.length).fill(1);
    
    for (let i = 1; i < nums.length; ++i) {

        for (let j = 0; j < i; ++j) {

            if (nums[i] > nums[j]) {

                lISArr[i] = Math.max(lISArr[i], lISArr[j] + 1);

            }
        }
    }
    return Math.max(...lISArr);
};

let x = [[10,9,2,5,3,7,101,18], [0,1,0,3,2,3], [7,7,7,7,7,7,7]];
let correct = [4, 4, 1];
answerExplainationEl.textContent = "Given an integer array nums, return the length of the longest strictly increasing subsequence.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let currentNums= x[i].slice();

    let longest = lengthOfLIS(currentNums);

    let color = "The longest strictly increasing subsequence of the integer array [" + x[i] + "]  is " + longest + " integers long";
  
    let proper = longest == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* LONGEST INCREASING SUBSEQUENCE - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* RANGE SUM OF BST - EASY - START 

// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

var rangeSumBST = function (root, low, high) {

    //153ms 93.61MB
    if (!root) {
        return null;
    }

    let queue = [];
    let sum = 0;

    queue.push(root);

    while (queue.length > 0) {

        if (queue[0].left) {
            queue.push(queue[0].left)
        }

        if (queue[0].right) {
            queue.push(queue[0].right)
        }

        let num = queue.shift().val

        if (num >= low && num <= high) {
            sum += num;
        }

    }

    return sum;

};

let x = [[10, 5, 15, 3, 7, null, 18], [10, 5, 15, 3, 7, 13, 18, 1, null, 6]];
let y = [7, 6];
let z = [15, 10];
let correct = [32, 23];
answerExplainationEl.textContent = "Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high]";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let currentTree = x[i].slice();
    let currentLow = y[i];
    let currentHigh = z[i];

    currentTree = leetCodeBTConstructor(currentTree);

    let inclusiveSum = rangeSumBST(currentTree, currentLow, currentHigh);

    let color = "The sum of the elements of the binary search tree " + x[i] + " within the range of " + currentLow + " and " + currentHigh + " is " + inclusiveSum;

    let proper = inclusiveSum == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* RANGE SUM OF BST - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LEAF-SIMILAR TREES - EASY - START 

// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

var leafSimilar = function (root1, root2) {

    //60ms 44.52MB
    let traverse = function(node, leaves){

        if (!node) return null

        let left = traverse(node.left, leaves)
        let right = traverse(node.right, leaves)
      
        let isLeaf = !left && !right
        if (isLeaf) leaves.push(node.val)
      
        return leaves
      }

    let root1leaves = traverse(root1, [])
    let root2leaves = traverse(root2, [])
  
    if (root1leaves.length !== root2leaves.length) return false
  
    return root1leaves.every((val, i) => val === root2leaves[i])

};

let x = [[3, 5, 1, 6, 2, 9, 8, null, null, 7, 4], [1, 2, 3]];
let y = [[3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8], [1, 3, 2]];
let correct = [true, false];
answerExplainationEl.textContent = "Given the root nodes of two binary trees, determine if they are leaf similar";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let rootOne = leetCodeBTConstructor(x[i].slice());
    let rootTwo = leetCodeBTConstructor(y[i].slice());

    console.log (rootOne);

    let similar = leafSimilar(rootOne, rootTwo);

    let colorOne = "Tree one : [" + x[i].slice() + "], and tree two: [" + y[i].slice() + "], are ";

    let colorTwo = similar ? "leaf similar" : "not leaf similar"

    let proper = similar == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = colorOne + colorTwo + proper;

    answerListEl.appendChild(listEl);

}
/* LEAF-SIMILAR TREES - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* AMOUNT OF TIME FOR BINARY TREE TO BE INFECTED - MEDIUM - START 

// You are given the root of a binary tree with unique values, and an integer start. At minute 0, an infection starts from the node with value start.

// Each minute, a node becomes infected if:
// The node is currently uninfected.
// The node is adjacent to an infected node.

// Return the number of minutes needed for the entire tree to be infected.

var amountOfTime = function (root, start) {

    //194ms 121.60MB
    let time = 0;

        function traverse(root) {

            if (!root) return 0;

            let left = traverse (root.left);
            let right = traverse(root.right);

            if (root.val === start){
                time = Math.max(left, right);
                return -1;
            } else if (left >= 0 && right >= 0){
                return Math.max(left, right) + 1;
            } else {
                time = Math.max(time, Math.abs(left-right));
                return Math.min(left, right) -1;
            }

        }

    if (!root.left && !root.right){

        return time

    } else {

        traverse(root);

        return time;

    }

};

let x = [[1, 5, 3, null, 4, 10, 6, 9, 2], [1]];
let y = [3, 1];
let correct = [4, 0];
answerExplainationEl.textContent = "Given a binary tree and an infection starting point, return how many minutes it takes to infect the entire binary tree";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let root = leetCodeBTConstructor(x[i].slice());

    let infectionTime = amountOfTime(root, y[i]);

    let color = "A tree with the nodes [" + x[i] + "] and an infection starting point of " + y[i] + " takes " + infectionTime + " minutes to become fully infected";

    let proper = infectionTime == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* AMOUNT OF TIME FOR BINARY TREE TO BE INFECTED - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MAXIMUM DIFFERENCE BETWEEN NODE AND ANCESTOR - MEDIUM - START 

// Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.

// A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.

var maxAncestorDiff = function (root) {

    // 69ms 45.14MB
    if (!root){
        return 0;
    }

    function helper(root, minVal, maxVal) {

        if (!root){
            return;
        }

        diff = Math.max(diff, Math.max(Math.abs(minVal - root.val), Math.abs(maxVal - root.val)));

        minVal = Math.min(minVal, root.val);
        maxVal = Math.max(maxVal, root.val);

        helper(root.left, minVal, maxVal);
        helper(root.right, minVal, maxVal);

    }

    let diff = 0;

    helper(root, root.val, root.val);

    return diff;

};

let x = [[8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13], [1, null, 2, null, 0, 3]];
let correct = [7, 3];

answerExplainationEl.textContent = "Given the root of a binary tree, find the maximum difference between any node and any of its ancestors";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let root = leetCodeBTConstructor(x[i].slice());

    let greatestDifference = maxAncestorDiff(root);

    let color = "Given a tree with the nodes [" + x[i] + "], the greatest difference between any node and its ancestors is " + greatestDifference;

    let proper = greatestDifference == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = color + proper;

    answerListEl.appendChild(listEl);

}
/* MAXIMUM DIFFERENCE BETWEEN NODE AND ANCESTOR - MEDIUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* DETERMINE IF STRING HALVES ARE ALIKE - EASY - START */

// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

var halvesAreAlike = function(s) {


    //70ms 42.98MB
    let half = s.length/2;
    let first = s.slice(0,half);
    let second = s.slice(half);

    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    let firstVowelCount = 0;
    let secondVowelCount = 0;

    for (let i = 0; i < half; i++){

        if (vowels.indexOf(first[i]) !== -1){
           firstVowelCount++;
        }

        if (vowels.indexOf(second[i]) !== -1){
            secondVowelCount++;
        }

    }

    return firstVowelCount === secondVowelCount;

};

let x = ["book", "textbook", "tkPAdxpMfJiltOerItiv"];
let correct = [true, false, false];

answerExplainationEl.textContent = "Given a string s of even length. Split this string into two halves of equal lengths, and return whether these two halves have the same number of vowels";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    let alike = halvesAreAlike(x[i]);

    let colorOne = "Splitting the string '" + x[i] + "' in two "

    let colorTwo = alike ? " produces two alike strings" : "does not produce two alike strings";

    let proper = alike == correct[i] ? ", this is correct" : ", this is wrong";

    listEl.textContent = colorOne + colorTwo + proper;

    answerListEl.appendChild(listEl);

}
/* DETERMINE IF STRING HALVES ARE ALIKE - EASY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/