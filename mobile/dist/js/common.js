var DATE = new Date();
var date = leadingZeros(DATE.getFullYear(), 4) + '-' +leadingZeros(DATE.getMonth() + 1, 2) + '-' +leadingZeros(DATE.getDate(), 2);
var nextDate = leadingZeros(DATE.getFullYear(), 4) + '-' +leadingZeros(DATE.getMonth() + 1, 2) + '-' +leadingZeros(DATE.getDate()+1, 2);
var time = leadingZeros(DATE.getHours(), 2) + ':' +leadingZeros(DATE.getMinutes(), 2);
var nextTime = leadingZeros(DATE.getHours()+1, 2) + ':' +leadingZeros(DATE.getMinutes(), 2);
function leadingZeros(n, digits) {
    var zero = '';
    n = n.toString();

    if (n.length < digits) {
        for (i = 0; i < digits - n.length; i++) zero += '0';
    }
    return zero + n;
}

$(document).ready(function(){

    $(document).on("click", ".link_player", function(){
        var parentLi = $(this).parents('li');
        $(this).toggleClass('on');
        $(this).parents('li').toggleClass('active');
        var color = $('.palette-color-picker-button').css('background-color');
        if(!(parentLi.hasClass('active'))){
            $('.list_display .num_display').css('background-color','#d4d4d4');
        }else{
            if(color === 'rgba(0, 0, 0, 0)'){
                return false;
            }else{
                $('.list_display .on .num_display').css('background-color',color);
                $('.list_display .btn_send').css('background-color',color);
            }

        }
    });

    $('[name="unique-name-1"]').paletteColorPicker({
        colors: [
            {"block": "#333"},
            {"gray": "#999"},
            {"bluish_green": "#00c09b"},
            {"light_green": "#00d166"},
            {"sky_blue": "#0099e1"},
            {"purple": "#c9338b"},
            {"dark_blue": "#2e4960"},
            {"yellow": "#f9c400"},
            {"orange": "#f57800"},
            {"red": "#fa3a2f"}
        ],
        // Add custom class to the picker
        custom_class: 'double',
        // Force the position of picker's bubble
        position: 'downside', // default -> 'upside'
        // Where is inserted the color picker's button, related to the input
        insert: 'after', // default -> 'before'
        // Don't add clear_btn
        clear_btn: 'last', // null -> without clear button, default -> 'first'
        // Timeout for the picker's fade out in ms
        timeout: 2000, // default -> 2000
        // Forces closin all bubbles that are open before opening the current one
        close_all_but_this: false, // default is false
        // Sets the input's background color to the selected one on click
        // seems that some users find this useful ;)
        set_background: '#727272', // default is false

        // Events
        // Callback on bubbl show
        onbeforeshow_callback: function( what ) {
            console.log(what);
        },

        // Callback on change value
        onchange_callback: function( clicked_color ) {
            $("#color").val(clicked_color);
            console.log(clicked_color);
        }
    });

    $('[name="unique-name-2"]').paletteColorPicker({
        colors: [
            {"block": "#333"},
            {"gray": "#999"},
            {"bluish_green": "#00c09b"},
            {"light_green": "#00d166"},
            {"sky_blue": "#0099e1"},
            {"purple": "#c9338b"},
            {"dark_blue": "#2e4960"},
            {"yellow": "#f9c400"},
            {"orange": "#f57800"},
            {"red": "#fa3a2f"}
        ],
        // Add custom class to the picker
        custom_class: 'double',
        // Force the position of picker's bubble
        position: 'downside', // default -> 'upside'
        // Where is inserted the color picker's button, related to the input
        insert: 'after', // default -> 'before'
        // Don't add clear_btn
        clear_btn: 'last', // null -> without clear button, default -> 'first'
        // Timeout for the picker's fade out in ms
        timeout: 2000, // default -> 2000
        // Forces closin all bubbles that are open before opening the current one
        close_all_but_this: false, // default is false
        // Sets the input's background color to the selected one on click
        // seems that some users find this useful ;)
        set_background: '#727272', // default is false

        // Events
        // Callback on bubbl show
        onbeforeshow_callback: function( what ) {
            console.log(what);
        },
        // Callback on change value
        onchange_callback: function( clicked_color ) {
            console.log(clicked_color);

            $("#color").val(clicked_color);
            $('.list_display .on .num_display').css('background-color',clicked_color);
            $('.list_display .btn_send').css('background-color',clicked_color);
        }
    });

    $('.swatch').click(function(){
        $('.palette-color-picker-bubble').hide();
        $('.palette-color-picker-button').addClass('btnRadius');

    });

    $('#startDate').val(date);
    $('#startTime').val(time);
    $('#endDate').val(nextDate);
    $('#endTime').val(nextTime);

    $('.inp_sel').click(function(){
        if($(this).parent('.inner_select').hasClass('off')){
            $(this).parent('.inner_select').removeClass('off');
            return false;
        }else{
            $(this).parent('.inner_select').addClass('off');
        }
    });
    $('.switch_input').click(function(){
        if($('.switch_input').prop("checked")){
            $('.area_input').removeClass('disable_area_input');
            $('.fixed_button button').attr('disabled',false);
            $('.area_input input').attr('disabled',false);
            $('.area_input select').attr('disabled',false);
            $('.palette-color-picker-button').css({ 'pointer-events': 'auto' });

        }else{
            $('.area_input').addClass('disable_area_input');
            $('.fixed_button button').attr('disabled',true);
            $('.area_input input').attr('disabled',true);
            $('.area_input select').attr('disabled',true);
            $('.palette-color-picker-button').css({ 'pointer-events': 'none' });
        }
    });
});