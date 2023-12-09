<?php

namespace Database\Seeders;

use App\Models\Address;
use App\Models\Contact;
use Illuminate\Database\Seeder;

class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $contact = Contact::query()->limit(1)->first();

        Address::create([
            'contact_id' => $contact->id,
            'street' => 'Test Street',
            'city' => 'Test City',
            'province' => 'Test Province',
            'country' => 'Test Country',
            'postal_code' => '666',
        ]);
    }
}
