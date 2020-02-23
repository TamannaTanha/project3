$(document).ready(function(){
    new WOW().init();
    $(function(){
      $("#tabs").tabs();
      $(function(){
         $("#acc").accordion();
      });
    });
});