import mongoose from "mongoose";



const DBConnection = async () => {

    const MONGO_URI = 'mongodb+srv://panwarmanish824:file_s@cluster0.ouc7b1k.mongodb.net/?retryWrites=true&w=majority';
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;