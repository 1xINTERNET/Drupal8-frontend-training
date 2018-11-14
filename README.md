# 9. Adding a javascript image slider

Javascript can also be added in our theme.

## 9.1 Adding a new slider paragraph
```
# Create a new 'Slider' paragraph on /admin/structure/paragraphs_type
# Add a new image field 'Image' (unlimited images)
# Hide the label on the 'Manage display' tab
# Create a new page with the new slider paragraph with a few images
```

## 9.2 Adding slider assets to the blog theme
```
# Add the following to the blog.libraries.yml file
framework:
  css:
    theme:
      //cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css: { type: external }
      //cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css: { type: external }
  js:
    //cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js: { type: external, minified: true }
    js/blog.js: {}
```

## 9.3 Adding slider assets to the blog theme
```
# Add the following file to our subtheme 'js/blog.js'
```

```
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
```

## Remarks

```
 - Observe the URL agnostic writing
 - Observe we are using external javascript files and stylesheets
 - Observe the usage of behaviors in Drupal javascript
```

---

### Go inside the container
```
docker-compose exec php bash
cd htdocs/web
```

### I can not follow anymore

```
git checkout 9
docker-compose exec php bash
cd htdocs
composer install
cd web
drush sql-drop -y
drush sql-cli < ../../db/dump.sql
drush cr
cd themes/custom/blog
npm run production
```