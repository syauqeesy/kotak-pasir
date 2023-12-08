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

    public function contacts(): HasMany {
        return $this->hasMany(Address::class, 'contact_id', 'id');
    }
}
