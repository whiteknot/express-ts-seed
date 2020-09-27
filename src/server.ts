import app from './app';
import compression from 'compression';
import helmet from 'helmet';

app.use(helmet()); // set well-known security-related HTTP headers
app.use(compression());

app.disable('x-powered-by');

const server = app.listen(3000, () => {
    console.log('ExpressJS server started on Port 3000');
});

export default server;
