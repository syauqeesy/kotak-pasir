<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Test Name',
            'username' => 'testname',
            'password' => Hash::make('testname123'),
            'token' => 'testtoken'
        ]);

        User::create([
            'name' => 'Test Name 2',
            'username' => 'testname2',
            'password' => Hash::make('testname123'),
            'token' => 'testtoken2'
        ]);
    }
}
