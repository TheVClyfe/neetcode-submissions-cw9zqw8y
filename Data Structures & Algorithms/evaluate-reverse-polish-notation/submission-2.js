class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evaluateToken(num1, num2, val) {
        if(val==='+') return num2+num1;
        if(val==='-') return num2-num1;
        if(val==='*') return num2*num1;
        if(val==='/') return Math.trunc(num2/num1);
    }

    evalRPN(tokens) {
        let stack = new Array();
        for(let val of tokens) {
            if(val==='*' || val === '-' || val==='+' || val ==='/') {
                //pop two, evaluate, push back to stack
                const num1 = stack.pop();
                const num2 = stack.pop();
                stack.push(this.evaluateToken(num1, num2, val));
            } else {
                const num = Number(val);
                stack.push(num);
            }
        }
        return stack.pop();
    }
}
