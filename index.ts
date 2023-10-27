function removeElement(nums: number[], val: number):void {
    let index:number = 0
    for(let i:number = 0; i< nums.length; i++)
    {
        if(nums[i] !== val) {
            nums[index] = nums[i]
            index++
        }
    }
    console.log(index)
};
const nums1:number[] = [0,1,2,2,3,0,4,2]
const val1:number=2
const data =removeElement(nums1,val1)
