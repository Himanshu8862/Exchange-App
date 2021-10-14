import mongoose from "mongoose";

const panelSchema = mongoose.Schema({
    author: String,
    date:{
        type: new Date(),
    },
    // time:{
    //     type: new time(),
    // },
    post: String,
    comments: Array,
});

const Discuss = mongoose.model('Discuss', panelSchema);
export default Discuss;