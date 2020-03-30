// input validation
$(document).on('keyup', '.form-control', function(e) {
    if (!e.target.value) {
        $(this).closest('.form-group').addClass('invalid');
    } else {
        $(this).closest('.form-group').removeClass('invalid');
    }
});






// single select dropdown js
$(document).on('click', '.single-dropdown .dropdown-item', function() {
    $(this).closest('.single-dropdown').find('.dropdown-toggle').text($(this).text());
});
  
// multi select dropdown js
$(document).on('click', '.multiple-dropdown .dropdown-item input[type=checkbox]', function() {
    var checked_checkbox_arr = $(this).closest('.multiple-dropdown').find('.dropdown-item input[type=checkbox]:checked');
    if (checked_checkbox_arr.length > 1) {
        var selected = 'יותר (' + checked_checkbox_arr.length + ')';
        $(this).closest('.multiple-dropdown').find('.dropdown-toggle').text(selected);
    } else if (checked_checkbox_arr.length == 1) {
        $(this).closest('.multiple-dropdown').find('.dropdown-toggle').text($(this).closest('.dropdown-item').text());
    } else {
        $(this).closest('.multiple-dropdown').find('.dropdown-toggle').text('סוג מוצר');
    }
});