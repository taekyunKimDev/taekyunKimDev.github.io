define('dice',[],
  function(){
    return {
      currentNumber: 0,
      $play: $('.btn_dice'),
//        $ico: $('.ico_dice'),
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
//        addClass: function() {
//            this.$ico.addClass('ico_on');
//        },
//        removeClass: function() {
//            this.$ico.removeClass('ico_on');
//        },
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
  }
);
