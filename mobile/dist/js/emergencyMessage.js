$(document).ready(function(){
    socket.init();

    //그룹 플레이어 변경
    $(document).on("change", "#sel1", function(){
        var grpId = $(this).val();
        $.ajax({
            method: "POST"
            , url: "/schedule/emergency/orgList/"
            , data: {
                "grpId": grpId
            }
            , dataType: "json"
            , error: function () {
            }
        }).done(function (data) {
            console.log("done!!");
            if(data != null){
                var orgList = data.orgList.data.orgList;
                var grpId = data.grpId;
                if(orgList.length > 0){
                    $("#sel2").empty();
                    //편성 추가
                    for( var i=0; i<orgList.length; i++){
                        var orgObj = orgList[i];
                        console.log(orgObj);
                        if(i == 0){
                            $("#sel2").append("" +
                                "<option value=>" + selectPlayer + "</option>" +
                                "<option value=" + orgObj.formId + ">" + orgObj.formNm + "</option>");
                        }else{
                            $("#sel2").append("" +
                                "<option value=" + orgObj.formId + ">" + orgObj.formNm + "</option>");
                        }
                    }

                }else{
                    //alert(groupNoPlayer);
                    $("#sel2").empty();
                    $("#sel2").append("" +
                        "<option value=>" + selectPlayer + "</option>");
                    return;
                }
            }
        });
    });

    //전송
    $(document).on("click", ".btn_fill", function(){

        var formId = $("#sel2").val();
        var color = $("#color").val();
        var msg = $("#inpText1").val();
        var repeatYn = $('input:checkbox[id="chkRepeat"]').is(":checked") == true ? "N" : "Y";
        var startDay = $("#startDate").val();
        var startTime = $("#startTime").val();
        var endDay = $("#endDate").val();
        var endTime = $("#endTime").val();

        if(msg == ""){
            alert(inputMsg);
            return;
        }

        if(formId != ""){
            console.log("msg : " + msg + " / color : " + color + " / repeatYn : " + repeatYn + " / startDay : " + startDay + " / startTime : " + startTime + " / endDay : " + endDay + " / endTime : " + endTime);
            socket.sendAllNotice(msg, color, repeatYn, startDay, startTime, endDay, endTime, formId);
        }else{
            alert(selectNoPlayer);
            return;
        }
        alert(sendOkMsg);

    });


    $(".switch_trough").click(function(){
        //수정중 class=switch_trough
        var onOff = $(this).attr("data");
        socket.displayAllOnOff($("#sel2").val(), onOff);
    });

    //모니터 on/off
    $(".feed_tag_switch").click(function(){
        console.log($(this).is(":checked"));
        if($(this).is(":checked") == true){
            socket.displayAllOnOff($("#sel2").val(), "on");
        }else{
            socket.displayAllOnOff($("#sel2").val(), "off");
        }
    });
});