// 데이터 구성
// 각 셀의 left 기준 x좌표
// 각 셀의 top 기준 y좌표
// 당첨 선물 이미지 src
// 당첨 선물 alt
var data = [
  {
    y:15,
    x:680,
    img:null,
    txt:null
  },
  {
    y:70,
    x:750,
    img:'./img/goods/01.png',
    txt:'밀 5개 획득 수령대기 획득 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:120,
    x:830,
    img:'./img/goods/02.png',
    txt:'희귀툰 행운 상자 1개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:170,
    x:920,
    img:'./img/goods/03.png',
    txt:'BLESS FOR YOU 수령대기 물품함으로 황금빛 축복의 여행상자가 지급되었습니다. 토벌대 열쇠 행운 상자, 영운 룬 행운 상자, 영웅 룬 3단 행운상자, 찬란한 라체르타 황금 꾸러미, 모험 점수 2배 획득권(3시간), 모험 점수 2배 획득권(7일), 명예 점수 2배 획득권(3시간), 설레는 탁본 행운상자, 활동점수 행운권(희귀), 700루메나 중 랜덤지급'
  },
  {
    y:220,
    x:1000,
    img:'./img/goods/04.png',
    txt:'체력 회복제 2개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:260,
    x:1080,
    img:'./img/goods/05.png',
    txt:'톡쏘는 집게 직화구이 1개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:305,
    x:1150,
    img:'./img/goods/06.png',
    txt:'정제된 기력 회복제 2개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:345,
    x:1230,
    img:'./img/goods/07.png',
    txt:'빛나는 보리 브라우니 2개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:395,
    x:1150,
    img:'./img/goods/08.png',
    txt:'쫄깃한 왕가시 거북 구이 2개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:435,
    x:1080,
    img:'./img/goods/09.png',
    txt:'월드 축복 기금 10골드 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:485,
    x:1000,
    img:'./img/goods/10.png',
    txt:'별가루 라이스 푸딩 4개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:525,
    x:920,
    img:'./img/goods/11.png',
    txt:'일급 체력 회복제 4개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },{
    y:575,
    x:830,
    img:'./img/goods/12.png',
    txt:'다탄다 던전 소환권 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:615,
    x:920,
    img:'./img/goods/13.png',
    txt:'일급 종합 회복제 4개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:655,
    x:1000,
    img:'./img/goods/14.png',
    txt:'보리 4개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:705,
    x:920,
    img:'./img/goods/15.png',
    txt:'BLESS FOR YOU 수령대기 물품함으로 황금빛 축복의 여행상자가 지급되었습니다. 토벌대 열쇠 행운 상자, 영운 룬 행운 상자, 영웅 룬 3단 행운상자, 찬란한 라체르타 황금 꾸러미, 모험 점수 2배 획득권(3시간), 모험 점수 2배 획득권(7일), 명예 점수 2배 획득권(3시간), 설레는 탁본 행운상자, 활동점수 행운권(희귀), 700루메나 중 랜덤지급'
  },
  {
    y:755,
    x:830,
    img:'./img/goods/16.png',
    txt:'우니온 특별기금 30골드 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:795,
    x:750,
    img:'./img/goods/17.png',
    txt:'쫄깃한 왕가시 거북 구이 2개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:845,
    x:680,
    img:'./img/goods/18.png',
    txt:'월드 축복 기금 10골드 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:795,
    x:600,
    img:'./img/goods/19.png',
    txt:'희귀 룬 행운상자 1개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:755,
    x:510,
    img:'./img/goods/20.png',
    txt:'BLESS FOR YOU 수령대기 물품함으로 황금빛 축복의 여행상자가 지급되었습니다. 토벌대 열쇠 행운 상자, 영운 룬 행운 상자, 영웅 룬 3단 행운상자, 찬란한 라체르타 황금 꾸러미, 모험 점수 2배 획득권(3시간), 모험 점수 2배 획득권(7일), 명예 점수 2배 획득권(3시간), 설레는 탁본 행운상자, 활동점수 행운권(희귀), 700루메나 중 랜덤지급'
  },
  {
    y:705,
    x:440,
    img:'./img/goods/21.png',
    txt:'쌀 5개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:655,
    x:350,
    img:'./img/goods/22.png',
    txt:'체력 회복제 2개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:615,
    x:440,
    img:'./img/goods/23.png',
    txt:'빛나는 보리 브라우니 2개  획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:575,
    x:510,
    img:'./img/goods/24.png',
    txt:'정제된 기력 회복제 2개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:525,
    x:440,
    img:'./img/goods/25.png',
    txt:'쫄깃한 왕가시 거북구이 2개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:485,
    x:350,
    img:'./img/goods/26.png',
    txt:'담백한 사마귀 뒷다리 구이 2개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:435,
    x:270,
    img:'./img/goods/27.png',
    txt:'월드 축복 기금 10골드 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:395,
    x:200,
    img:'./img/goods/28.png',
    txt:'바삭한 뱀 껍질 튀김 4개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },{
    y:345,
    x:120,
    img:'./img/goods/29.png',
    txt:'신한 대형 오믈렛 4개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },{
    y:305,
    x:200,
    img:'./img/goods/30.png',
    txt:'BLESS FOR YOU 수령대기 물품함으로 황금빛 축복의 여행상자가 지급되었습니다. 토벌대 열쇠 행운 상자, 영운 룬 행운 상자, 영웅 룬 3단 행운상자, 찬란한 라체르타 황금 꾸러미, 모험 점수 2배 획득권(3시간), 모험 점수 2배 획득권(7일), 명예 점수 2배 획득권(3시간), 설레는 탁본 행운상자, 활동점수 행운권(희귀), 700루메나 중 랜덤지급'
  },
  {
    y:260,
    x:270,
    img:'./img/goods/31.png',
    txt:'다캔다 던전 소환권 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:220,
    x:350,
    img:'./img/goods/32.png',
    txt:'희귀 룬 행운 상자 2개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:170,
    x:440,
    img:'./img/goods/33.png',
    txt:'톡쏘는 집게 직화구이 2개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:120,
    x:510,
    img:'./img/goods/34.png',
    txt:'30골드 하이란 특별 기금 수령대기 물품함으로 아이템이 지급되었습니다.'
  },
  {
    y:70,
    x:600,
    img:'./img/goods/35.png',
    txt:'담백한 사마귀 뒷다리 구이 2개 획득 수령대기 물품함으로 아이템이 지급되었습니다.'
  }
];

/* 객체화 코드 시작 */
var horse = {
  $ico: $(".ico_horse"),
  move: function(x, y, callback) {
    this.$ico.css({left:x,top:y});
    callback;
  }
};

var dice = {
  currentNumber: 0,
  $play: $('.btn_dice'),
  $dice: $('.dice_on'),
  $number: $('.ico_num'),
  numberPosition :[0, -136, -272, -408, -544, -680],
  getRandomNumber: function() {
    return Math.ceil(Math.random()*6);
  },
  renderDice: function (index) {
    this.$number.css({
      'background-position': "0px " + this.numberPosition[index]+"px"
    });
  },
  show: function () {
    this.$play.css({'display' : 'none'});
    this.$dice.css({'display' : 'block'});
  },
  hide: function () {
    this.$dice.css({'display' : 'none'});
    this.$play.css({'display' : 'block'});
  },
  play: function (callback) {
    var _this = this;
    var cnt = 0, max = 15;
    var interval = setInterval(function(){
      _this.currentNumber = _this.getRandomNumber();
      _this.renderDice(_this.currentNumber-1);
      if(cnt++ >= max){
        clearInterval(interval);
        callback && callback(_this.currentNumber);
      }
    },64);
  }
};

var popup = {
  $img: $('.area_goods img'),
  $popup:$('.popup_marble'),
  $close:$('.btn_identify'),
  show: function () {
    this.$popup.css({'display' : 'block'});
  },
  hide: function () {
    this.$popup.css({'display' : 'none'});
  },
  changeImg: function (img, txt) {
    this.$img.attr({
      'src' : img,
      'alt' : txt
    });
  }
};

var marble = {
  horsePosition : 0, // 말의 현재 판에서의 index 수
  horseTotalMoveNumber : 0, // 말이동 총 칸수
  numberCompletions : 0, // 완주 횟수
  numberDiceChance : 20, // 주사위 사용가능 횟수
  currentNumber : dice.currentNumber,
  totalPlayEvent : 0,
  $numberChance : $('.inner_dice .num_txt'),
  setChance: function() {
    this.$numberChance.html(this.numberDiceChance);
  },
  setHorsePosition : function(number) {
    var movedPositionNumber = this.horsePosition + number;
    this.horseTotalMoveNumber += movedPositionNumber;
    if(movedPositionNumber >= data.length) {
      this.horsePosition = movedPositionNumber - data.length;
      this.numberCompletions++;
    }else{
      this.horsePosition = movedPositionNumber;
    }
  },
  init: function () {
    var _this = this;
    this.setChance();
    dice.$play.click(function(){
      if(_this.numberDiceChance <= 0) {
        alert('보유 주사위가 없습니다.');
        return;
      }
      _this.numberDiceChance -= 1;
      _this.setChance();
      dice.show();
      dice.play(function(number) {
        _this.totalPlayEvent += 1;
        _this.setHorsePosition(number);
        horse.move(
          data[_this.horsePosition].x,
          data[_this.horsePosition].y,
          setTimeout(function(){
            popup.changeImg(data[_this.horsePosition].img, data[_this.horsePosition].txt);
            popup.show();
          },1000)
        );
      });
    });
    popup.$close.click(function(){
      popup.hide();
      dice.hide();
    });
  }
};

marble.init();
/* 객체화 코드 끝 */


/* 객체화 안한 코드 시작 */
// var dicePosition =[0, -136, -272, -408, -544, -680];
// var horsePosition = 0; // 말의 현재 판에서의 index 수
// var horseTotalMoveNumber = 0; // 말이동 총 칸수
// var numberCompletions = 0; // 완주 횟수
// var numberDiceChance = 20; // 주사위 사용가능 횟수
// var numberDice = 0;
//
// function setDiceChance() {
//   $('.inner_dice .num_txt').html(numberDiceChance);
// }
//
// function setHorsePosition(number) {
//   var movedPositionNumber = horsePosition + number;//number 주사위갯수, 말이 움직일 포지션 값
//   horseTotalMoveNumber += movedPositionNumber; // 말의 총 이동 횟수
// // 36이상일때 0부터 다시시작하는지 체크해볼것
//   if(movedPositionNumber >= data.length) { //만약 말의 움직일 포지션 값이 판의 수 보다 클 경우
//     horsePosition = movedPositionNumber - data.length; //말의 포지션 값에서 판의 크기 만큼 뺀 위치가 말의 최종 위치가 된다.
//     numberCompletions++; //그의미는 말이 한바퀴를 돌았다는 의미가 되니까 주행 횟수를 1 증가 시킨다.
//   }else{
//     horsePosition = movedPositionNumber; //말의 움직일 포지션이 판의 수 보다 작으면 그냥 말이 이동할 위치이다.
//   }
// }
//
// function running(callback) { //클릭
//   setHorsePosition(numberDice);
//   horseMove(horsePosition);
//   setTimeout(function(){
//     callback();
//   },1000)
// }
// function horseMove(index) {
//   $(".ico_horse").css({left:data[index].x,top:data[index].y});
// }
//
// function randomDiceNumber() {  // 랜덤주사위숫자 1~6
//   numberDice = Math.ceil(Math.random()*6);
//   return numberDice;
// }
//
// function renderDice(index){
//   $('.ico_num').css({
//     'background-position': "0px " + dicePosition[index]+"px"
//   });
// }
//
// function renderRandomDice(){  // 랜덤주사위 포지션에 index 값
//   renderDice(randomDiceNumber()-1);
// }
//
// function dicePlay(callback) {//
//   var cnt = 0, max = 15;
//   var interval = setInterval(function(){
//     renderRandomDice();
//     if(cnt++ >= max){
//       clearInterval(interval);
//       callback && callback();
//     }
//     // cnt++
//   },64);
// }
//
// function showDice() {///
//   $('.btn_dice').css({'display' : 'none'});
//   $('.dice_on').css({'display' : 'block'});
// }
// function hideDice() {//
//   $('.dice_on').css({'display' : 'none'});
//   $('.btn_dice').css({'display' : 'block'});
// }
//
// function showPopup() {
//   $('.popup_marble').css({'display' : 'block'});
// }
//
// function hidePopup() {
//   $('.popup_marble').css({'display' : 'none'});
// }
//
// function changePopupImg(index) {
//   if(index >= data.length) return; //나중에 옮길
//   $('.area_goods img').attr(
//     {
//       'src' : data[index].img,
//       'alt' : data[index].txt
//     });
// }
//
// $(function(){
//   setDiceChance();
//   $('.btn_dice').click(function(){
//     if(numberDiceChance <= 0) {
//       alert('보유 주사위가 없습니다.');
//       return;
//     }
//     numberDiceChance -= 1;
//     setDiceChance();
//     showDice();
//     dicePlay(function() {
//       running(function() {
//         showPopup();
//         changePopupImg(horsePosition);
//       });
//     });
//   });
//   $('.btn_identify').click(function(){
//     hidePopup();
//     hideDice();
//   });
// });
/* 객체화 안한 코드 끝 */
