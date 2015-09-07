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
            }, 1000);
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
            }, 1000);
        });

        $('.b-header_search_icon').click(function () {
            var $searchField = $('.b-header_search_field');
            if (!/__active/.test($searchField.attr('class')) ||
                !$searchField.find('input').val()) {
                return false;
            }
        });
    }());


    $('.js-index-slider').bxSlider({
        pager: false
    });


    (function () {
        var sett;
        $('.js-has-dropdown').hover(function () {
            var $this = $(this);
            clearTimeout(sett);

            $this.addClass('js-has-dropdown__active');
            $(this).find('.js-dropdown').slideDown('fast');
        }, function () {
            var $this = $(this);
            sett = setTimeout(function () {
                $this.removeClass('js-has-dropdown__active');
                $this.find('.js-dropdown').slideUp('fast');
            }, 1000);
        });
    }());


    showByHoverSiblings('js-show-target', 'js-show-element');


});