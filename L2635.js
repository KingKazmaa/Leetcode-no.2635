let a = [2,2,3,3,5,0]


const removeElement = (nums, val) => {
        for (let i = 0; i < nums.length; i++) {
            nums[i] === val ? nums.splice(nums[i], nums[i])
            : 
        }
        return nums
};
console.log(removeElement([0,1,2,2,3,0,4,2], 3));