$(function(){
    function schedule(){
        console.log(1);
        var scheduleBox = $('.schedule-box');
        var box = $('.show-day');
        var boxDay = box.find('ul');
        var boxDayViewer = boxDay.find('li');
        var btnPrev = scheduleBox.find('button.prev');
        var btnNext = scheduleBox.find('button.next');
        
        boxDayViewer.css('width',boxDay.width()/3.001);
        boxDayViewer.click(function(){
            $(this).addClass('day-active').siblings().removeClass('day-active');
            return false;   
        });
        
        function dayMove(){
            btnPrev.click(function(){
               console.log(1); 
            });
            
            btnNext.click(function(){
                console.log(2); 
            });
        }
        dayMove();
   }
    schedule();
});