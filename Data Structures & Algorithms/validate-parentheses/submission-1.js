class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    getCorrespondingOpener(s) {
        if(s==='}') return '{';
        if(s===']') return '[';
        if(s===')') return '(';
        return '';
    }

    isValid(s) {
        let stack = new Array();
        for(let i=0;i<s.length;i++) {
            let v = s.charAt(i);
            if(v==='(' || v==='{' || v==='[') {
                stack.push(v);
            } else if(v==='}' || v===']' || v===')') {
                if(stack[stack.length-1]!==this.getCorrespondingOpener(v)) {
                    return false;
                } else {
                    stack.pop();
                }
            }
        }
        if(stack.length>0) return false;
        return true;
    }
}
