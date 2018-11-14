# 2. Creating the subtheme based on Bootstrap

We need to create a subtheme from the contrib Bootstrap theme we just downloaded.

## 1.1 Creating the subtheme
```
# Create the new subtheme by copying the SASS Starterkit in the Bootstrap contrib theme
cd web/themes
mkdir custom
cp -rp contrib/bootstrap/starterkits/sass custom/blog
cd custom/blog

# Rename all mandatory files
mv THEMENAME.starterkit.yml blog.info.yml
mv THEMENAME.libraries.yml blog.libraries.yml
mv THEMENAME.theme blog.theme
mv config/install/THEMENAME.settings.yml config/install/blog.settings.yml
mv config/schema/THEMENAME.schema.yml config/schema/blog.schema.yml

# Setting the metadata information of our new theme.
> Edit `blog.info.yml` and change all variables needed (name, description, libraries,..)
> Edit `config/schema/blog.schema.yml` and change all variables needed (settings, description)
> Optionally replace the logo.svg and screenshot.png
```

## 1.2 Enable the Blog theme
```
# Enable blog theme
drush theme:enable blog
# Set the theme as default.
drush config-set system.theme default blog
```


## Remarks

```
 - See web/themes/contrib/bootstrap/docs/Sub-Theming.md for more information about sub theming.
 - Observe that boostrap and the blog theme is detected under /admin/appearance
 - After setting Blog our website is now differently styled (not great though yet).
```

---

### Go inside the container
```
docker-compose exec php bash
cd htdocs/web
```

### I can not follow anymore

```
git checkout 1
docker-compose exec php bash
cd htdocs/web
composer install
drush sql-drop -y
drush sql-cli < ../../db/dump.sql
drush cr
```