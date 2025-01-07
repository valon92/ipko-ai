<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('query');

        // Kërko në tabelat dhe përmbajtjet e ndryshme
        $results = [
            'pages' => collect([
                ['title' => 'Home', 'url' => '/'],
                ['title' => 'About', 'url' => '/about'],
                ['title' => 'Contact', 'url' => '/contact'],
                ['title' => 'FAQ', 'url' => '/faq'],
            ])->filter(function ($page) use ($query) {
                return stripos($page['title'], $query) !== false;
            }),
        ];

        return response()->json($results);
    }
}