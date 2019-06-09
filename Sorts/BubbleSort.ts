let list: number[] =  [2,1,3,9,10,22,36,10];
//helper method to swap elts within arr for sorting
let swap = (val1:any, val2:any) => {
    const temp = val1;
    val1 = val2;
    val2 = temp;
};

const bubbleSort = (arr: number[]) => {
    for(let i: number= 0; i < arr.length-1; i++) {
        for(let j: number =0; j < arr.length - i-1; j++) {
            if(arr[j] > arr[j+1]) {
                //swap the elemts if bigger
                swap(arr[j], arr[j+1]);
            }
        }
    }
};
bubbleSort(list);
let sortedArr = list.toString();
console.log(sortedArr);