$(function(){
    var btn = $('.btn-cate'),
        active = 'cate-active';
    $(btn).on('click foucsin' , function(){
        $(this).closest('li').addClass(active).siblings('li').removeClass(active);
        
    });
});