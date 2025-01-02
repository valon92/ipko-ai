<?php

use Illuminate\Support\Facades\Route;

// Rrugë për aplikacionin Vue
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');