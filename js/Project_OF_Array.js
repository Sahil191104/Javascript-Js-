// 1. Finding the maximum element in an array.
let a = 2,b = 8,c = 4,d = 11;

if (a<b) {
    if (a<c) {
        if (a<d) {
            console.log(a);
        } else {
            console.log(d);
        }
    } else {
        if (c<d) {
            console.log(c);
        } else {
            console.log(d);
        }
    }		
} else {
    if (b<c) {
        if (b<d) {
            console.log(b);
        } else {
            console.log(d);
        }			
    } else {
        if (c<d) {
            console.log(c);
        } else {
            console.log(d);
        }
    }
}

// 2. Finding the minimum element in an array.
// let a = 2,b = 8,c = 4,d = 11;

// if (a<b) {
//     if (a<c) {
//         if (a<d) {
//             console.log(a);
//         } else {
//             console.log(d);
//         }
//     } else {
//         if (c<d) {
//             console.log(c);
//         } else {
//             console.log(d);
//         }
//     }		
// } else {
//     if (b<c) {
//         if (b<d) {
//             console.log(b);
//         } else {
//             console.log(d);
//         }			
//     } else {
//         if (c<d) {
//             console.log(c);
//         } else {
//             console.log(d);
//         }
//     }
// }

// 3. Sorting an array in ascending order.
let ascend = [5,9,1,3,4,5,0];
console.log(ascend.sort());

// 4. Sorting an array in descending order.
let descend = ["sahil","meet","rajan","kayur"];
console.log(ascend.sort());
console.log(ascend.reverse());

// 5. Reversing an array.
let re = [5,7,9,4,2,1];
console.log(re.reverse());

// 6. Finding the sum of all elements in an array.
let f = [1,2,3,4,5], sum = 0;

for (let i=0; i<f.length; i++) {
    sum = sum + f[i];
}
console.log(sum);

// 11. Splitting an array into two arrays based on a condition.
let array = [1, 2, 3, 4, 5, 6];
let evenArray = array.filter(element => element % 2 === 0);
let oddArray = array.filter(element => element % 2 !== 0);
console.log(evenArray);
console.log(oddArray);
// Syntax:- array.filter(function(currentValue, index, arr), thisValue)

// 12. Searching for an element in an array using binary search.
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {

        let middle = Math.floor((left + right) / 2);
        console.log(array);

        if (array[middle] === target) {
            return middle;
        } else if (array[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

    // let array = [1, 2, 3, 4, 5, 6];
    let target = 2;
    let index = binarySearch(array, target);
    console.log(index);

// 13. Rotating an array by a given number of positions.
function rotateArray(array, positions) {
    let extractedElements = array.slice(0, positions); // select Use to
    let remainingElements = array.slice(positions);
    let rotatedArray = remainingElements.concat(extractedElements);
    return rotatedArray;
}

    // let array = [1, 2, 3, 4, 5, 6];
    let positions = 1;
    let rotatedArray = rotateArray(array, positions);
    console.log(rotatedArray);

// 14. Finding the second largest element in an array.
function findSecondLargest(array) {
    array.sort((a, b) => b - a);

    return array[1];
}

    // let array = [1, 5, 2, 7, 3, 9];
    let secondLargest = findSecondLargest(array);
    console.log(secondLargest);

// 15. Finding the k-th smallest element in an array.
function findKthSmallest(array, k) {
    array.sort((a, b) => a - b);

    return array[k - 1];
}

    let arraya = [1, 5, 2, 7, 3, 9];
    let k = 3;
    let kthSmallest = findKthSmallest(arraya, k);
    console.log(kthSmallest);