class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length>s.length) return "";
        let map = new Array(128).fill(0);
        let map2 = new Array(128).fill(0);
        
        let needed = 0; // stores count of distinct characters in t
        
        let formed = 0;

        let result = "";
        // store frequencies of characters in t
        for(const char of t) {
            const index = char.charCodeAt(0); // - 'a'.charCodeAt(0);
            map[index]++;
            if(map[index]===1) needed++;
        }

        let left = 0;
        
        // Initial Code - 
        // for(let i=0;i<=right;i++) {
        //     const index = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        //     map2[index]++;
        // }

        // Initial Thoughts - 
        // now need to slide the window from left to right
        // what's not apparent right now, is what's the criteria for left or right shift?
        
        // The following is wrong, as it would lose track of which elements correspond to which char
        // let mapFiltered = map.filter(element => element!==0);
        
        for(let right=0;right<s.length;right++) {
            const index = s[right].charCodeAt(0); //-'a'.charCodeAt(0);
            map2[index]++;

            //check for match with map1
            if(map[index]>0 && map[index]===map2[index]) {
                formed++;
            }

            while(formed===needed && left <=right) {
                const subStrSoFar = s.slice(left, right+1);
                
                if(result === "") {
                    result = subStrSoFar;
                } else {
                    result = result.length > subStrSoFar.length? subStrSoFar: result;
                }
                const indexLeft = s[left].charCodeAt(0); //-'a'.charCodeAt(0);
                map2[indexLeft]--;

                //check for match
                if(map[indexLeft]>0 && map[indexLeft]>map2[indexLeft]) {
                    formed--;
                }
                left++;
            }
        }       

        return result;
    }
}
