FROM php:8.3-fpm

WORKDIR /var/www/html

RUN apt-get update && apt-get install -y \
    git \
    supervisor \
    unzip \
    libzip-dev \
    && docker-php-ext-install pdo_mysql zip

COPY . .
COPY supervisor.conf /etc/supervisor.conf

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install
RUN php artisan key:generate

CMD ["supervisord", "-c", "/etc/supervisor.conf"]
