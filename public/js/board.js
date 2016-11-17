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
                <td>${this.getImages(group)}</td>
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

        getImages(groups) {
            let res = '';
            for (let person of groups.people) {
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