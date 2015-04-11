// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$('a').click(function() {
    var val = $(this).attr('value');
    $('#send-data').attr('value', val);
    $(this).closest('form').submit();
});
