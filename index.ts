const removeArrayWithDuplicates = (nums:number[]): number[] =>{
    const newArray:number[] =[];
    for(let num of nums){
        if(!newArray.includes(num)){
            newArray.push(num);
        }
    }
    return newArray;
}
const findSecondMax = (nums:number[]):number => {
    const arrayFiltered:number[] = removeArrayWithDuplicates(nums)
    for (let i:number = 0; i< arrayFiltered.length - 1;i++){
        for(let j:number = 0 ; j<  arrayFiltered.length - i - 1 ; j++){
            if(arrayFiltered[j] < arrayFiltered[j + 1]){
                const temp: number = arrayFiltered[j];
                arrayFiltered[j] = arrayFiltered[j + 1];
                arrayFiltered[j + 1] = temp;
            }
        }
    }
    return arrayFiltered[1];
}
console.log("data",findSecondMax([1,4,2,4,5,2,31,31]))