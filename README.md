# crud-express

## Getting Started

1. create mysql Table
```
CREATE TABLE `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255),
  `description` varchar(255),
  `completed` boolean DEFAULT false,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
```
2. create .env file to store credential data (see envexample)
3. **npm install** to install all packages needed
4. **npm run start** to run the app