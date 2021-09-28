import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';

// This function is to ensure that the URI is scoped
// only inside these brackets and won't leak to the
// outside and it will prevent the actions in the file
// to be ran multiple times at once
export function connectMongoose() {
    // Get the URI for the database from environment file
    const URI = import.meta.env.VITE_PRIVATE_MONGO_URI;

    // Connect to mongodb
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

export function logUser() {
    const UsersSchema = new mongoose.Schema({
        username: { type: String, required: true },
        uid: { type: String, required: true }
    });

    const User = mongoose.models.Users || mongoose.model('Users', UsersSchema, 'Users');

    // User.findOne({ uid: 'ff7bbaaf-89fa-4a1e-a7ce-24042c542159' }, (err, data) => {
    //     if (err) console.error(err);

    //     if (!data) {
    //         const newUser = new User({
    //             username: 'Catalactics',
    //             uid: uuid()
    //         });

    //         newUser.save((err) => {
    //             if (err) console.error(err);
    //         });
    //     } else {
    //         console.log(data);
    //     }
    // });
}
