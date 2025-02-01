<?php

namespace App\Http\Controllers;

use App\Models\Business;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class BusinessController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'business_name' => 'required|string|max:255',
            'business_number' => 'required|string|unique:businesses',
            'email' => 'reqired|email|unique:businesses',
            'password' => 'required|min:6',
            'business_type' => 'required|string',
            'location' => 'required|string',
            'industry' => 'required|string'
        ]);

        if ($validator->fails()){
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $business = Business::create([
          'business_name' => $request->business_name,  
          'business_number' => $request->email,  
          'email' => $request->business_name,  
          'password' => Hash::make($request->password),  
          'business_type' => $request->business_type,  
          'location' => $request->location,  
          'industry' => $request->industry, 
        ]);

        return response()->json(['message' => 'Business registered successfully', 'business' =>$business], 201);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Business $business)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Business $business)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Business $business)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Business $business)
    {
        //
    }
}
