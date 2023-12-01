<?php

namespace Tests\Feature;

use App\Services\UserService;
use Tests\TestCase;

use function PHPUnit\Framework\assertTrue;

class UserServiceTest extends TestCase
{
    private UserService $userService;

    protected function setUp(): void
    {
        parent::setUp();

        $this->userService = $this->app->make(UserService::class);
    }

    public function testSample(): void
    {
        self:assertTrue(true);
    }

    public function testLoginSuccess()
    {
        self::assertTrue($this->userService->login('syauqeesy', 'rahasia'));
    }

    public function testLoginFailedUserNotFound()
    {
        self::assertFalse($this->userService->login('ajojing', 'rahasia'));
    }

    public function testLoginFailedWrongPassword()
    {
        self::assertFalse($this->userService->login('syauqeesy', 'waduhek'));
    }
}
