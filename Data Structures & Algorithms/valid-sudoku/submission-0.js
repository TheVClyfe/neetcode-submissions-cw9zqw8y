class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const map = new Map();
        for(let i=0;i<9;i++) {
            //iterate through all rows
            for(let j=0;j<9;j++) {
                if(board[i][j]==='.') continue;
                if(map.has(board[i][j])) {
                    return false;
                } else {
                    map.set(board[i][j], 1);
                }
            }
            map.clear();
        }

        for(let i=0;i<9;i++) {
            //iterate through all rows
            for(let j=0;j<9;j++) {
                if(board[j][i]==='.') continue;
                if(map.has(board[j][i])) {
                    return false;
                } else {
                    map.set(board[j][i], 1);
                }
            }
            map.clear();
        }
        
        // now iterate through each 3x3 box
        for(let box = 0; box<9;box++) {
            let startRow = Math.floor(box/3)*3;
            let startCol = (box%3)*3;
            for(let i=startRow;i<startRow+3;i++) {
                for(let j=startCol;j<startCol+3;j++) {
                    if(board[i][j]==='.') continue;
                    if(map.has(board[i][j])) return false;
                    else {
                        map.set(board[i][j]);
                    }
                }
            }
            map.clear();
        }
        return true;
    }
}
