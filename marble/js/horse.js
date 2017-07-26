var marbleHorse = {
  $ico: $(".ico_horse"),
  move: function(x, y, callback) {
    this.$ico.css({left:x,top:y});
    callback;
  }
};