const twoSum = (nums: number[], target: number) => {
    // the first loop i take the first number loop all of it remaning number
    for(let i = 0 ;i<nums.length; i++) {
        for(let j = i + 1; j<nums.length; j++) {
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
};
const nums1:number[] = [2,7,11,15], target1:number = 9
console.log("1: ",twoSum(nums1, target1));
const nums2:number[] = [3,2,4], target2:number = 6
console.log("2: ",twoSum(nums2, target2))
const nums3:number[] = [3,3], target3:number = 6
console.log("3: ",twoSum(nums3, target3))