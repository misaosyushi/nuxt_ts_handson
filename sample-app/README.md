# 環境構築手順

### nodeイメージをビルド

`docker-compose build`

### コンテナ起動

`docker-compose up -d`

### コンテナに入る

`docker-compose exec front /bin/ash`

### Nuxt起動

```
cd sample-app/
yarn
yarn dev
```

### 下記URLにアクセス

http://localhost:3002/



# sample-app

> Nuxt &amp; TS handson

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
