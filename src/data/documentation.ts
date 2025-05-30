export interface DocItem {
  id: string;
  title: { en: string; fr: string };
  content?: { en: string; fr: string };
}

export interface DocSection {
  id: string;
  title: { en: string; fr: string };
  items: DocItem[];
}

export const searchDocumentation = (query: string, language: 'en' | 'fr'): DocItem[] => {
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
  
  return results;
};

export const documentationData: DocSection[] = [
  {
    id: 'getting-started',
    title: { en: 'Getting Started', fr: 'Premiers pas' },
    items: [
      {
        id: 'introduction',
        title: { en: 'Introduction', fr: 'Introduction' },
        content: {
          en: ` Introduction to Under Framework

Under is a modern, powerful PHP framework designed for building scalable web applications. It provides a clean, elegant syntax while offering powerful features for developers.

Key Features
macos
- Fast Development : Built-in tools and generators to speed up development
- Modular Architecture : Clean separation of concerns with modular design
- Security First : Built-in security features and best practices
- Performance : Optimized for high performance applications

Why Choose Under?

Under Framework combines the best of modern web development practices with an intuitive API that makes development enjoyable and productive.

\`\`\`php
<?php

namespace App\\Controllers;

use Under\\Core\\Controller;

class HomeController extends Controller
{
    public function index()
    {
        return view('home', ['title' => 'Welcome to Under']);
    }
}
\`\`\``,
          fr: ` Introduction au Framework Under

Under est un framework PHP moderne et puissant conçu pour construire des applications web évolutives. Il fournit une syntaxe claire et élégante tout en offrant des fonctionnalités puissantes pour les développeurs.

 Fonctionnalités Clés

- **Développement Rapide**: Outils intégrés et générateurs pour accélérer le développement
- **Architecture Modulaire**: Séparation claire des préoccupations avec une conception modulaire
- **Sécurité d'Abord**: Fonctionnalités de sécurité intégrées et bonnes pratiques
- **Performance**: Optimisé pour les applications haute performance

 Pourquoi Choisir Under ?

Under Framework combine le meilleur des pratiques de développement web modernes avec une API intuitive qui rend le développement agréable et productif.

\`\`\`php
<?php

namespace App\\Controllers;

use Under\\Core\\Controller;

class HomeController extends Controller
{
    public function index()
    {
        return view('home', ['title' => 'Bienvenue sur Under']);
    }
}
\`\`\``
        }
      },
      {
        id: 'installation',
        title: { en: 'Installation', fr: 'Installation' },
        content: {
          en: ` Installation

Getting started with Under Framework is simple. Follow these steps to install and set up your first Under application.

 System Requirements

- PHP 8.1 or higher
- Composer
- MySQL 5.7+ or PostgreSQL 10+
- Node.js 16+ (for frontend assets)

 Installation via Composer

Create a new Under project using Composer:

\`\`\`json
{
  "macos": "composer create-project under/framework my-project",
  "windows": "composer create-project under/framework my-project",
  "linux": "composer create-project under/framework my-project"
}
\`\`\`

 Quick Start

Navigate to your project directory and start the development server:

\`\`\`json
{
  "macos": "cd my-project && php under serve",
  "windows": "cd my-project && php under serve",
  "linux": "cd my-project && php under serve"
}
\`\`\`

Your application will be available at \`http://localhost:8000\`.`,
          fr: ` Installation

Commencer avec Under Framework est simple. Suivez ces étapes pour installer et configurer votre première application Under.

 Prérequis Système

- PHP 8.1 ou supérieur
- Composer
- MySQL 5.7+ ou PostgreSQL 10+

 Installation via Composer

Créez un nouveau projet Under en utilisant Composer :

\`\`\`json
{
  "macos": "composer create-project under/framework mon-projet@version",
  "windows": "composer create-project under mon-projet@version",
  "linux": "composer create-project under/framework mon-projet@version"
}
\`\`\`

 Démarrage Rapide

Naviguez vers le répertoire de votre projet et démarrez le serveur de développement global :

\`\`\`json
{
  "macos": "cd mon-projet && php under create:app --arch=[mvc|soa|multilayered|custom] [--s | --c]",
  "windows": "cd mon-projet && php under create:app --arch=[mvc|soa|multilayered|custom] [--s | --c]",
  "linux": "cd mon-projet && php under create:app --arch=[mvc|soa|multilayered|custom] [--s | --c]"
}
\`\`\`



Naviguez vers le workspace de votre projet et créez votre application :

\`\`\`json
{
  "macos": "cd mon-projet/workspace && php under create:app --arch=[mvc|soa|multilayered|custom] [--s | --c]",
  "windows": "cd mon-projet/workspace && php under create:app --arch=[mvc|soa|multilayered|custom] [--s | --c]",
  "linux": "cd mon-projet/workspace && php under create:app --arch=[mvc|soa|multilayered|custom] [--s | --c]"
}
\`\`\`


Naviguez vers le répertoire de votre application et lancez la :

\`\`\`json
{
  "macos": "cd mon-app && php under build",
  "windows": "cd mon-app && php under build",
  "linux": "cd mon-app && php under build"
}
\`\`\`


Votre application sera disponible à \`http://localhost:8000\`.`
        }
      },
      {
        id: 'premiers-pas',
        title: { en: 'First Steps', fr: 'Premiers pas' },
        content: {
          en: ` First Steps with Under

Now that you have Under installed, let's create your first controller and view.

 Creating a Controller

Use the Under CLI to generate a new controller:

\`\`\`json
{
  "macos": "php under make:controller UserController",
  "windows": "php under make:controller UserController",
  "linux": "php under make:controller UserController"
}
\`\`\`

 Setting up Routes

Add routes to your \`routes/web.php\` file:

\`\`\`php
<?php

use App\\Controllers\\UserController;

Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
\`\`\``,
          fr: ` Premiers pas avec Under

Maintenant que vous avez installé Under, créons votre premier contrôleur et vue.

 Création d'un Contrôleur

Utilisez le CLI Under pour générer un nouveau contrôleur :

\`\`\`json
{
  "macos": "php under make:controller UserController",
  "windows": "php under make:controller UserController",
  "linux": "php under make:controller UserController"
}
\`\`\`

 Configuration des Routes

Ajoutez des routes à votre fichier \`routes/web.php\` :

\`\`\`php
<?php

use App\\Controllers\\UserController;

Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
\`\`\``
        }
      },
      {
        id: 'philosophie',
        title: { en: 'Framework Philosophy', fr: 'Philosophie du framework' },
        content: {
          en: ` Framework Philosophy

Under Framework is built on several core principles that guide its development and design decisions.

 Convention over Configuration

Under follows the principle of convention over configuration, providing sensible defaults while allowing customization when needed.

 Developer Experience

We prioritize developer happiness and productivity through:
- Clear, expressive syntax
- Comprehensive documentation
- Powerful debugging tools
- Intuitive CLI commands`,
          fr: ` Philosophie du framework

Under Framework est construit sur plusieurs principes fondamentaux qui guident son développement et ses décisions de conception.

 Convention plutôt que Configuration

Under suit le principe de convention plutôt que configuration, fournissant des valeurs par défaut sensées tout en permettant la personnalisation quand nécessaire.

 Expérience Développeur

Nous priorisons le bonheur et la productivité du développeur à travers :
- Syntaxe claire et expressive
- Documentation complète
- Outils de débogage puissants
- Commandes CLI intuitives`
        }
      }
    ]
  },
  {
    id: 'project-structure',
    title: { en: 'Project Structure', fr: 'Structure du projet' },
    items: [
      {
        id: 'arborescence',
        title: { en: 'Directory Structure', fr: 'Arborescence' },
        content: {
          en: ` Directory Structure

Under Framework follows a clear and intuitive directory structure that promotes organization and maintainability.

 Root Directory Structure

\`\`\`
my-under-app/
├── apps/
│   ├── mvcApp/
│   ├── soaApp/
│   ├── Services/
│   └── Middleware/
├── bin/
├── shared/
│   ├── libs/
│   ├── mods/
├── vendor/
│   ├── under/
│   ├── ... other dependencies/
├── composer.json
├── under.json
├── .gitignore
└── readme.md
\`\`\`

 Application Directory (\`apps/\`)

The \`apps\` directory contains the workspace where are manage your applications:

- **Controllers/**: Handle HTTP requests and responses
- **Models/**: Data models and business logic
- **Services/**: Business logic and external service integrations
- **Middleware/**: Request/response filtering logic`,
          fr: ` Structure des Répertoires

Under Framework suit une structure de répertoires claire et intuitive qui favorise l'organisation et la maintenabilité.

 Structure du Répertoire Racine

\`\`\`
my-under-app/
├── apps/
│   ├── mvcApp/
│   ├── soaApp/
│   ├── Services/
│   └── Middleware/
├── bin/
├── shared/
│   ├── libs/
│   ├── mods/
├── vendor/
│   ├── under/
│   ├── ... other dependencies/
├── composer.json
├── under.json
├── .gitignore
└── readme.md
\`\`\`

 Répertoire Application (\`app/\`)

Le répertoire \`apps\` contient le workspace permettant de gérer toutes vos applications :

- **Controllers/**: Gèrent les requêtes et réponses HTTP
- **Models/**: Modèles de données et logique métier
- **Services/**: Logique métier et intégrations de services externes
- **Middleware/**: Logique de filtrage des requêtes/réponses`
        }
      },
      {
        id: 'multi-applications',
        title: { en: 'Multi-applications & Modules', fr: 'Multi-applications & modules' },
        content: {
          en: ` Multi-applications & Modules

Under Framework supports multi-application architecture and modular development for complex projects.

 Creating a Module

Generate a new module using the CLI:

\`\`\`json
{
  "macos": "php under make:module Blog",
  "windows": "php under make:module Blog",
  "linux": "php under make:module Blog"
}
\`\`\`

 Module Structure

\`\`\`
modules/
└── Blog/
    ├── Controllers/
    ├── Models/
    ├── Views/
    ├── Routes/
    └── Config/
\`\`\``,
          fr: ` Multi-applications & Modules

Under Framework supporte l'architecture multi-applications et le développement modulaire pour les projets complexes.

 Création d'un Module

Générez un nouveau module en utilisant le CLI :

\`\`\`json
{
  "macos": "php under make:module Blog",
  "windows": "php under make:module Blog",
  "linux": "php under make:module Blog"
}
\`\`\`

 Structure de Module

\`\`\`
modules/
└── Blog/
    ├── Controllers/
    ├── Models/
    ├── Views/
    ├── Routes/
    └── Config/
\`\`\``
        }
      },
      {
        id: 'espaces-services',
        title: { en: 'Service Spaces', fr: 'Espaces de services' },
        content: {
          en: ` Service Spaces

Service spaces in Under Framework provide a way to organize and isolate different parts of your application.

 Defining Service Spaces

\`\`\`php
<?php

namespace App\\Services\\Payment;

use Under\\Core\\Service;

class PaymentService extends Service
{
    public function processPayment($amount, $method)
    {
        // Payment processing logic
        return $this->gateway->charge($amount, $method);
    }
}
\`\`\``,
          fr: ` Espaces de Services

Les espaces de services dans Under Framework fournissent un moyen d'organiser et d'isoler différentes parties de votre application.

 Définition d'Espaces de Services

\`\`\`php
<?php

namespace App\\Services\\Payment;

use Under\\Core\\Service;

class PaymentService extends Service
{
    public function processPayment($amount, $method)
    {
        // Logique de traitement des paiements
        return $this->gateway->charge($amount, $method);
    }
}
\`\`\``
        }
      },
      {
        id: 'dependances-packages',
        title: { en: 'Dependencies & Packages', fr: 'Dépendances et packages' },
        content: {
          en: ` Dependencies & Packages

Under Framework uses Composer for dependency management and supports custom packages.

 Installing Packages

\`\`\`json
{
  "macos": "composer require vendor/package",
  "windows": "composer require vendor/package",
  "linux": "composer require vendor/package"
}
\`\`\`

 Creating Custom Packages

\`\`\`json
{
  "macos": "php under make:package MyPackage",
  "windows": "php under make:package MyPackage",
  "linux": "php under make:package MyPackage"
}
\`\`\``,
          fr: ` Dépendances & Packages

Under Framework utilise Composer pour la gestion des dépendances et supporte les packages personnalisés.

 Installation de Packages

\`\`\`json
{
  "macos": "composer require vendor/package",
  "windows": "composer require vendor/package",
  "linux": "composer require vendor/package"
}
\`\`\`

 Création de Packages Personnalisés

\`\`\`json
{
  "macos": "php under make:package MonPackage",
  "windows": "php under make:package MonPackage",
  "linux": "php under make:package MonPackage"
}
\`\`\``
        }
      }
    ]
  },
  {
    id: 'configuration',
    title: { en: 'Configuration', fr: 'Configuration' },
    items: [
      {
        id: 'fichiers-configuration',
        title: { en: 'Configuration Files', fr: 'Fichiers de configuration' },
        content: {
          en: ` Configuration Files

Under Framework uses a simple yet powerful configuration system based on PHP files.

 Main Configuration

The main configuration file is located at \`config/app.php\`:

\`\`\`php
<?php

return [
    'name' => env('APP_NAME', 'Under Application'),
    'env' => env('APP_ENV', 'production'),
    'debug' => env('APP_DEBUG', false),
    'url' => env('APP_URL', 'http://localhost'),
    'timezone' => 'UTC',
];
\`\`\`

 Database Configuration

Configure your database connections in \`config/database.php\`:

\`\`\`php
<?php

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
        ],
    ],
];
\`\`\``,
          fr: ` Fichiers de Configuration

Under Framework utilise un système de configuration simple mais puissant basé sur des fichiers PHP.

 Configuration Principale

Le fichier de configuration principal se trouve à \`config/app.php\` :

\`\`\`php
<?php

return [
    'name' => env('APP_NAME', 'Application Under'),
    'env' => env('APP_ENV', 'production'),
    'debug' => env('APP_DEBUG', false),
    'url' => env('APP_URL', 'http://localhost'),
    'timezone' => 'UTC',
];
\`\`\`

 Configuration Base de Données

Configurez vos connexions de base de données dans \`config/database.php\` :

\`\`\`php
<?php

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
        ],
    ],
];
\`\`\``
        }
      },
      {
        id: 'environnements',
        title: { en: 'Environments', fr: 'Environnements' },
        content: {
          en: ` Environments

Under Framework supports multiple environments for different stages of development.

 Environment Files

Create different environment files:
- \`.env\` - Default environment
- \`.env.local\` - Local development
- \`.env.staging\` - Staging environment
- \`.env.production\` - Production environment

 Switching Environments

\`\`\`json
{
  "macos": "export APP_ENV=staging && php under serve",
  "windows": "set APP_ENV=staging && php under serve",
  "linux": "export APP_ENV=staging && php under serve"
}
\`\`\``,
          fr: ` Environnements

Under Framework supporte plusieurs environnements pour différentes étapes de développement.

 Fichiers d'Environnement

Créez différents fichiers d'environnement :
- \`.env\` - Environnement par défaut
- \`.env.local\` - Développement local
- \`.env.staging\` - Environnement de staging
- \`.env.production\` - Environnement de production

 Changement d'Environnements

\`\`\`json
{
  "macos": "export APP_ENV=staging && php under serve",
  "windows": "set APP_ENV=staging && php under serve",
  "linux": "export APP_ENV=staging && php under serve"
}
\`\`\``
        }
      },
      {
        id: 'variables-environnement',
        title: { en: 'Environment Variables', fr: 'Variables d\'environnement' },
        content: {
          en: ` Environment Variables

Environment variables provide a way to configure your application without hardcoding values.

 Defining Variables

Add variables to your \`.env\` file:

\`\`\`bash
APP_NAME="My Under App"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=under_db
DB_USERNAME=root
DB_PASSWORD=secret
\`\`\`

 Accessing Variables

Use the \`env()\` helper function:

\`\`\`php
<?php

$appName = env('APP_NAME', 'Default App Name');
$dbHost = env('DB_HOST', 'localhost');
\`\`\``,
          fr: ` Variables d'Environnement

Les variables d'environnement fournissent un moyen de configurer votre application sans coder en dur les valeurs.

 Définition de Variables

Ajoutez des variables à votre fichier \`.env\` :

\`\`\`bash
APP_NAME="Mon App Under"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=under_db
DB_USERNAME=root
DB_PASSWORD=secret
\`\`\`

 Accès aux Variables

Utilisez la fonction helper \`env()\` :

\`\`\`php
<?php

$appName = env('APP_NAME', 'Nom App Par Défaut');
$dbHost = env('DB_HOST', 'localhost');
\`\`\``
        }
      }
    ]
  },
  {
    id: 'fundamentals',
    title: { en: 'Fundamentals', fr: 'Fondamentaux' },
    items: [
      {
        id: 'routing',
        title: { en: '📡 Routing', fr: '📡 Routing' },
        content: {
          en: ` Routing

Under Framework provides a powerful and flexible routing system for handling HTTP requests.

 Basic Routes

Define routes in \`routes/web.php\`:

\`\`\`php
<?php

use Under\\Http\\Route;

// GET route
Route::get('/users', function() {
    return 'Users list';
});

// POST route
Route::post('/users', function() {
    return 'Create user';
});

// Route with parameters
Route::get('/users/{id}', function($id) {
    return "User ID: " . $id;
});
\`\`\`

 Route Groups

Group related routes:

\`\`\`php
<?php

Route::group(['prefix' => 'api/v1'], function() {
    Route::get('/users', [UserController::class, 'index']);
    Route::post('/users', [UserController::class, 'store']);
    Route::get('/users/{id}', [UserController::class, 'show']);
});
\`\`\`

 RESTful Routes

Generate RESTful routes automatically:

\`\`\`json
{
  "macos": "php under make:resource UserController",
  "windows": "php under make:resource UserController",
  "linux": "php under make:resource UserController"
}
\`\`\``,
          fr: ` Routing

Under Framework fournit un système de routage puissant et flexible pour gérer les requêtes HTTP.

 Routes de Base

Définissez les routes dans \`routes/web.php\` :

\`\`\`php
<?php

use Under\\Http\\Route;

// Route GET
Route::get('/users', function() {
    return 'Liste des utilisateurs';
});

// Route POST
Route::post('/users', function() {
    return 'Créer un utilisateur';
});

// Route avec paramètres
Route::get('/users/{id}', function($id) {
    return "ID Utilisateur: " . $id;
});
\`\`\`

 Groupes de Routes

Groupez les routes liées :

\`\`\`php
<?php

Route::group(['prefix' => 'api/v1'], function() {
    Route::get('/users', [UserController::class, 'index']);
    Route::post('/users', [UserController::class, 'store']);
    Route::get('/users/{id}', [UserController::class, 'show']);
});
\`\`\`

 Routes RESTful

Générez automatiquement des routes RESTful :

\`\`\`json
{
  "macos": "php under make:resource UserController",
  "windows": "php under make:resource UserController",
  "linux": "php under make:resource UserController"
}
\`\`\``
        }
      },
      {
        id: 'chronos-orm',
        title: { en: '🧠 Chronos ORM', fr: '🧠 Chronos ORM' },
        content: {
          en: ` Chronos ORM

Chronos is Under's powerful Object-Relational Mapping (ORM) system that makes database interactions elegant and efficient.

 Defining Models

Create a model using the CLI:

\`\`\`json
{
  "macos": "php under make:model User",
  "windows": "php under make:model User",
  "linux": "php under make:model User"
}
\`\`\`

 Model Example

\`\`\`php
<?php

namespace App\\Models;

use Under\\Database\\Model;

class User extends Model
{
    protected $table = 'users';
    
    protected $fillable = [
        'name', 'email', 'password'
    ];
    
    protected $hidden = [
        'password', 'remember_token'
    ];
    
    // Relationships
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
    
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
}
\`\`\`

 Querying Data

\`\`\`php
<?php

// Find all users
$users = User::all();

// Find user by ID
$user = User::find(1);

// Query with conditions
$activeUsers = User::where('status', 'active')
                  ->orderBy('created_at', 'desc')
                  ->limit(10)
                  ->get();

// Create new user
$user = User::create([
    'name' => 'John Doe',
    'email' => 'john@example.com',
    'password' => bcrypt('password')
]);
\`\`\``,
          fr: ` Chronos ORM

Chronos est le système de mapping objet-relationnel (ORM) puissant d'Under qui rend les interactions avec la base de données élégantes et efficaces.

 Définition de Modèles

Créez un modèle en utilisant le CLI :

\`\`\`json
{
  "macos": "php under make:model User",
  "windows": "php under make:model User",
  "linux": "php under make:model User"
}
\`\`\`

 Exemple de Modèle

\`\`\`php
<?php

namespace App\\Models;

use Under\\Database\\Model;

class User extends Model
{
    protected $table = 'users';
    
    protected $fillable = [
        'name', 'email', 'password'
    ];
    
    protected $hidden = [
        'password', 'remember_token'
    ];
    
    // Relations
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
    
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
}
\`\`\`

 Interrogation des Données

\`\`\`php
<?php

// Trouver tous les utilisateurs
$users = User::all();

// Trouver un utilisateur par ID
$user = User::find(1);

// Requête avec conditions
$activeUsers = User::where('status', 'active')
                  ->orderBy('created_at', 'desc')
                  ->limit(10)
                  ->get();

// Créer un nouvel utilisateur
$user = User::create([
    'name' => 'John Doe',
    'email' => 'john@example.com',
    'password' => bcrypt('password')
]);
\`\`\``
        }
      },
      {
        id: 'maker',
        title: { en: '🧰 Maker', fr: '🧰 Maker' },
        content: {
          en: ` Maker - Code Generator

Maker is Under's powerful code generation tool that helps you create boilerplate code quickly and consistently.

 Available Generators

\`\`\`json
{
  "macos": "php under list make",
  "windows": "php under list make",
  "linux": "php under list make"
}
\`\`\`

 Common Generators

 Controller Generator
\`\`\`json
{
  "macos": "php under make:controller ProductController",
  "windows": "php under make:controller ProductController",
  "linux": "php under make:controller ProductController"
}
\`\`\`

 Model Generator
\`\`\`json
{
  "macos": "php under make:model Product --migration",
  "windows": "php under make:model Product --migration",
  "linux": "php under make:model Product --migration"
}
\`\`\`

 Service Generator
\`\`\`json
{
  "macos": "php under make:service PaymentService",
  "windows": "php under make:service PaymentService",
  "linux": "php under make:service PaymentService"
}
\`\`\`

 Custom Templates

Create custom templates in \`stubs/\` directory:

\`\`\`php
<?php

namespace {{ namespace }};

use Under\\Core\\Service;

class {{ class }} extends Service
{
    public function handle()
    {
        // Your service logic here
    }
}
\`\`\``,
          fr: ` Maker - Générateur de Code

Maker est l'outil de génération de code puissant d'Under qui vous aide à créer du code boilerplate rapidement et de manière cohérente.

 Générateurs Disponibles

\`\`\`json
{
  "macos": "php under list make",
  "windows": "php under list make",
  "linux": "php under list make"
}
\`\`\`

 Générateurs Communs

 Générateur de Contrôleur
\`\`\`json
{
  "macos": "php under make:controller ProductController",
  "windows": "php under make:controller ProductController",
  "linux": "php under make:controller ProductController"
}
\`\`\`

 Générateur de Modèle
\`\`\`json
{
  "macos": "php under make:model Product --migration",
  "windows": "php under make:model Product --migration",
  "linux": "php under make:model Product --migration"
}
\`\`\`

 Générateur de Service
\`\`\`json
{
  "macos": "php under make:service PaymentService",
  "windows": "php under make:service PaymentService",
  "linux": "php under make:service PaymentService"
}
\`\`\`

 Templates Personnalisés

Créez des templates personnalisés dans le répertoire \`stubs/\` :

\`\`\`php
<?php

namespace {{ namespace }};

use Under\\Core\\Service;

class {{ class }} extends Service
{
    public function handle()
    {
        // Votre logique de service ici
    }
}
\`\`\``
        }
      },
      {
        id: 'component-builder',
        title: { en: '🧱 Component Builder', fr: '🧱 Component Builder' },
        content: {
          en: ` Component Builder

Component Builder allows you to create reusable, modular components that can be easily integrated across your application.

 Creating Components

\`\`\`json
{
  "macos": "php under make:component UserCard",
  "windows": "php under make:component UserCard",
  "linux": "php under make:component UserCard"
}
\`\`\`

 Component Structure

\`\`\`php
<?php

namespace App\\Components;

use Under\\Core\\Component;

class UserCard extends Component
{
    public $user;
    public $showEmail;
    
    public function __construct($user, $showEmail = true)
    {
        $this->user = $user;
        $this->showEmail = $showEmail;
    }
    
    public function render()
    {
        return view('components.user-card', [
            'user' => $this->user,
            'showEmail' => $this->showEmail
        ]);
    }
}
\`\`\`

 Using Components

\`\`\`php
<?php

// In a controller or view
$userCard = new UserCard($user, false);
echo $userCard->render();

// Or using the helper
echo component('user-card', ['user' => $user, 'showEmail' => false]);
\`\`\``,
          fr: ` Component Builder

Component Builder vous permet de créer des composants réutilisables et modulaires qui peuvent être facilement intégrés dans votre application.

 Création de Composants

\`\`\`json
{
  "macos": "php under make:component UserCard",
  "windows": "php under make:component UserCard",
  "linux": "php under make:component UserCard"
}
\`\`\`

 Structure de Composant

\`\`\`php
<?php

namespace App\\Components;

use Under\\Core\\Component;

class UserCard extends Component
{
    public $user;
    public $showEmail;
    
    public function __construct($user, $showEmail = true)
    {
        $this->user = $user;
        $this->showEmail = $showEmail;
    }
    
    public function render()
    {
        return view('components.user-card', [
            'user' => $this->user,
            'showEmail' => $this->showEmail
        ]);
    }
}
\`\`\`

 Utilisation des Composants

\`\`\`php
<?php

// Dans un contrôleur ou une vue
$userCard = new UserCard($user, false);
echo $userCard->render();

// Ou en utilisant le helper
echo component('user-card', ['user' => $user, 'showEmail' => false]);
\`\`\``
        }
      },
      {
        id: 'namespace-logic',
        title: { en: '📂 Namespace Logic', fr: '📂 Namespace Logic' },
        content: {
          en: ` Namespace Logic

Under Framework uses intelligent namespace logic for automatic class loading and organization.

 Autoloading

Under follows PSR-4 autoloading standards:

\`\`\`php
<?php

// File: app/Services/Payment/StripeService.php
namespace App\\Services\\Payment;

class StripeService
{
    // This class is automatically loaded
}
\`\`\`

 Namespace Conventions

- Controllers: \`App\\Controllers\`
- Models: \`App\\Models\`
- Services: \`App\\Services\`
- Middleware: \`App\\Middleware\`
- Components: \`App\\Components\`

 Custom Namespaces

Register custom namespaces in \`composer.json\`:

\`\`\`json
{
    "autoload": {
        "psr-4": {
            "App\\\\": "app/",
            "MyModule\\\\": "modules/MyModule/src/"
        }
    }
}
\`\`\`

Then run:

\`\`\`json
{
  "macos": "composer dump-autoload",
  "windows": "composer dump-autoload",
  "linux": "composer dump-autoload"
}
\`\`\``,
          fr: ` Logique de Namespace

Under Framework utilise une logique de namespace intelligente pour le chargement automatique et l'organisation des classes.

 Chargement Automatique

Under suit les standards PSR-4 pour le chargement automatique :

\`\`\`php
<?php

// Fichier: app/Services/Payment/StripeService.php
namespace App\\Services\\Payment;

class StripeService
{
    // Cette classe est automatiquement chargée
}
\`\`\`

 Conventions de Namespace

- Contrôleurs: \`App\\Controllers\`
- Modèles: \`App\\Models\`
- Services: \`App\\Services\`
- Middleware: \`App\\Middleware\`
- Composants: \`App\\Components\`

 Namespaces Personnalisés

Enregistrez des namespaces personnalisés dans \`composer.json\` :

\`\`\`json
{
    "autoload": {
        "psr-4": {
            "App\\\\": "app/",
            "MonModule\\\\": "modules/MonModule/src/"
        }
    }
}
\`\`\`

Puis exécutez :

\`\`\`json
{
  "macos": "composer dump-autoload",
  "windows": "composer dump-autoload",
  "linux": "composer dump-autoload"
}
\`\`\``
        }
      }
    ]
  },
  {
    id: 'advanced-topics',
    title: { en: 'Advanced Topics', fr: 'Sujets Avancés' },
    items: [
      {
        id: 'middleware',
        title: { en: 'Middleware', fr: 'Middleware' },
        content: {
          en: ` Middleware

Middleware provides a convenient mechanism for filtering HTTP requests entering your application.

 Defining Middleware

Create a middleware class:

\`\`\`php
<?php

namespace App\\Middleware;

use Under\\Http\\Middleware\\MiddlewareInterface;

class Authenticate implements MiddlewareInterface
{
    public function handle($request, $next)
    {
        if (!auth()->check()) {
            return redirect('/login');
        }
        return $next($request);
    }
}
\`\`\`

 Registering Middleware

Register middleware in \`app/Http/Kernel.php\`:

\`\`\`php
protected $middleware = [
    \App\Middleware\Authenticate::class,
];
\`\`\``,
          fr: ` Middleware

Le middleware fournit un mécanisme pratique pour filtrer les requêtes HTTP entrant dans votre application.

 Définition de Middleware

Créez une classe middleware :

\`\`\`php
<?php

namespace App\\Middleware;

use Under\\Http\\Middleware\\MiddlewareInterface;

class Authenticate implements MiddlewareInterface
{
    public function handle($request, $next)
    {
        if (!auth()->check()) {
            return redirect('/login');
        }
        return $next($request);
    }
}
\`\`\`

 Enregistrement du Middleware

Enregistrez le middleware dans \`app/Http/Kernel.php\` :

\`\`\`php
protected $middleware = [
    \App\Middleware\Authenticate::class,
];
\`\`\``
        }
      }
    ]
  }
];
