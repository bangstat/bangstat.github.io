var CARDS = [
  [0,"모두 함께 놀이동산!",0,4,0,13427,10382,8558,0.4,8],
  [1,"시작의 소리",0,4,2,11266,11979,10082,0.4,8],
  [2,"깔맞춤 슈슈",3,4,2,14050,8038,10042,0.4,8],
  [3,"행복의 공유",1,4,3,8098,14113,9982,0.4,8],
  [4,"파자마로 홈 파티",1,4,0,11920,11327,10142,0.4,8],
  [5,"귀여운 친구들",4,4,1,10926,9421,12605,0.4,8],
  [6,"잔뜩 핀 벚꽃 아래에서",4,4,2,10496,11831,11415,0.4,8],
  [7,"초코 소라빵의 시간",2,4,0,8098,10103,13990,1,7],
  [8,"가련한 아기 고양이",2,4,2,10496,11533,11710,0.4,8],
  [9,"여기에 있다는 증거",5,4,2,9722,11071,12457,1,7],
  [10,"받아들이고 싶은 마음",6,4,1,11770,10438,11475,0.4,8],
  [11,"파자마를 입은 환자",8,4,0,12662,10863,9362,0.6,7.5],
  [12,"동경의 너머",10,4,0,12940,9107,10596,1,7],
  [13,"소중한 쪽지",11,4,3,9722,12574,10951,0.4,8],
  [14,"마음 편한 친구",12,4,2,8922,13336,10474,1,7],
  [15,"새장 속 디바",15,4,1,14050,8038,10042,1,7],
  [16,"둘이서 보내는 칠석",16,4,3,10321,13486,8489,1,7],
  [17,"익숙하지 않은 전화",19,4,1,11000,10467,12193,0.4,8],
  [18,"토모에만의 간호사",18,4,0,12036,10199,11415,0.4,8],
  [19,"눈부신 햇살",17,4,1,8677,11022,12940,1,7],
  [20,"선상의 명탐정",20,4,3,11383,10199,11860,1,7],
  [21,"토끼 헌트",23,4,3,11000,11889,10765,0.4,8],
  [22,"모두 함께 꽃놀이",0,3,1,7849,9345,11681,0.6,7],
  [23,"약속한 캔디",0,3,3,8656,12621,6729,0.6,7],
  [24,"모두의 노래",1,3,2,12566,8712,6783,0.6,7],
  [25,"토끼 대작전",1,3,1,8349,10150,10763,0.2,8],
  [26,"쥐어 짜낸 용기",2,3,1,9257,10193,10340,0.6,7],
  [27,"동경하는 언니",2,3,3,12429,7061,8849,0.2,8],
  [28,"소중한 시간",3,3,0,9257,10445,10074,0.2,8],
  [29,"열심히 해 빵",3,3,0,7849,11790,9239,0.2,8],
  [30,"단 하루의 신부",3,3,1,9235,8859,11163,0.2,8],
  [31,"믿음직한 조력자",4,3,3,9529,11244,8188,0.2,8],
  [32,"이상한 나라의 아리사",4,3,3,7634,9722,11438,0.6,7],
  [33,"노을의 추억",5,3,2,6895,9293,12125,0.2,8],
  [34,"더 이상 헤매지 않아",5,3,0,10393,9202,10128,0.6,7],
  [35,"소꿉친구의 의미",6,3,3,8766,6838,12513,0.2,8],
  [36,"신기한 부적",7,3,2,11874,9152,7523,0.6,7],
  [37,"셋이서 물놀이",7,3,1,11033,8509,9718,0.3,7.5],
  [38,"솔직하지 못한 녀석",8,3,1,7113,12484,8791,0.2,8],
  [39,"결혼식의 난입자",8,3,2,8093,11491,9209,0.6,7],
  [40,"밴드, 하자!",9,3,1,10358,10089,8805,0.6,7],
  [41,"시작은 언제나",9,3,0,10527,9997,8939,0.2,8],
  [42,"필살 아이돌 포즈☆",10,3,2,10527,9997,8939,0.2,8],
  [43,"칠석날의 점원",10,3,0,10249,10025,9413,0.2,8],
  [44,"미지수인 존재",11,3,0,8564,9769,11005,0.2,8],
  [45,"수 광년의 빛",11,3,1,11736,7794,9292,0.6,7],
  [46,"목표로 한 여정",12,3,1,12566,8712,6783,0.2,8],
  [47,"새하얀 장소",12,3,0,9074,10685,9945,0.2,8],
  [48,"원래 모습",13,3,2,9945,10577,8884,0.6,7],
  [49,"감동의 눈물",13,3,0,8244,8078,11988,0.3,7.5],
  [50,"무사는 필요한 때 상대를 도운다",14,3,3,9100,11924,7470,0.2,8],
  [51,"모델 모드",14,3,1,8778,11272,9205,0.2,8],
  [52,"마음을 담은 꽃다발",14,3,2,9705,10498,9494,0.3,7.5],
  [53,"디바의 각오",15,3,3,11192,9581,8242,0.6,7],
  [54,"넷이서 카페테리아",15,3,1,10629,8990,10074,0.2,8],
  [55,"쌍둥이의 고뇌",16,3,1,9100,11924,7470,0.6,7],
  [56,"노력의 흔적",17,3,2,9529,11244,8188,0.2,8],
  [57,"필수불가결한 존재",17,3,3,7582,11706,8821,0.6,7],
  [58,"작은 마왕",18,3,0,10393,9202,10128,0.6,7],
  [59,"한결같은 향상심",18,3,1,7113,8901,12375,0.2,8],
  [60,"나, 어떻게 하지…",19,3,1,9636,8291,11138,0.2,8],
  [61,"순수한 열의",19,3,2,9257,10445,10074,0.6,7],
  [62,"추천받은 수영복",19,3,3,11030,9672,8093,0.2,8],
  [63,"무적의 히어로",20,3,0,10048,8990,10472,0.6,7],
  [64,"꽃놀이 스페셜!",20,3,2,11056,8509,9718,0.6,7],
  [65,"세상을 물들이는 연기자",21,3,1,8766,6838,12513,0.6,7],
  [66,"괴도 헬로해피",21,3,3,8564,11111,9663,0.2,8],
  [67,"다 같이 하나~둘!",22,3,3,7113,12484,8791,0.2,8],
  [68,"건강함의 근원",22,3,2,8829,11464,8502,0.2,8],
  [69,"내딛은 한 걸음",23,3,2,9636,8291,11138,0.2,8],
  [70,"미셸의 비밀",24,3,3,10048,8990,10472,0.6,7],
  [71,"사랑의 고백",24,3,0,9209,7579,11819,0.2,8],
  [72,"스테이지",0,2,0,6398,4215,5043,0.3,7],
  [73,"최초의 손님",0,2,2,3696,5019,6583,0.1,8],
  [74,"스테이지",1,2,3,5074,5741,5533,0.1,8],
  [75,"스테이지",2,2,2,6127,5119,4485,0.1,8],
  [76,"스테이지",3,2,3,3819,6780,4747,0.1,8],
  [77,"다정한 간식",3,2,0,4782,6172,5023,0.3,7],
  [78,"스테이지",4,2,1,5261,4514,6098,0.1,8],
  [79,"다섯 명이서 합숙",4,2,0,6474,4958,4064,0.1,8],
  [80,"스테이지",5,2,0,5711,5046,5563,0.1,8],
  [81,"스테이지",6,2,2,6715,3788,4776,0.1,8],
  [82,"그리운 음원",7,2,1,4543,5545,5888,0.3,7],
  [83,"스테이지",7,2,3,6751,3788,4776,0.1,8],
  [84,"오래된 소꿉친구",8,2,3,4124,5284,6233,0.1,8],
  [85,"스테이지",8,2,1,4665,5335,6023,0.1,8],
  [86,"스테이지",9,2,0,5711,5046,5563,0.1,8],
  [87,"유성우",9,2,2,4787,6248,4606,0.1,8],
  [88,"따뜻한 기분",9,2,1,6322,5013,4304,0.1,8],
  [89,"스테이지",10,2,2,5202,6145,4454,0.3,7],
  [90,"온 힘으로 응원",10,2,0,4953,6338,4351,0.1,8],
  [91,"1일 점장",10,2,1,6037,4631,5306,0.1,8],
  [92,"스테이지",11,2,3,5074,5593,5681,0.1,8],
  [93,"소중한 계기",11,2,0,6006,5254,4381,0.3,7],
  [94,"무대의 뒷면",11,2,2,4456,4893,6293,0.3,7],
  [95,"스테이지",12,2,0,5785,5489,4897,0.1,8],
  [96,"하트의 여왕님",12,2,2,4443,4353,6507,0.3,7],
  [97,"스테이지",13,2,1,3819,6780,4747,0.1,8],
  [98,"드럼과의 만남",13,2,3,4955,5800,5547,0.1,8],
  [99,"스테이지",14,2,1,5074,5741,5533,0.1,8],
  [100,"꿈꿔온 꽃놀이",14,2,2,4999,4094,6443,0.1,8],
  [101,"무사도의 정신",14,2,3,5664,5517,4799,0.1,8],
  [102,"스테이지",15,2,0,4235,5074,6469,0.1,8],
  [103,"스테이지",16,2,2,3819,4807,6720,0.1,8],
  [104,"거듭하고 싶은 소리",16,2,3,4245,6428,5013,0.1,8],
  [105,"여름의 소프트아이스크림",16,2,0,4743,4590,6308,0.1,8],
  [106,"스테이지",17,2,1,4245,5074,6469,0.1,8],
  [107,"지켜보는 마음",17,2,1,4938,6505,4034,0.3,7],
  [108,"두 사람을 이어 줘",17,2,3,5281,5384,5634,0.3,7],
  [109,"스테이지",18,2,1,4665,6076,5276,0.3,7],
  [110,"결혼식 참석!",18,2,3,5037,4828,6116,0.1,8],
  [111,"다 함께 재충전",18,2,1,5326,5059,5920,0.1,8],
  [112,"튜브와 바다",18,2,2,4953,4365,6322,0.1,8],
  [113,"스테이지",19,2,3,4245,6428,5013,0.1,8],
  [114,"스테이지",20,2,2,6056,4631,5306,0.1,8],
  [115,"스테이지",21,2,1,4665,5335,6023,0.1,8],
  [116,"공주를 지키는 왕자님",21,2,2,4381,6264,4999,0.1,8],
  [117,"스테이지",22,2,3,4670,6856,3607,0.3,7],
  [118,"귀여운 탐정님",22,2,2,6826,4699,3638,0.1,8],
  [119,"스테이지",23,2,0,5518,4928,5755,0.1,8],
  [120,"붙잡힌 공주님",23,2,3,4731,3668,6796,0.3,7],
  [121,"별의 직녀",23,2,1,5978,5261,4738,0.1,8],
  [122,"스테이지",24,2,3,6056,4631,5306,0.1,8],
  [123,"벚꽃 미셸",24,2,0,5458,5815,4865,0.1,8],
  [124,"저돌맹진!",0,1,2,1985,2478,3436,0.1,7],
  [125,"천연 뷰티",1,1,1,2673,3153,2303,0.1,7],
  [126,"초코사랑",2,1,0,3487,2425,1893,0.1,7],
  [127,"모두의 언니",3,1,0,2198,3291,2582,0.1,7],
  [128,"내숭 떠는 우등생",4,1,3,2929,2598,2855,0.1,7],
  [129,"쿨한 의리파",5,1,2,3450,1970,2463,0.1,7],
  [130,"마이 페이스",6,1,1,2574,2125,3299,0.1,7],
  [131,"모두의 리더!",7,1,3,2710,2332,3125,0.1,7],
  [132,"믿음직한 여장부",8,1,0,2612,2871,2916,0.1,7],
  [133,"모두의 버팀목",9,1,2,2673,3153,2303,0.1,7],
  [134,"핑크 담당☆",10,1,0,2544,3330,2097,0.1,7],
  [135,"천재 소녀",11,1,1,2441,1909,3473,0.1,7],
  [136,"철벽의 미소",12,1,3,2410,3503,1879,0.1,7],
  [137,"오타쿠 드러머",13,1,2,1985,2478,3436,0.1,7],
  [138,"무사도~!",14,1,2,2574,2125,3299,0.1,7],
  [139,"고고한 디바",15,1,1,3305,2560,2103,0.1,7],
  [140,"고지식한 노력가",16,1,1,1985,3464,2448,0.1,7],
  [141,"무드 메이커☆",17,1,3,2835,2538,2953,0.1,7],
  [142,"멋있다! 드러머",18,1,0,2835,2538,2953,0.1,7],
  [143,"사람 많은 건 질색",19,1,2,3140,2690,2320,0.1,7],
  [144,"하나사키가와의 이공간",20,1,3,2968,2819,2524,0.1,7],
  [145,"소문의 왕자님",21,1,3,2805,2982,2508,0.1,7],
  [146,"스마일 캡틴",22,1,0,3305,2560,2103,0.1,7],
  [147,"차분한 소녀",23,1,2,3140,2690,2320,0.1,7],
  [148,"뭐든 적당히",24,1,1,2544,3330,2097,0.1,7],
  [149,"해질녘, 멋부릴 준비",3,4,3,12484,10963,9196,1,7],
  [150,"손을 잡으면",1,3,3,8232,9017,11544,0.3,7.5],
  [151,"소프트 소라빵♪",2,2,3,6233,4335,5074,0.3,7],
  [152,"비밀 장소",4,3,0,11491,8204,9100,0.2,8],
  [153,"선서! 불꽃놀이!",0,2,3,6355,4989,3957,0.3,7],
  [154,"ガルパカフェ♪2017",0,2,0,5227,6278,4405,0.1,8],
  [155,"ガルパカフェ♪2017",5,2,1,6930,3675,4758,0.3,7],
  [156,"ガルパカフェ♪2017",10,2,2,4635,6194,5309,0.1,8],
  [157,"ガルパカフェ♪2017",15,2,3,6492,4992,3858,0.3,7],
  [158,"ガルパカフェ♪2017",20,2,3,4766,6296,5030,0.1,8],
  [159,"잊어버린 물건과 유령",7,4,0,10321,13486,8489,1,7],
  [160,"학교 7대 불가사의",6,3,0,9209,7579,11819,0.3,7.5],
  [161,"계단 괴담",8,2,0,4671,6070,5229,0.3,7],
  [162,"무서움은 반반씩",5,3,1,10358,10089,8805,0.3,7.5],
  [163,"용사 츠구",9,2,3,5634,5504,5161,0.1,8],
  [164,"옛날 별명",21,4,2,13122,10474,9042,1,7],
  [165,"학생회의 일",9,3,2,8726,11081,9890,0.3,7.5],
  [166,"둘의 서포트",13,2,2,5186,6023,4768,0.3,7],
  [167,"줄리엣이라는 이름",12,3,2,10843,8912,9503,0.2,8],
  [168,"로맨틱",17,2,2,5413,5711,5277,0.1,8],
  [169,"ローソンコラボ2017",0,2,1,4709,3539,6982,0.3,7],
  [170,"ローソンコラボ2017",5,2,3,5511,5901,4858,0.1,8],
  [171,"ローソンコラボ2017",10,2,1,7014,4674,3507,0.3,7],
  [172,"ローソンコラボ2017",15,2,2,5209,6129,4747,0.1,8],
  [173,"ローソンコラボ2017",20,2,0,3572,5026,6745,0.3,7],
  [174,"나의 소중한 것",24,4,1,9750,12544,10863,1,7],
  [175,"도와주고 싶어서",23,3,1,10926,9636,8696,0.3,7.5],
  [176,"이글이글!",22,2,1,5171,4799,6006,0.1,8],
  [177,"해피 혁명!",20,3,3,9865,10393,9441,0.3,7.5],
  [178,"이것도 덧없다",21,2,0,5844,4928,5533,0.1,8],
  [179,"진심・서바이벌",13,4,3,9481,11492,12180,0.6,7.5],
  [180,"진심・패닉",12,3,3,8939,9422,10897,0.6,7],
  [181,"진심・대기……",10,2,3,4470,6279,4893,0.3,7],
  [182,"진심・흔들흔들!",11,3,2,8593,11084,9581,0.3,7.5],
  [183,"진심・무념무상",14,2,0,6432,4033,4837,0.3,7],
  [184,"견습 마녀",20,4,0,10258,11949,11443,1,7],
  [185,"마법사 미셸",24,3,0,9503,11005,8750,0.6,7],
  [186,"수줍은 천사",2,2,0,5607,5267,5429,0.1,8],
  [187,"섹시 뱀파이어",7,3,0,8259,11520,9017,0.3,7.5],
  [188,"처음 해보는 고양이 귀",15,2,1,5384,5222,5696,0.1,8],
  [189,"バーーーン！と登場",20,2,2,5001,4009,6595,0.3,7],
  [190,"バーーーン！と登場",21,2,3,4635,5372,6129,0.1,8],
  [191,"バーーーン！と登場",22,2,0,5087,5820,5590,0.1,8],
  [192,"バーーーン！と登場",23,2,2,4938,6659,3343,0.3,7],
  [193,"バーーーン！と登場",24,2,1,6163,4602,5341,0.1,8],
  [194,"가을 하늘, 그 앞에",15,4,2,11582,12632,10172,0.6,7.5],
  [195,"빗소리와 눈물",16,3,2,8778,10063,11244,0.3,7.5],
  [196,"소소한 걱정",19,2,2,6428,3396,5284,0.3,7],
  [197,"영원한 동경!",18,3,2,11344,10010,8830,0.2,8],
  [198,"없어서는 안 될 존재",17,2,0,4973,5137,5964,0.1,8],
  [199,"진지한 대결의 웃는 얼굴",22,4,1,10621,12366,11403,0.6,7.5],
  [200,"빵 먹기 경주!",1,3,1,11005,9235,10130,0.3,7.5],
  [201,"스포츠맨십",4,2,1,5125,3396,6488,0.3,7],
  [202,"영차? 영차!",10,3,3,9617,8121,11899,0.2,8],
  [203,"백팀 응원단?",24,2,2,4841,6142,5455,0.1,8],
  [204,"과자 선생님",9,4,3,12726,10084,11285,1,7],
  [205,"대충 분량대로",11,3,3,9126,10089,11138,0.3,7.5],
  [206,"파스텔 메이드",14,2,3,4904,5948,5126,0.3,7],
  [207,"쿠키 만들기",16,3,0,7390,12375,9400,0.6,7],
  [208,"블루 로즈 메이드",19,2,0,6155,5470,4813,0.1,8],
  [209,"최고의 환대",14,4,0,11161,10203,12726,1,7],
  [210,"다 같이 종이접기",0,3,0,8886,11220,9984,0.65,7],
  [211,"자신다운 좋은 점",7,2,0,4411,6428,5270,0.3,7],
  [212,"변신술?",23,3,0,11790,8121,9722,0.2,8],
  [213,"보호자 대신",4,2,2,5381,4904,6155,0.2,8],
  [214,"진심으로 도전",17,4,2,10084,12695,11312,1.1,7],
  [215,"최고의 업무동료",6,3,2,9850,8992,11244,0.65,7],
  [216,"팝핀&해피",5,2,2,5254,6459,4396,0.1,8],
  [217,"리사다운 가사",15,3,2,9672,11848,8121,0.2,8],
  [218,"팝핀&애프터",20,2,1,6155,4841,5440,0.1,8],
  [219,"메리・서프라이즈!",3,4,1,11256,12632,10103,1.1,7],
  [220,"다 함께 크리스마스",4,3,1,11005,9235,10130,0.3,7.5],
  [221,"돌격 산타",0,2,1,6308,5435,4515,0.1,8],
  [222,"파티 준비",2,3,0,8147,11790,9698,0.3,7.5],
  [223,"수염 산타",1,2,1,3940,5097,6735,0.3,7],
  [224,"등신대의 밤하늘",5,4,3,10713,12061,11312,1.1,7],
  [225,"소중히 간직해둔 장소",7,3,3,11033,10150,9178,0.3,7.5],
  [226,"밤하늘을 올려다보며",9,2,3,6474,5299,4335,0.3,7],
  [227,"말로 할 수 없는 것",8,3,0,9705,10230,9759,0.2,8],
  [228,"작은 성장?",6,2,3,5425,6116,4904,0.1,8],
  [229,"決意の一歩",23,4,0,12726,11343,10020,1.1,7],
  [230,"可愛いモノづくし！",22,3,0,9931,11163,8992,0.6,7],
  [231,"アタシもペンギン！",20,2,0,4683,6203,5374,0.1,8],
  [232,"とても儚い生き物",21,3,2,9476,8805,10977,0.3,7.5],
  [233,"ペンギン？ クマ？",24,2,1,3940,5097,6735,0.3,7],
  [234,"初めてのお餅つき",14,4,2,12006,11371,10713,1.1,7],
  [235,"正月は楽しいことだらけ",20,4,2,12487,11492,10412,0.6,7.5],
  [236,"かわいい晴れ着",19,3,2,9476,10038,10574,0.65,7],
  [237,"レポーターのお仕事",13,3,3,9374,7223,12566,0.6,7],
  [238,"巫女の助勤",8,2,2,3973,6720,5081,0.3,7],
  [239,"魅惑の手",16,4,0,11461,11312,11371,1.15,7],
  [240,"私達のポスター",10,4,2,11371,11343,11433,1.15,7],
  [241,"最高のステージに！",0,4,1,9961,11403,12726,1,7],
  [242,"前だけを向こう",1,4,1,11161,10263,12662,1.1,7],
  [243,"緊張してきちゃった",2,3,1,10229,11163,8967,0.3,7.5],
  [244,"たくさんの思い出の品",3,3,3,11603,8612,9428,0.2,8],
  [245,"楽しむ演奏",4,2,3,6142,5381,4917,0.1,8],
  [246,"深淵のネクロマンサー",18,4,3,10741,11371,11974,1.1,7],
  [247,"孤高のウィザード",19,4,3,11223,12426,10440,1,7],
  [248,"新米タンク",16,3,3,11244,8886,9959,0.65,7],
  [249,"ビギナーヒーラー",17,3,1,9022,9878,11192,0.2,8],
  [250,"初心者バード",15,2,3,6293,5074,4743,0.1,8],
  [251,"ドキドキの瞬間",4,4,0,12695,11161,10233,1.1,7],
  [252,"お菓子作りはおまかせ",17,4,0,12457,10472,11461,0.6,7.5],
  [253,"秘密の時間",15,3,0,10010,10977,9368,0.3,7.5],
  [254,"楽しい試食会",9,3,3,9317,8829,11491,0.2,8],
  [255,"食欲は無限大",6,2,1,5171,5485,5784,0.1,8],
  [256,"果敢にチャレンジ",13,4,2,11193,12366,10533,1,7],
  [257,"教えてあげる！",22,4,2,11285,10562,12243,1.1,7],
  [258,"冬仕様",24,3,2,9422,9984,10950,0.3,7.5],
  [259,"ゲレンデサイコー！",11,3,0,9904,10977,9205,0.2,8],
  [260,"スキーは得意",18,2,0,6322,4666,5121,0.1,8],
  [261,"たった一人のあたし",11,4,1,12214,11223,10654,1.1,7],
  [262,"お泊まり会",12,4,1,12515,10741,11132,0.6,7.5],
  [263,"丸山、入ります！",10,3,1,9878,10926,9287,0.65,7],
  [264,"流行りのヘアアレンジ",14,3,3,7330,9427,12404,0.6,7],
  [265,"謙虚系アイドル",13,2,0,4365,5299,6443,0.1,8],
  [266,"主役登場！",21,4,3,11161,10381,12544,1.1,7],
  [267,"汗のしずくも儚い",24,4,3,12366,10772,11256,0.6,7.5],
  [268,"ダンスレッスン",7,3,3,10602,10038,9448,0.65,7],
  [269,"王子様に癒されて",22,3,0,9448,10655,9984,0.2,8],
  [270,"儚く行くぜ！",8,2,1,4697,5105,6308,0.1,8],
  [271,"期待を超えるために",6,4,3,11276,11433,11403,1.15,7],
  [272,"買い物も一生懸命",23,4,1,11312,11793,11492,1.15,7],
  [273,"変わらない友情",5,4,0,12426,11371,10592,0.6,7.5],
  [274,"さらなる高みへ",15,4,0,11193,10772,12125,1.1,7],
  [275,"みんなとのライブ",0,3,0,10089,10871,9396,0.3,7.5],
  [276,"みんな、行くわよー！",20,3,1,10714,9448,9931,0.2,8],
  [277,"目指す理想のアイドル",10,3,0,7417,12285,9455,0.6,7],
  [278,"私達・参上っ！",7,4,3,12395,10741,11256,0.6,7.5],
  [279,"永遠の夕日",8,4,3,10233,11193,12662,1.1,7],
  [280,"たこのタオル",5,3,3,10977,10038,9340,0.3,7.5],
  [281,"ちょっと寄り道",6,3,0,9345,8798,11491,0.2,8],
  [282,"大事な忘れ物",9,2,0,5081,6810,3881,0.3,8],
  [283,"仮入部員",19,4,2,12125,10713,11256,1.1,7],
  [284,"正射必中",16,4,2,10348,11433,12605,0.6,7.5],
  [285,"不屈の剣士",14,3,2,11056,9476,9824,0.3,7.5],
  [286,"堅実プレーヤー",24,3,1,8076,9751,11819,0.2,8],
  [287,"見事なお点前",23,2,0,5124,6568,4078,0.3,7],
  [288,"私のブシドー！",14,4,1,10684,12335,11371,0.6,7.5],
  [289,"お宝発見！",13,4,1,12152,10713,11223,1.1,7],
  [290,"グッズ紹介",11,3,1,9850,9048,11192,0.65,7],
  [291,"SNS映え?",10,3,2,9555,9850,10682,0.2,8],
  [292,"アイドルのルール",12,2,1,6279,5043,4787,0.1,8],
  [293,"マリー・アンドロメダ",22,4,0,10802,12214,11371,0.6,7.5],
  [294,"ミッシェルからの伝言",24,4,0,12457,10951,10684,1.1,7],
  [295,"応援の舞",21,2,0,5440,5978,5171,0.1,8],
  [296,"巻き込まれ舞踏会",23,3,3,9476,9663,10950,0.2,8],
  [297,"ふわキャラ大好き！",20,2,1,6701,3940,5124,0.3,7],
  [298,"星空を見上げて",0,4,3,10802,12061,11223,1.1,7],
  [299,"やる気の問題？",2,4,3,12125,10654,11285,1,7],
  [300,"沙彩の告白",3,3,3,11220,9850,9022,0.65,7],
  [301,"昼下がりのハンバーグ",1,3,0,9373,8746,11520,0.2,8],
  [302,"思いを込めたノート",4,3,2,9798,10843,9448,0.2,8],
  [303,"GOGO WEGO！",3,2,1,4831,6263,5504,0.1,8],
  [304,"GOGO WEGO！",6,2,2,6543,4140,5052,0.3,7],
  [305,"GOGO WEGO！",11,2,3,5249,4340,6645,0.1,8],
  [306,"GOGO WEGO！",17,2,0,4766,5554,6278,0.1,8],
  [307,"GOGO WEGO！",24,2,0,6627,5334,4273,0.1,8],
  [308,"強制連行",1,4,2,11734,10983,11433,1.15,7],
  [309,"ファン第１号",18,4,1,11193,11550,11403,1.15,7],
  [310,"トキメキ展開！？",9,4,2,11343,12426,10621,0.6,7.5],
  [311,"謎の美少女",6,4,2,11223,10772,12105,1,7],
  [312,"おもしろいかも？",5,2,2,538,4932,6127,0.3,7],
  [313,"守ってみせる！",8,3,3,10789,9904,9396,0.2,8],
  [314,"止まらぬ空想",7,2,1,4426,6264,5429,0.1,8],
  [315,"こぼれ落ちる涙",15,4,3,10832,11161,12105,1,7],
  [316,"クッキーをもう１度",17,4,3,12453,11013,10621,1.1,7],
  [317,"みんなでティータイム",18,3,3,9368,10926,10063,0.3,7.5],
  [318,"今度は私が",16,3,2,9959,9313,10815,0.2,8],
  [319,"決意の叫び",19,3,0,11464,8475,9698,0.2,8],
  [320,"和太鼓の魅力",8,4,1,11433,12303,10654,0.6,7.5],
  [321,"雨でも晴ればれ",20,4,1,12125,10621,11343,1.1,7],
  [322,"雨とともに",16,3,1,10150,9048,11163,0.3,7.5],
  [323,"気合い十分",0,3,2,11005,9663,9422,0.2,8],
  [324,"あっち側とこっち側",24,2,3,4647,5148,6308,0.1,8],
  [325,"星降る夜の出会い",11,4,0,10741,10951,12395,1,7],
  [326,"儚い名演技",21,4,0,10832,12243,11312,0.6,7.5],
  [327,"蘭のアイコンタクト",5,2,0,5904,5411,5126,0.3,7],
  [328,"幽霊とか絶対ムリ！",17,3,0,9400,7169,12594,0.6,7],
  [329,"心躍るビート",13,2,1,5858,5156,5425,0.1,8],
  [330,"夢を与えるアイドル",10,4,3,11102,12273,10713,1.1,7],
  [331,"夢に続く道",12,4,3,10713,10983,12395,1,7],
  [332,"日菜の願い事",11,3,3,9529,10655,9904,0.2,8],
  [333,"分かち合いたい！",14,3,0,11874,9751,8012,0.2,8],
  [334,"アイドルとは",13,3,3,10926,9503,9931,0.3,7.5],
  [335,"おもいでめぐり",0,4,1,11492,10263,12632,0.6,7.5],
  [336,"ふたりのはじまり",22,4,1,12515,10889,10684,1,7],
  [337,"思い出の短冊",4,3,1,9607,10575,9901,0.65,7],
  [338,"パペットショー",3,3,2,9698,11848,8093,0.2,8],
  [339,"笑顔の逢瀬",20,2,2,5440,5081,5917,0.1,8],
  [340,"なんでこうなるかな",24,4,2,10684,11312,12395,0.6,7.5],
  [341,"勇気を出して",23,4,2,11343,10772,11974,1,7],
  [342,"わくわく大発見",20,3,2,11005,9718,9368,0.65,7],
  [343,"私がついてる",21,3,0,9769,10815,9503,0.2,8],
  [344,"大冒険！",22,2,3,6248,4590,5270,0.1,8],
  [345,"スカーレット",5,4,1,12214,10684,11193,1,7],
  [346,"キューティ",7,4,1,10771,10863,12457,1.1,7],
  [347,"ハラペコ",6,3,1,10737,9448,9904,0.6,7],
  [348,"バリスタ",9,3,3,9448,9690,10950,0.2,8],
  [349,"フェスタ",8,3,0,8666,9398,11572,0.2,8],
  [350,"有咲のブシドー！？",4,4,3,10654,10889,12544,1,7],
  [351,"海辺のポージング",14,4,3,12487,10713,11193,0.6,7.5],
  [352,"真夏のジャンプ",22,3,3,9769,10763,9555,0.65,7],
  [353,"ご褒美のスイカ",1,3,2,11056,9609,9422,0.2,8],
  [354,"お魚さんと競争！",20,2,0,5058,4787,6264,0.1,8],
  [355,"心安らぐ場所",9,4,0,11285,11371,11429,1.15,7],
  [356,"練習開始！",13,4,3,11582,11132,11433,1.15,7],
  [357,"姉のプライド",8,4,2,9901,9090,15098,1,7],
  [358,"追いかけていたい",18,4,2,8759,10412,15216,0.6,7.5],
  [359,"暑すぎ......",5,3,2,9609,10549,9931,0.65,7],
  [360,"二人仲良く",7,3,1,11378,8456,9448,0.2,8],
  [361,"私に言えること",16,2,2,5142,6552,4078,0.3,7],
  [362,"光満ちる水の中で",15,4,1,12335,11312,10741,0.6,7.5],
  [363,"煌めく水の魔法",16,4,1,10892,11974,11224,1.1,7],
  [364,"ぐるぐるレッツゴー！",18,3,1,10150,9422,10789,0.3,7.5],
  [365,"真夏のサンライト",17,3,2,10737,9396,9959,0.2,8],
  [366,"水際のマーメイド",19,2,3,3924,5079,6751,0.3,7],
  [367,"うさぎに見えるもの",1,4,0,9022,10380,15506,1,7],
  [368,"キラキラの笑顔",3,4,0,10380,9300,15527,0.6,7.5],
  [369,"休日のショコラ",2,3,0,11080,9621,10391,0.3,7.5],
  [370,"レッツ・シング♪",0,3,3,9842,10913,10053,0.2,8],
  [371,"有咲のセッション",4,2,3,6233,4601,5156,0.1,8],
  [372,"変わりゆく空",5,4,3,11071,12243,10772,1,7],
  [373,"隣にいること",6,4,3,12243,10983,10863,1.1,7],
  [374,"アタシ達の夕焼け",8,3,3,9850,9154,11084,0.65,7],
  [375,"止まっていた時間",7,3,0,8582,9479,11572,0.2,8],
  [376,"気づいた『変化』",9,3,1,10714,9368,10010,0.2,8],
  [377,"陽だまりのひととき",12,4,0,15128,10113,8851,1.1,7],
  [378,"秋空の下でピクニック",23,4,0,15160,9061,10172,0.6,7.5],
  [379,"初めてのラテアート",10,2,0,5590,5858,5137,0.1,8],
  [380,"木漏れ日の中で",24,3,2,8719,9454,11464,0.2,8],
  [381,"カフェラテの香り",21,2,1,4093,6523,5156,0.3,7],
  [382,"アヤ・オー・ランタン",10,4,1,8851,15098,10143,1,7],
  [383,"イタズラデビル",11,4,1,10172,15128,9090,0.6,7.5],
  [384,"スウィートキャット",13,3,1,9396,10130,10843,0.3,7.5],
  [385,"アイドル・ウィッチ",12,3,0,12513,9481,7176,0.6,7],
  [386,"可憐な吸血鬼",14,2,1,5873,5126,5440,0.1,8],
  [387,"基礎を大事に",2,4,1,11343,11521,11285,1.15,7],
  [388,"受け取ってほしい",21,4,2,11285,11312,11550,1.15,7],
  [389,"キラキラのお日様",20,4,0,10221,11330,9982,1.1,7],
  [390,"ここがあたしの居場所",24,4,0,10191,10013,11330,1,7],
  [391,"みんなの力を合わせて",23,3,0,10333,8748,9178,0.3,7.5],
  [392,"笑顔のために！",22,3,1,8696,8909,10384,0.2,8],
  [393,"自分は自分",21,3,1,10820,8592,8129,0.2,8],
];
