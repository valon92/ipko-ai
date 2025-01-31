<?php


use App\Http\Controllers\SearchController;

Route::get('/search', [SearchController::class, 'search']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/cart', [CartController::class, 'saveCart']);
    Route::get('/cart', [CartController::class, 'getCart']);
});
