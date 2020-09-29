class Renderer {
    renderBoard(matrix) {
        $('#playground').empty()
        matrix.forEach(row => {
            const src = $('#matrix-template').html()
            const template = Handlebars.compile(src)
            const newHTML = template({ row })
            $('#playground').append(newHTML)
        })
    }

    renderScore(points, sTemplate) {
        const src = $(`#${sTemplate}`).html()
        const template = Handlebars.compile(src)
        const newHTML = template({ points })
        $('#score').append(newHTML)
    }
}