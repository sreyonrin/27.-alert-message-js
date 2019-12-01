
$(document).ready(function () {
    $('button').on('click', function () {
        var user = $('#user').val();
        var age = $('#age').val();
        var isNum = /^\d+$/.test(age);
        var nick = $('#nick').val();
        var show = "";
        user == "" ? setError('user') : setSuccess('user');
        isNum == "" ? setError('age') : setSuccess('age');
        nick == "" ? setError('nick') : setSuccess('nick');
        if (nick == "") {
            $('#nick').addClass('border-danger').removeClass('border-success')
        } else {
            $('#nick').addClass('border-success').removeClass('border-danger');
        }
        for (let i = 0; i < nick.length; i++) {
            var nickfirst = nick[i].toUpperCase();
            if (nick.length >= 9 && nick[0] == nickfirst) {
                $('#nick').addClass('border-danger').removeClass('border-danger');
            } else {
                $('#nick').addClass('border-success').removeClass('border-success');
            }
        }
        if (nick == "" || isNum == "" || user == "") {
            $('.bg-danger').fadeIn(250);
        } else {
            $('.bg-success').fadeIn(250);
        }       
        $('#user,#age,#nick').on('keyup', function () {
            var user = $('#user').val();
            var age = $('#age').val();
            var nick = $('#nick').val();
            if (user == "" || age == "" || nick == "") {
                $('.bg-danger').fadeOut(1000);
                $('.bg-success').fadeOut(1000);
            }
        });
        function setError(error) {
            $("#" + error).addClass('border-danger').removeClass('border-success');
        }
        function setSuccess(success) {
            $("#" + success).addClass('border-success').removeClass('border-danger');
        }
        $('#error').append(show);
    });
})
