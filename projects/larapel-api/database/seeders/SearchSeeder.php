<?php

namespace Database\Seeders;

use App\Models\Contact;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SearchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::where('username', 'testname')->first();

        for ($i = 0; $i < 20; $i++) {
            Contact::create([
                'user_id' => $user->id,
                'first_name' => 'Test' . $i,
                'last_name' => 'Name' . $i,
                'email' => 'test' . $i . '@gmail.com',
                'phone' => '666666' . $i,
            ]);
        }
    }
}
