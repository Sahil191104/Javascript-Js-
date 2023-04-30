console.log("-----------1-----------");

// 1. Finding the maximum element in an array.
let arr1 = [5, 7, 10, 18, 1, 79];

const frmax = (arr1) => {
    max = arr1[0];

    for (let i = 1; i < arr1.length; i++) {
        if (arr1[i] > max) {
            max = arr1[i];
        }
    }

    console.log(max);
}
frmax(arr1);

console.log("-----------2-----------");

// 2. Finding the minimum element in an array.
let arr2 = [19, 48, 1, 0, 75, 34];

const frmin = (arr2) => {
    min = arr2[0];

    for (let i = 1; i < arr2.length; i++) {
        if (arr2[i] < min) {
            min = arr2[i];
        }
    }

    console.log(min);
}
frmin(arr2);

console.log("-----------3-----------");

// 3. Sorting an array in ascending order.
let arr3 = [5,41,65,22,75,1,90];

const frsort = (arr3) => {
    arr3.sort((a,b) => a - b);

    console.log(arr3);
}
frsort(arr3);

console.log("-----------4-----------");

// 4. Sorting an array in descending order.
let arr4 = [5,41,65,22,75,1,90];

const frrev = (arr4) => {
    arr4.sort((a,b) => b - a);

    console.log(arr4);
}
frrev(arr4);

console.log("-----------5-----------");

// 5. Reversing an array.
let arr5 = [5,41,65,22,75,1,90];

const rev = (arr5) => {
    arr5.reverse();

    console.log(arr4);
}
rev(arr5);

console.log("-----------6-----------");

// 6. Finding the sum of all elements in an array.
const frsum = (arr4) => {
    sum = 0;

    arr4.map((a) => sum = sum + a);

    console.log(sum);
}
frsum(arr4);

console.log("-----------7-----------");

// 7. Finding the average of all elements in an array.
const fravg = (arr4) => {
    sum = 0;

    arr4.map((a) => sum = sum + a);

    console.log(sum / arr4.length);
}
fravg(arr4);

console.log("-----------8-----------");

// 8. Checking if an array contains a specific element.
let arr6 = [5,41,65,22,1,90];

const frincludes = (arr6, a) => {
    let ans = arr6.includes(a);

    console.log(ans);
}

frincludes(arr6, 90);

console.log("-----------9-----------");

// 9. Removing duplicates from an array.
let arr7 = [5,41,65,22,1,90];

const frdublicat = (arr7) => {

    let unique = [];

    arr7.map((a) => {
        if (!unique.includes(a)) {
            unique.push(a);
        }
    });
    console.log(unique);
}

frdublicat(arr7);

console.log("-----------10-----------");

// 10.    Merging two arrays into a new array.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let newArray = array1.concat(array2);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

console.log("-----------11-----------");

// 11.    Splitting an array into two arrays based on a condition.
// 12.    Searching for an element in an array using binary search.
// 13.    Rotating an array by a given number of positions.
// 14.    Finding the second largest element in an array.
// 15.    Finding the k-th smallest element in an array.
// 16.    Finding the frequency of each element in an array.
// 17.    Finding the median of an array.
// 18.    Finding the mode of an array.
// 19.    Checking if two arrays are equal or not.
// 20.    Finding the union of two arrays.