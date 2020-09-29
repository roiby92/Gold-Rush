const renderer = new Renderer()
const $start = $('#start')

let board

$start.on('click', function () {
    const rows = parseInt($('#rows').val())
    const colum = parseInt($('#columns').val())
    $('#playground').css('grid-template-rows', `repeat(${rows},1fr)`)
    $('#playground').css('grid-template-columns', `repeat(${colum},1fr)`)
    board = new GoldRush(rows, colum)
    renderer.renderBoard(board.matrix)
    
    $('#score').empty()
    renderer.renderScore(board.players[1].points, 'score1-template')
    renderer.renderScore(board.players[2].points, 'score2-template')
})



$(document).keydown(function (e) {
    e.which === 83 ? board.movePlayer(1, 'down') :
        e.which === 87 ? board.movePlayer(1, 'up') :
            e.which === 68 ? board.movePlayer(1, 'right') :
                e.which === 65 ? board.movePlayer(1, 'left') :
                    e.which === 40 ? board.movePlayer(2, 'down') :
                        e.which === 38 ? board.movePlayer(2, 'up') :
                            e.which === 39 ? board.movePlayer(2, 'right') :
                                e.which === 37 ? board.movePlayer(2, 'left') : ''
    renderer.renderBoard(board.matrix)

    $('#score').empty()
    renderer.renderScore(board.players[1].points, 'score1-template')
    renderer.renderScore(board.players[2].points, 'score2-template')

    if (board.players[1].points === 80) {
        return alert('Game Over player 1 won the game')
    }
    else if (board.players[2].points === 80) {
        return alert('Game Over player 2 won the game')
    }
})
