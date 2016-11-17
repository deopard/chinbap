$(() => {
    class Week {
        constructor(groups) {
            this.groups = groups;
        }

        get allPeople() {
            return _.flatMap(_.flatMap(this.groups, 'people'));
        }

        get isEmpty() {
            return this.groups.length == 0;
        }

        // 이 그룹이 존재 했었는지
        hasGroup(group) {
            for (let g of this.groups) {
                if (g.equals(group)) {
                    return true;
                }
            }
            return false;
        }

        push(group) {
            this.groups.push(group);
        }
    }

    window.Week = Week;
});