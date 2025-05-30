
export interface DocSection {
  id: string;
  title: {
    en: string;
    fr: string;
  };
  items: DocItem[];
}

export interface DocItem {
  id: string;
  title: {
    en: string;
    fr: string;
  };
  content?: {
    en: string;
    fr: string;
  };
  subsections?: DocSubsection[];
}

export interface DocSubsection {
  id: string;
  title: {
    en: string;
    fr: string;
  };
  content: {
    en: string;
    fr: string;
  };
}

export const documentationData: DocSection[] = [
  {
    id: "getting-started",
    title: {
      en: "Getting Started",
      fr: "Premiers pas"
    },
    items: [
      {
        id: "introduction",
        title: {
          en: "Introduction",
          fr: "Introduction"
        },
        content: {
          en: `
# Introduction

Welcome to Under Framework documentation. Under is a modern, powerful PHP framework designed for building robust web applications with elegant syntax and developer-friendly features.

## What is Under Framework?

Under Framework is built with modern PHP practices in mind, offering:

- **Intuitive Syntax**: Clean, expressive code that reads like natural language
- **Modular Architecture**: Build scalable applications with reusable components
- **Advanced ORM**: Chronos ORM for elegant database interactions
- **Security First**: Built-in security features and best practices

\`\`\`php
<?php

use Under\\Core\\Application;
use Under\\Http\\Request;
use Under\\Http\\Response;

$app = new Application();

$app->get('/', function (Request $request): Response {
    return response()->json([
        'message' => 'Welcome to Under Framework!'
    ]);
});

$app->run();
\`\`\`

## Key Features

- **Chronos ORM**: Advanced object-relational mapping
- **Component Builder**: Create modular, reusable components
- **Maker Tool**: Code generation and scaffolding
- **Built-in Security**: OAuth2, SSO, encryption
- **Multi-language Support**: Internationalization ready
          `,
          fr: `
# Introduction

Bienvenue dans la documentation du Framework Under. Under est un framework PHP moderne et puissant conçu pour créer des applications web robustes avec une syntaxe élégante et des fonctionnalités conviviales pour les développeurs.

## Qu'est-ce que le Framework Under ?

Le Framework Under est conçu avec les pratiques PHP modernes à l'esprit, offrant :

- **Syntaxe Intuitive** : Code propre et expressif qui se lit comme un langage naturel
- **Architecture Modulaire** : Construisez des applications évolutives avec des composants réutilisables
- **ORM Avancé** : Chronos ORM pour des interactions élégantes avec la base de données
- **Sécurité d'abord** : Fonctionnalités de sécurité intégrées et bonnes pratiques

\`\`\`php
<?php

use Under\\Core\\Application;
use Under\\Http\\Request;
use Under\\Http\\Response;

$app = new Application();

$app->get('/', function (Request $request): Response {
    return response()->json([
        'message' => 'Bienvenue dans Under Framework!'
    ]);
});

$app->run();
\`\`\`

## Fonctionnalités Clés

- **Chronos ORM** : Mapping objet-relationnel avancé
- **Component Builder** : Créez des composants modulaires et réutilisables
- **Outil Maker** : Génération de code et échafaudage
- **Sécurité Intégrée** : OAuth2, SSO, chiffrement
- **Support Multi-langues** : Prêt pour l'internationalisation
          `
        }
      },
      {
        id: "installation",
        title: {
          en: "Installation",
          fr: "Installation"
        },
        content: {
          en: `
# Installation

Get started with Under Framework in minutes. Follow these simple steps to set up your development environment.

## System Requirements

- PHP 8.1 or higher
- Composer 2.0 or higher
- MySQL 8.0+ or PostgreSQL 13+
- Node.js 16+ (for frontend assets)

## Quick Installation

Create a new Under project using Composer:

\`\`\`bash
composer create-project under/framework my-project
cd my-project
\`\`\`

## Environment Setup

Copy the environment file and configure your settings:

\`\`\`bash
cp .env.example .env
php under key:generate
\`\`\`

Configure your database in the \`.env\` file:

\`\`\`env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=under_app
DB_USERNAME=root
DB_PASSWORD=
\`\`\`

## Development Server

Start the built-in development server:

\`\`\`bash
php under serve
\`\`\`

Your application will be available at \`http://localhost:8000\`.
          `,
          fr: `
# Installation

Commencez avec Under Framework en quelques minutes. Suivez ces étapes simples pour configurer votre environnement de développement.

## Prérequis Système

- PHP 8.1 ou supérieur
- Composer 2.0 ou supérieur
- MySQL 8.0+ ou PostgreSQL 13+
- Node.js 16+ (pour les assets frontend)

## Installation Rapide

Créez un nouveau projet Under en utilisant Composer :

\`\`\`bash
composer create-project under/framework mon-projet
cd mon-projet
\`\`\`

## Configuration de l'Environnement

Copiez le fichier d'environnement et configurez vos paramètres :

\`\`\`bash
cp .env.example .env
php under key:generate
\`\`\`

Configurez votre base de données dans le fichier \`.env\` :

\`\`\`env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=under_app
DB_USERNAME=root
DB_PASSWORD=
\`\`\`

## Serveur de Développement

Démarrez le serveur de développement intégré :

\`\`\`bash
php under serve
\`\`\`

Votre application sera disponible à \`http://localhost:8000\`.
          `
        }
      },
      {
        id: "premiers-pas",
        title: {
          en: "First Steps",
          fr: "Premiers pas"
        },
        content: {
          en: `
# First Steps

Now that you have Under Framework installed, let's create your first application and explore the basic concepts.

## Your First Route

Create a simple route in \`routes/web.php\`:

\`\`\`php
<?php

use Under\\Http\\Request;
use Under\\Http\\Response;

Route::get('/hello', function (Request $request): Response {
    return response()->view('hello', [
        'name' => $request->query('name', 'World')
    ]);
});
\`\`\`

## Creating a Controller

Generate a new controller using the Maker tool:

\`\`\`bash
php under make:controller WelcomeController
\`\`\`

This creates a controller in \`app/Controllers/WelcomeController.php\`:

\`\`\`php
<?php

namespace App\\Controllers;

use Under\\Http\\Controller;
use Under\\Http\\Request;
use Under\\Http\\Response;

class WelcomeController extends Controller
{
    public function index(Request $request): Response
    {
        return response()->view('welcome');
    }
    
    public function show(Request $request, string $id): Response
    {
        return response()->json([
            'id' => $id,
            'message' => 'Hello from controller!'
        ]);
    }
}
\`\`\`
          `,
          fr: `
# Premiers pas

Maintenant que vous avez installé Under Framework, créons votre première application et explorons les concepts de base.

## Votre Première Route

Créez une route simple dans \`routes/web.php\` :

\`\`\`php
<?php

use Under\\Http\\Request;
use Under\\Http\\Response;

Route::get('/hello', function (Request $request): Response {
    return response()->view('hello', [
        'name' => $request->query('name', 'Monde')
    ]);
});
\`\`\`

## Créer un Contrôleur

Générez un nouveau contrôleur en utilisant l'outil Maker :

\`\`\`bash
php under make:controller WelcomeController
\`\`\`

Ceci crée un contrôleur dans \`app/Controllers/WelcomeController.php\` :

\`\`\`php
<?php

namespace App\\Controllers;

use Under\\Http\\Controller;
use Under\\Http\\Request;
use Under\\Http\\Response;

class WelcomeController extends Controller
{
    public function index(Request $request): Response
    {
        return response()->view('welcome');
    }
    
    public function show(Request $request, string $id): Response
    {
        return response()->json([
            'id' => $id,
            'message' => 'Bonjour du contrôleur!'
        ]);
    }
}
\`\`\`
          `
        }
      },
      {
        id: "philosophie",
        title: {
          en: "Framework Philosophy",
          fr: "Philosophie du framework"
        },
        content: {
          en: `
# Framework Philosophy

Under Framework is built on core principles that guide its design and development approach.

## Core Principles

### 1. Developer Experience First
We believe that great applications come from happy developers. Under prioritizes:
- Clear, readable syntax
- Comprehensive documentation
- Intuitive APIs
- Helpful error messages

### 2. Modularity and Flexibility

\`\`\`php
// Components are self-contained and reusable
$component = Component::make('UserProfile')
    ->with('user', $user)
    ->render();
\`\`\`

### 3. Convention Over Configuration
Under follows sensible defaults while allowing customization:

\`\`\`php
// Auto-discovery of models, controllers, and services
class UserController extends Controller
{
    // Automatically injected
    public function __construct(
        private UserService $userService
    ) {}
}
\`\`\`
          `,
          fr: `
# Philosophie du framework

Under Framework est construit sur des principes fondamentaux qui guident sa conception et son approche de développement.

## Principes Fondamentaux

### 1. Expérience Développeur d'Abord
Nous croyons que les grandes applications viennent de développeurs heureux. Under privilégie :
- Syntaxe claire et lisible
- Documentation complète
- APIs intuitives
- Messages d'erreur utiles

### 2. Modularité et Flexibilité

\`\`\`php
// Les composants sont autonomes et réutilisables
$component = Component::make('UserProfile')
    ->with('user', $user)
    ->render();
\`\`\`

### 3. Convention plutôt que Configuration
Under suit des défauts sensés tout en permettant la personnalisation :

\`\`\`php
// Auto-découverte des modèles, contrôleurs et services
class UserController extends Controller
{
    // Automatiquement injecté
    public function __construct(
        private UserService $userService
    ) {}
}
\`\`\`
          `
        }
      }
    ]
  },
  {
    id: "project-structure",
    title: {
      en: "Project Structure",
      fr: "Structure du Projet"
    },
    items: [
      {
        id: "arborescence",
        title: {
          en: "Directory Structure",
          fr: "Arborescence"
        },
        content: {
          en: `
# Directory Structure

Understanding the Under Framework directory structure is essential for efficient development.

## Root Directory Structure

\`\`\`
my-under-app/
├── app/                    # Application core logic
├── bootstrap/              # Application bootstrap files
├── config/                 # Configuration files
├── database/              # Database migrations and seeds
├── public/                # Publicly accessible files
├── resources/             # Views, assets, and language files
├── routes/                # Route definitions
├── storage/               # Generated files and logs
├── tests/                 # Application tests
├── vendor/                # Composer dependencies
├── .env                   # Environment configuration
├── .env.example          # Environment template
├── composer.json         # PHP dependencies
└── under                 # Under CLI tool
\`\`\`

## App Directory

The heart of your application:

\`\`\`
app/
├── Components/            # Reusable UI components
├── Controllers/           # HTTP controllers
├── Models/               # Chronos ORM models
├── Services/             # Business logic services
├── Middleware/           # HTTP middleware
├── Events/               # Application events
├── Listeners/            # Event listeners
├── Jobs/                 # Queued jobs
├── Mail/                 # Mail classes
├── Notifications/        # Notification classes
└── Providers/            # Service providers
\`\`\`
          `,
          fr: `
# Arborescence

Comprendre la structure de répertoires d'Under Framework est essentiel pour un développement efficace.

## Structure du Répertoire Racine

\`\`\`
mon-app-under/
├── app/                    # Logique principale de l'application
├── bootstrap/              # Fichiers de démarrage de l'application
├── config/                 # Fichiers de configuration
├── database/              # Migrations et seeds de base de données
├── public/                # Fichiers publiquement accessibles
├── resources/             # Vues, assets et fichiers de langue
├── routes/                # Définitions des routes
├── storage/               # Fichiers générés et logs
├── tests/                 # Tests de l'application
├── vendor/                # Dépendances Composer
├── .env                   # Configuration d'environnement
├── .env.example          # Modèle d'environnement
├── composer.json         # Dépendances PHP
└── under                 # Outil CLI Under
\`\`\`

## Répertoire App

Le cœur de votre application :

\`\`\`
app/
├── Components/            # Composants UI réutilisables
├── Controllers/           # Contrôleurs HTTP
├── Models/               # Modèles Chronos ORM
├── Services/             # Services de logique métier
├── Middleware/           # Middleware HTTP
├── Events/               # Événements d'application
├── Listeners/            # Écouteurs d'événements
├── Jobs/                 # Tâches en file d'attente
├── Mail/                 # Classes de mail
├── Notifications/        # Classes de notification
└── Providers/            # Fournisseurs de services
\`\`\`
          `
        }
      },
      {
        id: "multi-applications",
        title: {
          en: "Multi-applications & Modules",
          fr: "Multi-applications & modules"
        },
        content: {
          en: `
# Multi-applications & Modules

Under Framework supports modular architecture for building scalable applications.

## Module Structure

Create isolated modules within your application:

\`\`\`bash
php under make:module Blog
\`\`\`

This generates:

\`\`\`
modules/
└── Blog/
    ├── Controllers/
    ├── Models/
    ├── Views/
    ├── Routes/
    ├── Config/
    ├── Database/
    │   ├── Migrations/
    │   └── Seeds/
    └── module.json
\`\`\`

## Module Configuration

\`\`\`json
{
    "name": "Blog",
    "alias": "blog",
    "description": "Blog module for content management",
    "version": "1.0.0",
    "active": true,
    "providers": [
        "Modules\\\\Blog\\\\Providers\\\\BlogServiceProvider"
    ]
}
\`\`\`
          `,
          fr: `
# Multi-applications & modules

Under Framework supporte une architecture modulaire pour construire des applications évolutives.

## Structure de Module

Créez des modules isolés dans votre application :

\`\`\`bash
php under make:module Blog
\`\`\`

Ceci génère :

\`\`\`
modules/
└── Blog/
    ├── Controllers/
    ├── Models/
    ├── Views/
    ├── Routes/
    ├── Config/
    ├── Database/
    │   ├── Migrations/
    │   └── Seeds/
    └── module.json
\`\`\`

## Configuration de Module

\`\`\`json
{
    "name": "Blog",
    "alias": "blog",
    "description": "Module de blog pour la gestion de contenu",
    "version": "1.0.0",
    "active": true,
    "providers": [
        "Modules\\\\Blog\\\\Providers\\\\BlogServiceProvider"
    ]
}
\`\`\`
          `
        }
      },
      {
        id: "espaces-services",
        title: {
          en: "Service Spaces",
          fr: "Espaces de services"
        },
        content: {
          en: `
# Service Spaces

Service spaces provide isolated environments for different parts of your application, allowing for better organization and separation of concerns.

## Creating Service Spaces

\`\`\`bash
php under make:space UserManagement
\`\`\`

## Space Configuration

\`\`\`php
<?php

namespace App\\Spaces\\UserManagement;

use Under\\Core\\Space;

class UserManagementSpace extends Space
{
    protected array $services = [
        UserService::class,
        ProfileService::class,
        AuthenticationService::class,
    ];
    
    protected array $middleware = [
        'auth',
        'verified'
    ];
}
\`\`\`
          `,
          fr: `
# Espaces de services

Les espaces de services fournissent des environnements isolés pour différentes parties de votre application, permettant une meilleure organisation et séparation des préoccupations.

## Créer des Espaces de Services

\`\`\`bash
php under make:space UserManagement
\`\`\`

## Configuration d'Espace

\`\`\`php
<?php

namespace App\\Spaces\\UserManagement;

use Under\\Core\\Space;

class UserManagementSpace extends Space
{
    protected array $services = [
        UserService::class,
        ProfileService::class,
        AuthenticationService::class,
    ];
    
    protected array $middleware = [
        'auth',
        'verified'
    ];
}
\`\`\`
          `
        }
      },
      {
        id: "dependances-packages",
        title: {
          en: "Dependencies & Packages",
          fr: "Dépendances et packages"
        },
        content: {
          en: `
# Dependencies & Packages

Under Framework provides a robust package management system for handling dependencies and creating reusable packages.

## Installing Dependencies

\`\`\`bash
composer require vendor/package-name
\`\`\`

## Creating Packages

\`\`\`bash
php under make:package MyAwesomePackage
\`\`\`

## Package Structure

\`\`\`
packages/
└── MyAwesomePackage/
    ├── src/
    ├── config/
    ├── resources/
    ├── tests/
    ├── composer.json
    └── package.json
\`\`\`
          `,
          fr: `
# Dépendances et packages

Under Framework fournit un système robuste de gestion de packages pour gérer les dépendances et créer des packages réutilisables.

## Installer des Dépendances

\`\`\`bash
composer require vendor/package-name
\`\`\`

## Créer des Packages

\`\`\`bash
php under make:package MonSuperPackage
\`\`\`

## Structure de Package

\`\`\`
packages/
└── MonSuperPackage/
    ├── src/
    ├── config/
    ├── resources/
    ├── tests/
    ├── composer.json
    └── package.json
\`\`\`
          `
        }
      }
    ]
  },
  {
    id: "configuration",
    title: {
      en: "Configuration",
      fr: "Configuration"
    },
    items: [
      {
        id: "fichiers-configuration",
        title: {
          en: "Configuration Files",
          fr: "Fichiers de configuration"
        },
        content: {
          en: `
# Configuration Files

Under Framework uses a simple yet powerful configuration system.

## Configuration Structure

All configuration files are stored in the \`config/\` directory:

\`\`\`
config/
├── app.php              # Application settings
├── database.php         # Database connections
├── cache.php           # Cache configuration
├── session.php         # Session configuration
├── mail.php            # Mail settings
├── auth.php            # Authentication
└── services.php        # Third-party services
\`\`\`

## Application Configuration

\`\`\`php
// config/app.php
return [
    'name' => env('APP_NAME', 'Under Framework'),
    'env' => env('APP_ENV', 'production'),
    'debug' => env('APP_DEBUG', false),
    'url' => env('APP_URL', 'http://localhost'),
    'timezone' => env('APP_TIMEZONE', 'UTC'),
    'locale' => env('APP_LOCALE', 'en'),
    'fallback_locale' => 'en',
    'faker_locale' => 'en_US',
    'key' => env('APP_KEY'),
    'cipher' => 'AES-256-CBC',
];
\`\`\`
          `,
          fr: `
# Fichiers de configuration

Under Framework utilise un système de configuration simple mais puissant.

## Structure de Configuration

Tous les fichiers de configuration sont stockés dans le répertoire \`config/\` :

\`\`\`
config/
├── app.php              # Paramètres d'application
├── database.php         # Connexions de base de données
├── cache.php           # Configuration du cache
├── session.php         # Configuration de session
├── mail.php            # Paramètres de mail
├── auth.php            # Authentification
└── services.php        # Services tiers
\`\`\`

## Configuration d'Application

\`\`\`php
// config/app.php
return [
    'name' => env('APP_NAME', 'Under Framework'),
    'env' => env('APP_ENV', 'production'),
    'debug' => env('APP_DEBUG', false),
    'url' => env('APP_URL', 'http://localhost'),
    'timezone' => env('APP_TIMEZONE', 'UTC'),
    'locale' => env('APP_LOCALE', 'fr'),
    'fallback_locale' => 'en',
    'faker_locale' => 'fr_FR',
    'key' => env('APP_KEY'),
    'cipher' => 'AES-256-CBC',
];
\`\`\`
          `
        }
      },
      {
        id: "environnements",
        title: {
          en: "Environments",
          fr: "Environnements"
        },
        content: {
          en: `
# Environments

Under Framework supports multiple environments to help you manage different stages of your application lifecycle.

## Environment Types

- **Development**: Local development environment
- **Testing**: Automated testing environment
- **Staging**: Pre-production testing
- **Production**: Live application environment

## Environment Configuration

\`\`\`php
// config/environments.php
return [
    'development' => [
        'debug' => true,
        'log_level' => 'debug',
        'cache' => false,
    ],
    
    'production' => [
        'debug' => false,
        'log_level' => 'error',
        'cache' => true,
    ],
];
\`\`\`

## Setting Environment

\`\`\`bash
# Set environment via command line
APP_ENV=production php under serve

# Or in .env file
APP_ENV=production
\`\`\`
          `,
          fr: `
# Environnements

Under Framework supporte plusieurs environnements pour vous aider à gérer différentes étapes du cycle de vie de votre application.

## Types d'Environnement

- **Development**: Environnement de développement local
- **Testing**: Environnement de tests automatisés
- **Staging**: Tests de pré-production
- **Production**: Environnement d'application live

## Configuration d'Environnement

\`\`\`php
// config/environments.php
return [
    'development' => [
        'debug' => true,
        'log_level' => 'debug',
        'cache' => false,
    ],
    
    'production' => [
        'debug' => false,
        'log_level' => 'error',
        'cache' => true,
    ],
];
\`\`\`

## Définir l'Environnement

\`\`\`bash
# Définir l'environnement via la ligne de commande
APP_ENV=production php under serve

# Ou dans le fichier .env
APP_ENV=production
\`\`\`
          `
        }
      },
      {
        id: "variables-environnement",
        title: {
          en: "Environment Variables",
          fr: "Variables d'environnement"
        },
        content: {
          en: `
# Environment Variables

Environment variables provide a way to configure your application without hardcoding values.

## .env File Structure

\`\`\`env
# Application
APP_NAME="Under Framework"
APP_ENV=local
APP_KEY=base64:your-app-key-here
APP_DEBUG=true
APP_URL=http://localhost

# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=under_framework
DB_USERNAME=root
DB_PASSWORD=

# Cache
CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_CONNECTION=sync

# Mail
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
\`\`\`

## Accessing Environment Variables

\`\`\`php
// Using the env() helper
$appName = env('APP_NAME', 'Default App Name');
$debug = env('APP_DEBUG', false);

// Type casting
$maxRetries = env('MAX_RETRIES', 3, 'int');
$enableFeature = env('ENABLE_FEATURE', false, 'bool');
\`\`\`
          `,
          fr: `
# Variables d'environnement

Les variables d'environnement fournissent un moyen de configurer votre application sans coder en dur les valeurs.

## Structure du Fichier .env

\`\`\`env
# Application
APP_NAME="Under Framework"
APP_ENV=local
APP_KEY=base64:votre-cle-app-ici
APP_DEBUG=true
APP_URL=http://localhost

# Base de données
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=under_framework
DB_USERNAME=root
DB_PASSWORD=

# Cache
CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_CONNECTION=sync

# Mail
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
\`\`\`

## Accéder aux Variables d'Environnement

\`\`\`php
// Utiliser l'helper env()
$appName = env('APP_NAME', 'Nom App Par Défaut');
$debug = env('APP_DEBUG', false);

// Conversion de type
$maxRetries = env('MAX_RETRIES', 3, 'int');
$enableFeature = env('ENABLE_FEATURE', false, 'bool');
\`\`\`
          `
        }
      }
    ]
  },
  {
    id: "fundamentals",
    title: {
      en: "Fundamentals",
      fr: "Fondamentaux"
    },
    items: [
      {
        id: "routing",
        title: {
          en: "📡 Routing",
          fr: "📡 Routing"
        },
        content: {
          en: `
# 📡 Routing

Under Framework provides a powerful and flexible routing system for defining application endpoints.

## Basic Routes

Define routes in \`routes/web.php\`:

\`\`\`php
<?php

use Under\\Support\\Facades\\Route;
use App\\Controllers\\HomeController;

// Basic GET route
Route::get('/', function () {
    return view('welcome');
});

// POST route
Route::post('/users', function () {
    return 'Creating a new user';
});

// Multiple HTTP verbs
Route::match(['get', 'post'], '/contact', function () {
    return 'Contact form';
});

// Any HTTP verb
Route::any('/webhook', function () {
    return 'Webhook endpoint';
});
\`\`\`

## Route Parameters

\`\`\`php
// Required parameters
Route::get('/user/{id}', function ($id) {
    return "User ID: " . $id;
});

// Optional parameters
Route::get('/user/{id?}', function ($id = null) {
    return $id ? "User ID: " . $id : "All users";
});

// Multiple parameters
Route::get('/user/{id}/post/{postId}', function ($id, $postId) {
    return "User {$id}, Post {$postId}";
});
\`\`\`

## RESTful Resource Routes

\`\`\`php
// Generates all CRUD routes
Route::resource('posts', PostController::class);

/*
GET     /posts           index
GET     /posts/create    create
POST    /posts           store
GET     /posts/{id}      show
GET     /posts/{id}/edit edit
PUT     /posts/{id}      update
DELETE  /posts/{id}      destroy
*/
\`\`\`
          `,
          fr: `
# 📡 Routing

Under Framework fournit un système de routage puissant et flexible pour définir les endpoints d'application.

## Routes de Base

Définissez les routes dans \`routes/web.php\` :

\`\`\`php
<?php

use Under\\Support\\Facades\\Route;
use App\\Controllers\\HomeController;

// Route GET basique
Route::get('/', function () {
    return view('welcome');
});

// Route POST
Route::post('/users', function () {
    return 'Création d\'un nouvel utilisateur';
});

// Plusieurs verbes HTTP
Route::match(['get', 'post'], '/contact', function () {
    return 'Formulaire de contact';
});

// N'importe quel verbe HTTP
Route::any('/webhook', function () {
    return 'Point de terminaison webhook';
});
\`\`\`

## Paramètres de Route

\`\`\`php
// Paramètres requis
Route::get('/user/{id}', function ($id) {
    return "ID Utilisateur: " . $id;
});

// Paramètres optionnels
Route::get('/user/{id?}', function ($id = null) {
    return $id ? "ID Utilisateur: " . $id : "Tous les utilisateurs";
});

// Paramètres multiples
Route::get('/user/{id}/post/{postId}', function ($id, $postId) {
    return "Utilisateur {$id}, Article {$postId}";
});
\`\`\`

## Routes Ressources RESTful

\`\`\`php
// Génère toutes les routes CRUD
Route::resource('posts', PostController::class);

/*
GET     /posts           index
GET     /posts/create    create
POST    /posts           store
GET     /posts/{id}      show
GET     /posts/{id}/edit edit
PUT     /posts/{id}      update
DELETE  /posts/{id}      destroy
*/
\`\`\`
          `
        }
      },
      {
        id: "chronos-orm",
        title: {
          en: "🧠 Chronos ORM",
          fr: "🧠 Chronos ORM"
        },
        content: {
          en: `
# 🧠 Chronos ORM

Chronos is Under Framework's elegant and powerful Object-Relational Mapping (ORM) system.

## Defining Models

\`\`\`php
<?php

namespace App\\Models;

use Under\\Database\\Chronos\\Model;

class User extends Model
{
    protected $table = 'users';
    
    protected $fillable = [
        'name', 'email', 'password'
    ];
    
    protected $hidden = [
        'password', 'remember_token'
    ];
    
    protected $casts = [
        'email_verified_at' => 'datetime',
        'is_active' => 'boolean'
    ];
}
\`\`\`

## Basic Queries

\`\`\`php
// Retrieve all records
$users = User::all();

// Find by primary key
$user = User::find(1);
$user = User::findOrFail(1); // Throws exception if not found

// Where clauses
$activeUsers = User::where('is_active', true)->get();
$user = User::where('email', 'john@example.com')->first();

// Multiple conditions
$users = User::where('is_active', true)
             ->where('created_at', '>', '2023-01-01')
             ->orderBy('name')
             ->get();
\`\`\`

## Relationships

\`\`\`php
class User extends Model
{
    // One-to-many relationship
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
    
    // Many-to-many relationship
    public function roles()
    {
        return $this->belongsToMany(Role::class)
                    ->withTimestamps()
                    ->withPivot('assigned_by');
    }
    
    // One-to-one relationship
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
}
\`\`\`

## Transactions

\`\`\`php
use Under\\Support\\Facades\\DB;

DB::transaction(function () {
    $user = User::create([
        'name' => 'John Doe',
        'email' => 'john@example.com'
    ]);
    
    $user->profile()->create([
        'bio' => 'Software Developer'
    ]);
    
    // If any operation fails, entire transaction is rolled back
});
\`\`\`
          `,
          fr: `
# 🧠 Chronos ORM

Chronos est le système de mapping objet-relationnel (ORM) élégant et puissant d'Under Framework.

## Définir des Modèles

\`\`\`php
<?php

namespace App\\Models;

use Under\\Database\\Chronos\\Model;

class User extends Model
{
    protected $table = 'users';
    
    protected $fillable = [
        'name', 'email', 'password'
    ];
    
    protected $hidden = [
        'password', 'remember_token'
    ];
    
    protected $casts = [
        'email_verified_at' => 'datetime',
        'is_active' => 'boolean'
    ];
}
\`\`\`

## Requêtes de Base

\`\`\`php
// Récupérer tous les enregistrements
$users = User::all();

// Trouver par clé primaire
$user = User::find(1);
$user = User::findOrFail(1); // Lève une exception si non trouvé

// Clauses where
$activeUsers = User::where('is_active', true)->get();
$user = User::where('email', 'john@example.com')->first();

// Conditions multiples
$users = User::where('is_active', true)
             ->where('created_at', '>', '2023-01-01')
             ->orderBy('name')
             ->get();
\`\`\`

## Relations

\`\`\`php
class User extends Model
{
    // Relation un-à-plusieurs
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
    
    // Relation plusieurs-à-plusieurs
    public function roles()
    {
        return $this->belongsToMany(Role::class)
                    ->withTimestamps()
                    ->withPivot('assigned_by');
    }
    
    // Relation un-à-un
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
}
\`\`\`

## Transactions

\`\`\`php
use Under\\Support\\Facades\\DB;

DB::transaction(function () {
    $user = User::create([
        'name' => 'Jean Dupont',
        'email' => 'jean@exemple.com'
    ]);
    
    $user->profile()->create([
        'bio' => 'Développeur Logiciel'
    ]);
    
    // Si une opération échoue, toute la transaction est annulée
});
\`\`\`
          `
        }
      },
      {
        id: "maker",
        title: {
          en: "🧰 Maker",
          fr: "🧰 Maker"
        },
        content: {
          en: `
# 🧰 Maker

The Maker tool is Under Framework's powerful code generation system that helps you scaffold application components quickly.

## Available Commands

\`\`\`bash
# Generate a controller
php under make:controller UserController

# Generate a model
php under make:model User

# Generate a migration
php under make:migration create_users_table

# Generate a service
php under make:service UserService

# Generate a component
php under make:component UserProfile

# Generate a middleware
php under make:middleware AuthMiddleware
\`\`\`

## Controller Generation

\`\`\`bash
# Basic controller
php under make:controller PostController

# Resource controller with CRUD methods
php under make:controller PostController --resource

# API controller
php under make:controller PostController --api
\`\`\`

Generated controller example:

\`\`\`php
<?php

namespace App\\Controllers;

use Under\\Http\\Controller;
use Under\\Http\\Request;
use Under\\Http\\Response;

class PostController extends Controller
{
    public function index(): Response
    {
        return response()->view('posts.index');
    }
    
    public function create(): Response
    {
        return response()->view('posts.create');
    }
    
    public function store(Request $request): Response
    {
        // Store logic here
        return redirect()->route('posts.index');
    }
}
\`\`\`

## Model Generation

\`\`\`bash
# Basic model
php under make:model Post

# Model with migration
php under make:model Post --migration

# Model with factory and seeder
php under make:model Post --factory --seeder
\`\`\`
          `,
          fr: `
# 🧰 Maker

L'outil Maker est le système puissant de génération de code d'Under Framework qui vous aide à échafauder rapidement les composants d'application.

## Commandes Disponibles

\`\`\`bash
# Générer un contrôleur
php under make:controller UserController

# Générer un modèle
php under make:model User

# Générer une migration
php under make:migration create_users_table

# Générer un service
php under make:service UserService

# Générer un composant
php under make:component UserProfile

# Générer un middleware
php under make:middleware AuthMiddleware
\`\`\`

## Génération de Contrôleur

\`\`\`bash
# Contrôleur basique
php under make:controller PostController

# Contrôleur ressource avec méthodes CRUD
php under make:controller PostController --resource

# Contrôleur API
php under make:controller PostController --api
\`\`\`

Exemple de contrôleur généré :

\`\`\`php
<?php

namespace App\\Controllers;

use Under\\Http\\Controller;
use Under\\Http\\Request;
use Under\\Http\\Response;

class PostController extends Controller
{
    public function index(): Response
    {
        return response()->view('posts.index');
    }
    
    public function create(): Response
    {
        return response()->view('posts.create');
    }
    
    public function store(Request $request): Response
    {
        // Logique de stockage ici
        return redirect()->route('posts.index');
    }
}
\`\`\`

## Génération de Modèle

\`\`\`bash
# Modèle basique
php under make:model Post

# Modèle avec migration
php under make:model Post --migration

# Modèle avec factory et seeder
php under make:model Post --factory --seeder
\`\`\`
          `
        }
      },
      {
        id: "component-builder",
        title: {
          en: "🧱 Component Builder",
          fr: "🧱 Component Builder"
        },
        content: {
          en: `
# 🧱 Component Builder

The Component Builder allows you to create modular, reusable UI components that can be used throughout your application.

## Creating Components

\`\`\`bash
php under make:component UserCard
\`\`\`

This generates a component class:

\`\`\`php
<?php

namespace App\\Components;

use Under\\View\\Component;

class UserCard extends Component
{
    public function __construct(
        public User $user,
        public bool $showActions = true
    ) {}
    
    public function render()
    {
        return view('components.user-card');
    }
}
\`\`\`

## Component Templates

Create a template file at \`resources/views/components/user-card.blade.php\`:

\`\`\`html
<div class="user-card">
    <div class="user-avatar">
        <img src="{{ $user->avatar }}" alt="{{ $user->name }}">
    </div>
    <div class="user-info">
        <h3>{{ $user->name }}</h3>
        <p>{{ $user->email }}</p>
        @if($showActions)
            <div class="actions">
                <button class="btn-edit">Edit</button>
                <button class="btn-delete">Delete</button>
            </div>
        @endif
    </div>
</div>
\`\`\`

## Using Components

\`\`\`php
// In a controller
return view('users.index', [
    'users' => User::all()
]);
\`\`\`

\`\`\`html
<!-- In a Blade template -->
@foreach($users as $user)
    <x-user-card :user="$user" :show-actions="true" />
@endforeach
\`\`\`

## Component with Slots

\`\`\`php
<?php

namespace App\\Components;

use Under\\View\\Component;

class Card extends Component
{
    public function __construct(
        public string $title = '',
        public string $variant = 'default'
    ) {}
    
    public function render()
    {
        return view('components.card');
    }
}
\`\`\`

\`\`\`html
<!-- components/card.blade.php -->
<div class="card card--{{ $variant }}">
    @if($title)
        <div class="card-header">
            <h4>{{ $title }}</h4>
        </div>
    @endif
    <div class="card-body">
        {{ $slot }}
    </div>
    @isset($footer)
        <div class="card-footer">
            {{ $footer }}
        </div>
    @endisset
</div>
\`\`\`

Using the card component:

\`\`\`html
<x-card title="User Information" variant="primary">
    <p>This is the card content.</p>
    
    <x-slot name="footer">
        <button class="btn">Save</button>
    </x-slot>
</x-card>
\`\`\`
          `,
          fr: `
# 🧱 Component Builder

Le Component Builder vous permet de créer des composants UI modulaires et réutilisables qui peuvent être utilisés dans toute votre application.

## Créer des Composants

\`\`\`bash
php under make:component UserCard
\`\`\`

Ceci génère une classe de composant :

\`\`\`php
<?php

namespace App\\Components;

use Under\\View\\Component;

class UserCard extends Component
{
    public function __construct(
        public User $user,
        public bool $showActions = true
    ) {}
    
    public function render()
    {
        return view('components.user-card');
    }
}
\`\`\`

## Templates de Composant

Créez un fichier template à \`resources/views/components/user-card.blade.php\` :

\`\`\`html
<div class="user-card">
    <div class="user-avatar">
        <img src="{{ $user->avatar }}" alt="{{ $user->name }}">
    </div>
    <div class="user-info">
        <h3>{{ $user->name }}</h3>
        <p>{{ $user->email }}</p>
        @if($showActions)
            <div class="actions">
                <button class="btn-edit">Modifier</button>
                <button class="btn-delete">Supprimer</button>
            </div>
        @endif
    </div>
</div>
\`\`\`

## Utiliser les Composants

\`\`\`php
// Dans un contrôleur
return view('users.index', [
    'users' => User::all()
]);
\`\`\`

\`\`\`html
<!-- Dans un template Blade -->
@foreach($users as $user)
    <x-user-card :user="$user" :show-actions="true" />
@endforeach
\`\`\`

## Composant avec Slots

\`\`\`php
<?php

namespace App\\Components;

use Under\\View\\Component;

class Card extends Component
{
    public function __construct(
        public string $title = '',
        public string $variant = 'default'
    ) {}
    
    public function render()
    {
        return view('components.card');
    }
}
\`\`\`

\`\`\`html
<!-- components/card.blade.php -->
<div class="card card--{{ $variant }}">
    @if($title)
        <div class="card-header">
            <h4>{{ $title }}</h4>
        </div>
    @endif
    <div class="card-body">
        {{ $slot }}
    </div>
    @isset($footer)
        <div class="card-footer">
            {{ $footer }}
        </div>
    @endisset
</div>
\`\`\`

Utiliser le composant card :

\`\`\`html
<x-card title="Informations Utilisateur" variant="primary">
    <p>Ceci est le contenu de la carte.</p>
    
    <x-slot name="footer">
        <button class="btn">Enregistrer</button>
    </x-slot>
</x-card>
\`\`\`
          `
        }
      },
      {
        id: "namespace-logic",
        title: {
          en: "📂 Namespace Logic",
          fr: "📂 Namespace logic"
        },
        content: {
          en: `
# 📂 Namespace Logic

Under Framework uses intelligent namespace management for automatic loading and organization of your application components.

## Auto-loading Convention

Under Framework follows PSR-4 autoloading standards:

\`\`\`php
// Composer autoload configuration
{
    "autoload": {
        "psr-4": {
            "App\\\\": "app/",
            "Database\\\\Factories\\\\": "database/factories/",
            "Database\\\\Seeders\\\\": "database/seeders/"
        }
    }
}
\`\`\`

## Namespace Structure

\`\`\`php
<?php

// Controllers
namespace App\\Controllers;

// Models
namespace App\\Models;

// Services
namespace App\\Services;

// Middleware
namespace App\\Middleware;

// Components
namespace App\\Components;
\`\`\`

## Service Discovery

Under Framework automatically discovers and registers services:

\`\`\`php
<?php

namespace App\\Services;

use Under\\Core\\Service;

class UserService extends Service
{
    // Automatically discovered and registered
    public function createUser(array $data): User
    {
        return User::create($data);
    }
}
\`\`\`

## Custom Namespaces

\`\`\`php
// config/namespaces.php
return [
    'custom_namespaces' => [
        'MyPackage\\\\' => 'packages/my-package/src/',
        'External\\\\' => 'external/libraries/',
    ]
];
\`\`\`

## Dynamic Loading

\`\`\`php
<?php

use Under\\Support\\Facades\\App;

// Load services dynamically
$userService = App::make('App\\Services\\UserService');

// Or use dependency injection
class UserController extends Controller
{
    public function __construct(
        private UserService $userService
    ) {}
}
\`\`\`
          `,
          fr: `
# 📂 Namespace logic

Under Framework utilise une gestion intelligente des namespaces pour le chargement automatique et l'organisation de vos composants d'application.

## Convention de Chargement Automatique

Under Framework suit les standards PSR-4 de chargement automatique :

\`\`\`php
// Configuration autoload Composer
{
    "autoload": {
        "psr-4": {
            "App\\\\": "app/",
            "Database\\\\Factories\\\\": "database/factories/",
            "Database\\\\Seeders\\\\": "database/seeders/"
        }
    }
}
\`\`\`

## Structure de Namespace

\`\`\`php
<?php

// Contrôleurs
namespace App\\Controllers;

// Modèles
namespace App\\Models;

// Services
namespace App\\Services;

// Middleware
namespace App\\Middleware;

// Composants
namespace App\\Components;
\`\`\`

## Découverte de Services

Under Framework découvre et enregistre automatiquement les services :

\`\`\`php
<?php

namespace App\\Services;

use Under\\Core\\Service;

class UserService extends Service
{
    // Automatiquement découvert et enregistré
    public function createUser(array $data): User
    {
        return User::create($data);
    }
}
\`\`\`

## Namespaces Personnalisés

\`\`\`php
// config/namespaces.php
return [
    'custom_namespaces' => [
        'MonPackage\\\\' => 'packages/mon-package/src/',
        'Externe\\\\' => 'external/libraries/',
    ]
];
\`\`\`

## Chargement Dynamique

\`\`\`php
<?php

use Under\\Support\\Facades\\App;

// Charger des services dynamiquement
$userService = App::make('App\\Services\\UserService');

// Ou utiliser l'injection de dépendances
class UserController extends Controller
{
    public function __construct(
        private UserService $userService
    ) {}
}
\`\`\`
          `
        }
      }
    ]
  },
  {
    id: "architecture",
    title: {
      en: "Architecture",
      fr: "Architecture"
    },
    items: [
      {
        id: "types-architectures",
        title: {
          en: "Architecture Types",
          fr: "Types d'architectures supportées"
        },
        content: {
          en: `
# Architecture Types

Under Framework supports multiple architectural patterns to suit different application needs.

## MVC (Model-View-Controller)

The traditional MVC pattern for web applications:

\`\`\`php
// Model
class User extends Model
{
    protected $fillable = ['name', 'email'];
}

// Controller
class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return view('users.index', compact('users'));
    }
}

// View (Blade template)
// resources/views/users/index.blade.php
@foreach($users as $user)
    <div>{{ $user->name }}</div>
@endforeach
\`\`\`

## SOA (Service-Oriented Architecture)

Organize business logic into services:

\`\`\`php
// Service Layer
class UserService
{
    public function createUser(array $data): User
    {
        return DB::transaction(function () use ($data) {
            $user = User::create($data);
            $this->sendWelcomeEmail($user);
            return $user;
        });
    }
    
    private function sendWelcomeEmail(User $user): void
    {
        // Email logic
    }
}

// Controller using service
class UserController extends Controller
{
    public function __construct(
        private UserService $userService
    ) {}
    
    public function store(Request $request)
    {
        $user = $this->userService->createUser(
            $request->validated()
        );
        
        return response()->json($user);
    }
}
\`\`\`

## DDD (Domain-Driven Design)

Structure around business domains:

\`\`\`
app/
├── Domains/
│   ├── User/
│   │   ├── Models/
│   │   ├── Services/
│   │   ├── Repositories/
│   │   └── Events/
│   └── Order/
│       ├── Models/
│       ├── Services/
│       └── ValueObjects/
\`\`\`

\`\`\`php
// Domain Service
namespace App\\Domains\\User\\Services;

class UserRegistrationService
{
    public function register(UserRegistrationData $data): User
    {
        // Domain-specific business logic
    }
}
\`\`\`

## Hexagonal Architecture

Clean architecture with ports and adapters:

\`\`\`php
// Port (Interface)
interface UserRepositoryInterface
{
    public function save(User $user): void;
    public function findById(int $id): ?User;
}

// Adapter (Implementation)
class EloquentUserRepository implements UserRepositoryInterface
{
    public function save(User $user): void
    {
        $user->save();
    }
    
    public function findById(int $id): ?User
    {
        return User::find($id);
    }
}

// Application Service
class UserApplicationService
{
    public function __construct(
        private UserRepositoryInterface $userRepository
    ) {}
}
\`\`\`
          `,
          fr: `
# Types d'architectures supportées

Under Framework supporte plusieurs patterns architecturaux pour répondre aux différents besoins d'application.

## MVC (Modèle-Vue-Contrôleur)

Le pattern MVC traditionnel pour les applications web :

\`\`\`php
// Modèle
class User extends Model
{
    protected $fillable = ['name', 'email'];
}

// Contrôleur
class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return view('users.index', compact('users'));
    }
}

// Vue (template Blade)
// resources/views/users/index.blade.php
@foreach($users as $user)
    <div>{{ $user->name }}</div>
@endforeach
\`\`\`

## SOA (Architecture Orientée Services)

Organiser la logique métier en services :

\`\`\`php
// Couche Service
class UserService
{
    public function createUser(array $data): User
    {
        return DB::transaction(function () use ($data) {
            $user = User::create($data);
            $this->sendWelcomeEmail($user);
            return $user;
        });
    }
    
    private function sendWelcomeEmail(User $user): void
    {
        // Logique email
    }
}

// Contrôleur utilisant le service
class UserController extends Controller
{
    public function __construct(
        private UserService $userService
    ) {}
    
    public function store(Request $request)
    {
        $user = $this->userService->createUser(
            $request->validated()
        );
        
        return response()->json($user);
    }
}
\`\`\`

## DDD (Conception Pilotée par le Domaine)

Structure autour des domaines métier :

\`\`\`
app/
├── Domains/
│   ├── User/
│   │   ├── Models/
│   │   ├── Services/
│   │   ├── Repositories/
│   │   └── Events/
│   └── Order/
│       ├── Models/
│       ├── Services/
│       └── ValueObjects/
\`\`\`

\`\`\`php
// Service de Domaine
namespace App\\Domains\\User\\Services;

class UserRegistrationService
{
    public function register(UserRegistrationData $data): User
    {
        // Logique métier spécifique au domaine
    }
}
\`\`\`

## Architecture Hexagonale

Architecture propre avec ports et adaptateurs :

\`\`\`php
// Port (Interface)
interface UserRepositoryInterface
{
    public function save(User $user): void;
    public function findById(int $id): ?User;
}

// Adaptateur (Implémentation)
class EloquentUserRepository implements UserRepositoryInterface
{
    public function save(User $user): void
    {
        $user->save();
    }
    
    public function findById(int $id): ?User
    {
        return User::find($id);
    }
}

// Service d'Application
class UserApplicationService
{
    public function __construct(
        private UserRepositoryInterface $userRepository
    ) {}
}
\`\`\`
          `
        }
      },
      {
        id: "composants-architecture",
        title: {
          en: "Architecture Components",
          fr: "Composants (façade, service, agrégat)"
        },
        content: {
          en: `
# Architecture Components

Under Framework provides various architectural components to build robust and maintainable applications.

## Facades

Facades provide a static interface to services in the container:

\`\`\`php
<?php

namespace Under\\Support\\Facades;

use Under\\Support\\Facade;

class Cache extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'cache';
    }
}
\`\`\`

Using facades:

\`\`\`php
// Instead of this
$cache = app('cache');
$cache->put('key', 'value', 3600);

// You can use this
Cache::put('key', 'value', 3600);
$value = Cache::get('key');
\`\`\`

## Services

Services encapsulate business logic:

\`\`\`php
<?php

namespace App\\Services;

class OrderService
{
    public function __construct(
        private PaymentService $paymentService,
        private EmailService $emailService
    ) {}
    
    public function processOrder(Order $order): bool
    {
        $payment = $this->paymentService->charge(
            $order->total,
            $order->payment_method
        );
        
        if ($payment->successful()) {
            $order->markAsPaid();
            $this->emailService->sendOrderConfirmation($order);
            return true;
        }
        
        return false;
    }
}
\`\`\`

## Aggregates

Aggregates group related entities and enforce business rules:

\`\`\`php
<?php

namespace App\\Aggregates;

class OrderAggregate
{
    private Order $order;
    private Collection $items;
    
    public function __construct(Order $order)
    {
        $this->order = $order;
        $this->items = $order->items;
    }
    
    public function addItem(Product $product, int $quantity): void
    {
        if ($quantity <= 0) {
            throw new InvalidQuantityException();
        }
        
        if (!$product->isAvailable()) {
            throw new ProductUnavailableException();
        }
        
        $existingItem = $this->items->firstWhere('product_id', $product->id);
        
        if ($existingItem) {
            $existingItem->quantity += $quantity;
        } else {
            $this->items->push(new OrderItem([
                'product_id' => $product->id,
                'quantity' => $quantity,
                'price' => $product->price
            ]));
        }
        
        $this->recalculateTotal();
    }
    
    public function removeItem(int $productId): void
    {
        $this->items = $this->items->reject(
            fn($item) => $item->product_id === $productId
        );
        
        $this->recalculateTotal();
    }
    
    private function recalculateTotal(): void
    {
        $this->order->total = $this->items->sum(
            fn($item) => $item->quantity * $item->price
        );
    }
    
    public function save(): void
    {
        DB::transaction(function () {
            $this->order->save();
            
            // Delete removed items
            $this->order->items()->delete();
            
            // Save current items
            $this->order->items()->saveMany($this->items);
        });
    }
}
\`\`\`

## Repository Pattern

Repositories abstract data access:

\`\`\`php
<?php

namespace App\\Repositories;

interface UserRepositoryInterface
{
    public function findById(int $id): ?User;
    public function findByEmail(string $email): ?User;
    public function create(array $data): User;
    public function update(User $user, array $data): User;
}

class EloquentUserRepository implements UserRepositoryInterface
{
    public function findById(int $id): ?User
    {
        return User::find($id);
    }
    
    public function findByEmail(string $email): ?User
    {
        return User::where('email', $email)->first();
    }
    
    public function create(array $data): User
    {
        return User::create($data);
    }
    
    public function update(User $user, array $data): User
    {
        $user->update($data);
        return $user;
    }
}
\`\`\`
          `,
          fr: `
# Composants (façade, service, agrégat)

Under Framework fournit divers composants architecturaux pour construire des applications robustes et maintenables.

## Façades

Les façades fournissent une interface statique aux services dans le conteneur :

\`\`\`php
<?php

namespace Under\\Support\\Facades;

use Under\\Support\\Facade;

class Cache extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'cache';
    }
}
\`\`\`

Utiliser les façades :

\`\`\`php
// Au lieu de ceci
$cache = app('cache');
$cache->put('key', 'value', 3600);

// Vous pouvez utiliser ceci
Cache::put('key', 'value', 3600);
$value = Cache::get('key');
\`\`\`

## Services

Les services encapsulent la logique métier :

\`\`\`php
<?php

namespace App\\Services;

class OrderService
{
    public function __construct(
        private PaymentService $paymentService,
        private EmailService $emailService
    ) {}
    
    public function processOrder(Order $order): bool
    {
        $payment = $this->paymentService->charge(
            $order->total,
            $order->payment_method
        );
        
        if ($payment->successful()) {
            $order->markAsPaid();
            $this->emailService->sendOrderConfirmation($order);
            return true;
        }
        
        return false;
    }
}
\`\`\`

## Agrégats

Les agrégats regroupent des entités liées et appliquent les règles métier :

\`\`\`php
<?php

namespace App\\Aggregates;

class OrderAggregate
{
    private Order $order;
    private Collection $items;
    
    public function __construct(Order $order)
    {
        $this->order = $order;
        $this->items = $order->items;
    }
    
    public function addItem(Product $product, int $quantity): void
    {
        if ($quantity <= 0) {
            throw new InvalidQuantityException();
        }
        
        if (!$product->isAvailable()) {
            throw new ProductUnavailableException();
        }
        
        $existingItem = $this->items->firstWhere('product_id', $product->id);
        
        if ($existingItem) {
            $existingItem->quantity += $quantity;
        } else {
            $this->items->push(new OrderItem([
                'product_id' => $product->id,
                'quantity' => $quantity,
                'price' => $product->price
            ]));
        }
        
        $this->recalculateTotal();
    }
    
    public function removeItem(int $productId): void
    {
        $this->items = $this->items->reject(
            fn($item) => $item->product_id === $productId
        );
        
        $this->recalculateTotal();
    }
    
    private function recalculateTotal(): void
    {
        $this->order->total = $this->items->sum(
            fn($item) => $item->quantity * $item->price
        );
    }
    
    public function save(): void
    {
        DB::transaction(function () {
            $this->order->save();
            
            // Supprimer les éléments retirés
            $this->order->items()->delete();
            
            // Sauvegarder les éléments actuels
            $this->order->items()->saveMany($this->items);
        });
    }
}
\`\`\`

## Pattern Repository

Les repositories abstraient l'accès aux données :

\`\`\`php
<?php

namespace App\\Repositories;

interface UserRepositoryInterface
{
    public function findById(int $id): ?User;
    public function findByEmail(string $email): ?User;
    public function create(array $data): User;
    public function update(User $user, array $data): User;
}

class EloquentUserRepository implements UserRepositoryInterface
{
    public function findById(int $id): ?User
    {
        return User::find($id);
    }
    
    public function findByEmail(string $email): ?User
    {
        return User::where('email', $email)->first();
    }
    
    public function create(array $data): User
    {
        return User::create($data);
    }
    
    public function update(User $user, array $data): User
    {
        $user->update($data);
        return $user;
    }
}
\`\`\`
          `
        }
      },
      {
        id: "metriques",
        title: {
          en: "Metrics (CH, CHO, CD)",
          fr: "Métriques (CH, CHO, CD)"
        },
        content: {
          en: `
# Metrics (CH, CHO, CD)

Under Framework provides built-in metrics to monitor and analyze your application's performance and complexity.

## CH (Cyclomatic Complexity)

Measures the complexity of your code by counting decision points:

\`\`\`php
<?php

class ComplexityAnalyzer
{
    /**
     * CH: 4 (if, foreach, if, if)
     */
    public function processUsers(array $users): array
    {
        $result = [];
        
        if (empty($users)) { // +1
            return $result;
        }
        
        foreach ($users as $user) { // +1
            if ($user['active']) { // +1
                if ($user['verified']) { // +1
                    $result[] = $this->processActiveUser($user);
                }
            }
        }
        
        return $result;
    }
}
\`\`\`

Monitor complexity in real-time:

\`\`\`bash
php under analyze:complexity app/Services/
\`\`\`

## CHO (Coupling Between Objects)

Measures dependencies between classes:

\`\`\`php
<?php

namespace App\\Services;

// High coupling example (CHO: 5)
class OrderService
{
    public function __construct(
        private UserService $userService,      // +1
        private PaymentService $paymentService, // +1
        private EmailService $emailService,     // +1
        private LogService $logService,         // +1
        private CacheService $cacheService      // +1
    ) {}
}

// Lower coupling with event-driven approach
class OrderService
{
    public function __construct(
        private EventDispatcher $eventDispatcher // CHO: 1
    ) {}
    
    public function processOrder(Order $order): void
    {
        // Process order logic
        
        // Dispatch events instead of direct coupling
        $this->eventDispatcher->dispatch(
            new OrderProcessed($order)
        );
    }
}
\`\`\`

## CD (Code Duplication)

Identifies duplicated code blocks:

\`\`\`php
<?php

// Duplicated code (CD: High)
class UserController extends Controller
{
    public function create()
    {
        $roles = Role::where('active', true)->get(); // Duplicated
        $permissions = Permission::all();            // Duplicated
        
        return view('users.create', compact('roles', 'permissions'));
    }
    
    public function edit(User $user)
    {
        $roles = Role::where('active', true)->get(); // Duplicated
        $permissions = Permission::all();            // Duplicated
        
        return view('users.edit', compact('user', 'roles', 'permissions'));
    }
}

// Refactored (CD: Low)
class UserController extends Controller
{
    private function getUserFormData(): array
    {
        return [
            'roles' => Role::where('active', true)->get(),
            'permissions' => Permission::all()
        ];
    }
    
    public function create()
    {
        return view('users.create', $this->getUserFormData());
    }
    
    public function edit(User $user)
    {
        return view('users.edit', array_merge(
            compact('user'),
            $this->getUserFormData()
        ));
    }
}
\`\`\`

## Metrics Commands

\`\`\`bash
# Analyze all metrics
php under analyze:metrics

# Specific metric analysis
php under analyze:complexity --threshold=10
php under analyze:coupling --max=5
php under analyze:duplication --min-lines=5

# Generate metrics report
php under analyze:report --format=html
\`\`\`

## Metrics Configuration

\`\`\`php
// config/metrics.php
return [
    'complexity' => [
        'max_allowed' => 10,
        'warning_threshold' => 7,
    ],
    
    'coupling' => [
        'max_dependencies' => 5,
        'warning_threshold' => 3,
    ],
    
    'duplication' => [
        'min_lines' => 6,
        'max_percentage' => 10,
    ]
];
\`\`\`
          `,
          fr: `
# Métriques (CH, CHO, CD)

Under Framework fournit des métriques intégrées pour surveiller et analyser les performances et la complexité de votre application.

## CH (Complexité Cyclomatique)

Mesure la complexité de votre code en comptant les points de décision :

\`\`\`php
<?php

class ComplexityAnalyzer
{
    /**
     * CH: 4 (if, foreach, if, if)
     */
    public function processUsers(array $users): array
    {
        $result = [];
        
        if (empty($users)) { // +1
            return $result;
        }
        
        foreach ($users as $user) { // +1
            if ($user['active']) { // +1
                if ($user['verified']) { // +1
                    $result[] = $this->processActiveUser($user);
                }
            }
        }
        
        return $result;
    }
}
\`\`\`

Surveiller la complexité en temps réel :

\`\`\`bash
php under analyze:complexity app/Services/
\`\`\`

## CHO (Couplage Entre Objets)

Mesure les dépendances entre classes :

\`\`\`php
<?php

namespace App\\Services;

// Exemple de couplage élevé (CHO: 5)
class OrderService
{
    public function __construct(
        private UserService $userService,      // +1
        private PaymentService $paymentService, // +1
        private EmailService $emailService,     // +1
        private LogService $logService,         // +1
        private CacheService $cacheService      // +1
    ) {}
}

// Couplage plus faible avec approche événementielle
class OrderService
{
    public function __construct(
        private EventDispatcher $eventDispatcher // CHO: 1
    ) {}
    
    public function processOrder(Order $order): void
    {
        // Logique de traitement de commande
        
        // Dispatcher des événements au lieu de couplage direct
        $this->eventDispatcher->dispatch(
            new OrderProcessed($order)
        );
    }
}
\`\`\`

## CD (Duplication de Code)

Identifie les blocs de code dupliqués :

\`\`\`php
<?php

// Code dupliqué (CD: Élevé)
class UserController extends Controller
{
    public function create()
    {
        $roles = Role::where('active', true)->get(); // Dupliqué
        $permissions = Permission::all();            // Dupliqué
        
        return view('users.create', compact('roles', 'permissions'));
    }
    
    public function edit(User $user)
    {
        $roles = Role::where('active', true)->get(); // Dupliqué
        $permissions = Permission::all();            // Dupliqué
        
        return view('users.edit', compact('user', 'roles', 'permissions'));
    }
}

// Refactorisé (CD: Faible)
class UserController extends Controller
{
    private function getUserFormData(): array
    {
        return [
            'roles' => Role::where('active', true)->get(),
            'permissions' => Permission::all()
        ];
    }
    
    public function create()
    {
        return view('users.create', $this->getUserFormData());
    }
    
    public function edit(User $user)
    {
        return view('users.edit', array_merge(
            compact('user'),
            $this->getUserFormData()
        ));
    }
}
\`\`\`

## Commandes de Métriques

\`\`\`bash
# Analyser toutes les métriques
php under analyze:metrics

# Analyse de métrique spécifique
php under analyze:complexity --threshold=10
php under analyze:coupling --max=5
php under analyze:duplication --min-lines=5

# Générer un rapport de métriques
php under analyze:report --format=html
\`\`\`

## Configuration des Métriques

\`\`\`php
// config/metrics.php
return [
    'complexity' => [
        'max_allowed' => 10,
        'warning_threshold' => 7,
    ],
    
    'coupling' => [
        'max_dependencies' => 5,
        'warning_threshold' => 3,
    ],
    
    'duplication' => [
        'min_lines' => 6,
        'max_percentage' => 10,
    ]
];
\`\`\`
          `
        }
      },
      {
        id: "cycle-vie-composant",
        title: {
          en: "Component Lifecycle",
          fr: "Cycle de vie d'un composant"
        },
        content: {
          en: `
# Component Lifecycle

Under Framework components follow a well-defined lifecycle that allows you to hook into different stages of their existence.

## Component Lifecycle Stages

\`\`\`php
<?php

namespace App\\Components;

use Under\\Component\\BaseComponent;

class UserDashboard extends BaseComponent
{
    // 1. Construction
    public function __construct(array $data = [])
    {
        parent::__construct($data);
        // Initialize component state
    }
    
    // 2. Before Mount
    public function beforeMount(): void
    {
        // Prepare data before component is mounted
        $this->loadUserData();
        $this->validatePermissions();
    }
    
    // 3. Mounted
    public function mounted(): void
    {
        // Component is ready and mounted
        $this->logComponentAccess();
        $this->initializeWebSockets();
    }
    
    // 4. Before Update
    public function beforeUpdate(array $newData): void
    {
        // Validate changes before updating
        $this->validateUpdateData($newData);
    }
    
    // 5. Updated
    public function updated(array $oldData, array $newData): void
    {
        // Handle data changes
        $this->handleDataChanges($oldData, $newData);
        $this->notifySubscribers();
    }
    
    // 6. Before Unmount
    public function beforeUnmount(): void
    {
        // Cleanup before component is destroyed
        $this->closeConnections();
        $this->saveState();
    }
    
    // 7. Unmounted
    public function unmounted(): void
    {
        // Final cleanup
        $this->logComponentDestruction();
    }
}
\`\`\`

## Lifecycle Hooks Usage

\`\`\`php
<?php

namespace App\\Components;

class DataTable extends BaseComponent
{
    private array $data = [];
    private string $sortColumn = 'id';
    private string $sortDirection = 'asc';
    
    public function beforeMount(): void
    {
        // Load initial data
        $this->data = $this->fetchData();
    }
    
    public function mounted(): void
    {
        // Set up event listeners
        $this->addEventListener('sort', [$this, 'handleSort']);
        $this->addEventListener('filter', [$this, 'handleFilter']);
    }
    
    public function beforeUpdate(array $newData): void
    {
        // Validate sort parameters
        if (isset($newData['sortColumn'])) {
            $this->validateSortColumn($newData['sortColumn']);
        }
    }
    
    public function updated(array $oldData, array $newData): void
    {
        // Re-fetch data if sort changed
        if ($oldData['sortColumn'] !== $newData['sortColumn'] ||
            $oldData['sortDirection'] !== $newData['sortDirection']) {
            $this->data = $this->fetchData();
        }
    }
    
    public function beforeUnmount(): void
    {
        // Remove event listeners
        $this->removeAllEventListeners();
    }
    
    private function fetchData(): array
    {
        return collect($this->rawData)
            ->sortBy($this->sortColumn, SORT_REGULAR, $this->sortDirection === 'desc')
            ->values()
            ->toArray();
    }
}
\`\`\`

## Async Lifecycle

\`\`\`php
<?php

namespace App\\Components;

class AsyncDataLoader extends BaseComponent
{
    private bool $loading = true;
    private array $data = [];
    private ?string $error = null;
    
    public async function beforeMount(): Promise
    {
        try {
            $this->data = await $this->loadDataAsync();
            $this->loading = false;
        } catch (Exception $e) {
            $this->error = $e->getMessage();
            $this->loading = false;
        }
    }
    
    public async function loadDataAsync(): Promise
    {
        // Simulate async data loading
        return await Http::async()->get('/api/data');
    }
    
    public function render(): string
    {
        if ($this->loading) {
            return view('components.loading');
        }
        
        if ($this->error) {
            return view('components.error', ['error' => $this->error]);
        }
        
        return view('components.data-loader', ['data' => $this->data]);
    }
}
\`\`\`

## Component State Management

\`\`\`php
<?php

namespace App\\Components;

class StatefulCounter extends BaseComponent
{
    private int $count = 0;
    private array $history = [];
    
    public function mounted(): void
    {
        // Load persisted state
        $this->loadPersistedState();
    }
    
    public function increment(): void
    {
        $oldCount = $this->count;
        $this->count++;
        $this->history[] = ['action' => 'increment', 'from' => $oldCount, 'to' => $this->count];
        
        // Trigger update lifecycle
        $this->triggerUpdate(['count' => $oldCount], ['count' => $this->count]);
    }
    
    public function decrement(): void
    {
        $oldCount = $this->count;
        $this->count--;
        $this->history[] = ['action' => 'decrement', 'from' => $oldCount, 'to' => $this->count];
        
        $this->triggerUpdate(['count' => $oldCount], ['count' => $this->count]);
    }
    
    public function beforeUnmount(): void
    {
        // Persist state before destruction
        $this->persistState();
    }
    
    private function persistState(): void
    {
        Cache::put("counter_state_{$this->id}", [
            'count' => $this->count,
            'history' => $this->history
        ], 3600);
    }
    
    private function loadPersistedState(): void
    {
        $state = Cache::get("counter_state_{$this->id}");
        if ($state) {
            $this->count = $state['count'];
            $this->history = $state['history'];
        }
    }
}
\`\`\`
          `,
          fr: `
# Cycle de vie d'un composant

Les composants d'Under Framework suivent un cycle de vie bien défini qui vous permet de vous connecter à différentes étapes de leur existence.

## Étapes du Cycle de Vie des Composants

\`\`\`php
<?php

namespace App\\Components;

use Under\\Component\\BaseComponent;

class UserDashboard extends BaseComponent
{
    // 1. Construction
    public function __construct(array $data = [])
    {
        parent::__construct($data);
        // Initialiser l'état du composant
    }
    
    // 2. Avant le Montage
    public function beforeMount(): void
    {
        // Préparer les données avant que le composant soit monté
        $this->loadUserData();
        $this->validatePermissions();
    }
    
    // 3. Monté
    public function mounted(): void
    {
        // Le composant est prêt et monté
        $this->logComponentAccess();
        $this->initializeWebSockets();
    }
    
    // 4. Avant la Mise à Jour
    public function beforeUpdate(array $newData): void
    {
        // Valider les changements avant la mise à jour
        $this->validateUpdateData($newData);
    }
    
    // 5. Mis à Jour
    public function updated(array $oldData, array $newData): void
    {
        // Gérer les changements de données
        $this->handleDataChanges($oldData, $newData);
        $this->notifySubscribers();
    }
    
    // 6. Avant le Démontage
    public function beforeUnmount(): void
    {
        // Nettoyage avant que le composant soit détruit
        $this->closeConnections();
        $this->saveState();
    }
    
    // 7. Démonté
    public function unmounted(): void
    {
        // Nettoyage final
        $this->logComponentDestruction();
    }
}
\`\`\`

## Utilisation des Hooks de Cycle de Vie

\`\`\`php
<?php

namespace App\\Components;

class DataTable extends BaseComponent
{
    private array $data = [];
    private string $sortColumn = 'id';
    private string $sortDirection = 'asc';
    
    public function beforeMount(): void
    {
        // Charger les données initiales
        $this->data = $this->fetchData();
    }
    
    public function mounted(): void
    {
        // Configurer les écouteurs d'événements
        $this->addEventListener('sort', [$this, 'handleSort']);
        $this->addEventListener('filter', [$this, 'handleFilter']);
    }
    
    public function beforeUpdate(array $newData): void
    {
        // Valider les paramètres de tri
        if (isset($newData['sortColumn'])) {
            $this->validateSortColumn($newData['sortColumn']);
        }
    }
    
    public function updated(array $oldData, array $newData): void
    {
        // Re-récupérer les données si le tri a changé
        if ($oldData['sortColumn'] !== $newData['sortColumn'] ||
            $oldData['sortDirection'] !== $newData['sortDirection']) {
            $this->data = $this->fetchData();
        }
    }
    
    public function beforeUnmount(): void
    {
        // Supprimer les écouteurs d'événements
        $this->removeAllEventListeners();
    }
    
    private function fetchData(): array
    {
        return collect($this->rawData)
            ->sortBy($this->sortColumn, SORT_REGULAR, $this->sortDirection === 'desc')
            ->values()
            ->toArray();
    }
}
\`\`\`

## Cycle de Vie Asynchrone

\`\`\`php
<?php

namespace App\\Components;

class AsyncDataLoader extends BaseComponent
{
    private bool $loading = true;
    private array $data = [];
    private ?string $error = null;
    
    public async function beforeMount(): Promise
    {
        try {
            $this->data = await $this->loadDataAsync();
            $this->loading = false;
        } catch (Exception $e) {
            $this->error = $e->getMessage();
            $this->loading = false;
        }
    }
    
    public async function loadDataAsync(): Promise
    {
        // Simuler le chargement de données asynchrone
        return await Http::async()->get('/api/data');
    }
    
    public function render(): string
    {
        if ($this->loading) {
            return view('components.loading');
        }
        
        if ($this->error) {
            return view('components.error', ['error' => $this->error]);
        }
        
        return view('components.data-loader', ['data' => $this->data]);
    }
}
\`\`\`

## Gestion d'État des Composants

\`\`\`php
<?php

namespace App\\Components;

class StatefulCounter extends BaseComponent
{
    private int $count = 0;
    private array $history = [];
    
    public function mounted(): void
    {
        // Charger l'état persisté
        $this->loadPersistedState();
    }
    
    public function increment(): void
    {
        $oldCount = $this->count;
        $this->count++;
        $this->history[] = ['action' => 'increment', 'from' => $oldCount, 'to' => $this->count];
        
        // Déclencher le cycle de mise à jour
        $this->triggerUpdate(['count' => $oldCount], ['count' => $this->count]);
    }
    
    public function decrement(): void
    {
        $oldCount = $this->count;
        $this->count--;
        $this->history[] = ['action' => 'decrement', 'from' => $oldCount, 'to' => $this->count];
        
        $this->triggerUpdate(['count' => $oldCount], ['count' => $this->count]);
    }
    
    public function beforeUnmount(): void
    {
        // Persister l'état avant la destruction
        $this->persistState();
    }
    
    private function persistState(): void
    {
        Cache::put("counter_state_{$this->id}", [
            'count' => $this->count,
            'history' => $this->history
        ], 3600);
    }
    
    private function loadPersistedState(): void
    {
        $state = Cache::get("counter_state_{$this->id}");
        if ($state) {
            $this->count = $state['count'];
            $this->history = $state['history'];
        }
    }
}
\`\`\`
          `
        }
      },
      {
        id: "injection-dependances",
        title: {
          en: "Dependency Injection",
          fr: "Injection de dépendances"
        },
        content: {
          en: `
# Dependency Injection

Under Framework features a powerful dependency injection container that manages class dependencies and performs dependency injection.

## Basic Dependency Injection

\`\`\`php
<?php

namespace App\\Services;

class EmailService
{
    public function send(string $to, string $subject, string $body): void
    {
        // Email sending logic
    }
}

class UserService
{
    // Dependencies are automatically injected
    public function __construct(
        private EmailService $emailService,
        private UserRepository $userRepository
    ) {}
    
    public function createUser(array $data): User
    {
        $user = $this->userRepository->create($data);
        
        $this->emailService->send(
            $user->email,
            'Welcome!',
            'Welcome to our platform!'
        );
        
        return $user;
    }
}
\`\`\`

## Interface Binding

\`\`\`php
<?php

// Define interface
interface PaymentGatewayInterface
{
    public function charge(float $amount, array $details): PaymentResult;
}

// Implementation
class StripePaymentGateway implements PaymentGatewayInterface
{
    public function charge(float $amount, array $details): PaymentResult
    {
        // Stripe-specific implementation
        return new PaymentResult(true, 'stripe_txn_123');
    }
}

// Service Provider binding
class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(
            PaymentGatewayInterface::class,
            StripePaymentGateway::class
        );
    }
}

// Usage in service
class OrderService
{
    public function __construct(
        private PaymentGatewayInterface $paymentGateway
    ) {}
    
    public function processPayment(Order $order): bool
    {
        $result = $this->paymentGateway->charge(
            $order->total,
            $order->payment_details
        );
        
        return $result->successful();
    }
}
\`\`\`

## Container Binding Methods

\`\`\`php
<?php

use Under\\Support\\Facades\\App;

// Simple binding
App::bind('mailer', function ($app) {
    return new MailService($app['config']['mail']);
});

// Singleton binding
App::singleton('cache', function ($app) {
    return new CacheManager($app['config']['cache']);
});

// Instance binding
App::instance('current_user', $user);

// Interface to implementation
App::bind(UserRepositoryInterface::class, EloquentUserRepository::class);

// Contextual binding
App::when(OrderController::class)
    ->needs(PaymentGatewayInterface::class)
    ->give(StripePaymentGateway::class);

App::when(RefundController::class)
    ->needs(PaymentGatewayInterface::class)
    ->give(PayPalPaymentGateway::class);
\`\`\`

## Constructor Injection

\`\`\`php
<?php

class OrderController extends Controller
{
    public function __construct(
        private OrderService $orderService,
        private PaymentService $paymentService,
        private EmailService $emailService
    ) {}
    
    public function store(OrderRequest $request): Response
    {
        $order = $this->orderService->create($request->validated());
        
        if ($this->paymentService->process($order)) {
            $this->emailService->sendOrderConfirmation($order);
            return response()->json($order);
        }
        
        return response()->json(['error' => 'Payment failed'], 400);
    }
}
\`\`\`

## Method Injection

\`\`\`php
<?php

class UserController extends Controller
{
    public function update(
        UserRequest $request,
        User $user,
        UserService $userService // Method injection
    ): Response {
        $updatedUser = $userService->update($user, $request->validated());
        
        return response()->json($updatedUser);
    }
}
\`\`\`

## Manual Resolution

\`\`\`php
<?php

use Under\\Support\\Facades\\App;

// Resolve from container
$userService = App::make(UserService::class);

// Resolve with parameters
$emailService = App::makeWith(EmailService::class, [
    'config' => ['smtp_host' => 'custom.smtp.com']
]);

// Check if bound
if (App::bound(PaymentGatewayInterface::class)) {
    $gateway = App::make(PaymentGatewayInterface::class);
}
\`\`\`

## Service Providers

\`\`\`php
<?php

namespace App\\Providers;

use Under\\Support\\ServiceProvider;

class PaymentServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        // Register bindings
        $this->app->singleton(PaymentManager::class, function ($app) {
            return new PaymentManager($app['config']['payment']);
        });
        
        $this->app->bind(
            PaymentGatewayInterface::class,
            config('payment.default_gateway')
        );
    }
    
    public function boot(): void
    {
        // Boot services after all providers registered
        $this->app[PaymentManager::class]->registerGateways([
            'stripe' => StripePaymentGateway::class,
            'paypal' => PayPalPaymentGateway::class,
        ]);
    }
}
\`\`\`
          `,
          fr: `
# Injection de dépendances

Under Framework dispose d'un conteneur d'injection de dépendances puissant qui gère les dépendances de classe et effectue l'injection de dépendances.

## Injection de Dépendances de Base

\`\`\`php
<?php

namespace App\\Services;

class EmailService
{
    public function send(string $to, string $subject, string $body): void
    {
        // Logique d'envoi d'email
    }
}

class UserService
{
    // Les dépendances sont automatiquement injectées
    public function __construct(
        private EmailService $emailService,
        private UserRepository $userRepository
    ) {}
    
    public function createUser(array $data): User
    {
        $user = $this->userRepository->create($data);
        
        $this->emailService->send(
            $user->email,
            'Bienvenue !',
            'Bienvenue sur notre plateforme !'
        );
        
        return $user;
    }
}
\`\`\`

## Liaison d'Interface

\`\`\`php
<?php

// Définir l'interface
interface PaymentGatewayInterface
{
    public function charge(float $amount, array $details): PaymentResult;
}

// Implémentation
class StripePaymentGateway implements PaymentGatewayInterface
{
    public function charge(float $amount, array $details): PaymentResult
    {
        // Implémentation spécifique à Stripe
        return new PaymentResult(true, 'stripe_txn_123');
    }
}

// Liaison du fournisseur de services
class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(
            PaymentGatewayInterface::class,
            StripePaymentGateway::class
        );
    }
}

// Utilisation dans un service
class OrderService
{
    public function __construct(
        private PaymentGatewayInterface $paymentGateway
    ) {}
    
    public function processPayment(Order $order): bool
    {
        $result = $this->paymentGateway->charge(
            $order->total,
            $order->payment_details
        );
        
        return $result->successful();
    }
}
\`\`\`

## Méthodes de Liaison du Conteneur

\`\`\`php
<?php

use Under\\Support\\Facades\\App;

// Liaison simple
App::bind('mailer', function ($app) {
    return new MailService($app['config']['mail']);
});

// Liaison singleton
App::singleton('cache', function ($app) {
    return new CacheManager($app['config']['cache']);
});

// Liaison d'instance
App::instance('current_user', $user);

// Interface vers implémentation
App::bind(UserRepositoryInterface::class, EloquentUserRepository::class);

// Liaison contextuelle
App::when(OrderController::class)
    ->needs(PaymentGatewayInterface::class)
    ->give(StripePaymentGateway::class);

App::when(RefundController::class)
    ->needs(PaymentGatewayInterface::class)
    ->give(PayPalPaymentGateway::class);
\`\`\`

## Injection par Constructeur

\`\`\`php
<?php

class OrderController extends Controller
{
    public function __construct(
        private OrderService $orderService,
        private PaymentService $paymentService,
        private EmailService $emailService
    ) {}
    
    public function store(OrderRequest $request): Response
    {
        $order = $this->orderService->create($request->validated());
        
        if ($this->paymentService->process($order)) {
            $this->emailService->sendOrderConfirmation($order);
            return response()->json($order);
        }
        
        return response()->json(['error' => 'Échec du paiement'], 400);
    }
}
\`\`\`

## Injection par Méthode

\`\`\`php
<?php

class UserController extends Controller
{
    public function update(
        UserRequest $request,
        User $user,
        UserService $userService // Injection par méthode
    ): Response {
        $updatedUser = $userService->update($user, $request->validated());
        
        return response()->json($updatedUser);
    }
}
\`\`\`

## Résolution Manuelle

\`\`\`php
<?php

use Under\\Support\\Facades\\App;

// Résoudre depuis le conteneur
$userService = App::make(UserService::class);

// Résoudre avec des paramètres
$emailService = App::makeWith(EmailService::class, [
    'config' => ['smtp_host' => 'custom.smtp.com']
]);

// Vérifier si lié
if (App::bound(PaymentGatewayInterface::class)) {
    $gateway = App::make(PaymentGatewayInterface::class);
}
\`\`\`

## Fournisseurs de Services

\`\`\`php
<?php

namespace App\\Providers;

use Under\\Support\\ServiceProvider;

class PaymentServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        // Enregistrer les liaisons
        $this->app->singleton(PaymentManager::class, function ($app) {
            return new PaymentManager($app['config']['payment']);
        });
        
        $this->app->bind(
            PaymentGatewayInterface::class,
            config('payment.default_gateway')
        );
    }
    
    public function boot(): void
    {
        // Démarrer les services après que tous les fournisseurs soient enregistrés
        $this->app[PaymentManager::class]->registerGateways([
            'stripe' => StripePaymentGateway::class,
            'paypal' => PayPalPaymentGateway::class,
        ]);
    }
}
\`\`\`
          `
        }
      }
    ]
  },
  // Continue with more sections...
  {
    id: "security",
    title: {
      en: "Security",
      fr: "Sécurité"
    },
    items: [
      {
        id: "authentification",
        title: {
          en: "🔑 Authentication",
          fr: "🔑 Authentification"
        },
        content: {
          en: `
# 🔑 Authentication

Under Framework provides a complete authentication system out of the box.

## Basic Authentication Setup

\`\`\`bash
# Generate authentication scaffolding
php under make:auth
\`\`\`

## User Model

\`\`\`php
<?php

namespace App\\Models;

use Under\\Database\\Chronos\\Model;
use Under\\Auth\\Authenticatable;

class User extends Model
{
    use Authenticatable;
    
    protected $fillable = [
        'name', 'email', 'password'
    ];
    
    protected $hidden = [
        'password', 'remember_token'
    ];
    
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed'
    ];
}
\`\`\`

## Authentication Controller

\`\`\`php
<?php

namespace App\\Controllers\\Auth;

use Under\\Http\\Controller;
use Under\\Http\\Request;
use Under\\Support\\Facades\\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
        
        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();
            
            return redirect()->intended('/dashboard');
        }
        
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.'
        ]);
    }
    
    public function logout(Request $request)
    {
        Auth::logout();
        
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        
        return redirect('/');
    }
}
\`\`\`

## Guards and Providers

\`\`\`php
// config/auth.php
return [
    'defaults' => [
        'guard' => 'web',
        'passwords' => 'users',
    ],
    
    'guards' => [
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],
        
        'api' => [
            'driver' => 'token',
            'provider' => 'users',
        ],
    ],
    
    'providers' => [
        'users' => [
            'driver' => 'chronos',
            'model' => App\\Models\\User::class,
        ],
    ],
];
\`\`\`
          `,
          fr: `
# 🔑 Authentification

Under Framework fournit un système d'authentification complet prêt à l'emploi.

## Configuration d'Authentification de Base

\`\`\`bash
# Générer l'échafaudage d'authentification
php under make:auth
\`\`\`

## Modèle Utilisateur

\`\`\`php
<?php

namespace App\\Models;

use Under\\Database\\Chronos\\Model;
use Under\\Auth\\Authenticatable;

class User extends Model
{
    use Authenticatable;
    
    protected $fillable = [
        'name', 'email', 'password'
    ];
    
    protected $hidden = [
        'password', 'remember_token'
    ];
    
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed'
    ];
}
\`\`\`

## Contrôleur d'Authentification

\`\`\`php
<?php

namespace App\\Controllers\\Auth;

use Under\\Http\\Controller;
use Under\\Http\\Request;
use Under\\Support\\Facades\\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
        
        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();
            
            return redirect()->intended('/dashboard');
        }
        
        return back()->withErrors([
            'email' => 'Les identifiants fournis ne correspondent pas à nos enregistrements.'
        ]);
    }
    
    public function logout(Request $request)
    {
        Auth::logout();
        
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        
        return redirect('/');
    }
}
\`\`\`

## Guards et Providers

\`\`\`php
// config/auth.php
return [
    'defaults' => [
        'guard' => 'web',
        'passwords' => 'users',
    ],
    
    'guards' => [
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],
        
        'api' => [
            'driver' => 'token',
            'provider' => 'users',
        ],
    ],
    
    'providers' => [
        'users' => [
            'driver' => 'chronos',
            'model' => App\\Models\\User::class,
        ],
    ],
];
\`\`\`
          `
        }
      }
      // More security items would continue...
    ]
  },
  // Continue with all other sections (Services, Templating, CLI, Testing, etc.)
];

export const searchDocumentation = (query: string, language: 'en' | 'fr' = 'en'): DocItem[] => {
  if (!query.trim()) return [];
  
  const results: DocItem[] = [];
  const searchTerm = query.toLowerCase();
  
  documentationData.forEach(section => {
    section.items.forEach(item => {
      const title = item.title[language].toLowerCase();
      const content = item.content?.[language]?.toLowerCase() || '';
      
      if (title.includes(searchTerm) || content.includes(searchTerm)) {
        results.push(item);
      }
    });
  });
  
  return results.slice(0, 10); // Limit results
};
