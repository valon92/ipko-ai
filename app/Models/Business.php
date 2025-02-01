<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Business extends Authenticatable 
{
use HasFactory;

protected $fillable = [
    'business_name',
    'business_number',
    'email',
    'password',
    'business_type',
    'location',
    'industry',

];

  protected $hidden = ['password'];

}
