class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = [];
        let res = [];
        for(let i=0;i<position.length;i++) {
            cars.push([position[i], speed[i]]);
        }

        cars.sort((a,b) => b[0]-a[0]); //sort descending positions

        for(let i=0;i<cars.length;i++) {
            let time = (target - cars[i][0])/cars[i][1];

            // If the current car takes MORE time than the fleet in front,
            // it cannot catch up, so it forms a new fleet.
            if(res.length === 0 || res[res.length-1] < time) {
                res.push(time);
            }       
        }

        return res.length;
    }
}
