define('marble',['data', 'horse', 'dice','popup'],
  function(data,horse,dice,popup){
    return {
      horsePosition : 0, // 말의 현재 판에서의 index 수
      horseTotalMoveNumber : 0, // 말이동 총 칸수
      numberCompletions : 0, // 완주 횟수
      numberDiceChance : 5, // 주사위 사용가능 횟수
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
            alert("no chance!!!");
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
              },700)
            );
          });
        });
        popup.$close.click(function(){
          popup.hide();
          dice.hide();
        });
      }
    }
  }
);