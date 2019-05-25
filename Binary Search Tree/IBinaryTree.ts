interface IBST {
    insert:(s:string)=> boolean;
    delete:(s:string)=> boolean;
    findMax:()=> string;
    findMin:()=> string;
    empty:()=> boolean;
    contains:(s:string)=> boolean;


}