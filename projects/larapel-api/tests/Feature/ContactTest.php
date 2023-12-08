<?php

namespace Tests\Feature;

use Tests\TestCase;
use Database\Seeders\UserSeeder;

class ContactTest extends TestCase
{
    public function testCreateSuccess() {
        $this->seed([UserSeeder::class]);

        $this->post('/api/contact', [
            'first_name' => 'Ahmad',
            'last_name' => 'Syauqi',
            'email' => 'ahmad@gmail.com',
            'phone' => '0812812712',
        ], [
            'Authorization' => 'testtoken',
        ])
            ->assertStatus(201)
            ->assertJson([
                'data' => [
                    'first_name' => 'Ahmad',
                    'last_name' => 'Syauqi',
                    'email' => 'ahmad@gmail.com',
                    'phone' => '0812812712',
                ],
            ]);
    }

    public function testCreateFailed() {
        $this->seed([UserSeeder::class]);

        $this->post('/api/contact', [
            'first_name' => '',
            'last_name' => 'Syauqi',
            'email' => 'ahmad@gmail.com',
            'phone' => '0812812712',
        ], [
            'Authorization' => 'testtoken',
        ])
            ->assertStatus(400)
            ->assertJson([
                'errors' => [
                    'first_name' => ['The first name field is required.'],
                ],
            ]);
    }
}
