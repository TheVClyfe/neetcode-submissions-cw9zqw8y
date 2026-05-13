class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    findPossibleMatch(matrix, index, target) {
        let start = 0, end = matrix[index].length-1;
        while(start<=end) {
            let mid = Math.floor(start + (end-start)/2);
            if(target === matrix[index][mid]) {
                return true;
            } else if(target>matrix[index][mid]) {
                start = mid+1;
            } else {
                end = mid-1;
            }
        }
        return false;
    }

    findPossibleRow(matrix, target) {
        let start = 0, end = matrix.length-1;
        while(start<=end) {
            let mid = Math.floor(start + (end-start)/2);
            if(target===matrix[mid][0]) {
                return mid;
            } else if(target>matrix[mid][0]) {
                start = mid+1;
            } else {
                end = mid-1;
            }
        }
        return end;
    }

    searchMatrix(matrix, target) {
        const index = this.findPossibleRow(matrix, target);
        
        return index < 0? false: this.findPossibleMatch(matrix, index, target);
    }
}
