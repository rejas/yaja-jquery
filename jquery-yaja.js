
/*
 * Yaja - yet another jquery accordion
 * Based on code from Marco van Hylckama Vlieg:
 * http://www.i-marco.nl/weblog/archive/2010/02/27/yup_yet_another_jquery_accordi
 */
(function($) {
    "use strict";
    $.fn.initMenu = function() {
        return this.each(function () {
            $('.acitem', this).hide();
            $('li.expand > .acitem', this).show();
            $('li.expand > .acitem', this).prev().addClass('active');
            $('li a', this).click(function (e) {
                e.stopImmediatePropagation();
                var theElement = $(this).next();
                var parent = this.parentNode.parentNode;
                if ($(parent).hasClass('noaccordion')) {
                    if (theElement[0] === undefined) {
                        window.location.href = this.href;
                    }
                    $(theElement).slideToggle('normal', function () {
                        if ($(this).is(':visible')) {
                            $(this).prev().addClass('active');
                        } else {
                            $(this).prev().removeClass('active');
                        }
                    });
                    return false;
                } else {
                    if (theElement.hasClass('acitem') && theElement.is(':visible')) {
                        if ($(parent).hasClass('collapsible')) {
                            $('.acitem:visible', parent).first().slideUp('normal', function () {
                                $(this).prev().removeClass('active');
                            });
                            return false;
                        }
                        return false;
                    }
                    if (theElement.hasClass('acitem') && !theElement.is(':visible')) {
                        $('.acitem:visible', parent).first().slideUp('normal', function () {
                            $(this).prev().removeClass('active');
                        });
                        theElement.slideDown('normal', function () {
                            $(this).prev().addClass('active');
                        });
                        return false;
                    }
                }
                return true;
            });
        });
    };
})(jQuery);