const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://Gayathrie:Gaya012112@cluster0.puwrjqv.mongodb.net/contact',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log("Mongodb connected");
        else console.log("Connection error :" + err);
    }
)
