import app from './app';

const port = app.get('port');

app.listen(port, () => {
  console.log(`App is on http://localhost:${port}`);
});
