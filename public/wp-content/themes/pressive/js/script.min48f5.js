/*! Thrive Themes - 2018-05-07
* https://thrivethemes.com/
* Copyright (c) 2018 Thrive Themes */

if(void 0===ThriveApp)var ThriveApp={};var _isAdmin=0,_is_blankPage=0;ThriveApp.is_theme_layout=!1,ThriveApp.winWidth=jQuery(window).width(),ThriveApp.viewportHeight=jQuery(window).height(),jQuery(function(){_isAdmin=jQuery("#wpadminbar").length,ThriveApp.menuPositionTop=jQuery(".m-si nav").length?jQuery(".m-si nav").position().top:0,_is_blankPage=jQuery(".bp-t").length,_is_blankPage||(ThriveApp.menuPositionTop=jQuery("nav.right").length?jQuery("nav.right").position().top:0),ThriveApp.is_theme_layout=!!(jQuery(".bSe .awr .tve-c").length+jQuery(".bp-t .wrp").length),ThriveApp.menuResponsive(),ThriveApp.shortcodeTabsResize(),ThriveApp.setPageSectionHeight(),ThriveApp.bind_comments_handlers(),ThriveApp.check_comments_hash(),ThriveApp.videoShorcode(),ThriveApp.image_post_resize(),ThriveApp.blog_gallery(),jQuery(".cdt").thrive_timer(),ThriveApp.post_format_gallery(),ThriveApp.show_search(),ThriveApp.bold_first_paragraph(),ThriveApp.grid_layout(".gin",".gr-i"),jQuery(".sm_icons, .scfm .ss").each(function(){jQuery(this).mouseover(function(){jQuery(".bubb",this).css("left",function(){return(jQuery(this).parent().width()-jQuery(this).width())/2}).show(0)}),jQuery(this).mouseout(function(){jQuery(".bubb",this).hide()})}),jQuery(".tmw").hover(function(){jQuery(this).find(".tmm").slideDown()},function(){jQuery(this).find(".tmm").slideUp()}),jQuery(".faqB").click(function(){var a=jQuery(this).parents(".faqI");return a.toggleClass("oFaq"),jQuery(".faqC",a).slideToggle("fast"),!1}),jQuery(".accss .acc-h").click(function(){var a=jQuery(this),b=jQuery(this).parents(".accs"),c=b.find(".accss");if(a.parent().hasClass("opac"))return!1;a.parents(".accs").find(".opac").find(".accsi").slideUp(function(){c.removeClass("opac")}),a.next(".accsi").slideDown(function(){a.parents(".accss").addClass("opac")})}),jQuery(".thrive-borderless .wp-video-shortcode").length>0&&(jQuery(".thrive-borderless .wp-video-shortcode").css("width","100%"),jQuery(".thrive-borderless div").css("width","100%")),ThriveApp.comments_page=1,1==ThriveApp.lazy_load_comments&&(jQuery(window).scroll(ThriveApp.bind_scroll),ThriveApp.load_comments()),jQuery(window).trigger("scroll"),ThriveApp.bind_masonry_layout(),jQuery("#shf").on("click",function(){jQuery(".lrp.hid").slideToggle()}),jQuery(window).resize(function(){var a=jQuery(window).width(),b=jQuery(window).height();ThriveApp.winWidth!==a&&ThriveApp.delay(function(){ThriveApp.menuResponsive()},1),ThriveApp.winWidth=a,ThriveApp.viewportHeight=b,ThriveApp.shortcodeTabsResize(),ThriveApp.videoShorcode(),ThriveApp.setVideoPosition(),ThriveApp.setPageSectionHeight(),ThriveApp.image_post_resize(),ThriveApp.grid_layout(".gin",".gr-i")}),jQuery("body").on("added_to_cart",function(a,b,c,d){var e=jQuery(b[".mini-cart-contents"]).find("a.cart-contents-btn");jQuery(".mobile-mini-cart").html("").append(e)}),window.FB&&window.FB.XFBML&&jQuery(".fb-comments").each(function(){window.FB.XFBML.parse(this.parentNode)})}),ThriveApp.grid_layout=function(a,b){jQuery(a).length>0&&jQuery(a).each(function(){var a=jQuery(b,this),c=a.length,d=function(b){for(var d="",e=0;e<c;e+=b){3==b&&(d=":eq("+e+"),:eq("+(e+1)+"),:eq("+(e+2)+")"),2==b&&(d=":eq("+e+"),:eq("+(e+1)+")");var f=a.filter(d),g=jQuery(f).map(function(){return f.css("height",""),jQuery(this).height()}),h=Math.max.apply(null,g);f.height(h)}};ThriveApp.winWidth>=940?d(jQuery(".bSe").hasClass("fullWidth")?3:2):940>ThriveApp.winWidth&&ThriveApp.winWidth>=741&&d(2)})},ThriveApp.bold_first_paragraph=function(){"post"==ThriveApp.post_type&&jQuery(".bSe .awr-i .tve-c").children().each(function(){var a=jQuery(this),b=jQuery.trim(a.text()),c=a.html().replace(/&nbsp;/g,"");if(!a.is(":hidden")&&!a.is(":empty")){if("P"!=a.prop("tagName"))return!1;if(""!=b&&""!=c)return a.addClass("ifp"),!1;if(""!=b||""!=c)return!1}})},ThriveApp.show_search=function(){jQuery(".s-bb").on("click",function(){jQuery(".h-b").toggleClass("s-s").find("#search").focus()})},ThriveApp.bind_masonry_layout=function(){if(jQuery(".bSe").hasClass("mry")){var a=document.querySelector(".mry");new Masonry(a,{itemSelector:".mry-i",gutter:".mry-g"})}},jQuery(window).on("load",function(){ThriveApp.bind_masonry_layout(),ThriveApp.resize_blank_page()}),ThriveApp.post_format_gallery=function(){jQuery("div[id^='thrive-gallery-header']").each(function(){jQuery(this).attr("data-count",jQuery(this).find(".thrive-gallery-item").length);var a=jQuery(this),b=a.find(".gnext"),c=a.find(".gprev"),d=a.find(".gallery-dmy");jQuery(".thrive-gallery-item",a).click(function(){return a.attr("data-index",jQuery(this).attr("data-index")),a.css("background-image","url("+jQuery(this).attr("data-image")+")"),d.attr("src",jQuery(this).attr("data-image")),!1}),c.click(function(){var b=parseInt(a.attr("data-index")),c=b-1;return c<0&&(c=a.attr("data-count")-1),jQuery("#li-thrive-gallery-item-"+c,a).length>0&&(a.attr("data-index",jQuery("#li-thrive-gallery-item-"+c,a).find("a").attr("data-index")),a.css("background-image","url("+jQuery("#li-thrive-gallery-item-"+c,a).find("a").attr("data-image")+")"),d.attr("src",jQuery("#li-thrive-gallery-item-"+c,a).find("a").attr("data-image"))),!1}),b.click(function(){var b=parseInt(a.attr("data-index")),c=b+1;return c>=a.attr("data-count")&&(c=0),jQuery("#li-thrive-gallery-item-"+c,a).length>0&&(a.attr("data-index",jQuery("#li-thrive-gallery-item-"+c,a).find("a").attr("data-index")),a.css("background-image","url("+jQuery("#li-thrive-gallery-item-"+c,a).find("a").attr("data-image")+")"),d.attr("src",jQuery("#li-thrive-gallery-item-"+c,a).find("a").attr("data-image"))),!1})})},ThriveApp.progress_bar=function(){jQuery('.pbfc:not(".stopCount")').each(function(a){if(jQuery(this).parents(".nsd").hasClass("nsds")){var b=jQuery(this),c=b.attr("data-percent"),d=b.find(".pbf span");jQuery({countNum:0}).animate({countNum:c},{duration:3e3,easing:"linear",step:function(){d.text(Math.ceil(this.countNum))},done:function(){d.text()==c&&b.addClass("stopCount")}})}})},ThriveApp.number_counter=function(){jQuery(".nbc.nsds").each(function(){function a(c,f){e=Math.ceil(f/100),c<=f?(b.text(c),c+=e,c+e>f&&(b.text(f),clearTimeout(d)),d=setTimeout(function(){a(c,f)},50)):clearTimeout(d)}var b=jQuery(".nbcn",this),c=b.attr("data-counter"),d=null,e=1;"false"==jQuery(this).attr("data-started")&&(a(0,c),jQuery(this).attr("data-started","true"))})},ThriveApp.image_post_resize=function(){jQuery(".tt-dmy").css({"max-height":ThriveApp.viewportHeight,"max-width":ThriveApp.winWidth})},ThriveApp.setPageSectionHeight=function(){var a=jQuery(" .wrp .bpd,.wrp .fullWidth , .wrp  .lnd "),b=a.length;b&&ThriveApp.winWidth;jQuery(".pddbg, .scvps, .vt").css("max-width",ThriveApp.winWidth+"px"),jQuery(".pdfbg").each(function(){var a=jQuery(this).css("box-sizing","border-box"),b=parseInt(a.attr("data-height")),c=parseInt(a.attr("data-width")),d="100%";if(b&&!isNaN(b)&&c&&!isNaN(c)){var e=Math.min(ThriveApp.winWidth,a.parent().width());d=(e<c?e*b/c:b)+"px"}a.css("min-height",d)})},ThriveApp.showMenu=function(){jQuery("header nav ul li").each(function(){jQuery(this).mouseenter(function(){if(jQuery(this).hasClass("has-extended")&&ThriveApp.winWidth>=722){var a=jQuery(this).children(".sub-menu"),b=jQuery(this).offset().left,c=a.width(),d=jQuery(".wrp.cnt"),e=d.width(),f=d.offset().left;(b<f||b+c>f+e)&&(a.addClass("position_menu"),b<f?a.hasClass("position_right")||a.addClass("position_left"):b+c>f+e&&(a.hasClass("position_left")||a.addClass("position_right"))),jQuery(this).children(".sub-menu").stop().fadeIn("fast")}else jQuery(this).children(".sub-menu").show()}),jQuery(this).mouseleave(function(){jQuery(this).children(".sub-menu").stop().fadeOut("fast")})})},ThriveApp.menuResponsive=function(){ThriveApp.winWidth<774?(jQuery("header nav ul li").each(function(){jQuery(this).unbind("mouseenter"),jQuery(this).unbind("mouseleave")}),jQuery(".hsm").unbind("click").on("click",function(){var a=jQuery("#floating_menu").height(),b=jQuery("#wpadminbar").length?46:0,c=a+b,d=ThriveApp.viewportHeight-c;jQuery(".m-si nav").fadeToggle("fast",function(){var a=jQuery("#floating_menu nav ul").height();ThriveApp.viewportHeight<=a+c&&(jQuery(".m-si nav").css({"max-height":d+"px"}),jQuery("html").addClass("html-hidden")),a<=0&&jQuery("html").removeClass("html-hidden")})})):ThriveApp.winWidth>=774&&ThriveApp.showMenu()},ThriveApp.shortcodeTabsResize=function(){jQuery(".scT ul.scT-tab li").on("click",function(a){var b=jQuery(this),c=b.parents(".shortcode_tabs, .tabs_widget").first(),d=c.find(".scTC").eq(b.index());c.find(".tS").removeClass("tS"),b.addClass("tS"),c.find(".scTC").hide(),d.show(),a.preventDefault()})},ThriveApp.delay=function(){var a=0;return function(b,c){clearTimeout(a),a=setTimeout(b,c)}}(),ThriveApp.check_comments_hash=function(){if(location.hash&&-1!==location.hash.indexOf("#comment-")){var a=location.hash.indexOf("#comment-")+9,b=location.hash.substring(a,location.hash.length),c=jQuery("#comment-container-"+b);0!==c.length&&jQuery("html,body").animate({scrollTop:c.offset().top-30},"slow")}},ThriveApp.videoShorcode=function(){jQuery("iframe").each(function(){var a=jQuery(this);-1!==a.attr("src").indexOf("autoplay")&&(a.closest(".vt-v").show(),a.closest(".vt").addClass("h-vt"))}),jQuery(".scvps .pvb a").click(function(a){a.preventDefault()}),jQuery(".scvps .pvb, .vt-t .pvb").click(function(){var a=jQuery(this),b=a.parents(".scvps").length?a.parents(".scvps"):a.parents(".vt"),c=b.height(),d="scvps"===b.attr("class"),e=b.find("iframe"),f=e.attr("src");if(a.parents(".scvps").css("height",c+"px"),d?(a.parents(".vdc").find("h1").hide(),a.parents(".vdc").find("h2").hide(),a.parents(".vdc").find("h3").hide(),a.hide(),a.parents(".scvps").find(".video-container").show()):(b.addClass("h-vt"),b.find(".vt-v").fadeIn(800)),e.length>0){var g=b.outerWidth(),h=e.attr("width");if(a.hasClass("is-video-format"))var i=b.outerHeight();else var i=9*g/16;g<h&&(e.attr("width",g),e.attr("height",i))}if(d){var j=a.parents(".scvps").find(".vwr"),k=a.parents(".scvps").outerHeight()/2-j.height()/2;j.css({top:k<0?0:k,left:a.parents(".scvps").outerWidth()/2-j.width()/2})}if(b.find("video").length>0){var l=b.find("video")[0];a.hasClass("is-video-format"),l.player.play()}e.length>0&&-1===f.indexOf("autoplay")&&(f.indexOf("vimeo")>=0?e.attr("src",ThriveApp.updateQueryStringParameter(f,"autoplay","1")):f.indexOf("youtube")>=0&&e.attr("src",ThriveApp.updateQueryStringParameter(f,"autoplay","1")),e.trigger("click"))})},ThriveApp.bind_scroll=function(){if(jQuery("#comment-bottom").length>0){var a=jQuery("#comment-bottom").offset().top;a>0&&a<jQuery(window).height()+jQuery(document).scrollTop()&&ThriveApp.load_comments()}},ThriveApp.load_comments=function(){if(1!=ThriveApp.comments_loaded){ThriveApp.comments_loaded=1,"undefined"==typeof _thriveCurrentPost&&(_thriveCurrentPost=0),jQuery("#thrive_container_preload_comments").show();var a={action:"thrive_lazy_load_comments",post_id:_thriveCurrentPost,comment_page:ThriveApp.comments_page};window.TVE_Dash&&!TVE_Dash.ajax_sent?jQuery(document).on("tve-dash.load",function(){TVE_Dash.add_load_item("theme_comments",a,ThriveApp.load_comments_handle)}):jQuery.post(ThriveApp.ajax_url,a,ThriveApp.load_comments_handle)}},ThriveApp.load_comments_handle=function(a){ThriveApp.comments_page++,ThriveApp.comments_loaded=""==a?1:0,jQuery("#thrive_container_preload_comments").hide(),jQuery("#thrive_container_list_comments").append(a),jQuery("#thrive_container_form_add_comment").show(),ThriveApp.bind_comments_handlers(),ThriveApp.check_comments_hash()},ThriveApp.bind_comments_handlers=function(){jQuery(document).on("click",".txt_thrive_link_to_comments",function(){var a=jQuery("#commentform");jQuery("html,body").animate({scrollTop:a.offset().top},"slow")}),jQuery(document).on("click",".reply",function(){var a=eventTarget.attr("cid");return jQuery("#respond-container-"+a).slideDown(),!1}),jQuery(document).on("click",".cancel_reply",function(){var a=jQuery(this).attr("cid");return jQuery("#respond-container-"+a).slideUp(),!1})},ThriveApp.youtube_play=function(a,b,c){"use strict";jQuery("#videoContainer").html('<iframe width="'+b+'" height="'+c+'" src="https://www.youtube.com/embed/'+a+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>')},ThriveApp._get_element_height=function(a){var b,c,d=document.getElementById(a);return document.all?(b=d.currentStyle.height,c=parseInt(d.currentStyle.marginTop,10)+parseInt(d.currentStyle.marginBottom,10)+"px"):(b=document.defaultView.getComputedStyle(d,"").getPropertyValue("height"),c=parseInt(document.defaultView.getComputedStyle(d,"").getPropertyValue("margin-top"))+parseInt(document.defaultView.getComputedStyle(d,"").getPropertyValue("margin-bottom"))+"px"),b+c},ThriveApp.updateQueryStringParameter=function(a,b,c){var d=new RegExp("([?|&])"+b+"=.*?(&|$)","i");return separator=-1!==a.indexOf("?")?"&":"?",a.match(d)?a.replace(d,"$1"+b+"="+c+"$2"):a+separator+b+"="+c},ThriveApp.social_scripts={twitter:{src:"https://platform.twitter.com/widgets.js",loaded:0},google:{src:"https://apis.google.com/js/plusone.js?onload=onLoadCallback",loaded:0},facebook:{src:"://platform.twitter.com/widgets.js",loaded:0},linkedin:{src:"//platform.linkedin.com/in.js",loaded:0},pinterest:{src:"//assets.pinterest.com/js/pinit.js",loaded:0},youtube:{src:"https://apis.google.com/js/platform.js",loaded:0}},ThriveApp.load_script=function(a){if(0===ThriveApp.social_scripts[a].loaded)if("//assets.pinterest.com/js/pinit.js"==ThriveApp.social_scripts[a].src){var b=document.createElement("script");b.type="text/javascript",b.async=!0,b.src="https://assets.pinterest.com/js/pinit.js",b["data-pin-build"]="parsePins";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c),ThriveApp.social_scripts[a].loaded=1}else jQuery.getScript(ThriveApp.social_scripts[a].src,function(){ThriveApp.social_scripts[a].loaded=1})},ThriveApp.setVideoPosition=function(){jQuery(".scvps .pvb").each(function(){var a=jQuery(this).parents(".scvps").find(".vwr");a.css({top:jQuery(this).parents(".scvps").outerHeight()/2-a.height()/2,left:jQuery(this).parents(".scvps").outerWidth()/2-a.width()/2})})},ThriveApp.open_share_popup=function(a,b,c){var d,e;return d=window.screen.width/2-(b/2+10),e=window.screen.height/2-(c/2+50),window.open(a,"Window","status=no,height="+c+",width="+b+",resizable=yes,left="+d+",top="+e+",screenX="+d+",screenY="+e+",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no"),!1};var _lastScrollTop=0,_theMenu=jQuery("#floating_menu"),_nextElement=_theMenu.parents(".h-bi").next(),_floatingOption=_theMenu.attr("data-float"),_hasFloatingMenu="float-fixed"==_floatingOption||"float-scroll"==_floatingOption,_defaultPadding=_nextElement.css("padding-top"),_menuHeight=_theMenu.outerHeight(),_textLogoHeight=_theMenu.find("#text_logo").height(),_hasCenterLogo=_theMenu.find(".center").length,_custom_header=_theMenu.children("header"),_custom_header_class=_custom_header.attr("class"),_is_custom_header="hic"==_custom_header_class||"hif"==_custom_header_class,_center_header_height;ThriveApp.menu_float={current_scroll_top:0,anim_done:!1,scroll_dir:"down",hasScroll:function(){return _is_custom_header?this.current_scroll_top>_center_header_height:this.current_scroll_top>0},onScroll:function(a){return _is_custom_header&&(_center_header_height="hic"==_custom_header_class?jQuery("header .tt-dmy").height():jQuery("header").height()),this.current_scroll_top<a?this.scroll_dir="down":this.scroll_dir="up",this.current_scroll_top=a,this.hasScroll()?this.handle():(_theMenu.removeClass("mff a60 mfs"),_nextElement.css("padding-top",_defaultPadding),void ThriveApp.menu_float.showLogo())},handle:function(){_nextElement.css("padding-top",_theMenu.outerHeight()+"px"),_theMenu.addClass("mff"),this.current_scroll_top>0?(ThriveApp.menu_float.hideLogo(),_theMenu.addClass("a60")):_theMenu.removeClass("a60"),"float-scroll"==_floatingOption&&("down"==this.scroll_dir?_theMenu.removeClass("mfu mfd").addClass("mfd"):_theMenu.removeClass("mfu mfd").addClass("mfu"))},hideLogo:function(){_hasCenterLogo&&(_theMenu.find("#logo img").hide(),this.anim_done||(_theMenu.find("#text_logo").stop().animate({opacity:0,height:0},50),this.anim_done=!0))},showLogo:function(){_hasCenterLogo&&(_theMenu.find("#logo img").show(),_theMenu.find("#text_logo").animate({height:_textLogoHeight,opacity:1},50),this.anim_done=!1)}},ThriveApp.show_shortcodes=function(a){jQuery(".nsd").each(function(){var b=jQuery(this);a+ThriveApp.viewportHeight>=b.offset().top+b.outerHeight()&&(b.addClass("nsds"),ThriveApp.number_counter(),ThriveApp.progress_bar())})},ThriveApp.display_no_shares=function(a){function b(){e.val(d),f.html(ThriveApp._get_share_count_display_text(d,2)),jQuery("#tt-share-count").show()}function c(a){a&&a.total&&(d=parseInt(a.total),b())}var d=0,e=jQuery("#tt-hidden-share-no"),f=jQuery("#share_no_element"),g=[];if(a.linkedin&&g.push("in_share"),a.facebook&&g.push("fb_share"),a.google&&g.push("g_share"),a.pinterest&&g.push("pin_share"),g.length){var h={action:"thrive_get_share_counts",url:a.url,networks:g};window.TVE_Dash&&!TVE_Dash.ajax_sent?jQuery(document).on("tve-dash.load",function(){TVE_Dash.add_load_item("theme_shares",h,c)}):jQuery.post(ThriveApp.ajax_url,h,c)}};var _overlayElement=jQuery(".galleryOverlay");ThriveApp.blog_gallery=function(a){return function(){function b(b,c){a('<div class="galleryWrapper"><img data-pos="'+b.attr("data-position")+'" data-cap="'+b.attr("data-caption")+'" data-index="'+b.attr("data-index")+'" src="'+b.attr("data-src")+'" alt=""/></div>').appendTo(c)}function c(a,b,c){c?a.removeClass("g-n-a"):a.addClass("g-n-a");var e=a.find("img[data-index="+b+"]"),g=e.attr("data-cap"),h=e.attr("data-pos");b=e.parent().index(),a.css({left:"-"+100*b+"%"}),f=b,ThriveApp.winWidth>650&&d(e),jQuery(".img_count").text(h),jQuery(".cap_txt").text(g),""!=g?jQuery(".mob_text").text(g):jQuery(".mob_text").text(" - Swipe left/right to see more")}function d(a){var b=a.parents(".galleryOverlay").first().find(".nav_close");if(!a.width())return b.css({top:"20px",right:"20px"});var c=a.position().left-a.parent().position().left+a.width(),d=a.position().top;a.width()>=ThriveApp.winWidth&&(c-=16,d+=16),_isAdmin&&a.position().top<=32&&(d+=32),b.css({top:d-16+"px",left:c-16+"px"})}var f=0,g=0;a(".gallery").each(function(){var d=a(this),h=a(this).find(".galleryOverlay"),i=a(this).find(".galleryStage"),j=d.find(".gallery-item a").length,k=!1,l=!1,m=function(){l||(f<j-1?c(i,f+1,!0):(i.addClass("g-n-a").css("left","100%"),l=!0,setTimeout(function(){c(i,0,!0),l=!1},20)))},n=function(){l||(f>0?c(i,f-1,!0):(i.addClass("g-n-a").css("left",-100*j+"%"),l=!0,setTimeout(function(){c(i,j-1,!0),l=!1},20)))};d.find(".gallery-item a").each(function(d){a(this).click(function(){return k=!0,h.show(0).addClass("g-v"),c(i,d,!1),!1}),b(a(this),h.find(".galleryStage"))}),d.find("a.nav_prev").click(function(){return n(),!1}),d.find("a.nav_next").click(function(){return m(),!1}),d.find(".nav_close").click(function(){return k=!1,h.removeClass("g-v").hide(),!1}),d.find(".galleryWrapper").touchwipe({wipeLeft:function(){m()},wipeRight:function(){n()},wipeUp:function(){k=!1,h.removeClass("g-v").hide()},wipeDown:function(){return!1},min_move_x:20,min_move_y:20,preventDefaultEvents:!0}),ThriveApp.winWidth<=650?i.click(function(){if(a(e.target).is("img"))return!1;k=!1,h.removeClass("g-v").hide()}):(i.click(function(b){if(a(b.target).is("img"))return!1;k=!1,h.removeClass("g-v").hide()}),d.mousemove(function(b){clearTimeout(g),a(".gl_ctrl, .gl_ctrl_mob").fadeIn(200),ThriveApp.winWidth<=650||a(b.target).is(".gl_ctrl,.gl_ctrl_mob")||(g=setTimeout(function(){jQuery(".gl_ctrl, .gl_ctrl_mob").fadeOut(200)},1e3))})),a("html").unbind("keydown").keydown(function(a){return!k||(37==a.keyCode?(n(),!1):39==a.keyCode?(m(),!1):27==a.keyCode?(h.removeClass("g-v").hide(),!1):void 0)})})}}(jQuery),jQuery.fn.thrive_timer=function(){return this.each(function(){var a,b=jQuery(this),c=b.attr("data-server-now"),d=c?new Date(c):new Date,e=new Date(b.attr("data-date")),f=0,g=0,h=0,i=0,j=2,k=b.attr("data-fade"),l=b.attr("data-message"),m=function(a,b){if(a.html()==b)return a;a.removeClass("next");var c=a.clone().removeClass("go-down").addClass("next").html(b);return a.before(c).next(".go-down").remove(),a.addClass("go-down"),setTimeout(function(){c.addClass("go-down")},20),a},n=function(a,b,c){void 0===c&&(c=!1);var d=0;if(b<=99)m(a.find(".part-1").first(),b%10),m(a.find(".part-2").first(),Math.floor(b/10)),d=2;else for(;b;)d++,m(a.find(".part-"+d).first(),b%10),b=Math.floor(b/10);if(!1!==c&&d<c)for(var e=d+1;e<=c;e++)m(a.find(".part-"+e).first(),0)},o=function(){i--,i<0&&(i=59,h--),h<0&&(h=59,g--),g<0&&(g=23,f--),n(b.find(".second .cdfc"),i),n(b.find(".minute .cdfc"),h),n(b.find(".hour .cdfc"),g),n(b.find(".day .cdfc"),f,j),0==f&&0==g&&0==h&&0==i&&(clearInterval(a),p())},p=function(){"1"==k?b.find(".cdti").addClass("fdtc"):b.find(".cdti").addClass("fv"),"1"==l&&(b.find(".cdti").addClass("fdtc"),setTimeout(function(){b.find(".cdtm").fadeIn(2e3)},500))};d>e?p():(i=Math.floor((e.getTime()-d.getTime())/1e3),h=Math.floor(i/60),i%=60,g=Math.floor(h/60),h%=60,f=Math.floor(g/24),g%=24,f>99&&(j=f.toString().length),function(){var a=function(a,b){return jQuery('<span class="part-'+a+'">'+b+"</span>")};b.find(".second .cdfc").append(a(2,Math.floor(i/10))).append(a(1,i%10)),b.find(".minute .cdfc").append(a(2,Math.floor(h/10))).append(a(1,h%10)),b.find(".hour .cdfc").append(a(2,Math.floor(g/10))).append(a(1,g%10));for(var c=b.find(".day .cdfc"),d=f,e=1;e<=j;e++)c.append(a(e,d%10)),d=Math.floor(d/10);n(c.css("min-width",35*j+"px"),f,j)}(),b.find(".cdti").addClass("init_done"),a=setInterval(o,1e3))})},jQuery(window).scroll(function(){var a=jQuery(document).scrollTop(),b=0,c=0,d=jQuery(".ssf");if(ThriveApp.is_theme_layout&&(b=_is_blankPage?jQuery(".bp-t .wrp").offset().top:jQuery(".bSe .tve-c").offset().top,c=_is_blankPage?jQuery(".bp-t .wrp").height():jQuery(".bSe .tve-c").height()),_hasFloatingMenu&&ThriveApp.menu_float.onScroll(a),ThriveApp.show_shortcodes(a),d.hasClass("apsf"))return!1;if(a+40>b)if(d.show(0),a>b+c-d.height()){d.removeClass("fpss").addClass("apss");var e=jQuery(".ssf.apss")}else{d.removeClass("apss").addClass("fpss");var e=jQuery(".ssf.fpss");if(_hasFloatingMenu&&e.css({top:_menuHeight,bottom:"auto"}),jQuery(".bSe").length)if(jQuery(".bSe").hasClass("right")){var f=parseInt(jQuery(".bSe").offset().left+jQuery(".bSe").outerWidth());e.css({left:f+36+"px",right:"auto"})}else{var f=jQuery(".bSe").offset().left;e.css({left:f-e.width()-"36",right:"auto"})}}else d.hide(0)}),ThriveApp._get_share_count_display_text=function(a,b){b=Math.pow(10,b);for(var c=["k","m"],d=c.length-1;d>=0;d--){var e=Math.pow(10,3*(d+1));if(e<=a){a=Math.round(a*b/e)/b,1e3==a&&d<c.length-1&&(a=1,d++),a+=c[d];break}}return a},ThriveApp.resize_blank_page=function(){if(_is_blankPage=jQuery("html.bp-th").length){var a=jQuery(".wrp").outerHeight(),b=jQuery("body");ThriveApp.viewportHeight>=a?b.css("height",ThriveApp.viewportHeight):b.css("height",a)}};