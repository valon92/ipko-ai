<?php


use App\Http\Controllers\SearchController;
use App\Http\Controllers\BusinessController;


Route::get('/search', [SearchController::class, 'search']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/cart', [CartController::class, 'saveCart']);
    Route::get('/cart', [CartController::class, 'getCart']);
});


Route::post('/register-business', [BusinessController::class, 'register']);
