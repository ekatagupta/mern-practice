// const express = require("express");
// const productsRouter = require('./Routes/productsRoutes');
// const mongoose = require('mongoose')
// const app = express();

// app.use(express.json());
// app.use('   /api/products', productsRouter);

// const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.xergjlh.mongodb.net/$_DNB_NAME_$'

// const databaseUser = 'ekata';
// const databasePassword = '1234';
// const databaseName = 'Amazonclone';

// let dblink = url.replace("$_USERNAME_$", databaseUser);
// dblink = dblink.replace("$_PASSWORD_$", databasePassword);
// dblink = dblink.replace("$_DNB_NAME_$", databaseName);

// console.log(dblink);
// mongoose.connect(dblink)
//     .then(() => console.log('---------Database-------'))
//     .catch((error) => {
//         console.log("DB not connected", error)
//     });

        

// app.listen(1500,
//     () => console.log('-----App Started------'));


const express = require("express");
const productsRouter = require('./Routes/productsRoutes'); // Assuming you have defined this router
const mongoose = require('mongoose');
const app = express();


// Middleware to parse JSON bodies
app.use(express.json()); 
app.use('/api/products', productsRouter); 


const databaseUser = 'ekata';
const databasePassword = '1234';
const databaseName = 'Amazonclone';

const url = `mongodb+srv://${databaseUser}:${databasePassword}@cluster0.xergjlh.mongodb.net/${databaseName}`;

mongoose.connect(url) 
    .then(() => console.log('---------Database connected-------'))
    .catch((error) => {
        console.log("DB connection failed", error);
    });

const port = 1500;
app.listen(port, () => console.log(`Server started on port ${port}`));
