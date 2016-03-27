$(document).ready(function() {

function heightDetect() {
  $(".top").css("height", $(window).height());
};
heightDetect();
$(window).resize(function() {
  heightDetect();
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 200) {
    $('.header').addClass('shown');
    } else {
    $('.header').removeClass('shown');
     }
});

//callback handler for form submit
$("#contact-form").submit(function(e)
{
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,

        success: function(msg){

            $("#successModal").modal('show');
            $("#successModal .modal-body").html(msg); //hide button and show thank you
            $(form)[0].reset();
            //$(element).closest('form-group').removeClass('has-success has-feedback');
            },
        error: function(jqXHR, textStatus, errorThrown)
        {
            //if fails
        }
    });
    e.preventDefault(); //STOP default action
   // e.unbind(); //unbind. to stop multiple form submit.
   // $("#busyForm").submit(); //Submit  the FORM
});


$("#callbackForm").submit(function(e)
{
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,

        success: function(msg){
            $("#callback-form").modal('hide'); //hide popup
            $("#successModal").modal('show');
            $("#successModal .modal-body").html(msg); //hide button and show thank you
            $(form)[0].reset();
            //$(element).closest('form-group').removeClass('has-success has-feedback');
            },
        error: function(jqXHR, textStatus, errorThrown)
        {
            //if fails
        }
    });
    e.preventDefault(); //STOP default action
   // e.unbind(); //unbind. to stop multiple form submit.
   // $("#busyForm").submit(); //Submit  the FORM
});

$("#modalForm").submit(function(e)
{
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,

       success: function(msg){
            $("#modal-form").modal('hide'); //hide popup
            $("#successModal").modal('show');
            $("#successModal .modal-body").html(msg); //hide button and show thank you
            $(form)[0].reset();
            //$(element).closest('form-group').removeClass('has-success has-feedback');
            },
        error: function(jqXHR, textStatus, errorThrown)
        {
            //if fails
        }
    });
    e.preventDefault(); //STOP default action
   // e.unbind(); //unbind. to stop multiple form submit.
   // $("#busyForm").submit(); //Submit  the FORM
});

//Smooth scrolling to id
$('.down-span').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
          window.location.hash = target;
      });
  });

//Animation
$('h2').animated("fadeInUp","fadeOutDown");
$('.icon, .circle-div').animated("flipInY","flipOutY");


  }); //End of document ready
