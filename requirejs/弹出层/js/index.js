/**
 * Created by xiecheng on 2017/12/3.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-3.2.1'
    }
});
require(['jquery', 'dialog'], function($, Dialog){
    $('#open').on('click', function(){
        var settings = {
            width: 300,
            height: 200,
            title: '注册',
            content: 'reigist.html'
        };
        // dialog.open(settings);


        var d1 = new Dialog();
        d1.open(settings);
    });
});