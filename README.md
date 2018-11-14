# 8. Adding a multicolumn image paragraph

We will add a multicolumn image paragraph to extend our blog pages.

## 8.1 Adding a new paragraph
```
# We add a new paragraph `image`
# Add a new image field `image`.
# Add a new list integer field 'Number columns' with values 2,3,4
# Add the following snippet to the blog.theme
```

```
  $type = $variables['paragraph']->getType();
  // Preprocess the image paragraph.
  if ($type == 'image') {
    $col_style = 'col-md-12';
    $number_of_columns = $variables['paragraph']->field_number_columns->value;
    switch($number_of_columns) {
      case 2:
        $col_style = 'col-md-6';
        break;
      case 3:
        $col_style = 'col-md-4';
        break;
      case 4:
        $col_style = 'col-md-3';
        break;
    }
    $variables['content']['colStyle'] = $col_style;
  }
```

```
# Overwrite the paragraph template for the image paragraph type:
```

```
{%
  set classes = [
    'paragraph',
    'paragraph--type--' ~ paragraph.bundle|clean_class,
    view_mode ? 'paragraph--view-mode--' ~ view_mode|clean_class,
    not paragraph.isPublished() ? 'paragraph--unpublished'
  ]
%}
{% block paragraph %}
  <div{{ attributes.addClass(classes) }}>
    <div class="row">
      {% for i in 0..content.field_image['#items']|length-1 %}
        <div class="{{ content.colStyle }}">{{ content.field_image[i] }}</div>
      {% endfor %}
    </div>
  </div>
{% endblock paragraph %}
```

## Remarks

```
 - none
```

---

### Go inside the container
```
docker-compose exec php bash
cd htdocs/web
```

### I can not follow anymore

```
git checkout 8
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