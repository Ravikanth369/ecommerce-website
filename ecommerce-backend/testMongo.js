const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://Ravikanth@369:Ravikanth_369@cluster0.mongodb.net/ecommerceDB?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("✅ MongoDB Connected Successfully!");
    process.exit();
}).catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
});
