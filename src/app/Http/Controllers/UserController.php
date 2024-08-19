<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function list(Request $request)
    {
        if($request->has('userId'))
            $list = User::where('id', $request->input('userId'))->get();
        else
            $list = User::all();
        return response()->json($list);
    }
    public function passengerList(Request $request)
    {
        $list = User::where('id', $request->input('user_id'))->get();
        $list['test'] = true;
        return response()->json($list);
    }
}
