<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    //

    public function home()
    {
        return view('homepage.home');
    }

    public function about_us()
    {
        return view('homepage.about');
    }
}
