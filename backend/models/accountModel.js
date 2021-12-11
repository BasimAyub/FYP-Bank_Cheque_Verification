const mongoose = require("mongoose");

const accountSchema = mongoose.Schema(
  {
    accountName:{
        type: String,
        required: true
    },
    accountNumber:{
        type: String,
        required: true
    },
    bankName:{
        type: String,
        required: true
    },
    branchNumber:{
        type: String,
        required: true
    },
    accountStatus:{
        type: String,
        required: true
    },
    customerId:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    balance:{
        type: String,
        required: true,
        default: "5000"
    },
    accountStatus:{
        type: String,
        require: true,
        default: "active"
    }
  }
);



const account = mongoose.model("Account", userSchema);

module.exports = account;
