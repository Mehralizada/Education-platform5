// Üçüncü Script Bloku
//<![CDATA[
    $(function(){ viewloader.execute(Views); });
    //]]>
    
    // Beşinci Script Bloku
    //<![CDATA[
    (function() {
        // Function to fix height of iframe!
        var calcHeight = function() {
            var headerDimensions = $('.preview__header').height();
            $('.full-screen-preview__frame').height($(window).height() - headerDimensions);
        };
    
        $(document).ready(function() {
            calcHeight();
        });
    
        $(window).resize(function() {
            calcHeight();
        }).load(function() {
            calcHeight();
        });
    })();
    //]]>
    