jQuery(document).ready(($) => {
    $('a[href$="#"]').click(function (event) {
        event.preventDefault ? event.preventDefault() : event.returnValue = false;

    });
})
