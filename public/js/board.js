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
                <td class="text-center">${this.getImages(group)}</td>
                <td>${this.getType(group.type)}</td>
              </tr>
            `);
            this.index++;
        }

        notify(group) {
            let msg = '';
            if (group.type == 'destiny') {
                msg = `축하합니다!`;
            } else if (group.type == 'choi') {
                msg = `최재호의 파워 타임~~`;
            } else if (group.type == 'pick') {
                msg = `사전신청!!`;
            }
            Modal.show(msg + `<br/>${this.getImages(group)}`);
        }

        getImages(group) {
            let res = '';
            for (let person of group.people) {
                res += this.getImage(person);
            }
            return res;
        }

        getImage(person) {
            return `<img src="/img/member/${person}.png" />`;
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