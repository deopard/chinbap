$(() => {
    class Group {
        constructor(people, type = 'destiny') {
            this.people = people;

            // destiny: 뽑기, choi: 최타파, pick: 지목
            this.type = type;
        }

        get identifier() {
            return this.people.sort().join(', ');
        }

        equals(group) {
            return group.identifier == this.identifier;
        }
    }

    window.Group = Group;
});