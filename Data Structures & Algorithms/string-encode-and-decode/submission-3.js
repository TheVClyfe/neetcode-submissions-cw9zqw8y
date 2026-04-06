class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for(const str of strs) {
            // res=res+"#"+str.length+str;
            res = res + str.length + "#" + str;
        }
        return res;
    }

    // computeLengthOfNextWord(fromIndex, str) {
    //     let num = 0;
    //     for(let i=fromIndex;i<str.length;i++) {
    //         if(!isNaN(str.charAt(i))) {
    //             num = num*10 + Number(str.charAt(i));
    //         } else {
    //             break;
    //         }
    //     }
    //     return num;
    // }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // let tempStr = "";
        const res = [];
        let i = 0;
        
        while(i<str.length) {
            let j = i;
            while(str.charAt(j)!='#') j++;
            const numLen = Number(str.slice(i,j));
            res.push(str.slice(j+1, j+1+numLen));
            i = j+1+numLen;
            // if(str[i]=='#') {
            //     // const lengthOfNextWord = this.computeLengthOfNextWord(i+1, str);
            //     // for(let j=0;j<lengthOfNextWord;j++) {
            //     //     tempStr=tempStr+str[i+1+String(lengthOfNextWord).length+j];
            //     // }
            //     // res.push(tempStr);
            //     // tempStr=""; //reset temp str
            //     // i = i+String(lengthOfNextWord).length+lengthOfNextWord+1;
            //     i++;
            //     let numStr = '';
            //     while(i<str.length && !isNaN(str.charAt(i))) {
            //         numStr = numStr+str.charAt(i);
            //         i++;
            //     }
            //     const len = Number(numStr);
            //     res.push(str.slice(i, i+len));
            //     i+=len;
            // }
        }
        return res;
    }
}
