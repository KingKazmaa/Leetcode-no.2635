<<<<<<< HEAD
let a = [2,2,3,3,5,0]


const removeElement = (nums, val) => {
        for (let i = 0; i < nums.length; i++) {
            nums[i] === val ? nums.splice(nums[i], nums[i])
            : 
        }
        return nums
};
console.log(removeElement([0,1,2,2,3,0,4,2], 3));
=======
const map = (arr, fn) => {
    for (let i=0;i<arr.length;i++) {
        arr[i] = fn(arr[i], i)
    }
    return arr
}
// OR JUST USE MAP METHOD BUT THIS TEACHES YOU HOW TO ITERATE OVER EACH ELEMENT IN AN ARRAY AND ALTER EACH ONE

const map = (arr, fn) => arr.map((n) => fn(arr[i], i))
>>>>>>> 0df2d486dd9151aebdf1e8aed0bad20eb08d40d3
