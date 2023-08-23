import mongoose  from 'mongoose';

const Connection = async (username = 'user1', password = 'user123') => {
    const URL = `mongodb://${username}:${password}@ac-i1u31ry-shard-00-00.mvyktq2.mongodb.net:27017,ac-i1u31ry-shard-00-01.mvyktq2.mongodb.net:27017,ac-i1u31ry-shard-00-02.mvyktq2.mongodb.net:27017/?ssl=true&replicaSet=atlas-14bgfc-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;