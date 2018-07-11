  $('#send').on('click',function(){
    if($('textarea').val() !== ''){
     $('.chatbox').append('<div class="my-bubble bubble">' + $('textarea').val() + '</div>');
     $('textarea').val('');
    }
  });