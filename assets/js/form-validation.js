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
    $(this).closest('.single-dropdown').find('.dropdown-toggle').val($(this).text());
});

$(document).on('focus', '.input-group-prepend .dropdown-toggle[type=text]', function() {
    $(this).attr("readonly", false);
});

$(document).on('focusout', '.input-group-prepend .dropdown-toggle[type=text]', function() {
    $(this).attr("readonly", true);
});

$(document).on('keyup', '.input-group-prepend .dropdown-toggle[type=text]', function() {
    var keywoard = $(this).val();
    var item_arr = $(this).closest('.input-group-prepend').find('.dropdown-menu').find('.dropdown-item');
    for (var i=0; i<item_arr.length; i++) {
        if (!item_arr[i].textContent.includes(keywoard)) {
            $(item_arr[i]).hide();
        } else {
            $(item_arr[i]).show();
        }
        if ($(item_arr[i]).find('[type=checkbox]')) {
            $(item_arr[i]).find('[type=checkbox]').prop('checked', false);
        }
    }
});
  
// multi select dropdown js
$(document).on('click', '.multiple-dropdown .dropdown-item input[type=checkbox]', function() {
    var checked_checkbox_arr = $(this).closest('.multiple-dropdown').find('.dropdown-item input[type=checkbox]:checked');
    if (checked_checkbox_arr.length > 1) {
        var selected = 'יותר (' + checked_checkbox_arr.length + ')';
        $(this).closest('.multiple-dropdown').find('.dropdown-toggle')[0].value = selected;
    } else if (checked_checkbox_arr.length == 1) {
        $(this).closest('.multiple-dropdown').find('.dropdown-toggle')[0].value = checked_checkbox_arr[0].closest('.dropdown-item').textContent;
    } else {
        $(this).closest('.multiple-dropdown').find('.dropdown-toggle')[0].value = '';
    }
});