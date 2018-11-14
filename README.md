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

## 4.2 Editing the package.json to support our custom needed scripts.

```
# Edit the package.json and replace the following attribute:
"scripts": {
  "dev": "NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
  "watch": "NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
  "hot": "NODE_ENV=development webpack-dev-server --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
  "production": "NODE_ENV=production node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
},
```

## 4.3 Running the scripts
```
npm run watch
 - OR -
npm run production
drush cr
```

## 4.4 Additional settings for the cache (developer settings)
```
# Add the following to the settings.php
$settings['cache']['bins']['render'] = 'cache.backend.null';
$settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';
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