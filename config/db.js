const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://dhaval:dhavalnode@cluster0.lpariun.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log(`Database Successfully Connected`)
}).catch(() => {
    console.log(`Database connection Failed`)
});