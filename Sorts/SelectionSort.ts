let list: number[];
let i,j,min: number;
let swap = (val1:any, val2:any) => {
    const temp = val1;
    val1 = val2;
    val2 = temp;
};
let selectionSort = function(arr:number[]) {
    console.log("Your array is current... " + arr.toString());
    console.log("Sorting...")
    for(i =0; i < arr.length -1;i++) {
        min = i; //assume that the smallest will be the first elt
        for(j=i+1; j< arr.length;j++) {
            if(arr[j]<arr[min]) {
                min = j;
            }
        }
        swap(arr[min],arr[i]);
    }
};
selectionSort(list);
const sortedArray = list.toString();
console.log(sortedArray);