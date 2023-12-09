<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\ApiAuthMiddleware;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/user', [UserController::class, 'register']);
Route::post('/user/login', [UserController::class, 'login']);

Route::middleware(ApiAuthMiddleware::class)->group(function () {
  Route::get('/user/current', [UserController::class, 'get']);
  Route::patch('/user/current', [UserController::class, 'update']);
  Route::delete('/user/logout', [UserController::class, 'logout']);

  Route::post('/contact', [ContactController::class, 'create']);
  Route::get('/contact', [ContactController::class, 'search']);
  Route::get('/contact/{id}', [ContactController::class, 'get'])->where('id', '[0-9]+');
  Route::put('/contact/{id}', [ContactController::class, 'update'])->where('id', '[0-9]+');
  Route::delete('/contact/{id}', [ContactController::class, 'delete'])->where('id', '[0-9]+');

  Route::post('/contact/{idContact}/address', [AddressController::class, 'create'])->where('idContact', '[0-9]+');
  Route::get(
    '/contact/{idContact}/address/{idAddress}',
    [AddressController::class, 'get'],
  )
    ->where('idContact', '[0-9]+')
    ->where('idAddress', '[0-9]+');
});