// 名前空間
var glp = {};

// アイテムの分類
glp.item_list = ["microphone", "guitar", "base", "drum", "another", "poster", "counter", "table", "magazine", "entrance", "sign", "center", "courtyard", "menu"];
glp.character_names = [
  "카스미", "타에", "리미", "사아야", "아리사",
  "란", "모카", "히마리", "토모에", "츠구미",
  "아야", "히나", "치사토", "마야", "이브",
  "유키나", "사요", "리사", "아코", "린코",
  "코코로", "카오루", "하구미", "카논", "미사키",
];
glp.type_colors = ["#ff345a", "#4057e3", "#44c527", "#ff8400"];

// カード配列を連想配列に
glp.decode_card = function(card){
  return {
    id: card[0],
    card_name: card[1],
    character: card[2],
    rare: card[3],
    type: card[4],
    state: [card[5], card[6], card[7]],
    score_up_rate: card[8],
    score_up_time: 5,
    score_up_max_time: card[9]
  };
};

// カードの補正込み総合力を計算
glp.get_card_power = function(card, correction){
  // correction = {
  //   character: [kasumi, tae, ..., misaki],
  //   band: [pop, aft, pas, ros, hel],
  //   type: [pow, coo, pur, hap],
  //   parameter: [per, teq, vis],
  //   all: number
  // }
  var states = card.state.concat();
  states = states.map((state, idx) => {
    var character_inputs = document.getElementsByName("character");
    var type_inputs = document.getElementsByName("type");
    var isParameterTarget = (parseInt(character_inputs[card.character].value, 10) > 0 && parseInt(type_inputs[card.type].value, 10) > 0);
    return state*(1 + correction.character[card.character] + correction.band[Math.floor(card.character/5)] + correction.type[card.type] + correction.all + (isParameterTarget ? correction.parameter[idx] : 0));
  });
  
  var power = states.reduce(function(sum, v){return sum + v;}, 0);
  return power;
};

// 補正値を固定したときの最良バンドを計算
glp.get_best_band = function(cards, correction, skill_notes_rate){
  var power_array = []; //カードとその能力値を格納する配列
  for(let i = 0; i < cards.length; i++){
    power_array.push({card: cards[i], base_power: this.get_card_power(cards[i], correction), skill_power: null, leader: false});
  }

  // 弱い順にソート
  power_array.sort(function(a, b){return a.base_power - b.base_power});

  // 暫定バンドメンバーを決定
  var band = [];
  for(let i = power_array.length - 1; band.length < 5 && i >= 0; i--){
    var suffer = false; //暫定メンバーとキャラが被っているか
    for(let j = 0; j < band.length; j++){
      if(band[j].card.character == power_array[i].card.character){
        suffer = true;
        break;
      }
    }

    // 被っていなければ
    if(!suffer){
      band.push(power_array[i]);
      power_array.splice(i, 1);
    }
  }

  // 暫定バンドのスキルなし能力値の合計を計算
  var band_sum = band.reduce(function(sum, v){return sum + v.base_power;}, 0);

  let max_skill_power = {idx: null, value: null};
  // 暫定メンバーのスキル値を計算(リーダーは2倍)
  for(let i = 0; i < band.length; i++){
    band[i].skill_power = band_sum * skill_notes_rate / 6 * band[i].card.score_up_time / 5 * band[i].card.score_up_rate;
    if(max_skill_power.value == null || band[i].skill_power > max_skill_power.value){
      max_skill_power.value = band[i].skill_power;
      max_skill_power.idx = i;
    }
  }
  band[max_skill_power.idx].skill_power *= 2;
  band[max_skill_power.idx].leader = true;

  for(let k = 0; k < power_array.length; k++){
    let changed = false;

    // 暫定メンバーをスキルを考慮して強い順にソート
    band.sort(function(a, b){return (b.base_power + b.skill_power)-(a.base_power + a.skill_power);});

    // 控えメンバーのスキルあり能力値を計算し被っている(被っていなければ最下位)バンドメンバーより高ければ交換
    for(let i = power_array.length - 1; i >= 0; i--){
      let kicked = 4;
      for(let j = 0; j < band.length; j++){
        if(power_array[i].card.character == band[j].card.character){
          kicked = j;
          break;
        }
      }

      // 交換した場合のバンドの生成
      let new_band = [];
      for(let j = 0; j < band.length; j++){
        if(j != kicked)
          new_band.push(band[j]);
      }
      new_band.push(power_array[i]);

      // 生成したバンドのスキルなし能力値の和を計算
      let new_band_sum = new_band.reduce(function(sum, v){return sum + v.base_power;}, 0);

      // 生成したバンドのスキルを計算(リーダーは2倍)
      let new_max_skill = {idx: null, value: null};
      let new_skill_powers = new_band.map(function(v, idx){
        let skill_power = new_band_sum * skill_notes_rate / 6 * v.card.score_up_time / 5 * v.card.score_up_rate;
        if(new_max_skill.value == null || skill_power > new_max_skill.value){
          new_max_skill.value = skill_power;
          new_max_skill.idx = idx;
        }
        return skill_power;
      });
      new_skill_powers[new_max_skill.idx] *= 2;

      // 生成したバンドのスキルあり能力値が元のバンドより高ければバンドを適用
      if(new_band_sum + new_skill_powers.reduce(function(sum, v){return sum+v;}, 0) > band_sum + band.reduce(function(sum, v){return sum+v.skill_power;}, 0)){
        band = new_band;
        band_sum = new_band_sum;
        for(let j = 0; j < band.length; j++){
          band[j].skill_power = new_skill_powers[j];
          band[j].leader = (j == new_max_skill.idx) ? true : false;
        }
        changed = true;
        break;
      }
    }
    if(!changed)
      break;
  }

  // リーダーを先頭に
  band.sort(function(a, b){
    if(a.leader == b.leader){
      return (b.base_power + b.skill_power) - (a.base_power + a.skill_power);
    }else{
      return (a.leader) ? -1 : 1;
    }
  });

  return {total: band.reduce(function(sum, v){return sum + v.base_power + v.skill_power;}, 0), band: band.reduce(function(arr, v){arr.push(v.card); return arr;}, [])};
};

// 最適なアイテム配置とバンド編成を決める
glp.get_total_best = function(cards, items, character_correction, type_correction, parameter_correction, skill_notes_rate){
  var max_value = null;
  var max_band = null;
  var max_items = null;

  // 各バンド特化(5通り)と各属性特化(4通り)の20通りの中から最適のものを決める
  for(let band_name = 0; band_name < 5; band_name++){
    for(let type = 0; type < 4; type++){
      let use_items = [];
      for(let i = 0; i < this.item_list.length; i++){
        let max_item_value = null;
        let max_item_idx = null;
        for(let j = 0; j < items[this.item_list[i]].length; j++){
          let correction_value = items[this.item_list[i]][j].band[band_name] + items[this.item_list[i]][j].type[type] + items[this.item_list[i]][j].all;
          if(max_item_value == null || correction_value > max_item_value){
            max_item_value = correction_value;
            max_item_idx = j;
          }
        }
        use_items.push(items[this.item_list[i]][max_item_idx]);
      }
      let correction = {
        character: character_correction,
        band: use_items.reduce(function(sum_array, item){
          for(let k = 0; k < sum_array.length; k++){
            sum_array[k] += item.band[k];
          }
          return sum_array;
        }, [0,0,0,0,0]),
        type: use_items.reduce(function(sum_array, item){
          for(let k = 0; k < sum_array.length; k++){
            sum_array[k] += item.type[k];
          }
          return sum_array;
        }, type_correction.slice(0, type_correction.length)),
        parameter: parameter_correction,
        all: use_items.reduce(function(sum, item){
          return sum + item.all;
        }, 0),
      };
      let result = this.get_best_band(cards, correction, skill_notes_rate);
      if(max_value == null || result.total > max_value){
        max_value = result.total;
        max_band = result.band;
        max_items = use_items;
      }
    }
  }

  // アイテムを一つずつ交換していき最適編成を超えたら更新
  for(let i = 0; i < 80; i++){
    let changed = false;
    for(let j = 0; j < this.item_list.length; j++){
      let changed_in_loop = false;
      for(let k = 0; k < items[this.item_list[j]].length; k++){
        if(max_items[j] != items[this.item_list[j]][k]){
          let new_use_items = [];
          for(let l = 0; l < max_items.length; l++){
            new_use_items.push((j != l) ? max_items[l] : items[this.item_list[j]][k]);
          }
          let correction = {
            character: character_correction,
            band: new_use_items.reduce(function(sum_array, item){
              for(let l = 0; l < sum_array.length; l++){
                sum_array[l] += item.band[l];
              }
              return sum_array;
            }, [0,0,0,0,0]),
            type: new_use_items.reduce(function(sum_array, item){
              for(let l = 0; l < sum_array.length; l++){
                sum_array[l] += item.type[l];
              }
              return sum_array;
            }, type_correction.slice(0, type_correction.length)),
            parameter: parameter_correction,
            all: new_use_items.reduce(function(sum, item){
              return sum + item.all;
            }, 0),
          };
          let result = this.get_best_band(cards, correction, skill_notes_rate);
          if(result.total > max_value){
            max_value = result.total;
            max_band = result.band;
            max_items = new_use_items;
            changed = true;
            break;
          }
        }
        if(changed_in_loop)
          break;
      }
    }
    if(!changed)
      break;
  }
  return {band: max_band, items: max_items};
};

glp.calculate = function(){
  var cards = [];
  var character_kinds = [];
  var cards_input = document.getElementsByName("card");
  var skill_level_input = document.getElementsByName("skill");
  for(let i = 0; i < cards_input.length; i++){
    if(cards_input[i].checked){
      if(this.cards[i].score_up_rate > 0){
        let skill_level = parseInt(skill_level_input[i].value, 10);
        let step = Math.floor((Math.round(this.cards[i].score_up_max_time*10) - 50)/4)/10;
        this.cards[i].score_up_time = 5 + step*(skill_level-1);
        let threshold = 5 - (Math.round(this.cards[i].score_up_max_time*10) - 50)%4;
        if(skill_level > threshold)
          this.cards[i].score_up_time += 0.1*(skill_level - threshold);
      }
      cards.push(this.cards[i]);
      if(character_kinds.length < 5 && character_kinds.indexOf(this.cards[i].character) < 0)
        character_kinds.push(this.cards[i].character);
    }
  }
  if(character_kinds.length < 5){
    alert("선택 캐릭터가 너무 적습니다.");
    return null;
  }

  var items = {
    microphone: [
      {name: "스튜디오 마이크", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "록 마이크", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "아이돌 마이크", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "청장미 마이크", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "매칭 마이크", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
    ],
    guitar: [
      {name: "타에의 기타", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "모카의 기타", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "히나의 기타", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "사요의 기타", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "카오루의 기타", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
    ],
    base: [
      {name: "리미의 베이스", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "히마리의 베이스", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "치사토의 베이스", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "리사의 베이스", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "하구미의 베이스", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
    ],
    drum: [
      {name: "사아야의 드럼", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "토모에의 드럼", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "마야의 드럼", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "아코의 드럼", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "카논의 드럼", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
    ],
    another: [
      {name: "아리사의 키보드", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "츠구미의 키보드", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "이브의 키보드", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "린코의 키보드", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "미사키의 DJ세트", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
    ],
    poster: [
      {name: "포피파의 포스터", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "Afterglow의 포스터", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "파스파레의 포스터", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "Roselia의 포스터", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "하로하피의 포스터", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
    ],
    counter: [
      {name: null, band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
    ],
    table: [
      {name: null, band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
    ],
    magazine: [
      {name: null, band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
    ],
    entrance: [
      {name: "포피파의 전단지", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "Afterglow의 전단지", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "파스파레의 전단지", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "Roselia의 전단지", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "하로하피의 전단지", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
    ],
    sign: [
      {name: null, band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
    ],
    center: [
      {name: "야자수", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "족욕탕", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "분수", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "미셸 동상", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "분재세트", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
    ],
    courtyard: [
      {name: null, band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
    ],
    menu: [
      {name: "미트소스 파스타", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "아사이 볼", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "후르츠타르트", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "마카롱 타워", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
      {name: "초코코로네", band: [0,0,0,0,0], type: [0,0,0,0], all: 0},
    ],
  };
  var microphone_inputs = document.getElementsByName("microphone");
  for(let i = 0; i < microphone_inputs.length; i++){
    items.microphone[i].band[i] = parseFloat(microphone_inputs[i].value)/100;
  }
  var guitar_inputs = document.getElementsByName("guitar");
  for(let i = 0; i < guitar_inputs.length; i++){
    items.guitar[i].band[i] = parseFloat(guitar_inputs[i].value)/100;
  }
  var base_inputs = document.getElementsByName("base");
  for(let i = 0; i < base_inputs.length; i++){
    items.base[i].band[i] = parseFloat(base_inputs[i].value)/100;
  }
  var drum_inputs = document.getElementsByName("drum");
  for(let i = 0; i < drum_inputs.length; i++){
    items.drum[i].band[i] = parseFloat(drum_inputs[i].value)/100;
  }
  var another_inputs = document.getElementsByName("another");
  for(let i = 0; i < another_inputs.length; i++){
    items.another[i].band[i] = parseFloat(another_inputs[i].value)/100;
  }
  var poster_inputs = document.getElementsByName("poster");
  for(let i = 0; i < poster_inputs.length; i++){
    items.poster[i].band[i] = parseFloat(poster_inputs[i].value)/100;
  }
  var entrance_inputs = document.getElementsByName("entrance");
  for(let i = 0; i < entrance_inputs.length; i++){
    items.entrance[i].band[i] = parseFloat(entrance_inputs[i].value)/100;
  }
  var center_inputs = document.getElementsByName("center");
  for(let i = 0; i < center_inputs.length; i++){
    if(i < 4)
      items.center[i].type[i] = parseFloat(center_inputs[i].value)/100;
    else
      items.center[i].all = parseFloat(center_inputs[i].value)/100;
  }
  var menu_inputs = document.getElementsByName("menu");
  for(let i = 0; i < menu_inputs.length; i++){
    if(i < 4)
      items.menu[i].type[i] = parseFloat(menu_inputs[i].value)/100;
    else
      items.menu[i].all = parseFloat(menu_inputs[i].value)/100;
  }

  var character_input = document.getElementsByName("character");
  var character_correction = [];
  for(let i = 0; i < character_input.length; i++){
    character_correction.push(parseFloat(character_input[i].value)/100);
  }

  var type_input = document.getElementsByName("type");
  var type_correction = [];
  for(let i = 0; i < type_input.length; i++){
    type_correction.push(parseFloat(type_input[i].value)/100);
  }
  
  var parameter_input = document.getElementsByName("parameter");
  var parameter_correction = [];
  for(let i = 0; i < parameter_input.length; i++){
    parameter_correction.push(parseFloat(parameter_input[i].value)/100);
  }

  var result = this.get_total_best(cards, items, character_correction, type_correction, parameter_correction, 0.287);

  var band_result = document.getElementById("band-result");
  band_result.innerHTML = "";
  for(let i = 0; i < result.band.length; i++){
    let li = document.createElement("li");
    li.style.color = this.type_colors[result.band[i].type];
    li.innerHTML = this.character_names[result.band[i].character]+" ["+result.band[i].card_name+"]"+((i==0)?"(リーダー)":"");
    band_result.appendChild(li);
  }

  var items_result = document.getElementById("items-result");
  items_result.innerHTML = "";
  for(let i = 0; i < result.items.length; i++){
    if(result.items[i].name){
      let li = document.createElement("li");
      li.innerHTML = result.items[i].name;
      items_result.appendChild(li);
    }
  }
};

// 入力情報を記録する関数
glp.save_inputs = function(){
  if(!window.localStorage)
    alert("入力内容の保存に失敗しました\nご利用のブラウザは非対応です");
  // 所持カード
  var card_data = new Array(this.cards.length);
  var cards_input = document.getElementsByName("card");
  for(let i = 0; i < cards_input.length; i++){
    let idx = parseInt(cards_input[i].id.split("-")[1], 10);
    card_data[idx] = cards_input[i].checked;
  }
  window.localStorage.setItem("girlsBandParty_autoParty_cards", JSON.stringify(card_data));

  // スキルレベル
  var skill_data = new Array(this.cards.length);
  var skill_inputs = document.getElementsByName("skill");
  for(let i = 0; i < skill_inputs.length; i++){
    let idx = parseInt(skill_inputs[i].id.split("-")[1], 10);
    skill_data[idx] = parseInt(skill_inputs[i].value, 10);
  }
  window.localStorage.setItem("girlsBandParty_autoParty_skills", JSON.stringify(skill_data));

  // アイテム倍率
  var items_data = [];
  for(let i = 0; i < glp.item_list.length; i++){
    let items = document.getElementsByName(glp.item_list[i]);
    for(let j = 0; j < items.length; j++){
      let obj = {};
      obj[items[j].id] = parseFloat(items[j].value);
      items_data.push({id: items[j].id, value: parseFloat(items[j].value)});
    }
  }
  window.localStorage.setItem("girlsBandParty_autoParty_items", JSON.stringify(items_data));

  // キャラ倍率
  var character_data = [];
  var character_inputs = document.getElementsByName("character");
  for(let i = 0; i < character_inputs.length; i++){
    character_data.push(parseFloat(character_inputs[i].value));
  }
  window.localStorage.setItem("girlsBandParty_autoParty_characters", JSON.stringify(character_data));

  //属性倍率
  var type_data = [];
  var type_inputs = document.getElementsByName("type");
  for(let i = 0; i < type_inputs.length; i++){
    type_data.push(parseFloat(type_inputs[i].value));
  }
  window.localStorage.setItem("girlsBandParty_autoParty_types", JSON.stringify(type_data));

  alert("입력내용을 저장 했습니다.\n다음번 페이지를 열 때 불러옵니다.");
};

// 記録情報を復元する関数
glp.restore_inputs = function(){
  // 所持カード
  var card_data = JSON.parse(window.localStorage.getItem("girlsBandParty_autoParty_cards"));
  if(card_data){
    for(let i = 0; i < card_data.length; i++){
      document.getElementById("card-"+i).checked = (card_data[i]) ? true : false;
    }
  }

  // スキルレベル
  var skill_data = JSON.parse(window.localStorage.getItem("girlsBandParty_autoParty_skills"));
  if(skill_data){
    for(let i = 0; i < skill_data.length; i++){
      document.getElementById("skill-"+i).value = parseInt(skill_data[i], 10);
    }
  }

  // アイテム倍率
  var items_data = JSON.parse(window.localStorage.getItem("girlsBandParty_autoParty_items"));
  if(items_data){
    for(let i = 0; i < items_data.length; i++){
      document.getElementById(items_data[i].id).value = items_data[i].value;
    }
  }

  // キャラ倍率
  var character_data = JSON.parse(window.localStorage.getItem("girlsBandParty_autoParty_characters"));
  if(character_data){
    for(let i = 0; i < character_data.length; i++){
      document.getElementById("character-"+i).value = character_data[i];
    }
  }

  //属性倍率
  var type_data = JSON.parse(window.localStorage.getItem("girlsBandParty_autoParty_types"));
  if(type_data){
    let type_inputs = document.getElementsByName("type");
    for(let i = 0; i < type_inputs.length; i++)
      type_inputs[i].value = type_data[i];
  }
};

// 所持カードの一括選択・選択解除
glp.all_change_cards = function(rare, bool){
  var container = document.getElementById("available-rare"+rare);
  for(let i = 0; i < container.children.length; i++){
    container.children[i].firstChild.firstChild.checked = bool;
  }
};

//
glp.all_change_skill_level = function(rare, level){
  var container = document.getElementById("available-rare"+rare);
  for(let i = 0; i < container.children.length; i++){
    container.children[i].children[1].children[1].value = level;
  }
};

// バンド補正アイテムの一括変更
glp.all_change_band_items = function(level){
  var lv_map = [
    {
      regex: /(poppinParty|afterglow|pastelPalettes|roselia|helloHappyWorld)-(microphone|guitar|base|drum|another)/,
      value: [0, 2, 2.5, 3, 3.5, 4, 4.5]
    },
    {
      regex: /(poppinParty|afterglow|pastelPalettes|roselia|helloHappyWorld)-(poster|entrance)/,
      value: [0, 6, 7, 8, 9, 10, 10]
    },
  ];
  for(let i = 0; i < glp.item_list.length; i++){
    let inputs = document.getElementsByName(glp.item_list[i]);
    if(inputs){
      for(let j = 0; j < inputs.length; j++){
        for(let k = 0; k < lv_map.length; k++){
          if(inputs[j].id.search(lv_map[k].regex) == 0){
            inputs[j].value = lv_map[k].value[level];
            break;
          }
        }
      }
    }
  }
};

// 属性補正アイテムの一括変更
glp.all_change_type_items = function(level){
  var lv_map = [
    {
      regex: /(center|menu)-(powerful|cool|pure|happy)/,
      value: [0, 1, 3, 5, 7, 10]
    },
    {
      regex: /(center|menu)-all/,
      value: [0, 0.5, 1, 1.5, 2, 2.5]
    },
  ];
  for(let i = 0; i < glp.item_list.length; i++){
    let inputs = document.getElementsByName(glp.item_list[i]);
    if(inputs){
      for(let j = 0; j < inputs.length; j++){
        for(let k = 0; k < lv_map.length; k++){
          if(inputs[j].id.search(lv_map[k].regex) == 0){
            inputs[j].value = lv_map[k].value[level];
            break;
          }
        }
      }
    }
  }
};

// ページ読み込み時に実行される関数
window.onload = function(){
  glp.cards = window.CARDS.map(glp.decode_card);
  glp.cards.sort(function(a, b){
    if(a.rare != b.rare)
      return b.rare - a.rare;
    else if(a.character != b.character)
      return a.character - b.character;
    else
      return a.type - b.type;
  });

  var available = [
    document.getElementById("available-rare1"),
    document.getElementById("available-rare2"),
    document.getElementById("available-rare3"),
    document.getElementById("available-rare4"),
  ];
  for(let i = 0; i < glp.cards.length; i++){
    let li = document.createElement("li");
    let label = document.createElement("label");
    let input = document.createElement("input");
    input.name = "card";
    input.id = "card-"+glp.cards[i].id;
    input.type = "checkbox";
    input.checked = false;
    label.appendChild(input);
    let span = document.createElement("span");
    span.innerHTML = glp.character_names[glp.cards[i].character]+" ["+glp.cards[i].card_name+"] ";
    span.style.color = glp.type_colors[glp.cards[i].type];
    label.appendChild(span);
    li.appendChild(label);
    let slv_small = document.createElement("small");
    slv_small.style.display = (glp.cards[i].score_up_rate > 0) ? "inline" : "none";
    let slv_text = document.createElement("span");
    slv_text.innerHTML = "SLv:";
    slv_small.appendChild(slv_text);
    let slv_input = document.createElement("input");
    slv_input.type = "number";
    slv_input.name = "skill";
    slv_input.id = "skill-"+glp.cards[i].id;
    slv_input.min = 1;
    slv_input.max = 5;
    slv_input.value = 1;
    slv_small.appendChild(slv_input);
    li.appendChild(slv_small);
    available[glp.cards[i].rare-1].appendChild(li);
  }

  var items_of_band = document.getElementById("items-of-band");
  var band_names = [
    {ja: "포피파", en: "poppinParty", chain: "poppin-party"},
    {ja: "앱글", en: "afterglow", chain: "afterglow"},
    {ja: "파스파레", en: "pastelPalettes", chain: "pastel-palettes"},
    {ja: "로젤리아", en: "roselia", chain: "roselia"},
    {ja: "하로하피", en: "helloHappyWorld", chain: "hello-happy-world"}
  ];
  var band_items_tr = document.createElement("tr");
  band_items_tr.appendChild(document.createElement("th"));
  for(let i = 0; i < band_names.length; i++){
    let th = document.createElement("th");
    th.innerHTML = band_names[i].ja;
    band_items_tr.appendChild(th);
  }
  items_of_band.appendChild(band_items_tr);
  var band_items_names = [
    {ja: "마이크", en: "microphone"},
    {ja: "기타", en: "guitar"},
    {ja: "베이스", en: "base"},
    {ja: "드럼", en: "drum"},
    {ja: "키보드(그 외)", en: "another"},
    {ja: "포스터", en: "poster"},
    {ja: "전단지", en: "entrance"},
  ]
  for(let i = 0; i < band_items_names.length; i++){
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.innerHTML = band_items_names[i].ja;
    tr.appendChild(th);
    for(let j = 0; j < band_names.length; j++){
      let td = document.createElement("td");
      let input = document.createElement("input");
      input.name = band_items_names[i].en;
      input.id = band_names[j].en + "-" + band_items_names[i].en;
      input.type = "number";
      input.value = 0;
      input.min = 0;
      input.step = 0.5;
      td.appendChild(input);
      let span = document.createElement("span");
      span.innerHTML = "%";
      td.appendChild(span);
      tr.appendChild(td);
    }
    items_of_band.appendChild(tr);
  }

  var items_of_type = document.getElementById("items-of-type");
  var type_names = [
    {ja: "파워풀", en: "powerful"},
    {ja: "쿨", en: "cool"},
    {ja: "퓨어", en: "pure"},
    {ja: "해피", en: "happy"},
    {ja: "모두", en: "all"}
  ];
  var type_items_tr = document.createElement("tr");
  type_items_tr.appendChild(document.createElement("th"));
  for(let i = 0; i < type_names.length; i++){
    let th = document.createElement("th");
    th.innerHTML = type_names[i].ja;
    type_items_tr.appendChild(th);
  }
  items_of_type.appendChild(type_items_tr);
  var type_items_names = [
    {ja: "유성당", en: "center"},
    {ja: "음식", en: "menu"},
  ];
  for(let i = 0; i < type_items_names.length; i++){
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.innerHTML = type_items_names[i].ja;
    tr.appendChild(th);
    for(let j = 0; j < type_names.length; j++){
      let td = document.createElement("td");
      let input = document.createElement("input");
      input.name = type_items_names[i].en;
      input.id = type_items_names[i].en + "-" + type_names[j].en;
      input.type = "number";
      input.value = 0;
      input.min = 0;
      input.step = 0.5;
      td.appendChild(input);
      let span = document.createElement("span");
      span.innerHTML = "%";
      td.appendChild(span);
      tr.appendChild(td);
    }
    items_of_type.appendChild(tr);
  }

  for(let b = 0; b < band_names.length; b++){
    let container = document.getElementById(band_names[b].chain);
    for(let i = 0; i < 5; i++){
      let div = document.createElement("div");
      let span = document.createElement("span");
      span.innerHTML = glp.character_names[5*b+i]+": ";
      div.appendChild(span);
      let input = document.createElement("input");
      input.name = "character";
      input.id = "character-" + (5*b+i);
      input.type = "number";
      input.value = 0;
      input.min = 0;
      input.step = 5;
      div.appendChild(input);
      let span2 = document.createElement("span");
      span2.innerHTML = "%";
      div.appendChild(span2);
      container.appendChild(div);
    }
  }

  var type = document.getElementById("types");
  for(let i = 0; i < type_names.length - 1; i++){
    let div = document.createElement("div");
    let span = document.createElement("span");
    span.innerHTML = type_names[i].ja+": ";
    div.appendChild(span);
    let input = document.createElement("input");
    input.name = "type";
    input.type = "number";
    input.value = 0;
    input.min = 0;
    input.step = 5;
    div.appendChild(input);
    let span2 = document.createElement("span");
    span2.innerHTML = "%";
    div.appendChild(span2);
    type.appendChild(div);
  }
  
  var parameter_names = [
    {ja: "퍼포먼스", en: "performance"},
    {ja: "테크닉", en: "technique"},
    {ja: "비주얼", en: "visual"}
  ];
  var parameters = document.getElementById("parameters");
  for(let i = 0; i < parameter_names.length; i++){
    let div = document.createElement("div");
    let span = document.createElement("span");
    span.innerHTML = parameter_names[i].ja+": ";
    div.appendChild(span);
    let input = document.createElement("input");
    input.name = "parameter";
    input.type = "number";
    input.value = 0;
    input.min = 0;
    input.step = 5;
    div.appendChild(input);
    let span2 = document.createElement("span");
    span2.innerHTML = "%";
    div.appendChild(span2);
    parameters.appendChild(div);
  }
  
  glp.restore_inputs();
};
