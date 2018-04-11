# Kaon example
an [kaon](https://github.com/abramstyle/kaon) example.

# getting started

install dependencies

```bash
yarn
yarn run dev
```
Then open your browser and go to [localhost:1827](http://localhost:1827). This page is rendered by kaon. If you edit some code, the server will automatically reload, ant the client will hot reload.

# server side data fetching
You should start an data server, or you can fetch from [Github GraphQL API v4 ](https://developer.github.com/).

## local data server
Just run `yarn run db`.

Then you can access data at [localhost:1090](http://localhost:1090);

Fake data is provided by [faker](https://github.com/Marak/faker.js) and served by [json-server](https://github.com/typicode/json-server).

## how to prevent load data from client if thie page is rendered at server side?
At this example, You should check if the current page equals '1'.

```js
componentDidMount() {
  const { posts } = this.props;
  if (posts.get('page') === 1) {
    this.loadPosts();
  }
}
```

Because the reducer will increase page after fetched the data of the first page.

# run in production mode.

```bash
# Build in production mode.
yarn run build
# start prod server
yarn run prod
```

Then open browser and goto [localhost:1827](http://localhost:1827).

If you have installed "React Developer Tools", then click it, you shoud see this:

![production mode](https://d.pr/i/uYfmTy+)
