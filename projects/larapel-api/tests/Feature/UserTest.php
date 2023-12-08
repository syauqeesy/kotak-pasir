<?php

namespace Tests\Feature;

use App\Models\User;
use Database\Seeders\UserSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use function PHPUnit\Framework\assertNotEquals;

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

    public function testUpdateSuccessName() {
        $this->seed([UserSeeder::class]);

        $oldUser = User::where('username', 'testname')->first();

        $this->patch('/api/user/current', [
            'name' => 'Nama Baru'
        ], [
            'Authorization' => 'testtoken',
        ])
            ->assertStatus(200)
            ->assertJson([
                'data' => [
                    'name' => 'Nama Baru',
                    'username' => 'testname',
                ],
            ]);

        $newUser = User::where('username', 'testname')->first();

        self:assertNotEquals($oldUser->name, $newUser->name);
    }

    public function testUpdateSuccessPassword() {
        $this->seed([UserSeeder::class]);

        $oldUser = User::where('username', 'testname')->first();

        $this->patch('/api/user/current', [
            'password' => 'passwordbaru'
        ], [
            'Authorization' => 'testtoken',
        ])
            ->assertStatus(200)
            ->assertJson([
                'data' => [
                    'name' => 'Test Name',
                    'username' => 'testname',
                ],
            ]);

        $newUser = User::where('username', 'testname')->first();

        self:assertNotEquals($oldUser->password, $newUser->password);
    }

    public function testUpdateFailed() {
        $this->seed([UserSeeder::class]);

        $this->patch('/api/user/current', [
            'name' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ligula in tellus ultricies scelerisque vitae a sapien. Nulla id lorem nec mi suscipit mollis vel a velit. Morbi vitae porttitor dolor, a elementum massa. Cras a diam et elit euismod ornare sed non elit. Etiam a purus sed est pretium vulputate ut id odio. Nunc molestie nisi scelerisque, interdum nisl quis, laoreet nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. In malesuada ligula ac arcu elementum faucibus. Vivamus aliquam metus nec laoreet congue. Integer dictum nunc sit amet sapien vehicula tristique. Donec aliquet ex in mi.'
        ], [
            'Authorization' => 'testtoken',
        ])
            ->assertStatus(400)
            ->assertJson([
                'errors' => [
                    'name' => [
                        'The name field must not be greater than 191 characters.',
                    ],
                ],
            ]);
    }

    public function testLogoutSuccess() {
        $this->seed([UserSeeder::class]);

        $this->delete(uri: '/api/user/logout', headers: [
            'Authorization' => 'testtoken',
        ])
            ->assertStatus(200)
            ->assertJson([
                'data' => [
                    'logout' => true,
                ],
            ]);

        $user = User::where('username', 'testname')->first();
        self::assertNull($user->token);
    }

    public function testLogoutFailed() {
        $this->seed([UserSeeder::class]);

        $this->delete(uri: '/api/user/logout', headers: [
            'Authorization' => 'salahtoken',
        ])
            ->assertStatus(401)
            ->assertJson([
                'errors' => [
                    'message' => ['Unauthorized.'],
                ],
            ]);
    }
}
