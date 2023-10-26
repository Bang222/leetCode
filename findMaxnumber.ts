const findMaxNumber = (nums:number[]):number =>{
    let maxNumber:number;
    for(let i:number= 0; i<nums.length; i++){
        if(nums[i] > maxNumber){
            maxNumber = nums[i];
        }
    }
    return maxNumber
}
const arrayNumber:number[] =  [1,2,3,4,5,6,7,8]
findMaxNumber(arrayNumber)
