class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    map = new Map();

    climbStairs(n) {
        if(n<=2) {
            return n;
        } 
        let nMinusOneSolve = -1, nMinusTwoSolve = -1;
        if(this.map.has(n-1)) nMinusOneSolve = this.map.get(n-1);
        if(this.map.has(n-2)) nMinusTwoSolve = this.map.get(n-2); 
        if(nMinusOneSolve !==-1 && nMinusTwoSolve!==-1) {
            return nMinusOneSolve + nMinusTwoSolve;
        } else if(nMinusOneSolve!==-1) {
            nMinusTwoSolve = this.climbStairs(n-2);
            this.map.set(n-2, nMinusTwoSolve);
            return nMinusOneSolve + nMinusTwoSolve;
        } else if(nMinusTwoSolve!==-1) {
            nMinusOneSolve = this.climbStairs(n-1);
            this.map.set(n-1, nMinusOneSolve);
            return nMinusOneSolve + nMinusTwoSolve;
        } else {
            nMinusTwoSolve = this.climbStairs(n-2);
            nMinusOneSolve = this.climbStairs(n-1);
            this.map.set(n-1, nMinusOneSolve);
            this.map.set(n-2, nMinusTwoSolve);
            return nMinusOneSolve + nMinusTwoSolve;
        }
    }
}
