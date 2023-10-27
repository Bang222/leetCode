function removeElement(nums: number[], val: number):void {
    const newNums:number[] =[]
    for(let i:number = 0; i< nums.length - 1; i++)
    {
        if(nums[i] !== val) {
            newNums.push(nums[i]);
        }
    }
    console.log(newNums.length)
};
const nums1:number[] = [0,1,2,2,3,0,4,2]
const val1:number=2
const data =removeElement(nums1,val1)
