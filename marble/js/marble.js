var marbleController = {
  horsePosition : 0, // 말의 현재 판에서의 index 수
  horseTotalMoveNumber : 0, // 말이동 총 칸수
  numberCompletions : 0, // 완주 횟수
  numberDiceChance : 20, // 주사위 사용가능 횟수
  totalPlayEvent : 0,
  $numberChance : $('.inner_dice .num_txt'),
  setChance: function() {
    this.$numberChance.html(this.numberDiceChance);
  },
  setHorsePosition : function(number) {
    var movedPositionNumber = this.horsePosition + number;
    this.horseTotalMoveNumber += movedPositionNumber;
    if(movedPositionNumber >= marbleData.length) {
      this.horsePosition = movedPositionNumber - marbleData.length;
      this.numberCompletions++;
    }else{
      this.horsePosition = movedPositionNumber;
    }
  },
  init: function () {
    var _this = this;
    this.setChance();
    marbleDice.$play.click(function(){
      if(_this.numberDiceChance <= 0) {
        alert('보유 주사위가 없습니다.');
        return;
      }
      _this.numberDiceChance -= 1;
      _this.setChance();
      marbleDice.show();
      marbleDice.play(function(number) {
        _this.totalPlayEvent += 1;
        _this.setHorsePosition(number);
        marbleHorse.move(
          marbleData[_this.horsePosition].x,
          marbleData[_this.horsePosition].y,
          setTimeout(function(){
            marblePopup.changeImg(marbleData[_this.horsePosition].img, marbleData[_this.horsePosition].txt);
            marblePopup.show();
          },1000)
        );
      });
    });
    marblePopup.$close.click(function(){
      marblePopup.hide();
      marbleDice.hide();
    });
  }
};