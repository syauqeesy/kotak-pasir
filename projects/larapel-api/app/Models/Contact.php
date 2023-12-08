<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Contact extends Model
{
    protected $table = 'contacts';
    protected $primaryKey = 'id';
    protected $keyType = 'int';

    public $timestamps = true;
    public $increment = true;

    protected $fillable = ['first_name', 'last_name', 'email', 'phone'];

    public function contacts(): HasMany {
        return $this->hasMany(Address::class, 'contact_id', 'id');
    }
}
