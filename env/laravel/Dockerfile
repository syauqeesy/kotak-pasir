FROM php:8.3-fpm

WORKDIR /var/www/html

RUN apt-get update && apt-get upgrade

RUN apt-get install -y \
    git \
    unzip \
    libzip-dev \
    && docker-php-ext-install pdo_mysql zip

COPY . .

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install
RUN php artisan key:generate

CMD ["php", "artisan", "serve", "--host", "0.0.0.0"]
