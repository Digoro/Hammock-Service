{"filter":false,"title":"index.js","tooltip":"/public/index.js","undoManager":{"mark":2,"position":2,"stack":[[{"start":{"row":1,"column":0},"end":{"row":62,"column":1},"action":"remove","lines":["$( document ).ready(function() {","","    scaleVideoContainer();","","    initBannerVideoSize('.video-container .poster img');","    initBannerVideoSize('.video-container .filter');","    initBannerVideoSize('.video-container video');","","    $(window).on('resize', function() {","        scaleVideoContainer();","        scaleBannerVideoSize('.video-container .poster img');","        scaleBannerVideoSize('.video-container .filter');","        scaleBannerVideoSize('.video-container video');","    });","","});","","function scaleVideoContainer() {","","    var height = $(window).height() + 5;","    var unitHeight = parseInt(height) + 'px';","    $('.homepage-hero-module').css('height',unitHeight);","","}","","function initBannerVideoSize(element){","","    $(element).each(function(){","        $(this).data('height', $(this).height());","        $(this).data('width', $(this).width());","    });","","    scaleBannerVideoSize(element);","","}","","function scaleBannerVideoSize(element){","","    var windowWidth = $(window).width(),","    windowHeight = $(window).height() + 5,","    videoWidth,","    videoHeight;","","    console.log(windowHeight);","","    $(element).each(function(){","        var videoAspectRatio = $(this).data('height')/$(this).data('width');","","        $(this).width(windowWidth);","","        if(windowWidth < 1000){","            videoHeight = windowHeight;","            videoWidth = videoHeight / videoAspectRatio;","            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});","","            $(this).width(videoWidth).height(videoHeight);","        }","","        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');","","    });","}"],"id":2}],[{"start":{"row":1,"column":0},"end":{"row":63,"column":2},"action":"insert","lines":["$(function(){","    function t(f,ms){","        setTimeout(f, ms)","    }","    //answer interaction-question ","    function anserInteraction(){","        t(function() { $('#center_for_answer').fadeIn('slow') }, 500);","        t(function() { $('#center_for_answer').css('margin','165px') }, 500);","        t(function() { $('#center_for_question').fadeIn('slow') }, 500);","        t(function() { $('#center_for_question').css('margin','205px 0 0 0') }, 500);","        t(function() { $('.btn_answer').fadeIn('slow') }, 1000);","        t(function() { $('.btn_answer').css('display','block') }, 1000);","        t(function() { $('#center_for_question > h4').css('padding','65px 0 35px') }, 1000);","    }","    //answer interaction-write","    var container = $('#container')","    $('.btn_answer').click(function() {","        $('#center_for_question').css('margin','140px')","        $('#center_for_question > h4').css('padding','20px 40px')","        $('.btn_answer').fadeOut();","        t(function() { container.css('background','rgba(0,36,66,0.9)') })","        t(function() { $('#answer_box').fadeIn('slow') }, 800)","        t(function() { $('.btn_answer_submit').fadeIn('slow') }, 800)","        t(function() { $('.btn_answer_submit').css('display','block') }, 800)","    })","    ","    //answer textarea 비우기","    $('.answer_area').click(function() {","        $('.answer_area').html('')","    })","    ","    //answer write submit","    $('.btn_answer_submit').click(function() {","        container.css('background','rgba(30,144,255,0.9)')","        t(function() { document.forms[0].submit() }, 1000)","    })","    ","    ","    //footer 해먹 설명 영역","    var footer = $('footer')","    $('.btn-footer-open').click(function(){","","        footer.css('height','100%')","        t(function(){ footer.css('background','#fff756')}, 1500);","        t(function(){ footer.css('padding-top','30px')}, 1500);","        t(function(){ footer.css('font-size','50px')}, 1900);","        t(function(){ footer.css('color','#000')}, 1900);","        t(function(){ footer.css('line-height','100px')}, 1900);","        t(function(){ $('.btn-footer-close').fadeIn()}, 2500);","        t(function(){ $('.btn-footer-close').css('display','block')}, 2500);","","    });","    ","    $('.btn-footer-close').click(function() {","        $('.btn-footer-close').fadeOut()","        $('footer').css('line-height','35px')","        $('footer').css('background','#000');","        $('footer').css('padding-top','0px');","        $('footer').css('font-size','17px');","        t(function(){ $('footer').css('height','35px') }, 1500);","    })","    ","})"],"id":3}],[{"start":{"row":0,"column":0},"end":{"row":63,"column":2},"action":"remove","lines":["//jQuery is required to run this code","$(function(){","    function t(f,ms){","        setTimeout(f, ms)","    }","    //answer interaction-question ","    function anserInteraction(){","        t(function() { $('#center_for_answer').fadeIn('slow') }, 500);","        t(function() { $('#center_for_answer').css('margin','165px') }, 500);","        t(function() { $('#center_for_question').fadeIn('slow') }, 500);","        t(function() { $('#center_for_question').css('margin','205px 0 0 0') }, 500);","        t(function() { $('.btn_answer').fadeIn('slow') }, 1000);","        t(function() { $('.btn_answer').css('display','block') }, 1000);","        t(function() { $('#center_for_question > h4').css('padding','65px 0 35px') }, 1000);","    }","    //answer interaction-write","    var container = $('#container')","    $('.btn_answer').click(function() {","        $('#center_for_question').css('margin','140px')","        $('#center_for_question > h4').css('padding','20px 40px')","        $('.btn_answer').fadeOut();","        t(function() { container.css('background','rgba(0,36,66,0.9)') })","        t(function() { $('#answer_box').fadeIn('slow') }, 800)","        t(function() { $('.btn_answer_submit').fadeIn('slow') }, 800)","        t(function() { $('.btn_answer_submit').css('display','block') }, 800)","    })","    ","    //answer textarea 비우기","    $('.answer_area').click(function() {","        $('.answer_area').html('')","    })","    ","    //answer write submit","    $('.btn_answer_submit').click(function() {","        container.css('background','rgba(30,144,255,0.9)')","        t(function() { document.forms[0].submit() }, 1000)","    })","    ","    ","    //footer 해먹 설명 영역","    var footer = $('footer')","    $('.btn-footer-open').click(function(){","","        footer.css('height','100%')","        t(function(){ footer.css('background','#fff756')}, 1500);","        t(function(){ footer.css('padding-top','30px')}, 1500);","        t(function(){ footer.css('font-size','50px')}, 1900);","        t(function(){ footer.css('color','#000')}, 1900);","        t(function(){ footer.css('line-height','100px')}, 1900);","        t(function(){ $('.btn-footer-close').fadeIn()}, 2500);","        t(function(){ $('.btn-footer-close').css('display','block')}, 2500);","","    });","    ","    $('.btn-footer-close').click(function() {","        $('.btn-footer-close').fadeOut()","        $('footer').css('line-height','35px')","        $('footer').css('background','#000');","        $('footer').css('padding-top','0px');","        $('footer').css('font-size','17px');","        t(function(){ $('footer').css('height','35px') }, 1500);","    })","    ","})"],"id":4}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1442624706713,"hash":"67452301efcdab8998badcfe10325476c3d2e1f0"}