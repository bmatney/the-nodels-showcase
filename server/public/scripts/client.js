$(document).ready(function() {
    console.log("document ready");

    getBios();

    // Click event that updates like Counter
        $(".container").on('click', 'button', function() {
            var namePath = '/likes/' + $(this).attr('id');
            $.ajax({
                type: 'POST',
                url: namePath,
                success: function(data) {
                    getLikes();
                },
                error: function(){
                  console.log("error");
                }
            })
        });

        
// Get bios and on success build bios on DOM
    function getBios() {
        $.ajax({
            type: 'GET',
            url: '/bios',
            success: function(bios) {
                console.log("get bios function");
                appendBio(bios);
            }
        });
    }

// Get bios with new likes and on success update likes on DOM
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


// Get Bios Array and append
    function appendBio(bios) {
        for (var i = 0; i < bios.length; i++) {
            $('.row').append('<div class="col-md-4"><h2>' + bios[i].name + '</h2><p>' + bios[i].biography + '</p></div>');
        }
        $('.container').append('<div class="row"></div>')
        for (var i = 0; i < bios.length; i++) {
            $('.row:last').append('<div class="col-md-4"><img src="' + bios[i].imgURL + '" /><br><button id="' + bios[i].firstName + '">Like | <span class="' + bios[i].firstName + '">0</span></button></div>');
        }
    }

// Updating like counter
    function updateLikes(bios) {
        for (var i = 0; i < bios.length; i++) {
            $('.' + bios[i].firstName).text(bios[i].likeCount);
        }
    }

});
