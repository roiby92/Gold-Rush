class Matrix {
    constructor(rowNum, colNum) {
        this.matrix = this.generateMatrix(rowNum, colNum)
        this.rowNum =rowNum
        this.colNum = colNum
    }

    generateMatrix(numRows, numColumns) {
        let matrix = []
        let num = 1
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(".")
            }
        }
        return matrix
    }

    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let row = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                row += (this.matrix[i][j] + "\t")
            }
            console.log(row)
        }
    }

    printRow(rowNum) {
        let row = ""
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            row += (this.matrix[rowNum][i] + "\t")
        }
        console.log(row);
    }
    printColumn(columnNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][columnNum]);
        }
    }
    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }
    alter(row, col, val) {
        this.matrix[row][col] = val
    }

    findCoordinate(val) {
        for(let i=0;i<this.matrix.length;i++){
            for(let j=0;j<this.matrix[i].length;j++){
                if(this.matrix[i][j]==val){
                     return { x: j, y: i }
                }
            }
        }
    }

}

// module.exports = Matrix