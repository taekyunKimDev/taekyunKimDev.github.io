var marblePopup = {
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