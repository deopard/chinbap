$(() => {
    const DRAMA_PEOPLE = [
        '김선', '김종옥', '이승영', '이승민',
        '이희덕', '정승은', '이중훈', '박종호',
        '김인애', '권민자', '김희중', '정주경',
        '노혜란', '정혜선', '김재진',
        '안동건', '백재현', '강민석', '오일승',
        '임세준', '김담형', '곽수민', '김용현',
        '최재호', /*'이영래',*/ '정현호', /*'김빛나',*/
        '조가영', '김혜원', '조현규', '박희우',
        '최맑은유리'
    ];

    class ChinbapHistroy {
        static isNewGroup(group) {
            for (let weekId in chinbapHistory) {
                let week = chinbapHistory[weekId];
                if (week.hasGroup(group))
                    return false;
            }
            return true;
        }
    }

    class Picker {
        constructor(week) {
            this.week = week;
            this.refreshRemainCount();
        }

        pick(count) {
            let candidateGroup;
            if (this.candidatePeople.length == 0) {
                alert('남은 사람이 없어요~');
                return;
            }

            if (this.candidatePeople.length < count) {
                count = this.candidatePeople.length;
            }

            if (this.candidatePeople.length == count) {
                candidateGroup = new Group(_.sampleSize(this.candidatePeople, count));
            } else {
                do {
                    candidateGroup = new Group(_.sampleSize(this.candidatePeople, count));
                } while (!ChinbapHistroy.isNewGroup(candidateGroup))
            }

            chinbapHistory[this.week].push(candidateGroup);
            board.addGroup(candidateGroup);

            this.refreshRemainCount();
        }

        refreshRemainCount() {
            $('#lbRemainCount').html(this.candidatePeople.length);
        }

        get candidatePeople() {
            return _.difference(DRAMA_PEOPLE, chinbapHistory[this.week].allPeople);
        }
    }

    window.DRAMA_PEOPLE = DRAMA_PEOPLE;
    window.Picker = Picker;
});