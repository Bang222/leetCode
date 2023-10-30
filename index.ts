function removeDuplicates(nums: number[]): number {
    let data: number = 1
    for(let i:number = 1;i < nums.length; i++){
        const currentNumber:number = nums[i]
        if(currentNumber !==nums[i-1]){
            nums[data] = currentNumber
            data++
        }
    }
    return data
};