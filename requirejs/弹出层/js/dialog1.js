/**
 * Created by xiecheng on 2017/12/3.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-3.2.1'
    }
});
define(['jquery'], function ($) {
    return {
        open: function (settings) {
            var defaultSettings = {
                width: 500,
                height: 400,
                title: '弹出层',
                content: ''
            };
            $.extend(defaultSettings, settings);
            var html = '<div class="dialog-container">'
                + '<div class="dialog-mask"></div>'
                + '<div class="dialog-box">'
                + '<div class="dialog-title">'
                + '<div class="dialog-item">' + defaultSettings.title + '</div>'
                + '<div class="dialog-close">[X]</div>'
                + '</div>'
                + '<div class="dialog-content"></div>'
                + '</div>'
                + '</div>';
            $(document.body).append(html);
            $('.dialog-box').css({
                width: defaultSettings.width,
                height: defaultSettings.height
            });
            if (defaultSettings.content.indexOf('.html') != -1) {
                $('.dialog-content').load(defaultSettings.content);
            } else {
                $('.dialog-content').html(defaultSettings.content);
            }
            $('.dialog-close').on('click', function(){
                // $('.dialog-container').remove();
                $(this).closest('.dialog-container').remove();
            });
        }
    };
});