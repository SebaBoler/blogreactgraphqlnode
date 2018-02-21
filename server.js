import Express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema';
import config from "./config";

const APP_PORT = config.port;

const app = Express();

app.use('/graphql', GraphHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
}));

app.listen(APP_PORT, () => {
    console.log(`Server working on port:  ${APP_PORT}`);
});