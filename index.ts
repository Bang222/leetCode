// not value duplicate number in Array


// delete duplicates in Array
const deleteNumberDuplicate = (nums:number[]) : number[] => {
    const arrayValidatedNums:number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (!arrayValidatedNums.includes(nums[i])) {
            arrayValidatedNums.push(nums[i])
        }
    }
    return arrayValidatedNums
}
// sorted Array nums from big to small
const sortedNumsInArray = (deleteNumberDuplicate:number[]): number[] => {
    const n = deleteNumberDuplicate.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (deleteNumberDuplicate[j] < deleteNumberDuplicate[j + 1]) {
                const temp = deleteNumberDuplicate[j];
                deleteNumberDuplicate[j] = deleteNumberDuplicate[j + 1];
                deleteNumberDuplicate[j + 1] = temp;
            }
        }
    }
    return deleteNumberDuplicate;
}
const numberSecondMax = (sortedNumsInArray:number[]) => {
    console.log(sortedNumsInArray[1])
}
const array:number[] = [123,1,1,45,2,24,2354,325,3451,123,2,24,1,24,1,23,123]
deleteNumberDuplicate(array)
sortedNumsInArray(deleteNumberDuplicate(array))
numberSecondMax(sortedNumsInArray(deleteNumberDuplicate(array)))
