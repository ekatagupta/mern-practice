const express = require('express');
const fs = require('fs');
const fsPromises = fs.promises;
const app = express();

app.use(express.json());

app.post('/api/products', async (req, res) => {
    const data = req.body;

    try {
        const db = await fsPromises.readFile("./data.json");
        const arr = JSON.parse(db);
        const len = arr.length;

        if (len === 0) {
            data.id = 1;
            arr.push(data);
        } else {
            const newProduct = data;
            newProduct.id = arr[len - 1].id + 1;
            arr.push(newProduct);
        }

        await fsPromises.writeFile("./data.json", JSON.stringify(arr)); // Write updated data back to the file system

        res.status(200).send('Work in progress, smknksnk');
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(1300, () => {
    console.log('Server is running on port 1300');
});


























