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

    function showChildByHoveredParent(prntClass, chldClass) {
        var $prntClass = $('.' + prntClass),
            $chldClass = $prntClass.find('.' + chldClass),
            sett;

        $prntClass.hover(function () {
            clearTimeout(sett);
            $chldClass.slideDown('fast');
        }, function () {
            sett = setTimeout(function () {
                $chldClass.slideUp('fast');
            }, 1000);
        })
    }

    showChildByHoveredParent('js-hovered-parent', 'js-hovered-parent_dropdown');

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
        $('.js-open-left-panel').click(function () {
            var $el = $('.b-left-catalog-links');
            if (!$el.hasClass('b-left-catalog-links__active')) {
                $el.addClass('b-left-catalog-links__active');
            } else {
                $el.removeClass('b-left-catalog-links__active');
            }

        });
    }());

    (function () {
        var productSlider = $('.js-product-slider').bxSlider({
                pager: false,
                nextText: '<span>&#10095;</span>',
                prevText: '<span>&#10094;</span>',
                speed: 400,
                adaptiveHeight: true,
                onSlideNext: function ($slEl, oldId, newId) {
                    $('.js-slide-to').each(function () {
                        var $this = $(this);
                        if ($this.data('slideTo') === newId) {
                            $this.addClass('__active');
                        } else {
                            $this.removeClass('__active');
                        }
                    });
                },
                onSlidePrev: function ($slEl, oldId, newId) {
                    $('.js-slide-to').each(function () {
                        var $this = $(this);
                        if ($this.data('slideTo') === newId) {
                            $this.addClass('__active');
                        } else {
                            $this.removeClass('__active');
                        }
                    });
                }
            });


        $('.js-slide-to').click(function () {
            var $this = $(this);
            productSlider.goToSlide($this.data('slideTo'));
            $this.siblings().removeClass('__active');
            $this.addClass('__active');
            return false;
        });

    }());



    $('body').on('click', function(ev) {
        if (!$(ev.target).parents('.b-header_cart').length) {
            $('.b-header_cart').removeClass('b-header_cart__active').find('.b-cart_bottom').slideUp('fast');
        }
    });

    $('.b-header_cart').mouseenter(function() {
        $(this).addClass('b-header_cart__active').find('.b-cart_bottom').slideDown('fast');
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