import express from 'express';
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import { StaticRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

// import App from './client';

// import createStore from './stores';


const app = express();
app.use('/assets', express.static('./dist'));

app.get('*', async (req, res) => {
    // const context = {};

    // let store = createStore();

    // const appWithRouter = (
    //   <Provider store={store.store}>
    //     <StaticRouter location={req.url} context={context}>
    //       <App />
    //     </StaticRouter>
    //   </Provider>
    // );

    // if (context.url) {
    //     res.redirect(context.url);
    //     return;
    // }

    // const html = ReactDOMServer.renderToString(appWithRouter);

    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                <link rel="icon" type="image/png" href="/assets/favicon.ico" />
            </head>
            <body>
                <div id="app">
                </div>
                <script src="/assets/assets/app.js"></script>
            </body>
        </html>
    `);
});

app.listen(8000, () => console.log('Demo app listening on port 3000'));