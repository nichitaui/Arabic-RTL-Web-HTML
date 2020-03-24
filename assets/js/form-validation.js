// input validation
$(document).on('keyup', '.form-control', function(e) {
    if (!e.target.value) {
        $(this).closest('.form-group').addClass('invalid');
    } else {
        $(this).closest('.form-group').removeClass('invalid');
    }
});