$(function(){
    var $drop = $(".js-drop"),
        $expand = $('.js-expand'),
        expand = ".expand";
        active = "is-active";

    $drop.click(function() {
        var target = $(this).next().find(expand);

        $expand.each(function() {
            $(expand).not(target).removeClass(active);
        });
        target.toggleClass(active).append('<a href="#" class="js-close"><i class="material-icons">close</i></a>');
    });

    $(document).on("click", ".js-close", function(e) {
        e.preventDefault();
        $(expand).removeClass(active);
    });
});