
export interface DocSection {
  id: string;
  title: string;
  items: DocItem[];
}

export interface DocItem {
  id: string;
  title: string;
  content?: string;
  subsections?: DocSubsection[];
}

export interface DocSubsection {
  id: string;
  title: string;
  content: string;
}

export const documentationData: DocSection[] = [
  {
    id: "prologue",
    title: "Prologue",
    items: [
      {
        id: "release-notes",
        title: "Release Notes",
        content: `
# Release Notes

Laravel follows semantic versioning. Major framework releases are released every six months (~February and ~August), while minor and patch releases may be released as often as every week. Minor and patch releases should never contain breaking changes.

## Versioning Scheme

Laravel and its other first-party packages follow Semantic Versioning. Major framework releases are released every six months (~February and ~August), while minor and patch releases may be released as often as every week. Minor and patch releases should **never** contain breaking changes.

When referencing the Laravel framework or its components from your application or package, you should always use a version constraint such as \`^10.0\`, since major releases of Laravel do include breaking changes.

## Support Policy

For LTS releases, such as Laravel 9, bug fixes are provided for 2 years and security fixes are provided for 3 years. These releases provide the longest window of support and maintenance. For general releases, bug fixes are provided for 18 months and security fixes are provided for 2 years.

## Laravel 10

Laravel 10 continues the improvements made in Laravel 9.x by introducing argument and return types to all application skeleton methods, as well as all stub files used to generate classes throughout the framework.
        `
      },
      {
        id: "upgrade-guide",
        title: "Upgrade Guide",
        content: `
# Upgrade Guide

## Upgrading To 10.0 From 9.x

### Estimated Upgrade Time: 10 - 15 Minutes

We attempt to document every possible breaking change. Since some of these breaking changes are in obscure parts of the framework, only a portion of these changes may actually affect your application.

### Updating Dependencies

**Likelihood Of Impact: High**

#### PHP 8.1.0 Required

Laravel now requires PHP 8.1.0 or greater.

#### Composer Dependencies

You should update the following dependencies in your application's \`composer.json\` file:

- \`laravel/framework\` to \`^10.0\`
- \`nunomaduro/collision\` to \`^7.0\`
- \`phpunit/phpunit\` to \`^10.0\`
- \`spatie/laravel-ignition\` to \`^2.0\`
        `
      },
      {
        id: "contribution-guide",
        title: "Contribution Guide",
        content: `
# Contribution Guide

## Bug Reports

To encourage active collaboration, Laravel strongly encourages pull requests, not just bug reports. Pull requests will only be reviewed when marked as "ready for review" (not in the "draft" state) and all tests for new features are passing. Lingering, non-active pull requests left in the "draft" state will be closed after a few days.

However, if you file a bug report, your issue should contain a title and a clear description of the issue. You should also include as much relevant information as possible and a code sample that demonstrates the issue.

## Core Development Discussion

You may propose new features or improvements of existing Laravel behavior in the Laravel framework repository's GitHub discussion board. If you propose a new feature, please be willing to implement at least some of the code that would be needed to complete the feature.
        `
      }
    ]
  },
  {
    id: "getting-started",
    title: "Getting Started",
    items: [
      {
        id: "installation",
        title: "Installation",
        content: `
# Installation

## Meet Laravel

Laravel is a web application framework with expressive, elegant syntax. A web framework provides a structure and starting point for creating your application, allowing you to focus on creating something amazing while we sweat the details.

Laravel strives to provide an amazing developer experience while providing powerful features such as thorough dependency injection, an expressive database abstraction layer, queues and scheduled jobs, unit and integration testing, and more.

## Your First Laravel Project

Before creating your first Laravel project, you should ensure that your local machine has PHP and Composer installed. If you are developing on macOS, PHP and Composer can be installed via Homebrew. In addition, we recommend installing Node and NPM.

After you have installed PHP and Composer, you may create a new Laravel project via the Composer \`create-project\` command:

\`\`\`bash
composer create-project laravel/laravel example-app
\`\`\`

Or, you may create new Laravel projects by globally installing the Laravel installer via Composer:

\`\`\`bash
composer global require laravel/installer

laravel new example-app
\`\`\`
        `
      },
      {
        id: "configuration",
        title: "Configuration",
        content: `
# Configuration

## Introduction

All of the configuration files for the Laravel framework are stored in the \`config\` directory. Each option is documented, so feel free to look through the files and get familiar with the options available to you.

These configuration files allow you to configure things like your database connection information, your mail server information, as well as various other core configuration values such as your application timezone and encryption key.

## Environment Configuration

It is often helpful to have different configuration values based on the environment where the application is running. For example, you may wish to use a different cache driver locally than you do on your production server.

To make this a cinch, Laravel utilizes the DotEnv PHP library. In a fresh Laravel installation, the root directory of your application will contain a \`.env.example\` file that defines many common environment variables. During the Laravel installation process, this file will automatically be copied to \`.env\`.
        `
      },
      {
        id: "directory-structure",
        title: "Directory Structure",
        content: `
# Directory Structure

## Introduction

The default Laravel application structure is intended to provide a great starting point for both large and small applications. But you are free to organize your application however you like. Laravel imposes almost no restrictions on where any given class is located - as long as Composer can autoload the class.

## The Root Directory

### The App Directory

The \`app\` directory contains the core code of your application. We'll explore this directory in more detail soon; however, almost all of the classes in your application will be in this directory.

### The Bootstrap Directory

The \`bootstrap\` directory contains the \`app.php\` file which bootstraps the framework. This directory also houses a \`cache\` directory which contains framework generated files for performance optimization such as the route and services cache files.

### The Config Directory

The \`config\` directory, as the name implies, contains all of your application's configuration files. It's a great idea to read through all of these files and familiarize yourself with all of the options available to you.
        `
      }
    ]
  },
  {
    id: "architecture",
    title: "Architecture Concepts",
    items: [
      {
        id: "request-lifecycle",
        title: "Request Lifecycle",
        content: `
# Request Lifecycle

## Introduction

When using any tool in the "real world", you feel more confident if you understand how that tool works. Application development is no different. When you understand how your development tools function, you feel more comfortable and confident using them.

The goal of this document is to give you a good, high-level overview of how the Laravel framework works. By getting to know the overall framework better, everything feels less "magical" and you will be more confident building your applications.

## Lifecycle Overview

### First Things

The entry point for all requests to a Laravel application is the \`public/index.php\` file. All requests are directed to this file by your web server (Apache / Nginx) configuration. The \`index.php\` file doesn't contain much code. Rather, it is a starting point for loading the rest of the framework.

The \`index.php\` file loads the Composer generated autoloader definition, and then retrieves an instance of the Laravel application from \`bootstrap/app.php\` script. The first action taken by Laravel itself is to create an instance of the application / service container.
        `
      },
      {
        id: "service-container",
        title: "Service Container",
        content: `
# Service Container

## Introduction

The Laravel service container is a powerful tool for managing class dependencies and performing dependency injection. Dependency injection is a fancy phrase that essentially means this: class dependencies are "injected" into the class via the constructor or, in some cases, "setter" methods.

Let's look at a simple example:

\`\`\`php
<?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Repositories\\UserRepository;
use App\\Models\\User;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct(
        protected UserRepository $users,
    ) {}

    /**
     * Show the profile for the given user.
     */
    public function show(string $id): View
    {
        $user = $this->users->find($id);

        return view('user.profile', ['user' => $user]);
    }
}
\`\`\`

In this example, the \`UserController\` needs to retrieve users from a data source. So, we will **inject** a service that is able to retrieve users.
        `
      },
      {
        id: "service-providers",
        title: "Service Providers",
        content: `
# Service Providers

## Introduction

Service providers are the central place of all Laravel application bootstrapping. Your own application, as well as all of Laravel's core services, are bootstrapped via service providers.

But, what do we mean by "bootstrapped"? In general, we mean **registering** things, including registering service container bindings, event listeners, middleware, and even routes. Service providers are the central place to configure your application.

If you open the \`config/app.php\` file included with Laravel, you will see a \`providers\` array. These are all of the service provider classes that will be loaded for your application. Note that many of these are "deferred" providers, meaning they will not be loaded on every request, but only when the services they provide are actually needed.

## Writing Service Providers

All service providers extend the \`Illuminate\\Support\\ServiceProvider\` class. Most service providers contain a \`register\` and a \`boot\` method. Within the \`register\` method, you should **only bind things into the service container**. You should never attempt to register any event listeners, routes, or any other piece of functionality within the \`register\` method.
        `
      }
    ]
  },
  {
    id: "basics",
    title: "The Basics",
    items: [
      {
        id: "routing",
        title: "Routing",
        content: `
# Routing

## Basic Routing

The most basic Laravel routes accept a URI and a closure, providing a very simple and expressive method of defining routes and behavior without complicated routing configuration files:

\`\`\`php
use Illuminate\\Support\\Facades\\Route;

Route::get('/greeting', function () {
    return 'Hello World';
});
\`\`\`

### The Default Route Files

All Laravel routes are defined in your route files, which are located in the \`routes\` directory. These files are automatically loaded by your application's \`App\\Providers\\RouteServiceProvider\`. The \`routes/web.php\` file defines routes that are for your web interface. These routes are assigned the \`web\` middleware group, which provides features like session state and CSRF protection.

### Available Router Methods

The router allows you to register routes that respond to any HTTP verb:

\`\`\`php
Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);
\`\`\`
        `
      },
      {
        id: "middleware",
        title: "Middleware",
        content: `
# Middleware

## Introduction

Middleware provide a convenient mechanism for inspecting and filtering HTTP requests entering your application. For example, Laravel includes a middleware that verifies the user of your application is authenticated. If the user is not authenticated, the middleware will redirect the user to your application's login screen. However, if the user is authenticated, the middleware will allow the request to proceed further into the application.

Additional middleware can be written to perform a variety of tasks besides authentication. For example, a logging middleware might log all incoming requests to your application. There are several middleware included in the Laravel framework, including middleware for authentication and CSRF protection. All of these middleware are located in the \`app/Http/Middleware\` directory.

## Defining Middleware

To create a new middleware, use the \`make:middleware\` Artisan command:

\`\`\`bash
php artisan make:middleware EnsureTokenIsValid
\`\`\`

This command will place a new \`EnsureTokenIsValid\` class within your \`app/Http/Middleware\` directory.
        `
      },
      {
        id: "controllers",
        title: "Controllers",
        content: `
# Controllers

## Introduction

Instead of defining all of your request handling logic as closures in your route files, you may wish to organize this behavior using "controller" classes. Controllers can group related request handling logic into a single class. For example, a \`UserController\` class might handle all incoming requests related to users, including showing, creating, updating, and deleting users. By default, controllers are stored in the \`app/Http/Controllers\` directory.

## Writing Controllers

### Basic Controllers

Let's take a look at an example of a basic controller. Note that the controller extends the base controller class included with Laravel: \`App\\Http\\Controllers\\Controller\`:

\`\`\`php
<?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Models\\User;
use Illuminate\\View\\View;

class UserController extends Controller
{
    /**
     * Show the profile for a given user.
     */
    public function show(string $id): View
    {
        return view('user.profile', [
            'user' => User::findOrFail($id)
        ]);
    }
}
\`\`\`
        `
      }
    ]
  }
];

export const searchDocumentation = (query: string): DocItem[] => {
  if (!query.trim()) return [];
  
  const results: DocItem[] = [];
  const searchTerm = query.toLowerCase();
  
  documentationData.forEach(section => {
    section.items.forEach(item => {
      if (
        item.title.toLowerCase().includes(searchTerm) ||
        item.content?.toLowerCase().includes(searchTerm)
      ) {
        results.push(item);
      }
    });
  });
  
  return results.slice(0, 10); // Limit results
};
