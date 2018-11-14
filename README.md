# 7. Modifying attributes in a theme file

Sometimes we need to preprocess variables before rendering them to twig.

## 7.1 Adding a paragraph preprocess function
```
# Open the blog.theme file
Add the following snippet
```

```
/**
 * Implements hook_preprocess_paragraph().
 */
function blog_preprocess_paragraph(&$variables) {
  // Preprocess two column text paragraph.
  drupal_set_message(print_r(array_keys($variables), true));
  drupal_set_message(print_r(array_keys($variables['content']), true));
  $type = $variables['paragraph']->getType();
  drupal_set_message($type);
  if ($type == 'two_column_text') {
    $variables['content']['message'] = t('Hello World');
  }
}
```

## Remarks

```
 - See https://www.drupal.org/docs/8/theming-drupal-8/modifying-attributes-in-a-theme-file
```

---

### Go inside the container
```
docker-compose exec php bash
cd htdocs/web
```

### I can not follow anymore

```
git checkout 7
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