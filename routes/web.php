<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ViewErrorBag;
use App\Http\Controllers\MyController;
use App\Http\Controllers\TestController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', [TestController::class, 'index']);
Route::post('store_data', [TestController::class, 'store'])->name('store_data');
Route::get('all_data', [TestController::class, 'all_data'])->name('all_data');
Route::get('destroy/{testid}', [TestController::class, 'destroy']);


Route::post('update/{id}', [TestController::class, 'update']);

Route::get('/my', [MyController::class, 'index']);

