# TS React Base

- [x] React
- [x] Typescript
- [x] Reach Router
- [x] Styled Components
- [x] Ant.d
- [x] Axios
- [x] Code Coverage
- [x] Docker containers
- [x] Prettier
- [x] ESlint
- [x] Stylelint
- [x] Hooks

# DEV environment

DEV environment will be available on http://localhost:3000

## Start

### Docker
```shell
    docker-compose up -d --build
```

### Yarn
```shell
    yarn install && yarn start
```

## Stop

To stop it use:
```shell
    docker-compose down
```

# PROD environment

PROD environment will be available on http://localhost:8080.
Docker container for PROD is making usage of nginx.

## Start

```shell
    docker-compose -f docker-compose-prod.yaml up -d --build
```

## Stop

To stop it use:

```shell
    docker-compose down
```

# Lint

You can lint your code by running:

```shell
    yarn lint:code
```

You can lint your CSS by running:

```shell
    yarn lint:css
```

or both:
```shell
    yarn lint
```