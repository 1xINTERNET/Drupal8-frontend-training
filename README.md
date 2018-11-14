# 6. 

We can do a lot of interesting things with twig.

## 6.1 Using twig variables
```
# Let us play with some variables in /node/1
# Let us overwrite that template for demo purposes
cd web/themes/custom/blog/templates
cp ../../../../core/modules/node/templates/node.html.twig node--1.html.twig
drush cr
# What is common twig syntax?
{{ print something }}
{% do something %}
{# a comment #}


```

## Remarks

```
 - Overriding templates by ID is never a good idea, we do this for demo purposes.
   As these can change per environment.
 - See https://www.drupal.org/docs/8/theming/twig/discovering-and-inspecting-variables-in-twig-templates
```

---

### Go inside the container
```
docker-compose exec php bash
cd htdocs/web
```

### I can not follow anymore

```
git checkout 6
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