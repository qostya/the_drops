$(function ($) {
    'use strict';
    function showByHoverSiblings(trgt, el) {
        var $trgt = $('.' + trgt),
            $el = $trgt.siblings('.' + el),
            sett;

        $trgt.hover(function () {
            clearTimeout(sett);
            $el.addClass(el + '__active');
        }, function () {
            sett = setTimeout(function () {
                $el.removeClass(el + '__active');
            }, 2000);
        })
    }

    (function () {
        var sett;
        $('.b-header_search_field input').focus(function () {
            clearTimeout(sett);
            $(this).parent().addClass('b-header_search_field__active');
        }).blur(function () {
            var $this = $(this);
            sett = setTimeout(function () {
                if ($this.val().length) {
                    return;
                }

                $this.parent().removeClass('b-header_search_field__active');
            }, 2000);
        });

        $('.b-header_search_icon').click(function () {
            if (!/__active/.test($(this).siblings('.b-header_search_field').attr('class'))) {
                return false;
            }
        });


    }());




    showByHoverSiblings('js-show-target', 'js-show-element');


});