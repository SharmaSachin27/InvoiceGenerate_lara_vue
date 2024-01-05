<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //
    public function all_product()
    {
        $prducts = Product::orderBy('id', 'DESC')->get();
        return response()->json([
            'products' => $prducts
        ],200);
    }
}
