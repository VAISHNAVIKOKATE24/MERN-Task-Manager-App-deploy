const mongoose = require('mongoose');

const DB_URL = process.env.MONGO_URI || "mongodb://localhost:27017/taskdb";

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('✅ MongoDB Connected...');
})
.catch((err) => {
    console.error('❌ MongoDB Conn Error:', err);
});
