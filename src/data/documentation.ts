
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

## Directory Permissions

Ensure the following directories are writable:

\`\`\`bash
chmod -R 755 storage
chmod -R 755 bootstrap/cache
\`\`\`
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

## Permissions des Répertoires

Assurez-vous que les répertoires suivants sont en écriture :

\`\`\`bash
chmod -R 755 storage
chmod -R 755 bootstrap/cache
\`\`\`
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

## Using the Controller

Update your routes to use the controller:

\`\`\`php
Route::get('/welcome', [WelcomeController::class, 'index']);
Route::get('/welcome/{id}', [WelcomeController::class, 'show']);
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

## Utiliser le Contrôleur

Mettez à jour vos routes pour utiliser le contrôleur :

\`\`\`php
Route::get('/welcome', [WelcomeController::class, 'index']);
Route::get('/welcome/{id}', [WelcomeController::class, 'show']);
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

### 4. Security by Design
Security is not an afterthought:

\`\`\`php
// Built-in protection against common vulnerabilities
Route::post('/users', [UserController::class, 'store'])
    ->middleware(['auth', 'csrf', 'throttle:60,1']);
\`\`\`

## Architecture Philosophy

Under promotes clean architecture through:
- **Separation of Concerns**: Clear boundaries between layers
- **Dependency Injection**: Loose coupling and testability
- **Event-Driven Design**: Reactive and scalable applications
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

### 4. Sécurité par Conception
La sécurité n'est pas une réflexion après coup :

\`\`\`php
// Protection intégrée contre les vulnérabilités communes
Route::post('/users', [UserController::class, 'store'])
    ->middleware(['auth', 'csrf', 'throttle:60,1']);
\`\`\`

## Philosophie d'Architecture

Under promeut une architecture propre à travers :
- **Séparation des Préoccupations** : Frontières claires entre les couches
- **Injection de Dépendances** : Couplage lâche et testabilité
- **Conception Orientée Événements** : Applications réactives et évolutives
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

## Configuration Structure

\`\`\`php
// config/app.php
return [
    'name' => env('APP_NAME', 'Under Application'),
    'env' => env('APP_ENV', 'production'),
    'debug' => env('APP_DEBUG', false),
    'url' => env('APP_URL', 'http://localhost'),
    'timezone' => 'UTC',
];
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

## Structure de Configuration

\`\`\`php
// config/app.php
return [
    'name' => env('APP_NAME', 'Application Under'),
    'env' => env('APP_ENV', 'production'),
    'debug' => env('APP_DEBUG', false),
    'url' => env('APP_URL', 'http://localhost'),
    'timezone' => 'UTC',
];
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

## Cross-Module Communication

\`\`\`php
// In Blog module
namespace Modules\\Blog\\Services;

class BlogService
{
    public function getPublishedPosts(): Collection
    {
        return Post::where('status', 'published')->get();
    }
}

// In another module
$blogService = app(BlogService::class);
$posts = $blogService->getPublishedPosts();
\`\`\`

## Module Routes

\`\`\`php
// modules/Blog/Routes/web.php
Route::prefix('blog')->group(function () {
    Route::get('/', [BlogController::class, 'index']);
    Route::get('/post/{slug}', [BlogController::class, 'show']);
});
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

## Communication Inter-Modules

\`\`\`php
// Dans le module Blog
namespace Modules\\Blog\\Services;

class BlogService
{
    public function getPublishedPosts(): Collection
    {
        return Post::where('status', 'published')->get();
    }
}

// Dans un autre module
$blogService = app(BlogService::class);
$posts = $blogService->getPublishedPosts();
\`\`\`

## Routes de Module

\`\`\`php
// modules/Blog/Routes/web.php
Route::prefix('blog')->group(function () {
    Route::get('/', [BlogController::class, 'index']);
    Route::get('/post/{slug}', [BlogController::class, 'show']);
});
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

## Database Configuration

\`\`\`php
// config/database.php
return [
    'default' => env('DB_CONNECTION', 'mysql'),
    
    'connections' => [
        'mysql' => [
            'driver' => 'mysql',
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '3306'),
            'database' => env('DB_DATABASE', 'under'),
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', ''),
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
        ],
        
        'redis' => [
            'driver' => 'redis',
            'host' => env('REDIS_HOST', '127.0.0.1'),
            'password' => env('REDIS_PASSWORD'),
            'port' => env('REDIS_PORT', '6379'),
            'database' => env('REDIS_DB', '0'),
        ],
    ],
];
\`\`\`

## Accessing Configuration

\`\`\`php
// Get configuration value
$appName = config('app.name');
$dbHost = config('database.connections.mysql.host');

// Set configuration at runtime
config(['app.debug' => true]);
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

## Configuration de Base de Données

\`\`\`php
// config/database.php
return [
    'default' => env('DB_CONNECTION', 'mysql'),
    
    'connections' => [
        'mysql' => [
            'driver' => 'mysql',
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '3306'),
            'database' => env('DB_DATABASE', 'under'),
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', ''),
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
        ],
        
        'redis' => [
            'driver' => 'redis',
            'host' => env('REDIS_HOST', '127.0.0.1'),
            'password' => env('REDIS_PASSWORD'),
            'port' => env('REDIS_PORT', '6379'),
            'database' => env('REDIS_DB', '0'),
        ],
    ],
];
\`\`\`

## Accéder à la Configuration

\`\`\`php
// Obtenir une valeur de configuration
$appName = config('app.name');
$dbHost = config('database.connections.mysql.host');

// Définir la configuration à l'exécution
config(['app.debug' => true]);
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
          en: "🧭 Routing",
          fr: "🧭 Routing"
        },
        content: {
          en: `
# 🧭 Routing

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

## Route Constraints

\`\`\`php
// Numeric constraint
Route::get('/user/{id}', function ($id) {
    return "User ID: " . $id;
})->where('id', '[0-9]+');

// Alphabetic constraint
Route::get('/user/{name}', function ($name) {
    return "User: " . $name;
})->where('name', '[a-zA-Z]+');

// Multiple constraints
Route::get('/user/{id}/post/{slug}', function ($id, $slug) {
    return "User {$id}, Post {$slug}";
})->where(['id' => '[0-9]+', 'slug' => '[a-z-]+']);
\`\`\`

## Named Routes

\`\`\`php
Route::get('/dashboard', [DashboardController::class, 'index'])
    ->name('dashboard');

// Generate URLs
$url = route('dashboard'); // /dashboard
$url = route('user.profile', ['id' => 1]); // /user/1/profile
\`\`\`

## Route Groups

\`\`\`php
// Prefix grouping
Route::prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'dashboard']);
    Route::get('/users', [AdminController::class, 'users']);
});

// Middleware grouping
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'show']);
    Route::post('/profile', [ProfileController::class, 'update']);
});

// Namespace grouping
Route::namespace('Admin')->prefix('admin')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);
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

// Partial resource routes
Route::resource('posts', PostController::class)->only([
    'index', 'show', 'store'
]);

Route::resource('posts', PostController::class)->except([
    'destroy'
]);
\`\`\`
          `,
          fr: `
# 🧭 Routing

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

## Contraintes de Route

\`\`\`php
// Contrainte numérique
Route::get('/user/{id}', function ($id) {
    return "ID Utilisateur: " . $id;
})->where('id', '[0-9]+');

// Contrainte alphabétique
Route::get('/user/{name}', function ($name) {
    return "Utilisateur: " . $name;
})->where('name', '[a-zA-Z]+');

// Contraintes multiples
Route::get('/user/{id}/post/{slug}', function ($id, $slug) {
    return "Utilisateur {$id}, Article {$slug}";
})->where(['id' => '[0-9]+', 'slug' => '[a-z-]+']);
\`\`\`

## Routes Nommées

\`\`\`php
Route::get('/dashboard', [DashboardController::class, 'index'])
    ->name('dashboard');

// Générer des URLs
$url = route('dashboard'); // /dashboard
$url = route('user.profile', ['id' => 1]); // /user/1/profile
\`\`\`

## Groupes de Routes

\`\`\`php
// Groupement par préfixe
Route::prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'dashboard']);
    Route::get('/users', [AdminController::class, 'users']);
});

// Groupement par middleware
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'show']);
    Route::post('/profile', [ProfileController::class, 'update']);
});

// Groupement par namespace
Route::namespace('Admin')->prefix('admin')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);
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

// Routes ressources partielles
Route::resource('posts', PostController::class)->only([
    'index', 'show', 'store'
]);

Route::resource('posts', PostController::class)->except([
    'destroy'
]);
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

## Advanced Queries

\`\`\`php
// Query builder methods
$users = User::select('name', 'email')
             ->where('is_active', true)
             ->orderBy('created_at', 'desc')
             ->limit(10)
             ->get();

// Aggregates
$count = User::count();
$maxId = User::max('id');
$avgAge = User::avg('age');

// Chunking for large datasets
User::chunk(100, function ($users) {
    foreach ($users as $user) {
        // Process user
    }
});
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

class Post extends Model
{
    // Inverse relationship
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    // Many-to-many relationship
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
\`\`\`

## Eager Loading

\`\`\`php
// Prevent N+1 query problem
$users = User::with('posts')->get();
$users = User::with(['posts', 'profile'])->get();

// Nested relationships
$users = User::with('posts.comments')->get();

// Conditional eager loading
$users = User::with(['posts' => function ($query) {
    $query->where('published', true);
}])->get();
\`\`\`

## Creating and Updating

\`\`\`php
// Create new record
$user = new User();
$user->name = 'John Doe';
$user->email = 'john@example.com';
$user->save();

// Mass assignment
$user = User::create([
    'name' => 'Jane Doe',
    'email' => 'jane@example.com',
    'password' => bcrypt('password')
]);

// Update existing record
$user = User::find(1);
$user->name = 'Updated Name';
$user->save();

// Mass update
User::where('is_active', false)
    ->update(['last_login' => null]);
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

## Requêtes Avancées

\`\`\`php
// Méthodes du constructeur de requêtes
$users = User::select('name', 'email')
             ->where('is_active', true)
             ->orderBy('created_at', 'desc')
             ->limit(10)
             ->get();

// Agrégats
$count = User::count();
$maxId = User::max('id');
$avgAge = User::avg('age');

// Chunking pour de gros datasets
User::chunk(100, function ($users) {
    foreach ($users as $user) {
        // Traiter l'utilisateur
    }
});
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

class Post extends Model
{
    // Relation inverse
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    // Relation plusieurs-à-plusieurs
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
\`\`\`

## Chargement Eager

\`\`\`php
// Prévenir le problème de requête N+1
$users = User::with('posts')->get();
$users = User::with(['posts', 'profile'])->get();

// Relations imbriquées
$users = User::with('posts.comments')->get();

// Chargement eager conditionnel
$users = User::with(['posts' => function ($query) {
    $query->where('published', true);
}])->get();
\`\`\`

## Création et Mise à Jour

\`\`\`php
// Créer un nouvel enregistrement
$user = new User();
$user->name = 'Jean Dupont';
$user->email = 'jean@exemple.com';
$user->save();

// Attribution de masse
$user = User::create([
    'name' => 'Jeanne Dupont',
    'email' => 'jeanne@exemple.com',
    'password' => bcrypt('motdepasse')
]);

// Mettre à jour un enregistrement existant
$user = User::find(1);
$user->name = 'Nom Mis à Jour';
$user->save();

// Mise à jour de masse
User::where('is_active', false)
    ->update(['last_login' => null]);
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
      }
    ]
  }
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
