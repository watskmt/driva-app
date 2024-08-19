<?php

namespace App\Models;

//use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Model
{
//    use HasApiTokens, HasFactory, Notifiable;
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    protected $table = 'users';

//    public function login($db, $params)
//    {
////        $sql = ' SELECT * FROM user_info'
////            .' WHERE e_mail= :e_mail AND password = :password AND deleted_at is NULL ';
////
////        $stmt = $db->prepare($sql);
////        $stmt->bindParam(":e_mail", $params['e_mail']);
////        $stmt->bindParam(":password", $params['password']);
////
////        $exec = $stmt->execute();
////        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
//        $data = User::where('email', $params->email)->where('password', $params->password)->get();
//
//        if (count($data) > 0) {
//            //ハッシュコード生成
//            $hashcode = Model_User::makeRandStr(255);
//
//            //アップデート
//            $sql  = ' UPDATE '
//                .'   user_info '
//                .' SET '
//                .'   hashcode   = :hashcode'
//                .' WHERE '
//                .'   e_mail= :e_mail AND password = :password AND deleted_at is NULL ';
//
//            $timeStr = Date::time()->format('mysql');
//
//            $stmt = $db->prepare($sql);
//            $stmt->bindParam(":e_mail", $params['e_mail']);
//            $stmt->bindParam(":password", $params['password']);
//            $stmt->bindParam(":hashcode", $hashcode);
//            $stmt->execute();
//
//
//            $data[0]['login_type'] = 1;
//            $data[0]['hashcode'] = $hashcode;
//            return $data;
//
//        }
//        else {
//            $sql = 'SELECT * FROM temporary_user_info';
//            $sql .= ' WHERE e_mail= :e_mail AND password = :password AND deleted_at is NULL ';   // メール承認による分岐
//
//            $stmt = $db->prepare($sql);
//            $stmt->bindParam(":e_mail", $params['e_mail']);
//            $stmt->bindParam(":password", $params['password']);
//            $stmt->execute();
//            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
//            if (count($data) > 0) {
//                if ($data[0]["url_token"] != null) throw new Error("", ERROR_EMAIL_NOT_AUTHENTICATION);
//                //ハッシュコード生成
//                $hashcode = Model_User::makeRandStr(255);
//
//                //アップデート
//                $sql  = ' UPDATE '
//                    .'   temporary_user_info '
//                    .' SET '
//                    .'   hashcode   = :hashcode'
//                    .' WHERE '
//                    .'   e_mail= :e_mail AND password = :password AND deleted_at is NULL';
//
//                $timeStr = Date::time()->format('mysql');
//
//                $stmt = $db->prepare($sql);
//                $stmt->bindParam(":e_mail", $params['e_mail']);
//                $stmt->bindParam(":password", $params['password']);
//                $stmt->bindParam(":hashcode", $hashcode);
//                $stmt->execute();
//                $data[0]['login_type'] = 0;
//                $data[0]['hashcode'] = $hashcode;
//                return $data;
//            }
//        }
//
//        throw new Error("", ERROR_NOT_EXITS_ACCOUNT);
//
//    }

}
