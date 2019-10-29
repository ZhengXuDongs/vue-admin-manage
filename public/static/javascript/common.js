/**
 * Created by yangyang on 2018/11/8.
 */
function showLoadding(showMsg){
  if($('#loadding')[0]){
    $('#loadding').show()
  }else{
    $("body").append('<div id="loadding" class="loading">'+
      '<div>'+
      '  <span></span><span></span><span></span><span></span><span></span>'+
      '  <div class="loadding-msg">'+(showMsg?showMsg:'')+'</div>'+
      '</div></div>');
  }
}

function hideLoadding(){
  if($('#loadding')[0]) {
    $('#loadding').hide()
  }
}
