<?php

namespace Tests\Feature;

use App\Models\Contact;
use Database\Seeders\ContactSeeder;
use Tests\TestCase;
use Database\Seeders\UserSeeder;
use Database\Seeders\SearchSeeder;

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

    public function testGetSuccess() {
        $this->seed([UserSeeder::class, ContactSeeder::class]);

        $contact = Contact::query()->limit(1)->first();

        $this->get(uri: '/api/contact/' . $contact->id, headers: [
            'Authorization' => 'testtoken',
        ])
            ->assertStatus(200)
            ->assertJson([
                'data' => [
                    'first_name' => 'Test',
                    'last_name' => 'Name',
                    'email' => 'test@gmail.com',
                    'phone' => '012912612',
                ],
            ]);
    }

    public function testGetFailedNotFound() {
        $this->seed([UserSeeder::class, ContactSeeder::class]);

        $contact = Contact::query()->limit(1)->first();

        $this->get(uri: '/api/contact/' . $contact->id+1, headers: [
            'Authorization' => 'testtoken',
        ])
            ->assertStatus(404)
            ->assertJson([
                'errors' => [
                    'message' => ['Not found.'],
                ],
            ]);
    }

    public function testGetFailedOtherContact() {
        $this->seed([UserSeeder::class, ContactSeeder::class]);

        $contact = Contact::query()->limit(1)->first();

        $this->get(uri: '/api/contact/' . $contact->id, headers: [
            'Authorization' => 'testtoken2',
        ])
            ->assertStatus(404)
            ->assertJson([
                'errors' => [
                    'message' => ['Not found.'],
                ],
            ]);
    }

    public function testUpdateSuccess() {
        $this->seed([UserSeeder::class, ContactSeeder::class]);

        $contact = Contact::query()->limit(1)->first();

        $this->put(uri: '/api/contact/' . $contact->id, headers: [
            'Authorization' => 'testtoken',
        ], data: [
            'first_name' => 'Test2',
            'last_name' => 'Name2',
            'email' => 'test2@gmail.com',
            'phone' => '012912612',
        ])
            ->assertStatus(200)
            ->assertJson([
                'data' => [
                    'first_name' => 'Test2',
                    'last_name' => 'Name2',
                    'email' => 'test2@gmail.com',
                    'phone' => '012912612',
                ],
            ]);
    }

    public function testUpdateFailedFirstNameRequired() {
        $this->seed([UserSeeder::class, ContactSeeder::class]);

        $contact = Contact::query()->limit(1)->first();

        $this->put(uri: '/api/contact/' . $contact->id, headers: [
            'Authorization' => 'testtoken',
        ], data: [
            'first_name' => '',
            'last_name' => 'Name2',
            'email' => 'test2@gmail.com',
            'phone' => '012912612',
        ])
            ->assertStatus(400)
            ->assertJson([
                'errors' => [
                    'first_name' => ['The first name field is required.'],
                ],
            ]);
    }

    public function testDeleteSuccess() {
        $this->seed([UserSeeder::class, ContactSeeder::class]);

        $contact = Contact::query()->limit(1)->first();

        $this->delete(uri: '/api/contact/' . $contact->id, headers: [
            'Authorization' => 'testtoken',
        ])
            ->assertStatus(200)
            ->assertJson([
                'data' => [
                    'deleted' => true,
                ],
            ]);
    }

    public function testDeleteFailedNotFound() {
        $this->seed([UserSeeder::class, ContactSeeder::class]);

        $contact = Contact::query()->limit(1)->first();

        $this->delete(uri: '/api/contact/' . $contact->id+1, headers: [
            'Authorization' => 'testtoken',
        ])
            ->assertStatus(404)
            ->assertJson([
                'errors' => [
                    'message' => ['Not found.'],
                ],
            ]);
    }

    public function testSearchByFirstNameSuccess() {
        $this->seed([UserSeeder::class, SearchSeeder::class]);

        $response = $this->get('/api/contact?name=test', headers: [
            'Authorization' => 'testtoken',
        ])
            ->assertStatus(200)
            ->json();

        self::assertEquals(10, count($response['data']));
        self::assertEquals(20, $response['meta']['total']);
    }

    public function testSearchByEmailSuccess() {
        $this->seed([UserSeeder::class, SearchSeeder::class]);

        $response = $this->get('/api/contact?email=test', headers: [
            'Authorization' => 'testtoken',
        ])
            ->assertStatus(200)
            ->json();

        self::assertEquals(10, count($response['data']));
        self::assertEquals(20, $response['meta']['total']);
    }

    public function testSearchByPhoneSuccess() {
        $this->seed([UserSeeder::class, SearchSeeder::class]);

        $response = $this->get('/api/contact?phone=666666', headers: [
            'Authorization' => 'testtoken',
        ])
            ->assertStatus(200)
            ->json();

        self::assertEquals(10, count($response['data']));
        self::assertEquals(20, $response['meta']['total']);
    }

    public function testSearchFailedNotFound()
    {
        $this->seed([UserSeeder::class, SearchSeeder::class]);

        $response = $this->get('/api/contact?name=tidakada', headers: [
            'Authorization' => 'testtoken',
        ])
            ->assertStatus(200)
            ->json();

        self::assertEquals(0, count($response['data']));
        self::assertEquals(0, $response['meta']['total']);
    }

    public function testSearchByWithPageSuccess() {
        $this->seed([UserSeeder::class, SearchSeeder::class]);

        $response = $this->get('/api/contact?perpage=5&page=2', headers: [
            'Authorization' => 'testtoken',
        ])
            ->assertStatus(200)
            ->json();

        self::assertEquals(5, count($response['data']));
        self::assertEquals(2, $response['meta']['current_page']);
        self::assertEquals(20, $response['meta']['total']);
    }
}
