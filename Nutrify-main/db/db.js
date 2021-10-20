var mongoose = require('mongoose');
console.log('connection process 2');
mongoose.connect("mongodb+srv://rajib:ammabba123@cluster0.hqbfn.mongodb.net/nutrify?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    console.log('successfully connect to database');
}).catch((err)=>{
    console.error('error connecting to database...', err);
})

var usersSchema = new mongoose.Schema({
    username : {
        type : String,
        required : "Required",
        index : { unique: true }
    },
    email : {
        type : String,
        required : "Required",
        index : { unique: true }
    },
    password : {
        type : String,
        required : "Required"
    },
    calorie : {
        type : String,
    },
    meals : { 
        type : Array,
        default : []
    },
    isAdmin : { 
        type: Boolean, 
        default: false 
    }
});

mongoose.model("users", usersSchema);