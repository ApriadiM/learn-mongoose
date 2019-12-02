const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const todoSchema = new Schema({
     todo: {
         type: String,
         required: true
     },
     status:{
         type: Boolean,
         required: true,
         default: false
     },
     email: {
        type: String,
        required: true
     },
     user:{
         type: Schema.Types.ObjectId,
         ref: "users"
     }
});

const Todos = moongoose.model("todos", todoSchema);

module.exports = Todos;