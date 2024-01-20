import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('Mongoose already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
            useUnifiedTopology: true,
            useNewUrlParser: true,
            w: 'majority',  // Correct write concern configuration
        });

        console.log('MongoDB connected');
        isConnected = true;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

