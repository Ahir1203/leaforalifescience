-- =======================================================
-- Leafora Life Science Database Schema for phpMyAdmin
-- Database: u858419112_leafora
-- =======================================================

USE `u858419112_leafora`;

-- 1. Create Products Table
CREATE TABLE IF NOT EXISTS `products` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `category` VARCHAR(100) NOT NULL,
  `price` DECIMAL(10, 2) NOT NULL,
  `stock` INT DEFAULT 0,
  `description` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. Insert Initial Seed Data
INSERT INTO `products` (`name`, `category`, `price`, `stock`, `description`) VALUES
('LeafExtract Pharma Grade', 'Herbal Extract', 49.99, 120, 'Pure botanical extract engineered for high-precision pharmaceutical formulations.'),
('BioVital Nutraceutical', 'Supplements', 29.50, 85, 'Comprehensive multivitamin and bioactive mineral complex.'),
('EcoScience Active Solution', 'Biotech Formulation', 89.00, 40, 'Advanced enzymatic formulation for biotechnology applications.');
