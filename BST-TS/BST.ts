class BST_Node {
    private _leftNode: BST_Node;
    private _rightNode: BST_Node;
    private _val: string|number;

    constructor(val: string|number) {
        this._val = val;
        this._rightNode = null;
        this._leftNode = null;
    }
    
    //getters for private properties 
    public getLeftNode(): BST_Node {
        return this._leftNode;
    }
   
    public getRightNode(): BST_Node {
        return this._rightNode
    }
    public getVal(): string|number {
        return this._val;
    }
    //getters for private properties 
}
class BST {
    _root: BST_Node;
    _size: number;
    constructor() {
        this._root = null;
        this._size = 0;
    }
    
}