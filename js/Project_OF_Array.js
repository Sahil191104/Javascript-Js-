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