const renderer = new Renderer()
const $start = $('#start')

const rows = parseInt($('#rows').val())
const colum = parseInt($('#columns').val())
$('#playground').css('grid-template-rows', `repeat(${5},1fr)`)
$('#playground').css('grid-template-columns', `repeat(${5},1fr)`)
let board = new GoldRush(5, 5)


renderer.renderBoard(board.matrix)


// $start.on('click', function (rows, colum) {

// })



$(document).keydown(function (e) {
    if (board.matrix.length > 0) {
        e.which === 83 ? board.movePlayer(1, 'down') :
            e.which === 87 ? board.movePlayer(1, 'up') :
                e.which === 68 ? board.movePlayer(1, 'right') :
                    e.which === 65 ? board.movePlayer(1, 'left') :
                        e.which === 40 ? board.movePlayer(2, 'down') :
                            e.which === 38 ? board.movePlayer(2, 'up') :
                                e.which === 39 ? board.movePlayer(2, 'right') :
                                    e.which === 37 ? board.movePlayer(2, 'left') : ''


        renderer.renderBoard(board.matrix)
    }
})


const keyBoard = { w: 87, a: 65, s: 83, d: 68, up: 38, left: 37, down: 40, right: 39 }