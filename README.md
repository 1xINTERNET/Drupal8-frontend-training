# 4. Adding preprocessors

For frontend development we will need some additional tools E.g. sass preprocessor.

## 4.1 Adding npm packages and configuration
```
cd web/themes/custom/blog
# First initialize a package.json (we can go for default values here).
npm init
# Install laravel-mix as package to the theme
npm install laravel-mix
# Now we set the webpack settings to compile
vim webpack.mix.js
# Add the following content:
```

```
let mix = require('laravel-mix');
mix.sass('scss/style.scss', 'css/');
mix.options({
  processCssUrls: false
});
```

## 4.1 Adding npm packages and configuration

```

```

## Remarks

```
 - See https://www.webwash.net/getting-started-bootstrap-drupal-8/#compile-sass for more information

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