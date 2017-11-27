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

$(document).ready(function($) {
    $("#card-hidden").hide();
    $(".card-update").hide();
    $(".post-write").click(function (){
        $("#card-hidden").show(500);
    });

    $(document).mouseup(function(e){
       var container = $("#card-hidden");
       if(container.has(e.target).length === 0)
        container.hide(500);
    });
    $(document).mouseup(function(e){
       var container = $(".card-update");
       if(container.has(e.target).length === 0)
        container.hide(500);
    });
});
