class GoldRush extends Matrix {
    constructor(rowNum, colNum) {
        super(rowNum, colNum)
        this.players = { 1: { row: 0, col: 0, points: 0 }, 2: { row: rowNum - 1, col: colNum - 1, points: 0 } }
        this.directions = { up: { name: "row", val: -1 }, down: { name: "row", val: 1 }, left: { name: 'col', val: -1 }, right: { name: 'col', val: 1 } }
        this.coinCuonter = 0
        this.loadBoard = this.loadBoard()
    }

    loadBoard() {
        this.loadPlayers()
        this.generateItems("c")
        this.generateItems("b")
    }

    loadPlayers() {
        this.alter(this.players[1].row, this.players[1].col, "1")
        this.alter(this.players[2].row, this.players[2].col, "2")
    }

    generateItems(val) {
        let item
        if (val === "c") {
            item = Math.floor(Math.random() * (((this.rowNum * this.colNum) - 2) / 2)) + this.rowNum
            this.coinCuonter = item
        }
        else if(val === "b"){
            item = Math.floor(Math.random() * ((this.rowNum + this.colNum - 2) / 2)) + this.rowNum
        }
        while (item > 0) {
            let row = Math.floor((Math.random() * this.rowNum))
            let col = Math.floor((Math.random() * this.colNum))
            if (this.get(row, col) === '.') {
                this.alter(row, col, val)
                item--
            }
        }
    }

    movePlayer(player, direction) {
        const nextPosition = { row: this.players[player].row, col: this.players[player].col }
        nextPosition[this.directions[direction].name] += this.directions[direction].val
        if (this.validMove(nextPosition)) {
            this.alter(this.players[player].row, this.players[player].col, '.')
            this.players[player][this.directions[direction].name] += this.directions[direction].val
            if (this.get(this.players[player].row, this.players[player].col) === 'c') {
                this.players[player].points += 10
                this.coinCuonter--
            }
            this.alter(this.players[player].row, this.players[player].col, player)
        }
        else {
            return false
        }
    }

    validMove(nextPosition) {
        if (nextPosition.row >= 0 && nextPosition.col >= 0 &&
            nextPosition.row < this.rowNum && nextPosition.col < this.colNum) {
            if (this.get(nextPosition.row, nextPosition.col) === '.' ||
                this.get(nextPosition.row, nextPosition.col) === "c") {
                return true
            }
            return false
        }
    }
}


