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
            let title = '';
            if (group.type == 'destiny') {
                title = `축하합니다!`;
            } else if (group.type == 'choi') {
                title = '최재호의 파워타임!!';
            } else if (group.type == 'pick') {
                title = `사전신청!!`;
            }

            fullModal.showLoading(group.people.length);
            let loadingCount = 30;
            let currentLoadingCount = 0;
            let interval = setInterval(() => {
                fullModal.showLoading(group.people.length);
                if (currentLoadingCount++ == loadingCount) {
                    fullModal.show(title, this.getImages(group));
                    clearInterval(interval);
                }
            }, 50);
        }

        loadingContent(size) {
            let people = _.sampleSize(picker.candidatePeople, size);
            let group = new Group(people);
            return this.getImages(group);
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

        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    }

    window.Board = Board;
});