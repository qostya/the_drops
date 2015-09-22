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


    (function () {
        $('.b-product-item_stars').each(function (id, item) {
            item.dataset.starscount = $(item).children('.b-product-item_star__gold').length;
        }).click(function (ev) {
            var $this = $(ev.target);
            if ($this.hasClass('b-product-item_star')) {
                $this.parent().data('starscount', $this.index() + 1);
            }

            // here must be ajax
        });

        $('.b-product-item_star').hover(function () {
            var $this = $(this);
            $this.addClass('b-product-item_star__gold')
                .prevAll()
                .addClass('b-product-item_star__gold');
            $this.nextAll()
                .removeClass('b-product-item_star__gold');
        }, function () {
            var $this = $(this),
                $this_parent = $this.parent(),
                $this_parent_children = $this_parent.children();
            for (var i = 0, l = +$this_parent.data('starscount'); 5 > i; i++) {
                if (i < l) {
                    $this_parent_children.eq(i).addClass('b-product-item_star__gold');
                } else {
                    $this_parent_children.eq(i).removeClass('b-product-item_star__gold');
                }
            }
        });
    }());


    (function () {
        $('.js-file-sibling').click(function () {
            var $this = $(this),
                $this_sibling_input = $this.siblings('input');

            $this_sibling_input.click().change(function () {
                var value = $this_sibling_input.val().replace(/.+[\\\/]/, "");
                $this.siblings('span').text(value ? value : '\u041f\u0420\u0418\u041a\u0420\u0415\u041f\u0418\u0422\u0415 \u0424\u0410\u0419\u041b');
            });
        });
    }());

    (function (modals) {
        $('.js-open-modal-exclusive').click(function () {
            $('.b-modal-exclusive, .b-modals_bg').addClass('b-modal__active');
            $('body').addClass('overflow-hidden');
            return false;
        });

        $('.js-close-all-modals').click(function () {
            $('.b-modal__active').removeClass('b-modal__active');
            $('body').removeClass('overflow-hidden');
            return false;
        });
    }());



    showByHoverSiblings('js-show-target', 'js-show-element');


});