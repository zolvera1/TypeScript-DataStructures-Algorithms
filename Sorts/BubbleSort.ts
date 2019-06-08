let list: number[] =  [2,1,3,9,10,22,36,10];

const bubbleSort = (arr: number[]) => {
    for(let i: number= 0; i < arr.length-1; i++) {
        for(let j: number =0; j < arr.length - i-1; j++) {
            if(arr[j] > arr[j+1]) {
                //swap the elemts if bigger
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
};
bubbleSort(list);
let sortedArr = list.toString();
console.log(sortedArr);