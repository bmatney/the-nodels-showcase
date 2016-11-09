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
    appendBio(bios);
    }
  });
  }

  function appendBio(bios) {
    for (var i = 0; i < bios.length; i++) {
      $('.row').append('<div class="col-md-4"><h2>' + bios[i].name + '</h2><p>' + bios[i].biography + '</p><img src="' + bios[i].imgURL + '" /><button id="' + i + '">Like</button></div>');
    }
  }
});
