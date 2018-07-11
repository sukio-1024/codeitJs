
  $('#even-btn').on('click',function(){
    $('.card').each(function(){
      $(this).removeClass('selected');
      var num = Number($(this).text());
      if ((num % 2) === 0){
        $(this).addClass('selected');
      }
    });
  });

  $('#odd-btn').on('click',function(){
   $('.card').each(function(){
     $(this).removeClass('selected');
      var num = Number($(this).text());
      if ((num % 2) !== 0){
        $(this).addClass('selected');
      }
    });
  });
