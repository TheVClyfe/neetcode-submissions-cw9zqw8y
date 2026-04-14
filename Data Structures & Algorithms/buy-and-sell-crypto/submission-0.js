class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let currPrice = prices[0];
        let maxProfit = 0;
        for(let i=1;i<prices.length;i++) {
            let currentProfit = prices[i]-currPrice;
            if(currentProfit>maxProfit) maxProfit = currentProfit;
            if(currPrice>prices[i]) currPrice = prices[i];
        }
        return maxProfit;
    }
}
