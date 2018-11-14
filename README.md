# 1. Basic setup

## 1.1 Installation of useful modules
```
# Install the admin_toolbar, paragraphs and bootstrap contribs with composer
composer require drupal/admin_toolbar drupal/paragraphs drupal/bootstrap --ignore-platform-reqs
# Enable the modules
drush en -y admin_toolbar paragraphs
```


## Remarks

```
 - Observe the new modules that are located under web/modules/contrib
 - Observe the new theme that is located under web/themes/contrib
 - Observe the changes in the composer.json and composer.lock file
 - Observe the paragraphs and admin_toolbar functionality on the website
```

---

### Go inside the container
```
docker-compose exec php bash
cd htdocs/web
```

### I can not follow anymore

```
docker-compose exec php bash
cd htdocs/web
drush sql-drop -y
drush sql-cli < ../../db/dump.sql
drush cr
```