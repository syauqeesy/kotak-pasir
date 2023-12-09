<?php

namespace Tests\Feature;

use App\Models\Address;
use App\Models\Contact;
use Database\Seeders\AddressSeeder;
use Database\Seeders\ContactSeeder;
use Database\Seeders\UserSeeder;
use Tests\TestCase;

class AddressTest extends TestCase
{
    public function testCreateSuccess() {
        $this->seed([UserSeeder::class, ContactSeeder::class]);

        $contact = Contact::query()->limit(1)->first();

        $this->post(uri: '/api/contact/' . $contact->id . '/address', headers: [
            'Authorization' => 'testtoken'
        ], data: [
            'street' => 'Test Street',
            'city' => 'Test City',
            'province' => 'Test Province',
            'country' => 'Test Country',
            'postal_code' => '3733',
        ])
            ->assertStatus(201)
            ->assertJson([
                'data' => [
                    'street' => 'Test Street',
                    'city' => 'Test City',
                    'province' => 'Test Province',
                    'country' => 'Test Country',
                    'postal_code' => '3733',
                ]
            ]);
    }

    public function testCreateFailedCountryIsEmpty() {
        $this->seed([UserSeeder::class, ContactSeeder::class]);

        $contact = Contact::query()->limit(1)->first();

        $this->post(uri: '/api/contact/' . $contact->id . '/address', headers: [
            'Authorization' => 'testtoken'
        ], data: [
            'street' => 'Test Street',
            'city' => 'Test City',
            'province' => 'Test Province',
            'country' => '',
            'postal_code' => '3733',
        ])
            ->assertStatus(400)
            ->assertJson([
                'errors' => [
                    'country' => ['The country field is required.'],
                ],
            ]);
    }

    public function testCreateFailedContactNotFound() {
        $this->seed([UserSeeder::class, ContactSeeder::class]);

        $contact = Contact::query()->limit(1)->first();

        $this->post(uri: '/api/contact/' . $contact->id + 1 . '/address', headers: [
            'Authorization' => 'testtoken'
        ], data: [
            'street' => 'Test Street',
            'city' => 'Test City',
            'province' => 'Test Province',
            'country' => 'Test Country',
            'postal_code' => '3733',
        ])
            ->assertStatus(404)
            ->assertJson([
                'errors' => [
                    'message' => ['Not found.'],
                ],
            ]);
    }

    public function testGetSuccess() {
        $this->seed([UserSeeder::class, ContactSeeder::class, AddressSeeder::class]);

        $address = Address::query()->limit(1)->first();

        $this->get('/api/contact/' . $address->contact_id . '/address/' . $address->id, [
            'Authorization' => 'testtoken'
        ])
            ->assertStatus(200)
            ->assertJson([
                'data' => [
                    'street' => 'Test Street',
                    'city' => 'Test City',
                    'province' => 'Test Province',
                    'country' => 'Test Country',
                    'postal_code' => '666',
                ],
            ]);
    }

    public function testGetFailedNotFound() {
        $this->seed([UserSeeder::class, ContactSeeder::class, AddressSeeder::class]);

        $address = Address::query()->limit(1)->first();

        $this->get('/api/contact/' . $address->contact_id . '/address/' . $address->id + 1, [
            'Authorization' => 'testtoken'
        ])
            ->assertStatus(404)
            ->assertJson([
                'errors' => [
                    'message' => ['Not found.'],
                ],
            ]);
    }

    public function testUpdateSuccess() {
        $this->seed([UserSeeder::class, ContactSeeder::class, AddressSeeder::class]);

        $address = Address::query()->limit(1)->first();

        $this->put(uri: '/api/contact/' . $address->contact_id . '/address/' . $address->id, headers: [
            'Authorization' => 'testtoken'
        ], data: [
            'street' => 'Test Street baru',
            'city' => 'Test City baru',
            'province' => 'Test Province baru',
            'country' => 'Test Country baru',
            'postal_code' => '666',
        ])
            ->assertStatus(200)
            ->assertJson([
                'data' => [
                    'street' => 'Test Street baru',
                    'city' => 'Test City baru',
                    'province' => 'Test Province baru',
                    'country' => 'Test Country baru',
                    'postal_code' => '666',
                ],
            ]);
    }

    public function testUpdateFailedCountryIsEmpty() {
        $this->seed([UserSeeder::class, ContactSeeder::class, AddressSeeder::class]);

        $address = Address::query()->limit(1)->first();

        $this->put(uri: '/api/contact/' . $address->contact_id . '/address/' . $address->id, headers: [
            'Authorization' => 'testtoken'
        ], data: [
            'street' => 'Test Street baru',
            'city' => 'Test City baru',
            'province' => 'Test Province baru',
            'country' => '',
            'postal_code' => '666',
        ])
            ->assertStatus(400)
            ->assertJson([
                'errors' => [
                    'country' => ['The country field is required.'],
                ],
            ]);
    }

    public function testUpdateFailedNotFound() {
        $this->seed([UserSeeder::class, ContactSeeder::class, AddressSeeder::class]);

        $address = Address::query()->limit(1)->first();

        $this->put(uri: '/api/contact/' . $address->contact_id . '/address/' . $address->id + 1, headers: [
            'Authorization' => 'testtoken'
        ], data: [
            'street' => 'Test Street baru',
            'city' => 'Test City baru',
            'province' => 'Test Province baru',
            'country' => 'Test country baru',
            'postal_code' => '666',
        ])
            ->assertStatus(404)
            ->assertJson([
                'errors' => [
                    'message' => ['Not found.'],
                ],
            ]);
    }
}
