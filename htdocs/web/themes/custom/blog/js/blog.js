/**
 * Blog javascript.
 */

(function ($, Drupal) {

    /**
     * Enables the slick slider.
     */
    Drupal.behaviors.slider = {
        attach: function(context, settings) {
            $('.paragraph--type--slider .field--items').slick({
              dots: true,
              infinite: true,
              arrows: false
            });
        }
    }
}) (jQuery, Drupal);