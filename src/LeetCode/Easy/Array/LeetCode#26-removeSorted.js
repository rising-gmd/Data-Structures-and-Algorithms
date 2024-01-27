// 1, 1, 2, 3 
// if 1 != 1 increment count and manipulate the array and put that i in k index of array

const removeDuplicates = function (nums) {

    let k = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === nums[i + 1]) {
            continue
        }
        nums[k] = nums[i]
            k++

    }

    return k

};

const length = removeDuplicates([1,1,2,2])
