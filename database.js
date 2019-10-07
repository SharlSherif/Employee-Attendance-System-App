const mongoose = require('mongoose');

// mongoDB conection
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, }) // DeprecationWarning solved
    .then(() => {
        console.log('connected to database');
    })
    .catch(() => {
        console.log('failed to connect to database');
        // mongoose.connect("mongodb://localhost:27017/ptp")
        //   .then(() => {
        //     console.log('connected to local database')
        //   })
        //   .catch(() => {
        //     console.log('failed to connect to local database')
        //   })
    });
