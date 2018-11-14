# 1. Basic setup

## 1.1 Installation of useful modules
```
# Install the admin_toolbar and paragraphs contrib module with composer
composer require drupal/admin_toolbar drupal/paragraphs --ignore-platform-reqs
# Enable the modules
drush en -y admin_toolbar paragraphs
```


## Remarks

```
 - If you are using the docker stack provided, remember the commands above. 
   They will need not be repeated anymore. Write them down.
 - Observe the paragraphs and admin_toolbar functionality on the website.
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