let list: number[] = [29,46,24,39,95];
let i,j,min: number;
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
        const temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
};
selectionSort(list);
const sortedArray = list.toString();
console.log(sortedArray);