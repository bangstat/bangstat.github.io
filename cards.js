var CARDS = [
  [0,"みんなで遊園地！",0,4,0,13427,10382,8558,0.4,8],
  [1,"はじまりの音",0,4,2,11266,11979,10082,0.4,8],
  [2,"おそろいのシュシュ",3,4,2,14050,8038,10042,0.4,8],
  [3,"しあわせの共有",1,4,3,8098,14113,9982,0.4,8],
  [4,"パジャマでお邪魔",1,4,0,11920,11327,10142,0.4,8],
  [5,"可愛いともだち",4,4,1,10926,9421,12605,0.4,8],
  [6,"満開の桜の下で",4,4,2,10496,11831,11415,0.4,8],
  [7,"チョココロネな時間",2,4,0,8098,10103,13990,1,7],
  [8,"可憐な子猫ちゃん",2,4,2,10496,11533,11710,0.4,8],
  [9,"ここにいる証",5,4,2,9722,11071,12457,1,7],
  [10,"受け止めたい思い",6,4,1,11770,10438,11475,0.4,8],
  [11,"パジャマ姿の患者さん",8,4,0,12662,10863,9362,0.6,7.5],
  [12,"憧れの先",10,4,0,12940,9107,10596,1,7],
  [13,"大切な短冊",11,4,3,9722,12574,10951,0.4,8],
  [14,"心許せる仲間",12,4,2,8922,13336,10474,1,7],
  [15,"鳥籠の歌姫",15,4,1,14050,8038,10042,1,7],
  [16,"二人で過ごす七夕",16,4,3,10321,13486,8489,1,7],
  [17,"慣れない電話",19,4,1,11000,10467,12193,0.4,8],
  [18,"巴だけの看護師さん",18,4,0,12036,10199,11415,0.4,8],
  [19,"眩しい日射し",17,4,1,8677,11022,12940,1,7],
  [20,"船上の名探偵",20,4,3,11383,10199,11860,1,7],
  [21,"うさぎハント",23,4,3,11000,11889,10765,0.4,8],
  [22,"みんなでお花見",0,3,1,7849,9345,11681,0.6,7],
  [23,"約束のキャンディ",0,3,3,8656,12621,6729,0.6,7],
  [24,"みんなのうた",1,3,2,12566,8712,6783,0.6,7],
  [25,"うさぎ大作戦",1,3,1,8349,10150,10763,0.2,8],
  [26,"振り絞った勇気",2,3,1,9257,10193,10340,0.6,7],
  [27,"憧れのお姉ちゃん",2,3,3,12429,7061,8849,0.2,8],
  [28,"大切な時間",3,3,0,9257,10445,10074,0.2,8],
  [29,"がんばれパン",3,3,0,7849,11790,9239,0.2,8],
  [30,"1日だけの新婦",3,3,1,9235,8859,11163,0.2,8],
  [31,"頼れる協力者",4,3,3,9529,11244,8188,0.2,8],
  [32,"不思議の国のアリサ",4,3,3,7634,9722,11438,0.6,7],
  [33,"夕影の思い出",5,3,2,6895,9293,12125,0.2,8],
  [34,"断ち切った迷い",5,3,0,10393,9202,10128,0.6,7],
  [35,"幼馴染の意義",6,3,3,8766,6838,12513,0.2,8],
  [36,"フシギなお守り",7,3,2,11874,9152,7523,0.6,7],
  [37,"3人で水遊び",7,3,1,11033,8509,9718,0.3,7.5],
  [38,"素直じゃないヤツ",8,3,1,7113,12484,8791,0.2,8],
  [39,"結婚式の乱入者",8,3,2,8093,11491,9209,0.6,7],
  [40,"バンド、やろう！",9,3,1,10358,10089,8805,0.6,7],
  [41,"はじまりはいつも",9,3,0,10527,9997,8939,0.2,8],
  [42,"必殺アイドルポーズ☆",10,3,2,10527,9997,8939,0.2,8],
  [43,"七夕の店員さん",10,3,0,10249,10025,9413,0.2,8],
  [44,"未知数の存在",11,3,0,8564,9769,11005,0.2,8],
  [45,"幾光年の光",11,3,1,11736,7794,9292,0.6,7],
  [46,"目指す道のり",12,3,1,12566,8712,6783,0.2,8],
  [47,"真っ白な居場所",12,3,0,9074,10685,9945,0.2,8],
  [48,"素顔の姿",13,3,2,9945,10577,8884,0.6,7],
  [49,"感動の涙",13,3,0,8244,8078,11988,0.3,7.5],
  [50,"武士の相身互い",14,3,3,9100,11924,7470,0.2,8],
  [51,"モデル・モード",14,3,1,8778,11272,9205,0.2,8],
  [52,"気持ちを込めた花束",14,3,2,9705,10498,9494,0.3,7.5],
  [53,"歌姫の覚悟",15,3,3,11192,9581,8242,0.6,7],
  [54,"4人でカフェテリア",15,3,1,10629,8990,10074,0.2,8],
  [55,"双子の苦悩",16,3,1,9100,11924,7470,0.6,7],
  [56,"努力の跡",17,3,2,9529,11244,8188,0.2,8],
  [57,"必要不可欠な存在",17,3,3,7582,11706,8821,0.6,7],
  [58,"ちいさな魔王",18,3,0,10393,9202,10128,0.6,7],
  [59,"ひたむきな向上心",18,3,1,7113,8901,12375,0.2,8],
  [60,"わたし、どうしたら…",19,3,1,9636,8291,11138,0.2,8],
  [61,"純粋な熱意",19,3,2,9257,10445,10074,0.6,7],
  [62,"選んでもらった水着",19,3,3,11030,9672,8093,0.2,8],
  [63,"無敵のヒーロー",20,3,0,10048,8990,10472,0.6,7],
  [64,"お花見スペシャール！",20,3,2,11056,8509,9718,0.6,7],
  [65,"世界を彩る役者",21,3,1,8766,6838,12513,0.6,7],
  [66,"怪盗ハロハッピー",21,3,3,8564,11111,9663,0.2,8],
  [67,"みんなでせーの！",22,3,3,7113,12484,8791,0.2,8],
  [68,"元気のみなもと",22,3,2,8829,11464,8502,0.2,8],
  [69,"踏み出した一歩",23,3,2,9636,8291,11138,0.2,8],
  [70,"ミッシェルのヒミツ",24,3,3,10048,8990,10472,0.6,7],
  [71,"愛の告白",24,3,0,9209,7579,11819,0.2,8],
  [72,"ステージ",0,2,0,6398,4215,5043,0.3,7],
  [73,"最初のお客さん",0,2,2,3696,5019,6583,0.1,8],
  [74,"ステージ",1,2,3,5074,5741,5533,0.1,8],
  [75,"ステージ",2,2,2,6127,5119,4485,0.1,8],
  [76,"ステージ",3,2,3,3819,6780,4747,0.1,8],
  [77,"優しい差し入れ",3,2,0,4782,6172,5023,0.3,7],
  [78,"ステージ",4,2,1,5261,4514,6098,0.1,8],
  [79,"5人でお泊り",4,2,0,6474,4958,4064,0.1,8],
  [80,"ステージ",5,2,0,5711,5046,5563,0.1,8],
  [81,"ステージ",6,2,2,6715,3788,4776,0.1,8],
  [82,"懐かしい音源",7,2,1,4543,5545,5888,0.3,7],
  [83,"ステージ",7,2,3,6751,3788,4776,0.1,8],
  [84,"長年の幼馴染",8,2,3,4124,5284,6233,0.1,8],
  [85,"ステージ",8,2,1,4665,5335,6023,0.1,8],
  [86,"ステージ",9,2,0,5711,5046,5563,0.1,8],
  [87,"流星群",9,2,2,4787,6248,4606,0.1,8],
  [88,"あたたかい気持ち",9,2,1,6322,5013,4304,0.1,8],
  [89,"ステージ",10,2,2,5202,6145,4454,0.3,7],
  [90,"全力応援",10,2,0,4953,6338,4351,0.1,8],
  [91,"1日店長",10,2,1,6037,4631,5306,0.1,8],
  [92,"ステージ",11,2,3,5074,5593,5681,0.1,8],
  [93,"大切なきっかけ",11,2,0,6006,5254,4381,0.3,7],
  [94,"表舞台の裏側",11,2,2,4456,4893,6293,0.3,7],
  [95,"ステージ",12,2,0,5785,5489,4897,0.1,8],
  [96,"ハートの女王様",12,2,2,4443,4353,6507,0.3,7],
  [97,"ステージ",13,2,1,3819,6780,4747,0.1,8],
  [98,"ドラムとの出会い",13,2,3,4955,5800,5547,0.1,8],
  [99,"ステージ",14,2,1,5074,5741,5533,0.1,8],
  [100,"憧れのお花見",14,2,2,4999,4094,6443,0.1,8],
  [101,"ブシドーの精神",14,2,3,5664,5517,4799,0.1,8],
  [102,"ステージ",15,2,0,4235,5074,6469,0.1,8],
  [103,"ステージ",16,2,2,3819,4807,6720,0.1,8],
  [104,"重ねていたい音",16,2,3,4245,6428,5013,0.1,8],
  [105,"夏のソフトクリーム",16,2,0,4743,4590,6308,0.1,8],
  [106,"ステージ",17,2,1,4245,5074,6469,0.1,8],
  [107,"見守る想い",17,2,1,4938,6505,4034,0.3,7],
  [108,"二人を繋いで",17,2,3,5281,5384,5634,0.3,7],
  [109,"ステージ",18,2,1,4665,6076,5276,0.3,7],
  [110,"結婚式に参列！",18,2,3,5037,4828,6116,0.1,8],
  [111,"みんなでリフレッシュ",18,2,1,5326,5059,5920,0.1,8],
  [112,"浮き輪と海",18,2,2,4953,4365,6322,0.1,8],
  [113,"ステージ",19,2,3,4245,6428,5013,0.1,8],
  [114,"ステージ",20,2,2,6056,4631,5306,0.1,8],
  [115,"ステージ",21,2,1,4665,5335,6023,0.1,8],
  [116,"姫を守る王子",21,2,2,4381,6264,4999,0.1,8],
  [117,"ステージ",22,2,3,4670,6856,3607,0.3,7],
  [118,"かわいい探偵さん",22,2,2,6826,4699,3638,0.1,8],
  [119,"ステージ",23,2,0,5518,4928,5755,0.1,8],
  [120,"囚われのお姫様",23,2,3,4731,3668,6796,0.3,7],
  [121,"星の織姫",23,2,1,5978,5261,4738,0.1,8],
  [122,"ステージ",24,2,3,6056,4631,5306,0.1,8],
  [123,"桜ミッシェル",24,2,0,5458,5815,4865,0.1,8],
  [124,"猪突猛進っ！",0,1,2,1985,2478,3436,0.1,7],
  [125,"天然ビューティー",1,1,1,2673,3153,2303,0.1,7],
  [126,"チョコだいすき",2,1,0,3487,2425,1893,0.1,7],
  [127,"みんなのお姉ちゃん",3,1,0,2198,3291,2582,0.1,7],
  [128,"猫かぶりの優等生",4,1,3,2929,2598,2855,0.1,7],
  [129,"クールな友達想い",5,1,2,3450,1970,2463,0.1,7],
  [130,"マイペース",6,1,1,2574,2125,3299,0.1,7],
  [131,"みんなのリーダー！",7,1,3,2710,2332,3125,0.1,7],
  [132,"頼れる姉御肌",8,1,0,2612,2871,2916,0.1,7],
  [133,"みんなの支え",9,1,2,2673,3153,2303,0.1,7],
  [134,"ピンク担当☆",10,1,0,2544,3330,2097,0.1,7],
  [135,"天才少女",11,1,1,2441,1909,3473,0.1,7],
  [136,"鉄壁の微笑",12,1,3,2410,3503,1879,0.1,7],
  [137,"オタクなドラマー",13,1,2,1985,2478,3436,0.1,7],
  [138,"ブシドー！",14,1,2,2574,2125,3299,0.1,7],
  [139,"孤高の歌姫",15,1,1,3305,2560,2103,0.1,7],
  [140,"生真面目な努力家",16,1,1,1985,3464,2448,0.1,7],
  [141,"ムードメーカー☆",17,1,3,2835,2538,2953,0.1,7],
  [142,"カッコイイ！ドラマー",18,1,0,2835,2538,2953,0.1,7],
  [143,"人混みはニガテ",19,1,2,3140,2690,2320,0.1,7],
  [144,"花咲川の異空間",20,1,3,2968,2819,2524,0.1,7],
  [145,"噂の王子様",21,1,3,2805,2982,2508,0.1,7],
  [146,"スマイルキャプテン",22,1,0,3305,2560,2103,0.1,7],
  [147,"おっとり少女",23,1,2,3140,2690,2320,0.1,7],
  [148,"なにごともほどほど",24,1,1,2544,3330,2097,0.1,7],
  [149,"夕暮れ、おめかし準備",3,4,3,12484,10963,9196,1,7],
  [150,"手を繋げば",1,3,3,8232,9017,11544,0.3,7.5],
  [151,"ソフトコロネ♪",2,2,3,6233,4335,5074,0.3,7],
  [152,"秘密の場所",4,3,0,11491,8204,9100,0.2,8],
  [153,"宣誓！花火大会！",0,2,3,6355,4989,3957,0.3,7],
  [154,"ガルパカフェ♪2017",0,2,0,5227,6278,4405,0.1,8],
  [155,"ガルパカフェ♪2017",5,2,1,6930,3675,4758,0.3,7],
  [156,"ガルパカフェ♪2017",10,2,2,4635,6194,5309,0.1,8],
  [157,"ガルパカフェ♪2017",15,2,3,6492,4992,3858,0.3,7],
  [158,"ガルパカフェ♪2017",20,2,3,4766,6296,5030,0.1,8],
  [159,"忘れ物おばけ",7,4,0,10321,13486,8489,1,7],
  [160,"学園七不思議",6,3,0,9209,7579,11819,0.3,7.5],
  [161,"階段の怪談",8,2,0,4671,6070,5229,0.3,7],
  [162,"怖さはんぶんこ",5,3,1,10358,10089,8805,0.3,7.5],
  [163,"勇者つぐ",9,2,3,5634,5504,5161,0.1,8],
  [164,"昔の呼び名",21,4,2,13122,10474,9042,1,7],
  [165,"生徒会のお仕事",9,3,2,8726,11081,9890,0.3,7.5],
  [166,"二人のサポート",13,2,2,5186,6023,4768,0.3,7],
  [167,"ジュリエットという名",12,3,2,10843,8912,9503,0.2,8],
  [168,"ロマンチック",17,2,2,5413,5711,5277,0.1,8],
  [169,"ローソンコラボ2017",0,2,1,4709,3539,6982,0.3,7],
  [170,"ローソンコラボ2017",5,2,3,5511,5901,4858,0.1,8],
  [171,"ローソンコラボ2017",10,2,1,7014,4674,3507,0.3,7],
  [172,"ローソンコラボ2017",15,2,2,5209,6129,4747,0.1,8],
  [173,"ローソンコラボ2017",20,2,0,3572,5026,6745,0.3,7],
  [174,"あたしの大事なもの",24,4,1,9750,12544,10863,1,7],
  [175,"お手伝いしたくて",23,3,1,10926,9636,8696,0.3,7.5],
  [176,"メラメラ！",22,2,1,5171,4799,6006,0.1,8],
  [177,"ハッピー革命！",20,3,3,9865,10393,9441,0.3,7.5],
  [178,"これも儚さ",21,2,0,5844,4928,5533,0.1,8],
  [179,"本気・サバイバー",13,4,3,9481,11492,12180,0.6,7.5],
  [180,"本気・パニック",12,3,3,8939,9422,10897,0.6,7],
  [181,"本気・待機……",10,2,3,4470,6279,4893,0.3,7],
  [182,"本気・ゆらゆら！",11,3,2,8593,11084,9581,0.3,7.5],
  [183,"本気・心頭滅却",14,2,0,6432,4033,4837,0.3,7],
  [184,"見習い魔女",20,4,0,10258,11949,11443,1,7],
  [185,"魔法使いミッシェル",24,3,0,9503,11005,8750,0.6,7],
  [186,"シャイな天使",2,2,0,5607,5267,5429,0.1,8],
  [187,"セクシーヴァンパイア",7,3,0,8259,11520,9017,0.3,7.5],
  [188,"初めての猫耳",15,2,1,5384,5222,5696,0.1,8],
  [189,"バーーーン！と登場",20,2,2,5001,4009,6595,0.3,7],
  [190,"バーーーン！と登場",21,2,3,4635,5372,6129,0.1,8],
  [191,"バーーーン！と登場",22,2,0,5087,5820,5590,0.1,8],
  [192,"バーーーン！と登場",23,2,2,4938,6659,3343,0.3,7],
  [193,"バーーーン！と登場",24,2,1,6163,4602,5341,0.1,8],
  [194,"秋晴れ、その先に",15,4,2,11582,12632,10172,0.6,7.5],
  [195,"雨声と涙",16,3,2,8778,10063,11244,0.3,7.5],
  [196,"微かな心配",19,2,2,6428,3396,5284,0.3,7],
  [197,"永遠の憧れ！",18,3,2,11344,10010,8830,0.2,8],
  [198,"欠かせない存在",17,2,0,4973,5137,5964,0.1,8],
  [199,"真剣勝負の笑顔",22,4,1,10621,12366,11403,0.6,7.5],
  [200,"パン食い競争！",1,3,1,11005,9235,10130,0.3,7.5],
  [201,"スポーツマンシップ",4,2,1,5125,3396,6488,0.3,7],
  [202,"オーエス？オーエス！",10,3,3,9617,8121,11899,0.2,8],
  [203,"白組応援団？",24,2,2,4841,6142,5455,0.1,8],
  [204,"お菓子の先生",9,4,3,12726,10084,11285,1,7],
  [205,"だいたい分量通り",11,3,3,9126,10089,11138,0.3,7.5],
  [206,"パステルメイド",14,2,3,4904,5948,5126,0.3,7],
  [207,"クッキーづくり",16,3,0,7390,12375,9400,0.6,7],
  [208,"ブルーローズメイド",19,2,0,6155,5470,4813,0.1,8],
  [209,"最高のおもてなし",14,4,0,11161,10203,12726,1,7],
  [210,"みんなで折り紙",0,3,0,8886,11220,9984,0.65,7],
  [211,"自分らしい良さ",7,2,0,4411,6428,5270,0.3,7],
  [212,"変身の術？",23,3,0,11790,8121,9722,0.2,8],
  [213,"保護者がわり",4,2,2,5381,4904,6155,0.2,8],
  [214,"本気でチャレンジ",17,4,2,10084,12695,11312,1.1,7],
  [215,"最高のワークフレンド",6,3,2,9850,8992,11244,0.65,7],
  [216,"ポッピン&ハッピー",5,2,2,5254,6459,4396,0.1,8],
  [217,"リサらしい歌詞",15,3,2,9672,11848,8121,0.2,8],
  [218,"ポッピン&アフター",20,2,1,6155,4841,5440,0.1,8],
  [219,"メリー・サプライズ！",3,4,1,11256,12632,10103,1.1,7],
  [220,"みんなとクリスマス",4,3,1,11005,9235,10130,0.3,7.5],
  [221,"突撃サンタ",0,2,1,6308,5435,4515,0.1,8],
  [222,"パーティの準備",2,3,0,8147,11790,9698,0.3,7.5],
  [223,"おひげのサンタ",1,2,1,3940,5097,6735,0.3,7],
  [224,"等身大の夜空",5,4,3,10713,12061,11312,1.1,7],
  [225,"とっておきの場所",7,3,3,11033,10150,9178,0.3,7.5],
  [226,"夜空を見上げて",9,2,3,6474,5299,4335,0.3,7],
  [227,"言葉にできないもの",8,3,0,9705,10230,9759,0.2,8],
  [228,"小さな成長？",6,2,3,5425,6116,4904,0.1,8],
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
  [271,"変わらない友情",5,4,0,12426,11371,10592,0.6,7.5],
  [272,"期待を超えるために",6,4,3,11312,11433,11403,1.15,7],
  [273,"お泊り会",12,4,1,12515,10741,11132,0.6,7.5],
  [274,"さらなる高みへ",15,4,0,11193,10772,12125,1.1,7],
  [275,"買い物も一生懸命",23,4,1,11312,11343,11492,1.15,7],
  [276,"みんなとのライブ",0,3,0,10089,10871,9396,0.3,7.5],
  [277,"目指す理想のアイドル゙",10,3,0,7417,12285,9455,0.6,7],
  [278,"みんな、行くわよー！゙",20,3,1,10714,9448,9931,0.2,8],
  [279,"ずっとあたし達らしく",5,4,0,11576,10512,9742,0.6,7],
  [280,"重なり合う青薔薇",16,2,1,6155,4841,5440,0.3,7],
  [281,"GOGO WEGO！",24,2,0,6627,5334,4273,0.1,8],
  [282,"GOGO WEGO！",17,2,0,4766,5554,6278,0.1,8],
  [283,"GOGO WEGO！",11,2,3,5249,4340,6645,0.1,8],
  [284,"GOGO WEGO！",6,2,2,6543,4140,5052,0.3,7],
  [285,"GOGO WEGO！",3,2,1,4831,6263,5505,0.1,8],
];
