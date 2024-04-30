
// /*

// const express = require('express');
// const app = express();

// app.use(express.json());

// const fsPromise = require('fs').promises;




// app.get('/api/users', async (req, res) => {
//     try {
//         const data = await fsPromise.readFile('./data.json', 'utf8');
//         const arr = JSON.parse(data);
//         res.status(200).json({
//             status: 'success',
//             message: 'Route is not yet implemented',
//             data: arr // Optionally, you can send the retrieved data
//         });
//     } catch (err) {
//         res.status(500).json({
//             status: 'error',
//             message: 'Internal Server Error',
//             error: err.message
//         });
//     }
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// app.put('/api/users', async (req, res) => {
//     try {
//         const data = await fsPromise.readFile('./data.json', 'utf8');
//         const arr = JSON.parse(data);
//         res.status(200).json({
//             status: 'success',
//             message: 'Route is not yet implemented',
//             data: arr // Optionally, you can send the retrieved data
//         });
//     } catch (err) {
//         res.status(500).json({
//             status: 'error',
//             message: 'Internal Server Error',
//             error: err.message
//         });
//     }
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


// app.delete('/api/users', async (req, res) => {
//     try {
//         const data = await fsPromise.readFile('./data.json', 'utf8');
//         const arr = JSON.parse(data);
//         res.status(200).json({
//             status: 'success',
//             message: 'Route is not yet implemented',
//             data: arr // Optionally, you can send the retrieved data
//         });
//     } catch (err) {
//         res.status(500).json({
//             status: 'error',
//             message: 'Internal Server Error',
//             error: err.message
//         });
//     }
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


// app.post('/api/users', async (req, res) => {
//     try {
//         const data = await fsPromise.readFile('./data.json', 'utf8');
//         const arr = JSON.parse(data);
//         res.status(200).json({
//             status: 'success',
//             message: 'Route is not yet implemented',
//             data: arr // Optionally, you can send the retrieved data
//         });
//     } catch (err) {
//         res.status(500).json({
//             status: 'error',
//             message: 'Internal Server Error',
//             error: err.message
//         });
//     }
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// */


// const express = require('express');
// const fsPromise = require('fs').promises;



// const app = express();


// app.use((req, res, next)=>{

// });

// const productRouter = express.Router();
// const userRouter = express.Router();

// app.use('/api/products',productRouter);
// app.use('/api/products',userRouter);

// productRouter.route('/')
// .get(productController.getAllProducts)
// .post(productController.addProducts)

// productRouter.route('/')
// .put(productController.replaceProducts)
// .delete(productController.deleteProducts)



// //userRouter
// // app.route('/api/products')
// // .get(productController.getAllProducts)
// // .post(productController.addProducts);

// // app.route('/api/products/:id')
// // .put(productController.replaceProducts)
// // .delete(productController.deleteProducts);

// // app.route('/api/products')
// // .get(usersController.getUser)
// // .put(userController.adduser)
// // .post(userController.replaceuser)
// // .delete(userController.deleteuser)

// // app.listen(1400);


const express = require('express');
const fsPromise = require('fs/promises')
;
const productrouter = require('./routes/productroute.js');

const app = express();

app.use(express.json());

app.use('/api/products',productrouter);







