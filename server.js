let mongoose = require('mongoose');


let connectToMDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://nirmalirish1234:Nirman%4024@nirmal.p9uda40.mongodb.net/?retryWrites=true&w=majority&appName=Nirmal');
        console.log("Connected successfully");
    } catch (err) {
        console.log("Unable to Connect mdb " + err);
    }

}
connectToMDB();