<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Model
{
    protected $table = 'users';
    protected $primaryKey = 'id';
    protected $keyType = 'int';

    public $timestamps = true;
    public $increment = true;

    protected $fillable = ['name', 'username', 'password'];

    public function contacts(): HasMany {
        return $this->hasMany(Contact::class, 'user_id', 'id');
    }
}
