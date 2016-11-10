$(document).ready(function() {
    console.log("document ready");

    getBios();

    function getBios() {
        $.ajax({
            type: 'GET',
            url: '/bios',
            success: function(bios) {
                console.log("get bios function");
                console.log(bios);
                appendBio(bios);
            }
        });
    }

    function getLikes() {
        $.ajax({
            type: 'GET',
            url: '/bios',
            success: function(bios) {
                console.log("update likes");
                updateLikes(bios);
            }
        });
    }



    $(".container").on('click', 'button', function() {
        var namePath = '/likes/' + $(this).attr('id');
        console.log(namePath);
        $.ajax({
            type: 'POST',
            url: namePath,
            success: function(data) {
                console.log(data);
                getLikes();

            }
        })
    });

    function appendBio(bios) {
        for (var i = 0; i < bios.length; i++) {
            $('.row').append('<div class="col-md-4"><h2>' + bios[i].name + '</h2><p>' + bios[i].biography + '</p></div>');
        }
        $('.container').append('<div class="row"></div>')
        for (var i = 0; i < bios.length; i++) {
            $('.row:last').append('<div class="col-md-4"><img src="' + bios[i].imgURL + '" /><br><button id="' + bios[i].firstName + '">Like | <span class="' + bios[i].firstName + '">0</span></button></div>');
        }
    }


    function updateLikes(bios) {
      for (var i = 0; i < bios.length; i++) {
        $('.' + bios[i].firstName).text(bios[i].likeCount);
      }
    }

});
