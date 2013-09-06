/*
 * Yet Another Jquery Accordion
 *
 * Original work Copyright 2007-2010 Marco van Hylckama Vlieg
 * Modified work Copyright 2013 Michael Veeck
 *
 */
(function($)
{
    "use strict";
    $.fn.initMenu = function(options)
    {
        var settings =
        {
            action : "click"
        };

        if(options)
        {
            if (options.action === 'hover')
            {
                options.action = 'mouseenter';
            }
            $.extend(settings, options);
        }

        return this.each(function ()
        {
            $('.acitem', this).hide();
            $('li.expand > .acitem', this).show();
            $('li.expand > .acitem', this).prev().addClass('active');
            $('li a', this).on (settings.action, function (e)
            {
                e.stopImmediatePropagation();
                var theElement = $(this).next();
                var parent = this.parentNode.parentNode;
                if ($(parent).hasClass('noaccordion'))
                {
                    if (theElement[0] === undefined)
                    {
                        window.location.href = this.href;
                    }
                    $(theElement).slideToggle('normal', function ()
                    {
                        if ($(this).is(':visible')) {
                            $(this).prev().addClass('active');
                        } else {
                            $(this).prev().removeClass('active');
                        }
                    });
                    return false;
                } else {
                    if (theElement.hasClass('acitem') && theElement.is(':visible'))
                    {
                        if ($(parent).hasClass('collapsible'))
                        {
                            $('.acitem:visible', parent).first().slideUp('normal', function ()
                            {
                                $(this).prev().removeClass('active');
                            });
                            return false;
                        }
                        return false;
                    }
                    if (theElement.hasClass('acitem') && !theElement.is(':visible'))
                    {
                        $('.acitem:visible', parent).first().slideUp('normal', function ()
                        {
                            $(this).prev().removeClass('active');
                        });
                        theElement.slideDown('normal', function ()
                        {
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