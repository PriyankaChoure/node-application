import app from './app.js';
import mongoose from 'mongoose';
import { config } from './src/configs/config.js';
app.get('/', function (req, res) {
  res.send('Hello World!');
});
mongoose.connect(config.MONGOCONFIG.URL,)
  .then(() => {
    console.info('successfully connected to Database');
    app.listen(config.PORT, function () {
      console.log(`Example app listening on port ${config.PORT}!`);
    });

  })
  .catch(err => console.info(err));
