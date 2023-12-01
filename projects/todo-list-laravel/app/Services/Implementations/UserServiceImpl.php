<?php

namespace App\Services\Implementations;

use App\Services\UserService;

class UserServiceImpl implements UserService
{
  private array $users = [
    'syauqeesy' => 'rahasia',
  ];

  public function login(string $user, string $password): bool
  {
    if (!isset($this->users[$user])) {
      return false;
    }

    $correctPassword = $this->users[$user];

    if ($password !== $correctPassword) {
      return false;
    }

    return true;
  }
}
