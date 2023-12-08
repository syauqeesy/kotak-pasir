<?php

namespace Database\Seeders;

use App\Models\Contact;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::where('username', 'testname')->first();

        Contact::create([
            'user_id' => $user->id,
            'first_name' => 'Test',
            'last_name' => 'Name',
            'email' => 'test@gmail.com',
            'phone' => '012912612',
        ]);
    }
}
