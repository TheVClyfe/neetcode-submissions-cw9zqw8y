class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    map = new Map();

    minCostAtN(cost, n) {
        let costNMinusOne, costNMinusTwo;
        if(n<=2) {
            return Math.min(cost[1], cost[0]);
        } if(n==3) {
            if(this.map.has(n-1)) costNMinusOne = this.map.get(n-1);
            else {
                costNMinusOne = this.minCostAtN(cost, n-1);
                this.map.set(n-1, costNMinusOne);
            }
            return Math.min(cost[1], cost[n-1] + costNMinusOne);
        } else {
            if(this.map.has(n-1)) costNMinusOne = this.map.get(n-1);
            else {
                costNMinusOne = this.minCostAtN(cost, n-1);
                this.map.set(n-1, costNMinusOne);
            }
            if(this.map.has(n-2)) costNMinusTwo = this.map.get(n-2);
            else {
                costNMinusTwo = this.minCostAtN(cost, n-2);
                this.map.set(n-2, costNMinusTwo);
            }
            return Math.min(cost[n-1]+costNMinusOne, cost[n-2]+costNMinusTwo);
        }
    }

    minCostClimbingStairs(cost) {
        return this.minCostAtN(cost, cost.length);
    }
}
