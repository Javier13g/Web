-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3307
-- Tiempo de generación: 02-05-2020 a las 19:14:07
-- Versión del servidor: 8.0.18
-- Versión de PHP: 7.3.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pokemon2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registropokemon`
--

CREATE TABLE `registropokemon` (
  `Nombre` varchar(20) NOT NULL,
  `Color` varchar(20) NOT NULL,
  `PartidoPolitico` varchar(20) NOT NULL,
  `Numero` varchar(20) NOT NULL,
  `Tipo` varchar(20) NOT NULL,
  `Altura` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `registropokemon`
--

INSERT INTO `registropokemon` (`Nombre`, `Color`, `PartidoPolitico`, `Numero`, `Tipo`, `Altura`) VALUES
('Pikachu', 'verde', 'PLD', '12', 'Psiofs', 'nose');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
