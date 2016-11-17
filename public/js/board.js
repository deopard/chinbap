$(() => {
    class Board {
        constructor() {
            this.index = 1;
        }

        addGroup(group) {
            this.notify(group);
            $('#board').append(`
              <tr>
                <td>${this.index}</td>
                <td>${group.identifier}</td>
                <td>${this.getType(group.type)}</td>
              </tr>
            `);
            this.index++;
        }

        notify(group) {
            let msg = '';
            if (group.type == 'destiny') msg = `축하합니다!`;
            if (group.type == 'choi') msg = `최재호의 파워 타임~~`;
            if (group.type == 'pick') msg = `사전신청!!`;
            alert(msg);
        }

        getType(type) {
            if (type == 'destiny') return '운명';
            if (type == 'choi') return '최타파';
            if (type == 'pick') return '사전신청';
            return '?';
        }
    }

    window.Board = Board;
});