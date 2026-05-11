class MinStack {
    
    innerMinStack = [];
    innerStack = [];

    constructor() {

    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.innerMinStack.length===0) {
            this.innerMinStack.push(val);
        }
        else if(this.innerMinStack.length>0 && val<=this.innerMinStack[this.innerMinStack.length-1]) {
            this.innerMinStack.push(val);
        }
        this.innerStack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.innerMinStack.length > 0 && this.innerStack[this.innerStack.length-1]===this.innerMinStack[this.innerMinStack.length-1]) {
           this.innerMinStack.pop();
        } 
        this.innerStack.pop(); 
    }

    /**
     * @return {number}
     */
    top() {
        return this.innerStack[this.innerStack.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.innerMinStack[this.innerMinStack.length-1];
    }
}
