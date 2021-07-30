$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});

document.getElementById('hamburger').addEventListener('click',  function(){
        $('.icon').toggleClass('close');
        $('.sm').slideToggle();
        })













