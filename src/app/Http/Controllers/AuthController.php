<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');
        if (!empty($email) && !empty($password)
            && Auth::attempt(['email' => $email, 'password' => $password])
        )
        {
            $token = Auth::user()->createToken('AccessToken')->plainTextToken;
            $userId = User::where('email', $email)->value('id');
            return response()->json(['user_id' => $userId, 'token' => $token], 200);
        } else {
            return response()->json(['error' => 'S認証に失敗しました。'], 401);
        }
    }

    public function user(Request $request)
    {
        return response()->json(
            [
                $request->user()->name,
                $request->user()->email,
            ]
        );
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'ログアウトしました。'], 200);
    }
}
