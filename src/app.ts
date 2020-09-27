import express, { NextFunction, Request, Response } from 'express';

// routers
import root from './routes/root';

const app = express()

// use routers
app.use('/', root);

// catch 404
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send('Not Found');
});

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // probably should have logging of some sort here
  res.status(500).send('Internal Server Error');
});

export default app;
