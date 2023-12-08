<?php

namespace Tests\Feature;

use App\Models\User;
use Database\Seeders\UserSeeder;
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

    public function testLoginSuccess() {
        $this->seed([UserSeeder::class]);

        $this->post('/api/user/login', [
            'username' => 'testname',
            'password' => 'testname123',
        ])
            ->assertStatus(200)
            ->assertJson([
                'data' => [
                    'name' => 'Test Name',
                    'username' => 'testname',
                ],
            ]);

        $user = User::where('username', 'testname')->first();

        self::assertNotNull($user->token);
    }

    public function testLoginFailedUsernameWrong() {
        $this->seed([UserSeeder::class]);

        $this->post('/api/user/login', [
            'username' => 'testnam',
            'password' => 'testname123',
        ])
            ->assertStatus(401)
            ->assertJson([
                'errors' => [
                    'message' => [
                        'Username or password wrong.',
                    ],
                ],
            ]);
    }

    public function testLoginFailedPasswordWrong() {
        $this->seed([UserSeeder::class]);

        $this->post('/api/user/login', [
            'username' => 'testname',
            'password' => 'testname12',
        ])
            ->assertStatus(401)
            ->assertJson([
                'errors' => [
                    'message' => [
                        'Username or password wrong.',
                    ],
                ],
            ]);
    }

    public function testGetSuccess() {
        $this->seed([UserSeeder::class]);

        $this->get('/api/user/current', [
            'Authorization' => 'testtoken',
        ])
            ->assertStatus(200)
            ->assertJson([
                'data' => [
                    'name' => 'Test Name',
                    'username' => 'testname',
                ],
            ]);
    }

    public function testGetFailedUnauthorized() {
        $this->seed([UserSeeder::class]);

        $this->get('/api/user/current', [
            'Authorization' => '',
        ])
            ->assertStatus(401)
            ->assertJson([
                'errors' => [
                    'message' => [
                        'Unauthorized.',
                    ],
                ],
            ]);
    }

    public function testGetFailedInvalidToken() {
        $this->seed([UserSeeder::class]);

        $this->get('/api/user/current', [
            'Authorization' => 'salahtoken',
        ])
            ->assertStatus(401)
            ->assertJson([
                'errors' => [
                    'message' => [
                        'Unauthorized.',
                    ],
                ],
            ]);
    }
}
