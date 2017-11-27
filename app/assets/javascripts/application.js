// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.easing
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function($) {
    $('.tabs .tab').click(function(){
        if ($(this).hasClass('signin')) {
            $('.tabs .tab').removeClass('active');
            $(this).addClass('active');
            $('.cont').hide();
            $('.signin-cont').show();
        } 
        if ($(this).hasClass('signup')) {
            $('.tabs .tab').removeClass('active');
            $(this).addClass('active');
            $('.cont').hide();
            $('.signup-cont').show();
        }
    });
    
    $('.logincontainer .bg').mousemove(function(e){
        var amountMovedX = (e.pageX * -1 / 30);
        var amountMovedY = (e.pageY * -1 / 9);
        $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
    });
});