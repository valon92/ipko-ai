<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CartController extends Controller
{
    public function saveCart(Request $request)
{
    $user = $request->user();
    $user->cart = $request->cart;
    $user->save();

    return response()->json(['message' => 'Cart saved successfully.']);
}

public function getCart(Request $request)
{
    $user = $request->user();
    return response()->json(['cart' => $user->cart]);
}

}
