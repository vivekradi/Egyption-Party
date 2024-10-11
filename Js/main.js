const form = document.getElementsByTagName('form')[0];
const open1 = document.getElementById('open');
const close1 = document.getElementById('Close');
const box = document.querySelector('.sidebar');


form.addEventListener('submit',function(e){
    e.preventDefault();
});


$(open1).on('click',function(){
  $(box).css('left','0');
  
});

$(close1).click(function(){
    $(box).css('left','-270px');
});

$('.singer h3').on('click',function(e){
  $(e.target).next().slideToggle(1000);
  $('.singer .content').not($(this).next()).slideUp(500);
});

$('textarea').on('input',function(){
  let value =  $(this).val().length;    
  $('#count').text(
    100-value <= 0 ? 'Your Avilable Character is Finished' :100-value
  );  
});

$('.sidebar a').on('click',function(e){
   let x = e.target.getAttribute('href');//#Home #About #Contact
     let ElementTop = $(x).offset().top; //#about => 500px
   $('body,html').animate({scrollTop:ElementTop},3000);
})