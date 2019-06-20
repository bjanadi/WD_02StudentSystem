const Bundler = require('parcel-bundler'),
      express = require('express'),
      mongoose = require('mongoose');

const bundler = new Bundler('./public/index.html', {});
const routes = require('./app/routes/server.routes');

const app = express();


app.use(express.json());

mongoose.connect('mongodb+srv://Janadi:janadi@studentsystem-0bv5w.mongodb.net/StudentAndInstructorInformationSystem?retryWrites=true&w=majority').then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error(err);
    process.exit(-1);
});

app.use('/api', routes);

app.use(bundler.middleware());

app.use(express.static('./dist'));

app.get('/', function (req, res) {
    res.sendFile('./dist/index.html');
});

app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Application is running on port 3000');
});

