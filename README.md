# 3. Setup developer settings

For easier frontend development we will setup the Drupal website with developer settings.

## 3.1 Setting developer settings
```
chmod -w web/sites/default
drush site:mode dev
chmod +w web/sites/default
```


## Remarks

```
 - See https://www.drupal.org/node/2598914 for more information
 - Observe the HTML Inspector now contains remarks.
 - For learning purposes we commit these changes in our repository.
   It speaks for itself that these changes should not be committed for your production usage.
```

---

### Go inside the container
```
docker-compose exec php bash
cd htdocs/web
```

### I can not follow anymore

```
git checkout 3
docker-compose exec php bash
cd htdocs
composer install
cd web
drush sql-drop -y
drush sql-cli < ../../db/dump.sql
drush cr
```