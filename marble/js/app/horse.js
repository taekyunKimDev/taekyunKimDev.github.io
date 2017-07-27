define('horse',[],
  function(){
    return {
      $ico: $(".ico_horse"),
      move: function(x, y) {
        this.$ico.css({left:x,top:y});
      }
    };
  }
);