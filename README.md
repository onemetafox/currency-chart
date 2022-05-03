<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Project

Structure of Project:

![1*1It6HxqCmkMq12cVCL2t1w](https://user-images.githubusercontent.com/80197242/166390605-251be5c7-cbab-4c1d-bff3-f9fe5224ea95.png)

In the backend, for fetching data from API laravel schedule and socket.io was used.
React and bootstrap was used for the Frontend.

## Preinstallation
Node.js
Composer
Redis

## Install
First step is clone from github repository : https://github.com/todaycodemaster/currency-chart.git
In this second step, we have to install vender : composer install
In thrid step, install node module : npm install
In the fourth step, copy .env.example file to .env file and set configure for redis

## Testing
1. run backend php server: php artisan serve
2. run react front end : npm run watch
3. run scheduler to get data per 5 min and broadcastig to client: php artisan schedule:work
