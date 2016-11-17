$(() => {
    let chinbapHistory = {
        w1121: new Week(
            [
                new Group(['안동건', '조현규'], 'pick')
            ]
        ),
        // 2016년 11월 14~18일 친밥
        w1114: new Week(
            [
                // 사전 신청
                new Group(['최재호', '안동건']),
                new Group(['이희덕', '김용현']),
                new Group(['김담형', '김혜원']),

                //운명의 뽑기
                new Group(['김종옥', '노혜란']),
                new Group(['곽수민', '백재현']),
                new Group(['박희우', '조현규']),
                new Group(['권민자', '김희중', '강민석']),
                new Group(['김재진', '정현호', '정혜선']),
                new Group(['이승민', '이중훈', '정승은']),
                new Group(['김선', '김인애', '오일승']),
                new Group(['임세준', '정주경', '조가영']),
                new Group(['박종호', '이승영', '최맑은유리'])
            ]
        ),
        w1107: new Week(
            [
                new Group(['오일승', '최맑은유리', '김혜원', '이영래', '정승은', '이희덕']),
                new Group(['김인애', '김담형']),
                new Group(['김종옥', '이중훈']),
                new Group(['박종호', '정주경']),
                new Group(['김빛나', '조가영']),
                new Group(['박희우', '정현호']),
                new Group(['권민자', '이승영']),
                new Group(['김용현', '안동건']),
                new Group(['김선', '조현규']),
                new Group(['강민석', '김재진', '노혜란']),
                new Group(['곽수민', '이승민', '임세준']),
                new Group(['김희중', '백재현', '정혜선'])
            ]
        ),
        w1031: new Week(
            [
                new Group(['김선', '김종옥', '정현호']),
                new Group(['이승영', '이승민', '김빛나']),
                new Group(['이희덕', '정승은', '조가영']),
                new Group(['이중훈', '박종호', '김혜원']),
                new Group(['김인애', '권민자', '조현규']),
                new Group(['김희중', '정주경']),
                new Group(['노혜란', '정혜선', '박희우']),
                new Group(['김재진', '이영래', '최맑은유리']),
                new Group(['안동건', '백재현']),
                new Group(['강민석', '오일승']),
                new Group(['임세준', '김담형']),
                new Group(['곽수민', '김용현']),
                new Group(['최재호', '이영래'])
            ]
        ),
        w1024: new Week(
            [
                new Group(['조현규', '노혜란', '이승영']),
                new Group(['조현규', '정혜선', '김선']),
                new Group(['김인애', '박종호', '정주경']),
                new Group(['권민자', '김혜원', '최맑은유리']),
                new Group(['김재진', '정승은', '김종옥']),
                new Group(['이승민', '곽수민', '오일승']),
                new Group(['이희덕', '김빛나', '강민석']),
                new Group(['이중훈', '김담형', '정현호']),
                new Group(['임세준', '백재현']),
                new Group(['박희우', '김희중']),
                new Group(['안동건', '이영래']),
                new Group(['조가영', '김용현'])
            ]
        ),
        w1017: new Week(
            [
                new Group(['조현규', '이희덕', '정주경']),
                new Group(['조현규', '오일승', '백재현']),
                new Group(['조현규', '이승민', '김담형']),
                new Group(['권민자', '박희우', '김재진']),
                new Group(['권민자', '노혜란', '박종호']),
                new Group(['김선', '이승영', '곽수민']),
                new Group(['이영래', '최맑은유리', '임세준']),
                new Group(['정현호', '정혜선', '김빛나']),
                new Group(['정승은', '김인애']),
                new Group(['강민석', '김용현']),
                new Group(['김혜원', '김종옥']),
                new Group(['김희중', '조가영', '이중훈', '안동건']),
                new Group(['최재호', '임세준'])
            ]
        ),
        w1010: new Week(
            [
                new Group(['조현규', '이영래', '김종옥']),
                new Group(['조현규', '최맑은유리', '박종호']),
                new Group(['조현규', '김혜원', '이중훈']),
                new Group(['권민자', '김희중', '오일승']),
                new Group(['권민자', '김선', '김빛나']),
                new Group(['권민자', '정주경', '안동건']),
                new Group(['강민석', '이승민', '백재현']),
                new Group(['정현호', '정승은', '곽수민']),
                new Group(['박희우', '노혜란', '이희덕']),
                new Group(['김재진', '김용현']),
                new Group(['정혜선', '김인애']),
                new Group(['임세준', '이승영', '김담형', '조가영']),
                new Group(['최재호', '이승영'])
            ]
        ),
        w1004: new Week(
            [
                new Group(['권민자', '이승민', '정승은']),
                new Group(['권민자', '이희덕', '곽수민']),
                new Group(['권민자', '김담형', '백재현']),
                new Group(['오일승', '김종옥']),
                new Group(['조가영', '김재진', '김선']),
                new Group(['강민석', '안동건']),
                new Group(['임세준', '정주경', '김희중']),
                new Group(['이승영', '이영래']),
                new Group(['정혜선', '이중훈', ]),
                new Group(['김빛나', '김혜원']),
                new Group(['김인애', '박희우', '최맑은유리']),
                new Group(['박종호', '김용현']),
                new Group(['권민자', '곽수민', '정현호', '최재호']),
            ]
        ),
        w0926: new Week(
            [
                new Group(['박희우', '강민석', '임세준']),
                new Group(['정혜선', '곽수민', '김재진']),
                new Group(['김빛나', '김담형', '이승영']),
                new Group(['최맑은유리', '김용현', '안동건']),
                new Group(['김인애', '이승민', '이희덕']),
                new Group(['노혜란', '김종옥', '정주경']),
                new Group(['김선', '이중훈', '이영래']),
                new Group(['조가영', '김희중', '박종호']),
                new Group(['정승은', '백재현', '정현호']),
                new Group(['권민자', '김혜원']),
                new Group(['오일승', '최재호'])
            ]
        ),
        w0919: new Week(
            [
                new Group(['김종옥', '박희우', '이중훈']),
                new Group(['김인애', '곽수민', '이영래']),
                new Group(['박종호', '오일승', '정혜선']),
                new Group(['김혜원', '이희덕', '정현호']),
                new Group(['김용현', '김빛나', '이승민']),
                new Group(['김담형', '임세준', '정주경']),
                new Group(['강민석', '김희중', '이승영']),
                new Group(['김선', '노혜란', '안동건']),
                new Group(['김재진', '조가영']),
                new Group(['백재현', '최맑은유리']),
                new Group(['정승은', '최재호'])
            ]
        ),
        w0905: new Week(
            [
                new Group(['최재호', '강민석']),
                new Group(['김빛나', '안동건']),
                new Group(['김혜원', '곽수민']),
                new Group(['박종호', '정현호']),
                new Group(['이승영', '이중훈']),
                new Group(['최맑은유리', '정승은']),
                new Group(['임세준', '정주경']),
                new Group(['김선', '김담형']),
                new Group(['박희우', '이승민']),
                new Group(['김용현', '이영래']),
                new Group(['정혜선', '김희중']),
                new Group(['김인애', '김종옥']),
                new Group(['조가영', '오일승']),
                new Group(['김재진', '이희덕']),
                new Group(['노혜란', '염다혜', '백재현'])
            ]
        ),
        w0829: new Week(
            [
                new Group(['최재호', '박희우']),
                new Group(['김선', '박종호']),
                new Group(['김용현', '김빛나']),
                new Group(['정혜선', '김혜원']),
                new Group(['김인애', '백재현']),
                new Group(['조가영', '노혜란']),
                new Group(['김재진', '이승영']),
                new Group(['임세준', '정현호']),
                new Group(['김담형', '정주경']),
                new Group(['오일승', '곽수민']),
                new Group(['이영래', '정승은']),
                new Group(['김종옥', '강민석']),
                new Group(['이승민', '안동건']),
                new Group(['이희덕', '이중훈']),
                new Group(['김희중', '염다혜'])
            ]
        ),
        w0822: new Week(
            [
                new Group(['최재호', '이승민']),
                new Group(['이영래', '오일승']),
                new Group(['박종호', '김종옥']),
                new Group(['이승영', '김희중']),
                new Group(['노혜란', '김담형']),
                new Group(['김혜원', '정주경']),
                new Group(['김빛나', '이희덕']),
                new Group(['임세준', '백재현']),
                new Group(['정혜선', '안동건']),
                new Group(['김선', '곽수민']),
                new Group(['박희우', '정승은']),
                new Group(['조가영', '강민석']),
                new Group(['김재진', '안동건']),
                new Group(['김앤이', '이중훈']),
                new Group(['김용현', '염다혜'])
            ]
        ),
        w0816: new Week(
            [
                new Group(['최재호', '정주경', '백재현']),
                new Group(['이중훈', '염다혜', '김종옥']),
                new Group(['이승민', '조가영', '김담형']),
                new Group(['최맑은유리', '노혜란', '정혜선']),
                new Group(['곽수민', '이희덕', '오일승']),
                new Group(['김선', '김인애', '안동건']),
                new Group(['정현호', '김희중', '김용현']),
                new Group(['박희우', '박종호', '이승영']),
                new Group(['김재진', '김혜원', '강민석']),
                new Group(['이영래', '김빛나', '임세준'])
            ]
        ),
        w0808: new Week(
            [
                new Group(['최재호', '김종옥']),
                new Group(['염다혜', '이승민']),
                new Group(['안동건', '김인애']),
                new Group(['최맑은유리', '정혜선']),
                new Group(['김혜원', '김담형']),
                new Group(['김용현', '정승은']),
                new Group(['오일승', '임세준']),
                new Group(['박희우', '김선']),
                new Group(['곽수민', '김희중']),
                new Group(['정현호', '이승영']),
                new Group(['이희덕', '정주경']),
                new Group(['이중훈', '백재현']),
                new Group(['박종호', '이영래']),
                new Group(['조가영', '노혜란']),
                new Group(['강민석', '김빛나'])
            ]
        ),
        w0802: new Week(
            [
                new Group(['최재호', '김재진']),
                new Group(['백재현', '조가영']),
                new Group(['정주경', '박희우']),
                new Group(['김혜원', '최맑은유리']),
                new Group(['김종옥', '정현호']),
                new Group(['김선', '박종호']),
                new Group(['이영래', '정혜선']),
                new Group(['안동건', '김희중']),
                new Group(['정승은', '김빛나']),
                new Group(['강민석', '곽수민']),
                new Group(['김인애', '이승영']),
                new Group(['이승민', '이중훈']),
                new Group(['김담형', '이희덕']),
                new Group(['임세준', '김용현']),
                new Group(['오일승', '노혜란'])
            ]
        ),
        w0725: new Week(
            [
                new Group(['최재호', '조가영']),
                new Group(['이희덕', '김종옥']),
                new Group(['오일승', '백재현']),
                new Group(['곽수민', '임세준']),
                new Group(['정현호', '염다혜']),
                new Group(['김인애', '이승민']),
                new Group(['김선', '김혜원']),
                new Group(['안동건', '박종호']),
                new Group(['정혜선', '김용현']),
                new Group(['김재진', '김빛나']),
                new Group(['이영래', '박희우']),
                new Group(['최맑은유리', '김희중']),
                new Group(['김담형', '정승은']),
                new Group(['이중훈', '이승영']),
                new Group(['강민석', '노혜란'])
            ]
        ),
        w0718: new Week(
            [
                new Group(['최재호', '김선']),
                new Group(['곽수민', '박희우']),
                new Group(['강민석', '정혜선']),
                new Group(['노혜란', '김용현']),
                new Group(['김희중', '김혜원']),
                new Group(['이승영', '안동건']),
                new Group(['조가영', '김재진']),
                new Group(['정현호', '김담형']),
                new Group(['오일승', '최맑은유리']),
                new Group(['김인애', '김종옥']),
                new Group(['이승민', '정승은']),
                new Group(['임세준', '전민석']),
                new Group(['이중훈', '이영래']),
                new Group(['염다혜', '김빛나']),
                new Group(['박종호', '이희덕'])
            ]
        ),
        w0711: new Week(
            [
                new Group(['최재호', '곽수민']),
                new Group(['김인애', '오일승']),
                new Group(['이승민', '조가영']),
                new Group(['노혜란', '김재진']),
                new Group(['전민석', '안동건']),
                new Group(['정승은', '정혜선']),
                new Group(['임세준', '이희덕']),
                new Group(['이영래', '김담형']),
                new Group(['이승영', '이중훈']),
                new Group(['정현호', '박종호']),
                new Group(['최맑은유리', '김희중']),
                new Group(['염다혜', '강민석']),
                new Group(['김선', '김용현']),
                new Group(['김혜원', '김빛나']),
                new Group(['박희우', '김종옥']),
            ]
        ),
        w0704: new Week(
            [
                new Group(['최재호', '김담형']),
                new Group(['이승영', '최맑은유리']),
                new Group(['이희덕', '이승민']),
                new Group(['김희중', '이영래']),
                new Group(['정혜선', '곽수민']),
                new Group(['정승은', '노혜란']),
                new Group(['김혜원', '김재진']),
                new Group(['강민석', '조가영']),
                new Group(['박종호', '김용현']),
                new Group(['정현호', '김빛나']),
                new Group(['박희우', '오일승']),
                new Group(['전민석', '김인애']),
                new Group(['김종옥', '안동건']),
                new Group(['이중훈', '임세준']),
                new Group(['김선', '염다혜']),
            ]
        )
    };

    window.chinbapHistory = chinbapHistory;
});