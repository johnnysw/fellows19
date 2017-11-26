function tooltip(selector) {
    $(selector).hover(function () {
        this.tempTitle = $(this).attr('title') != undefined ? $(this).attr('title'): $(this).text();
        $('<div id="tip"></div>').text(this.tempTitle).appendTo($(document.body));
        $(this).removeAttr('title');
    }, function () {
        $(this).attr('title', this.tempTitle);
        $('#tip').remove();
    }).on('mousemove', function (e) {
        $('#tip').offset({
            top: e.pageY + 10,
            left: e.pageX + 10
        });
    });
}