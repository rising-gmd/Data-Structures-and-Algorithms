// Brute force Time Complexity O(n*2)

function rotateLeft(d, arr) {

    // Keep swapping array elements until d >= 1 lets say if d = 2 => run for 2, 1 
    while (d >= 1) {

        // Swapping values of all the array elements
        for (let i = 0; i < arr.length - 1; i++) {
            const temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }

      d--;

    }

    return arr;

}

const result = rotateLeft(3, [1, 2, 3, 4]);
console.log(result)