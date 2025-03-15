import express from 'express';
import mongoose from 'mongoose';
import { urlShort,redirectUrl } from './Controllers/url.js';


const app = express();
const PORT = 3000;

    app.use(express.urlencoded({ extended: false }));

     mongoose.connect(`mongodb://localhost:27017/`
        , {
            dbName: 'URL',
        }
     )
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.log(err);
    });

    app.get('/',(req,res)=>{
        res.render('server.ejs',{shortUrl:null});
    })


    //handle url submit
    app.post('/shorten',urlShort);


    // redirect to original url using shortUrl
    app.get('/:shortCode',redirectUrl);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });