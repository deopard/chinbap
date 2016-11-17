$(() => {
    const week = 'w1121';
    window.board = new Board();
    window.picker = new Picker(week);

    for (let group of chinbapHistory[week].groups) {
        board.addGroup(group);
    }

    $('#btnPick').click(() => {
        let count = parseInt($('#txtSize').val());;
        picker.pick(count);
    });
});