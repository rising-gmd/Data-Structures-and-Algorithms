// Time Complexity O(n)

function reverseArray(a) {

    let head = 0;
    let tail = a.length -1;

    // Moving from both sides of the arr (two pointer)
    while (head < tail) {

        // Swapping the pointer values
        let temp = a[head];
        a[head] = a[tail];
        a[tail] = temp;
        head++;
        tail--;
    }

    return a;

 }

 const result = reverseArray([1,2,3,4]);
 console.log(result)