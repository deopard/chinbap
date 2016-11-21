$(() => {
    const week = 'w1121';
    window.board = new Board();
    window.picker = new Picker(week);
    window.fullModal = new FullModal();

    let preGroups = chinbapHistory[week].groups.slice();

    $('#startModal').show();
    $('#btnStart').click(() => {
        let preGroup = preGroups.shift();
        board.addGroup(preGroup);
        $('#startModal').hide();
    });

    $('#btnFullModalClose').click(() => {
        console.log(preGroups);
        if (preGroups.length > 0) {
            let preGroup = preGroups.shift();
            board.addGroup(preGroup);
        } else {
            fullModal.hide();
        }
    });

    $('#btnPick').click(() => {
        let count = parseInt($('#txtSize').val());;
        if (!(count > 0 && count < 10)) {
            return;
        }
        picker.pick(count);
    });
});