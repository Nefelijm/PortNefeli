$(document).ready(function(){

    $('.skills').cardify();
    $(window).scroll(function() {
        if ($("#navbar").offset().top > 56) {
            $("#navbar").addClass("bg-inverse");
            $('#btn-collapse').addClass("btn-collapse-color");
           $('#span-collapse').addClass("span-collapse-color");
        } else {
          $("#navbar").removeClass("bg-inverse");
          $('#btn-collapse').removeClass("btn-collapse-color");
         $('#span-collapse').removeClass("span-collapse-color");
        }
      });
 
});