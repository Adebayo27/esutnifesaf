<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!

1. Homepage
2. About us
3.Grow- this is like a church blog on vital topics
4. Welfare
5. Event (messages from events-text, audio and video)
6. Home-coming ( register, donate, about, venue, speakers, theme)
7. Donate
6. Datacapture
7. Contact us
|
*/

// Route::get('/', function () {
//     return view('homepage.home');
// });


Route::get('/', [PageController::class, 'home']);
Route::get('/about-us', [PageController::class, 'about']);
// Route::get('/about-us', [PageController::class, 'about']);