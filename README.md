# 5. Adding a new paragraph type

We want to achieve some dynamic editable pages for content editors. So we will make our pages with paragraphs.

## 5.1 Creating a new paragraph 'Two Column Text'
```
# Go to /admin/structure/paragraphs_type and create the new paragraph
# Add 2 new fields `First column` and `Second column` (Text formatted, long)
# Hide the labels on the 'manage display' tab
# Now go to /admin/structure/types/manage/page/fields
# Add a new field `Content` to the `Basic page` content type (paragraphs field)
# Make sure it show not showing the label in the 'manage display' tab

```

## 5.2 Overwriting the default paragraph template to support our 2 columns
```
# Copy the contrib paragraph template to our theme
cd web/themes/custom/blog/templates
cp ../../../../modules/contrib/paragraphs/templates/paragraph.html.twig .
drush cr
# However we would want to be more specific
mv paragraph.html.twig paragraph--two-column-text.html.twig
```

## Remarks

```
 - Observe after copying the template that the HTML Inspector comment will now point to the template in our theme
 - We can override the template and be more specific too.
```

---

### Go inside the container
```
docker-compose exec php bash
cd htdocs/web
```

### I can not follow anymore

```
git checkout 4
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