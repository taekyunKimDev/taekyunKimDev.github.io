/**
 * Created by user on 2017-11-08.
 */
var socket = new function(){
    this.userId = "test"; // 임시로 테스트 적용
    this.server;
    this.loginDomain;
    this.nameSpace;
    this.idx = 1;
    this.cnt = 0;

    // 초기화
    this.init = function(){
        socket.loginDomain = $("#socket").attr("data");
        socket.nameSpace  = $("#socket").attr("data-type");
        socket.server = io(socket.loginDomain+'/'+socket.nameSpace);

        socket.join();
        socket.clickEvent();
        socket.recevie();
    };

    this.join = function(){
        var data = {"userId":socket.userId};
        socket.server.emit("join", data);
    };

    this.sendMsg = function(data){
        socket.server.emit("msg", data);
    };

    // 플레이어 클릭시 화면 체크
    this.clickEvent = function(){

        // 페이지 확인
        $(document).on("click", ".btn-identify", function(){
            var id = $(this).attr("data-id");

            var data = {"code":"001", "socketId":id, "color":$("#color").val()};
            socket.sendMsg(data);
        });

        // 플레이어 연동
        $(document).on("click", ".btn-connect", function(){
            socket.playerConnect($(this));
        });

        //페이지 선택
        $(document).on("click", ".btn-select", function(){
            //var parent = $(this).parents("ul");

            var id = $(this).attr("data-id");

            var dataType = $(this).attr("data-select-yn");

            if(dataType=="Y"){
                dataType = "N";
                $(this).css({"background-color":"#f6f6f6"});
                $(this).css({"color":"#666"});
            }else{
                //parent.css({"border":"red 1px solid"});
                $(this).css({"background-color":"#333333"});
                $(this).css({"color":"#ffffff"});
                dataType = "Y";
            }
            //<button class="btn_line btn-select" data-id="/login#ryfcTy9lWUWRKNixAAKm" data-select-yn="N">선택</button>
            //#f6f6f6, #666

            $(this).attr("data-select-yn", dataType);

            var data = {"code":"002", "socketId":id, "type":dataType};
            socket.sendMsg(data);
        });
    };

    this.recevie = function(){
        socket.server.on("msg", function(data){
            switch(data.code){
                case "002": // 다른관리자가 플레이어 선택시
                    //$("#playerList").append(socket.getPlayRow(data.mac, data.socketId));
                    var temp = "/"+socket.nameSpace+"#";
                    var id = data.socketId.replace(temp, "");

                    if(data.type=="Y"){
                        $("#playerList").find("." + id).hide();
                    }else{
                        $("#playerList").find("." + id).show();
                    }

                    break;
                case "004": // 플레이어 정보
                    $("#playerList").append(socket.getRow(data.mac, data.socketId));
                    break;
                case "005": { // 플레이어 리스트 정보
                    for (var i = 0; i < data.socketIdList.length; i++) {
                        $("#playerList").append(socket.getRow(data.macList[i], data.socketIdList[i]));
                    }
                }
                    break;
                case "006": { // 플레이어 접속 종료
                    var temp = "/"+socket.nameSpace+"#";
                    var id = data.socketId.replace(temp, "");

                    $("#playerList").find("." + id).remove();

                    socket.cnt--;
                    $(".txt_disPlayNum").find("span").text(socket.cnt);
                }
                    break;
            }
        });
    };

    // 플레이어 연동 전송
    this.playerConnect = function(obj){
        var parent = obj.parents("li");

        if(parent.is(".select") === true) {
            alert(selectedAdminMsg);
        }

        var formId = parent.find(".form-id");
        var name = parent.find(".install-name");
        var playerX = parent.find(".playerX");
        var playerY = parent.find(".playerY");
        var playerW = parent.find(".playerW");
        var playerH = parent.find(".playerH");

        if(!formId.val()){
            alert(inputIdMsg);
            formId.focus();

        }else if(!name.val()){
            alert(inputInstallNameMsg);
            name.focus();

        }else if(!playerX.val()){
            alert(inputXCoordinateMsg);
            playerX.focus();

        }else if(!playerY.val()){
            alert(inputYCoordinateMsg);
            playerY.focus();

        }else if(!playerW.val()){
            alert(inputHorizontalMsg);
            playerW.focus();

        }else if(!playerH.val()){
            alert(inputVerticalMsg);
            playerH.focus();

        }else
        {
            var data = {"code":"003", "socketId":obj.attr("data-id"), "formId":formId.val(), "name":name.val(), "x":playerX.val(), "y":playerY.val(), "w":playerW.val(), "h":playerH.val()};
            socket.sendMsg(data);
        }
    };

    this.getRow = function(mac ,id){

        socket.cnt++;
        $(".txt_disPlayNum").find("span").text(socket.cnt);

        var temp = "/"+socket.nameSpace+"#";
        var str="";
        str +='<li class="'+id.replace(temp, "")+'">';
        str +='	<div>';
        str +='		<div class="area_listHead">';
        str +='			<a href="javascript:;" class="link_player">';
        str +='				<span class="num_display"></span>';
        str +='				<div class="head_display">';
        str +='					<strong>'+mac+'</strong>';
        str +='					<p>' + selectColorDisplayMsg + '</p>';
        str +='				</div>';
        str +='			</a>';
        str +='		</div>';
        str +='		<div class="area_listBody">';
        str +='			<div class="area_input">';
        str +='				<div class="row_input row_divide">';
        str +='					<div class="box_input box_text">';
        str +='						<label for="inpText1">';
        str +='							<strong class="tit_inp">X </strong>';
        str +='							<span class="inner_input inner_text">';
        str +='								<input id="inpText1" type="number" value="" class="playerX">';
        str +='							</span>';
        str +='						</label>';
        str +='					</div>';
        str +='					<div class="box_input box_text">';
        str +='						<label for="inpText2">';
        str +='							<strong class="tit_inp">Y </strong>';
        str +='							<span class="inner_input inner_text">';
        str +='								<input id="inpText2" type="number" value="" class="playerY">';
        str +='							</span>';
        str +='						</label>';
        str +='					</div>';
        str +='				</div>';
        str +='				<div class="row_input row_divide">';
        str +='					<div class="box_input box_text">';
        str +='						<label for="inpText3">';
        str +='							<strong class="tit_inp">W </strong>';
        str +='							<span class="inner_input inner_text">';
        str +='								<input id="inpText3" type="number" value="" class="playerW">';
        str +='							</span>';
        str +='						</label>';
        str +='					</div>';
        str +='					<div class="box_input box_text">';
        str +='						<label for="inpText4">';
        str +='							<strong class="tit_inp">H </strong>';
        str +='							<span class="inner_input inner_text">';
        str +='								<input id="inpText4" type="number" value="" class="playerH">';
        str +='							</span>';
        str +='						</label>';
        str +='					</div>';
        str +='				</div>';
        str +='				<div class="row_input">';
        str +='					<div class="box_input box_text">';
        str +='						<label for="inpText5">';
        str +='							<strong class="tit_inp">From ID</strong>';
        str +='							<span class="inner_input inner_text">';
        str +='								<input id="inpText5" type="text"  value="" class="form-id">';
        str +='							</span>';
        str +='						</label>';
        str +='					</div>';
        str +='				</div>';
        str +='				<div class="row_input">';
        str +='					<div class="box_input box_text">';
        str +='						<label for="inpText6">';
        str +='							<strong class="tit_inp">Name</strong>';
        str +='							<span class="inner_input inner_text">';
        str +='								<input id="inpText6" type="text" value="" class="install-name">';
        str +='							</span>';
        str +='						</label>';
        str +='					</div>';
        str +='				</div>';
        str +='				<div class="area_btn area_divide">';
        str +='					<div class="inner_btn">';
        str +='						<button class="btn_line btn-select" data-id="'+id+'" data-select-yn="N">' + selectOk + '</button>';
        str +='						<button class="btn_line btn-identify" data-id="'+id+'">' + confirmOk + '</button>';
        str +='					</div>';
        str +='				</div>';
        str +='				<div class="area_btn area_btnFull ">';
        str +='					<div class="inner_btn">';
        str +='						<button class="btn_fill btn_send btn-connect" data-id="'+id+'">' + sendOk + '</button>';
        str +='					</div>';
        str +='				</div>';
        str +='			</div>';
        str +='		</div>';
        str +='	</div>';
        str +='</li>';

        return str;
    };
};

socket.init();