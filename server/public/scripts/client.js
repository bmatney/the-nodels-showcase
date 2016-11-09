$(document).ready(function(){
  console.log("document ready");

  getBios();

  function getBios(){
  $.ajax({
    type: 'GET',
    url: '/bios',
    success: function(bios){
    console.log("get bios function");
    console.log(bios);
    }
  });
  }
});
