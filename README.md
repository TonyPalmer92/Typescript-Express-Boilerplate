# Typescript WebAPI

A simple JSON web server to use as a template for future projects. Built using Express & Typescript, this boilerplate project uses packages such as:

- TypeORM
- MySQL
- Helmet
- Morgan

I will continue to add and tweak this boilerplate as I gain more experience with Typescript.

## Folder Structure

| Name                     | Description                                                |
| ------------------------ | ---------------------------------------------------------- |
| **.vscode/**             | VSCode tasks, launch configuration and some other settings |
| **dist/**                | Compiled source files will be placed here                  |
| **src/**                 | Source files                                               |
| **src/api/controllers/** | REST API Controllers                                       |
| **src/api/middleware**   | Express middlewares                                        |
| **src/api/routes**       | API CRUD routes                                            |
| **src/entity**           | Customer entity classes                                    |
| **src/interfaces**       | Interface files                                            |
| **src/migration**        | TypeORM migration files                                    |
| _.index.ts_              | Main entry point                                           |
| _.server.ts_             | Main server class to initialise                            |
| _.env.example_           | Environment configuration                                  |
| _ormconfig.example.env_  | TypeORM configuration file                                 |
| _tsconfig.json_          | Typescript configuration file                              |

## Usage

### Install Dependencies

```
npm install
```

### Run

```
npm start
npm run dev:start (with Nodemon)
```

### Package

```
npm run build
```
