/*
Implementation for a doubly linked list 
 */
export interface ILinkedList {
    head: Linked_Node;
    length: number;
    insert(elt: any, index: number): boolean;
    remove(index: number): boolean;
    get(index: number):any;
    clear(): void;
    size(): number;
    isEmpty(): boolean;
    contains(elt: any): boolean;
}
export class Linked_Node {
    public val: any;
    public next: Linked_Node;
    public prev: Linked_Node;

    constructor(val: any) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class Singly_Linked_List implements ILinkedList{
    head: Linked_Node
    length: number;
    public clear(): void {
    }

    public get(index: number): any {
    }

    public insert(elt: any, index: number): boolean {
        return false;
    }

    public isEmpty(): boolean {
        return false;
    }

    public remove(index: number): boolean {
        return false;
    }

    public size(): number {
         return this.length
    }
    contains(elt: any): boolean {
        return false;
    }

    ;


}
