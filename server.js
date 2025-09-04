const express = require('express');
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
const productRouter = require('./router/productRouter');

app.use('/',(req,res)=>{
    res.send('Hello')
})
 
app.use('/product', productRouter);

app.use(express.static(path.join(__dirname, 'Views')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
