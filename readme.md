## AppRun + Ant Design Pro Components

This site is built with [AppRun-Site](https://github.com/yysun/apprun-site) and [Ant Design ProComponents](https://procomponents.ant.design).

It has the following structure:

```
/api                <- backend code
  /comic.js         <- demo API
/pages              <- fronet end code
  /index.html       <- main page, load in the browser
  /index.tsx        <- home page
  /about
    /index.tsx      <- about page
  /contact
    /index.tsx      <- contact page
  /components
    /comic.tsx      <- demo component
    /layout.tsx     <- layout component
  /main.tsx         <- start up code, renders the layout
/public             <- generated site for production
/server.js          <- generated server
```

You can add pages under the `pages` directory by creating sub-directories and add an `index.tsx` in it.

Then, you can use:

* _npm start_ to start the dev server
* _npm run dev_ to start building in watch mode
* _npm run build_ to build for production

Note: AppRun-Site does not support React live refresh yet. You will need to refresh the browser to see the changes.

Also, Ant Design ProComponents does not support server-side rendering (SSR). SSR is disabled in the `server.js` file.

```js
import server from 'apprun-site/server.js';
const port = process.env.PORT || 8080;
const app = server({ no_ssr: true });
app.listen(port, () => console.log(`Your app is listening on http://localhost:${port}`));
```

Have fun anyway!

