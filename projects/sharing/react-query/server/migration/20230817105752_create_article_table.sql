-- migrate:up
CREATE TABLE `articles` (
  `id` CHAR(36) NOT NULL PRIMARY KEY,
  `title` VARCHAR(191) NOT NULL,
  `body` TEXT NOT NULL,
  `created_at` BIGINT NOT NULL,
  `updated_at` BIGINT NULL,
  `deleted_at` BIGINT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- migrate:down
DROP TABLE `articles`;
