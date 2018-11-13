# Demo website

## Docker setup

### Requirements

```
- docker and docker-compose
- composer
- npm
- node
```

## Steps

```
# Go into ./htdocs and install all composer dependencies.
composer install --ignore-platform-reqs
# Start the docker project.
docker-compose up -d
# Check the logs for info and warnings when working on the project.
docker-compose logs -f
# When the database has been imported (view logs):
# Go to http://demo.localhost/
```

## Credentials 

```
User: demo
Pass: demo
```

## Useful docker commands

```
# Access the PHP container
docker-compose exec php sh
# View the logs
docker-compose logs -f
# Start all containers
docker-compose up -d
# Stop all docker containers
docker-compose stop
# Remove all containers
docker-compose down
Pass: demo
```

## Development services

```
# Mailhog
http://mailhog.drupal.docker.localhost/
# Portainer
http://portainer.drupal.docker.localhost/
# PhpMyAdmin
http://pma.drupal.docker.localhost/#/home
```

## Remarks

```
This project is for demo purposes only. 
We put the db/files/private folders and settings.php into the repository. 
Do not do this for your production website. 
```

## How to use this repository

```
Follow the steps written in the README.md
Continue on with checking out further tags to continue
```