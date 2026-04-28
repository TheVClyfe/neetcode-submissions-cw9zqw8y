class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = new Array(); // stores indices
        let answer = new Array(temperatures.length).fill(0);
        for(let i=0;i<temperatures.length;i++) {
            while(i > 0 && temperatures[stack[stack.length-1]] < temperatures[i]) {
                let prev = stack.pop();
                answer[prev] = i - prev;
            }
            stack.push(i);
        }
        return answer;
    }
}
