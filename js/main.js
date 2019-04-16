$(document).ready(function () {
    var title=$('#banner .banner_title');
    var height = $(window).height();
    var  menuTop = $('#banner #menu-top').height();
    $('#banner').css({'height':height});
    var heightTitle = title.height();
    var marginTop = (height/2) - menuTop - (heightTitle/2);
    console.log(marginTop);
    title.css({'margin-top':marginTop+'px'});
    console.log(heightTitle);
    $(window).resize(function () {
        var height =$(window).height();
        $('#banner').css({'height':height});
        var heightTitle = title.height();
        var marginTop = (height/2) - menuTop - (heightTitle/2);
        title.css({'margin-top':marginTop});
        console.log(heightTitle);
    })

});