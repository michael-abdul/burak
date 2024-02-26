import mongoose, {Schema} from "mongoose";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";
//Schmema first & Code first
const memberSchema = new Schema({
    memberType: {
        type: String,
        enum: MemberType,
        default:MemberType.USER
    },

    memberStatus: {
        type: String,
        enum: MemberStatus,
        default: MemberStatus.ACTIVE
    },

    memberNick: {
        type: String,
        index: {unique:true,  sparse:true},
        required: true,
    },

    memberPhone: {
        type: String,
        index: {unique:true,  sparse:true},
        required: true,
    },

    memberPasswoed:{
        type: String,
        select: false,
        required: true
    },

    memberAdress:{
        type: String,
        
    },
    memberDesc:{
        type: String,
       
    },
    memberImage:{
        type: String,
       
    },
    memberPoints:{
        type: String,
        default:0,
       
    },
    },
    { timestamps: true} // updatedAt, createdAt


);

export default mongoose.model('Member', memberSchema);