//document.write('<script type="text/javascript" src="http://m2014.imbc.com/js/like_m.js" charset="euc-kr" ></script>');

/* header.js */
var mbcMobile = new Object();
var todayDate = new Date();
todayDate.setHours(todayDate.getHours() + 1);
var azLikeCookie;

//2015-12-30 add
var mobileDevice = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase())),
	 currentOS = '';
if (mobileDevice) {
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.search('iphone') > -1)
        currentOS = 'iphone';
    else {
        currentOS = 'android';
    }
} else {
    currentOS = 'notMobileDevice';
}

mbcMobile.Header = function () {
    var heightW = jQuery(window).height();

    var initLoad = {
        init: function () {
            this.setHeader();
        },
        setHeader: function () {
            var nmPage = jQuery('#wrap').attr('data-type');

            if (nmPage == null || nmPage == '' || nmPage == 'undefined') {
                nmPage = jQuery("#wrap").attr("name");
            }

            var innerHeader = '';
            innerHeader += '<a class="skip-nav" href="#skip-area">공통 메뉴 건너뛰기</a>';
            innerHeader += '<header id="imbcTop" class="m-gnb-2014">';
            innerHeader += '	<h1 class="h1 clearfx">';

            if (nmPage == "main") {
                innerHeader += '	<span class="link-home"><a id="mainLinkMBC"><img src="https://m.imbc.com/2014mobile/images/logo.png" alt="MBC" /></a></span>';
            } else {
                innerHeader += '	<span>';
                innerHeader += '		<a href="http://m.imbc.com/default.aspx"><img src="https://m.imbc.com/2014mobile/images/logo.png" alt="MBC" /></a>';
            }
            switch (nmPage) {
                case "tv":
                    innerHeader += '	<a href="http://m.imbc.com/program/program.aspx">프로그램</a>';
                    break;
                case "vod":
                    innerHeader += '	<a href="http://m.imbc.com/vod/best.aspx">동영상</a>';
                    break;
                case "clip":
                    innerHeader += '	<a href="http://m.imbc.com/vod/best.aspx">동영상</a>';
                    break;
                case "goods":
                    innerHeader += '	<a href="http://m.imbc.com/vod/best.aspx">동영상</a>';
                    break;
                case "ent":
                    innerHeader += '	<a href="http://m.imbc.com/ent/ent.aspx">연예스포츠</a>';
                    break;
                case "my":
                    innerHeader += '	<a href="http://icash.imbc.com/new/mobile/mypage/payList.asp">마이페이지</a>';
                    break;
                case "guide":
                    innerHeader += '	<a href="http://m.imbc.com/schedule/tv.aspx">편성표</a>';
                    break;
                case "search":
                    innerHeader += '	<a href="#">검색</a>'; //검색 결과 없는 페이지 링크 의미없음
                    break;
                case "onplus":
                    innerHeader += '	<a href="http://m.imbc.com/onairplus/default.aspx">스타&</a>';
                    break;
                case "notice":
                    innerHeader += '	<a href="http://m.imbc.com/notice/default.aspx">공지사항</a>';
                    break;
                case "music":
                    innerHeader += '    <a href="http://m.imbc.com/musicplus/default.aspx" class="bg-head-plus">해요TV</a>'; //2016-01-21 수정
                    break;
                case "iMBCsport":
                    innerHeader += '	<a href="http://m.imbc.com/sports/default.aspx">iMBC 스포츠</a>'; //2015.05.19 추가
                    break;
                case "bbchoice":
                    innerHeader += '	<a href="http://m.imbc.com/bbchoice/default.aspx">당신을 위한 추천</a>'; //2015.06.04 추가
                    break;
                case "radio":
                    innerHeader += '   <a href="../radio/radio.aspx">라디오</a>';
                    break;
            }
            innerHeader += '	</span>';
            innerHeader += '	</h1>';
            innerHeader += '	<button type="button" id="btnMn" class="btn-menu"><img src="https://m.imbc.com/2014mobile/images/ico-nav.png" alt="좌측 서비스 메뉴" /></button>';
            innerHeader += '	<div id="mnWrap" class="grid-mn" aria-hidden="true">';
            innerHeader += '		<div class="inner-mn">';
            innerHeader += '			<h2 class="blind">좌측 서비스 메뉴</h2>';
            if (escape(getCookie("IMBCMAIN")) == "") {
                innerHeader += '			<div class="mn-top"><strong class="txt-cut font-lightgray ico-me-logout">로그인하세요</strong><a href="#" onclick="iMbc_Mobileloginpage();" class="font-blue bround">로그인</a></div>';
            }
            else {
                innerHeader += '			<div class="mn-top"><strong class="txt-cut font-blue ico-me-login">' + getCookie("IMBCID").toLowerCase() + '</strong><a href="#" onclick="iMbc_Mobilelogout();" class="font-gray bround">로그아웃</a></div>';
            }


            //2015.06.04 추가 Start
            innerHeader += '			<div class="mn-mychoice">';
            innerHeader += '				<a href="http://m.imbc.com/bbchoice/default.aspx">♥ 당신을 위한 추천</a>	';
            innerHeader += '				<div>';
            innerHeader += '					<strong class="txt-blind">좋아요 이력</strong>';
            innerHeader += '					<a href="http://m.imbc.com/mypage/mylike.aspx">프로그램<span id="mylikeprg"></span></a>';
            innerHeader += '					<a href="http://m.imbc.com/mypage/mylikeStar.aspx" class="line-mn-bot">스타<span id="mylikestar"></span></a>'
            innerHeader += '				</div>';
            innerHeader += '			</div>';


            jQuery.ajax({
                type: "get",
                url: "http://bbchoice.imbc.com/api/RetrieveLikeCookie.ashx",
                dataType: "jsonp",
                success: function (data) {
                    if (data != null) {
                        jQuery("#mylikeprg").html(data.Program.length);
                        jQuery("#mylikestar").html(data.Star.length);
                    }
                },
                error: function (request, status, error) {

                }
            });


            //2015.06.04 추가 End
            //2015-12-30 수정 Start
            innerHeader += '			<nav class="mn-service">';
            innerHeader += '				<div class="mn-other">';
            innerHeader += '					<a href="http://m.imbc.com/schedule/tv.aspx">편성표</a>';
            innerHeader += '				</div>';

            //2016-01-21 수정 Start
            innerHeader += '				<div class="mn-big">';
            innerHeader += '					<a href="http://m.imbc.com/onairplus/default.aspx">스타&</a>';
            innerHeader += '					<a href="http://m.imbc.com/sports/default.aspx">iMBC 스포츠</a>';
            innerHeader += '				</div>';
            innerHeader += '				<div class="mn-big">';
            innerHeader += '					<a href="http://m.imbc.com/musicplus/default.aspx" class="mn-full">해요TV+</a>';
            innerHeader += '				</div>';
            //2016-01-21 수정 end



            //2016-01-04 프로모션 배너
            innerHeader += '				<div class="mn-promotion" id ="mn_promotion"></div>';
            //2016-01-04 프로모션 배너

            //2016-01-04 앱 리스트
            innerHeader += '				<div class="mn-applist">';
            innerHeader += '					<h2 class="blind">MBC App</h2>';
            innerHeader += '					<ul id ="mn_applist">';
            //innerHeader += '					    <li><a href="#" target="_blank"><img src="http://m.imbc.com/2014mobile/admin/ad5/__icsFiles/afieldfile/2015/09/01/android_heyo_icon_114.png" alt="앱 이름" /><span class="txt-wrap"><span class="txt-align"><span class="txt-cut-custom txt-line2">앱 이름</span></span></span></a></li>';
            innerHeader += '					</ul>';
            innerHeader += '				</div>';
            //2016-01-04 앱 리스트   

            jQuery.ajax({
                type: "get",
                url: "http://m.imbc.com/2014mobile/m_2014_xml/mobile_data.xml",
                dataType: "xml",
                success: function (xml) {
                    if (jQuery(xml).find("MBC").find("HOTAPP").find("LIST").length > 0) {
                        jQuery(xml).find("MBC").find("HOTAPP").find("LIST").each(function () {
                            var title = jQuery(this).find("TITLE").text();
                            var thumb = jQuery(this).find("THUMB").text();
                            var ios_url = jQuery(this).find("IOSURL").text();
                            var android_url = jQuery(this).find("ANDROIDURL").text();
                            var url = "";
                            var ua = window.navigator.userAgent;
                            if (/iPhone/i.test(ua) || /ipad/i.test(ua)) {
                                url = ios_url;
                            } else {
                                url = android_url;
                            }

                            var app_listHtml = '<li><a href="' + url + '" target="_blank"><img src="' + thumb + '" alt="' + title + '" /><span class="txt-wrap"><span class="txt-align"><span class="txt-cut-custom txt-line2">' + title + '</span></span></span></a></li>';
                            jQuery('#mn_applist').append(app_listHtml);
                        });
                    }

                    if (jQuery(xml).find("MBC").find("LEFTMENU").find("LIST").length > 0) {
                        var items = jQuery(xml).find("MBC").find("LEFTMENU").find("LIST");
                        var random = Math.floor(Math.random() * items.length);
                        var item = jQuery(items[random]);
                        var title = item.find("TITLE").text();
                        var thumb = item.find("THUMB").text();
                        var url = item.find("URL").text();
                        var promotion_listHtml = '<a href="' + url + '" target="_blank"><img src="' + thumb + '" alt="' + title + '" /></a>';
                        jQuery('#mn_promotion').append(promotion_listHtml);

                    }
                },

                error: function (request, status, error) {

                }
            });

            innerHeader += '			</nav>';
            innerHeader += '			<div class="mn-bot">'; //2015-09-15 메뉴 수정/추가 
            innerHeader += '				<a href="http://djgpark.imbc.com">용인 대장금 파크</a>';
            innerHeader += '				<a href="http://mbcworld.imbc.com/m/">MBC WORLD</a>';
            innerHeader += '				<a href="http://ann.imbc.com">언어운사</a>';
            innerHeader += '				<a href="http://mbcmall.imbc.com/">MBC MALL</a>';
            innerHeader += '			</div>';
            innerHeader += '			<div class="mn-bot2">';
            if (escape(getCookie("IMBCMAIN")) == "") {
                //innerHeader += '				<a href="javascript:fnRegisterUser();">간편가입</a>';
                innerHeader += '				<a href="http://m.imbc.com/User/Terms_Agree2.aspx">간편가입</a>';
            } else {
                innerHeader += '				<a href="http://m.imbc.com/notice/terms.aspx">이용약관</a>';
            }
            innerHeader += '				<a href="http://m.imbc.com/notice/default.aspx" class="line-mn-bot">공지사항</a>';
            innerHeader += '			</div>';
            innerHeader += '			<button type="button" id="btnMnClose" class="btn-mn-close ico-mn-close2"><span class="txt-blind">좌측 서비스 메뉴 닫기</span></button>';
            innerHeader += '		</div>';
            //2015-12-30 수정 End
            innerHeader += '	</div>';
            innerHeader += '	<div class="back-op txt-blind">.</div>';
            innerHeader += '	<button href="#" type="button" id="btnSch" class="btn-srch"><img src="https://m.imbc.com/2014mobile/images/ico-search.png" alt="검색창 열기" /></button>';
            innerHeader += '	<div class="wrap-sch blind-sch" aria-hidden="true">';
            innerHeader += '		<form method="get" id="formSch" action="/search/default.aspx">';
            innerHeader += '			<fieldset>';
            innerHeader += '				<legend class="blind">imbc 컨텐츠 통합검색</legend>';
            innerHeader += '				<div class="grid-sch">';
            innerHeader += '					<div class="inner-sch">';
            innerHeader += '						<div class="user-name-wrap">';
            innerHeader += '							<label for="schArea" class="blind">통합검색</label><input type="search" name="keyword" id="schArea" class="user-name"/>';
            innerHeader += '						</div>';
            innerHeader += '						<input class="btn-cancel ico-cancel-sch" type="reset" value="취소" />';
            innerHeader += '						<button type="submit" class="btn-search ico-sch" id="btnSearch">검색하기</button>';
            innerHeader += '					</div>';
            innerHeader += '				</div>';
            innerHeader += '            </fieldset>';
            innerHeader += '			</form>';
            innerHeader += '	</div>';

            if (nmPage == "radio") { //2015-09-15 미니 아이콘 추가
                innerHeader += '<a href="#" class="btn-mini"><img src="https://m.imbc.com/2014mobile/images/ico-mini-gnb.png" alt="미니 바로가기" /></a>';
            }
            innerHeader += '</header>';

            jQuery('#wrap').prepend(innerHeader);


            jQuery('.inner-mn').css('height', heightW + 'px');

            //-- Main MBC 로고 클릭시 ---
            jQuery("#mainLinkMBC").click(
                function () {
                    setCookie("newflickidx", 0, todayDate, "/", "imbc.com", false);
                    window.location.href = 'http://m.imbc.com/Default.aspx';
                }
            );

            //-- Left 메뉴 클릭 ----- 추가 (문현선) s
            jQuery("#leftnav_hot").click(
                function () {
                    jQuery("#btnMnClose").click();
                    if (jQuery('#wrap').attr('data-type') != "main") {
                        setCookie("newflickidx", 0, todayDate, "/", "imbc.com", false);
                        window.location.href = 'http://m.imbc.com/Default.aspx';
                    }
                    else {
                        movePannel(0);
                    }
                }
            );

            jQuery(".ico-me-login").click(
                function () {
                    window.location.href = 'http://icash.imbc.com/new/mobile/mypage/payList.asp';
                }
            );

            jQuery("#leftnav_tv").click(
                function () {
                    jQuery("#btnMnClose").click();

                    if (jQuery('#wrap').attr('data-type') != "main") {
                        setCookie("newflickidx", 1, todayDate, "/", "imbc.com", false);
                        window.location.href = 'http://m.imbc.com/Default.aspx';
                    }
                    else {
                        movePannel(1);
                    }
                }
            );

            jQuery("#leftnav_vod").click(
                function () {
                    jQuery("#btnMnClose").click();

                    if (jQuery('#wrap').attr('data-type') != "main") {
                        setCookie("newflickidx", 2, todayDate, "/", "imbc.com", false);
                        window.location.href = 'http://m.imbc.com/Default.aspx';
                    }
                    else {
                        movePannel(2);
                    }
                }
            );

            ///라디오 추가 변경
            jQuery("#lefnav_radio").click(
                function () {
                    jQuery("#btnMnClose").click();

                    if (jQuery('#wrap').attr('data-type') != "main") {
                        setCookie("newflickidx", 3, todayDate, "/", "imbc.com", false);
                        window.location.href = 'http://m.imbc.com/Default.aspx';
                    }
                    else {
                        movePannel(3);
                    }
                }
            );

            jQuery("#lefnav_ent").click(
                function () {
                    jQuery("#btnMnClose").click();
                    if (jQuery('#wrap').attr('data-type') != "main") {
                        setCookie("newflickidx", 4, todayDate, "/", "imbc.com", false);
                        window.location.href = 'http://m.imbc.com/Default.aspx';
                    }
                    movePannel(4);
                }
            );

            jQuery("#leftnav_news").click(
                function () {
                    jQuery("#btnMnClose").click();
                    if (jQuery('#wrap').attr('data-type') != "main") {
                        setCookie("newflickidx", 5, todayDate, "/", "imbc.com", false);
                        window.location.href = 'http://m.imbc.com/Default.aspx';
                    }
                    movePannel(5);
                }
            );
            //-- Left 메뉴 클릭 ----- 추가 (문현선) e

            //검색 링크 추가 김현정 
            jQuery("#btnSearch").click(
                function () {
                    if (jQuery('#schArea').val().trim() == "") {
                        alert("검색어를 입력해 주세요!");
                    } else {
                        document.getElementById("formSch").action = "http://m.imbc.com/search/default.aspx";
                        document.getElementById("formSch").submit();
                        //                        window.location.href = "http://m.imbc.com/search/default.aspx?keyword=" + jQuery('#schArea').val().trim();
                    }
                }
            );

            jQuery(".btn-cancel").click(
                function () {
                    jQuery('#schArea').val('');
                    jQuery('#schArea').focus();
                }
            );

            jQuery("#btnMn").click(
				function () {
				    jQuery('.back-op').addClass('back-on');
				    jQuery('#btnMnClose').removeClass('blind');
				    jQuery(this).addClass('mn-index-on');
				    jQuery('#mnWrap').animate({ "left": 0 }, 600).addClass('screen-on').attr('aria-hidden', 'false');
				    jQuery('#wrap').addClass('mn-on');
				}
			);

            jQuery("#btnMnClose").click(
				function () {
				    jQuery('.back-op').removeClass('back-on');
				    jQuery(this).addClass('blind');
				    jQuery('#mnWrap').animate({ "left": '-100%' }, 600, function () {
				        jQuery('#btnMn').removeClass('mn-index-on');
				        jQuery(this).removeClass('screen-on').attr('aria-hidden', 'true');
				    });
				    jQuery('#wrap').removeClass('mn-on');

				}
			);

            jQuery(".btn-mini").click(
				function () {
				    var uagent = navigator.userAgent.toLocaleLowerCase();
				    if (uagent.search("iphone") > -1 || uagent.search("ipod") > -1 || uagent.search("ipad") > -1) {
				        window.open('https://itunes.apple.com/us/app/mbc-ladio-mini/id384041016?mt=8');
				    } else {
				        window.open('market://details?id=com.imbc.mini ');
				    }
				}
			);

            jQuery(window).resize(function () {
                heightW = jQuery(window).height();
                jQuery('.inner-mn').css('height', heightW + 'px');
            });

            var wrapSch = jQuery('.wrap-sch');
            var btnSch = jQuery('#btnSch');
            var userName = jQuery('.user-name');
            var inpSch = jQuery('#schArea');
            var srcBtn = btnSch.find('img').attr('src');
            var altBtn = btnSch.find('img').attr('alt');
            var adArea = jQuery('#MobileadAreaDiv');

            if (nmPage == 'search') {
                btnSchOn();
                inpSch.attr('placeholder', '');
                inpSch.val(keyword);
            }

            btnSch.click(function () {
                if (btnSch.hasClass('btn-close') == true) {
                    btnSchOff();
                } else {
                    btnSchOn();
                    userName.focus();
                }
            });

            function btnSchOff() {
                var repImg = srcBtn.replace("close", "search");
                var repTxt = altBtn.replace("검색창 닫기", "검색창 열기");
                wrapSch.addClass('blind-sch').attr('aria-hidden', 'true');
                btnSch.removeClass('btn-close');
                btnSch.find('img').attr({ src: repImg, alt: repTxt });
                adArea.show();
            }

            function btnSchOn() {
                var repImg = srcBtn.replace("search", "close");
                var repTxt = altBtn.replace("검색창 열기", "검색창 닫기");
                wrapSch.removeClass('blind-sch').attr('aria-hidden', 'false');
                btnSch.addClass('btn-close');
                btnSch.find('img').attr({ src: repImg, alt: repTxt });
                userName.focus(function () {
                    adArea.hide();
                });
                userName.blur(function () {
                    adArea.show();
                });
            }
        }
    }
    initLoad.init();
}

jQuery(function () {
    mbcMobile.Header();

});