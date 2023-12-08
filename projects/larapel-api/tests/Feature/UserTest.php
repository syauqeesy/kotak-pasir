<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    public function testRegisterSuccess() {
        $this->post('/api/user', [
            'name' => 'Ahmad Syauqi',
            'username' => 'syauqeesy',
            'password' => 'sauki123',
        ])
            ->assertStatus(201)
            ->assertJson([
                'data' => [
                    'name' => 'Ahmad Syauqi',
                    'username' => 'syauqeesy',
                ],
            ]);
    }

    public function testRegisterFailedPasswordEmpty() {
        $this->post('/api/user', [
            'name' => 'Ahmad Syauqi',
            'username' => 'syauqeesy',
            'password' => '',
        ])
            ->assertStatus(400)
            ->assertJson([
                'errors' => [
                    'password' => [
                        'The password field is required.',
                    ],
                ],
            ]);
    }

    public function testRegisterFailedUsernameAlreadyExists() {
        $this->testRegisterSuccess();
        $this->post('/api/user', [
            'name' => 'Ahmad Syauqi',
            'username' => 'syauqeesy',
            'password' => 'sauki123',
        ])
            ->assertStatus(400)
            ->assertJson([
                'errors' => [
                    'username' => [
                        'Username already registered.',
                    ],
                ],
            ]);
    }
}
