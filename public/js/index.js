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

// var Picker = (function () {
//     function Picker() {}
//     Picker.pick = function (week, count) {
//         var candidatePeople = _.difference(dramaPeople, history_1.chinbapHistory[week].allPeople);
//         var candidateGroup;
//         if (candidatePeople.length == 0) {
//             console.log('남은 사람이 없어요~');
//             rl.question();
//             return;
//         }
//         if (candidatePeople.length < count)
//             count = candidatePeople.length;
//         if (candidatePeople.length == count)
//             candidateGroup = new group_1.Group(candidatePeople);
//         else {
//             do {
//                 candidateGroup = new group_1.Group(_.sampleSize(candidatePeople, count));
//             } while (!ChinbapHistroy.isNewGroup(candidateGroup));
//         }
//         console.log('\n\n\n\n\n\n\n\n👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏');
//         console.log("\uCD95\uD558\uD569\uB2C8\uB2E4! " + candidateGroup.identifier);
//         console.log('👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏\n\n');
//         history_1.chinbapHistory[week].push(candidateGroup);
//         candidatePeople = _.difference(candidatePeople, candidateGroup.people);
//         // console.log(`남은 사람: ${candidatePeople}`);
//         console.log("\uB0A8\uC740 \uC0AC\uB78C \uC218: " + candidatePeople.length + "\uBA85\n\n");
//         rl.question();
//     };
//     return Picker;
// }());
// var ChinbapHistroy = (function () {
//     function ChinbapHistroy() {}
//     ChinbapHistroy.isNewGroup = function (group) {
//         for (var weekId in history_1.chinbapHistory) {
//             var week_1 = history_1.chinbapHistory[weekId];
//             if (week_1.hasGroup(group))
//                 return false;
//         }
//         return true;
//     };
//     return ChinbapHistroy;
// }());
// var week = 'w1114';
// console.flush();
// if (!history_1.chinbapHistory[week].isEmpty) {
//     console.log('사전 친밥 신청이 있습니다!\n\n\n\n');
//     rl.question();
//     var thisWeek = history_1.chinbapHistory[week];
//     for (var _i = 0, _a = thisWeek.groups; _i < _a.length; _i++) {
//         var group = _a[_i];
//         console.flush();
//         console.log('👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏');
//         console.log('🙉  축하합니다! 🙉');
//         console.log("" + group.identifier);
//         console.log('👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏 👏\n\n\n');
//         rl.question();
//     }
// }
// while (true) {
//     console.flush();
//     console.log('몇명을 뽑아볼까요?\n\n\n\n');
//     var answer = rl.question().trim();
//     if (answer == '그만') {
//         console.log('감사합니다! 안녕히계세요~\n\n\n\n');
//         break;
//     }
//     var count = parseInt(answer);
//     if (count > 1 && count < 10) {
//         Picker.pick(week, count);
//     } else {
//         console.log('올바른 숫자를 넣어주세요~ 2명이상 10명 이하로\n\n\n\n');
//     }
// }
// //# sourceMappingURL=index.js.map