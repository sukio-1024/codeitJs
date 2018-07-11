function up(){
    $('img').removeClass('down');
  }

  $('#btn1').on('click',function(){
    $('.blue').addClass('down');
    setTimeout(up,1000);
  });
  $('#btn2').on('click',function(){
    $('.white').addClass('down');
    setTimeout(up,1000);
  });
  $('#btn3').on('click',function(){
    $('.blue.dot').addClass('down');
    setTimeout(up,1000);
  });