'use strict';
/*
exports.hello=(user)=>{
    return "Hello "+user;
}
//the exports expresssion is a utility that prepares the function 
//to be used by the outside world
exports.goodmorning=(user)=>{
    return "Good Morning "+user;
}

module.exports=function(){//constructor function, it has to be called with an uppercase name in App.js
    return{
        hello:(user)=>{
            return "Hello "+user
        },
        goodmorning:(user)=>{
            return "Good Morning "+user
        }
    }
}
*/
const crypto=require('crypto');
const qr=require('qr-image');
const fs=require('fs');
module.exports=function(key){//constructor function, it has to be called with an uppercase name in App.js
    this.key=key; //key can be accessible to both encode and decode methods
    return{
        encode:(str)=>{
            let encoder=crypto.createCipher('aes-256-ctr',this.key);//accepts data as stream
            return encoder.update(str,'utf8','hex'); //return in hex format
        },
        decode:(str)=>{
            let decoder=crypto.createDecipher('aes-256-ctr',this.key);
        },//add qr generation
          qrgen:(data,file)=>{
            let dataToEncode=data || null;
            let outImage=file || null;
            if(dataToEncode!==null && outImage!==null){
                qr.image(dataToEncode,{
                    type:'png',
                    size:20
                }).pipe(fs.createWriteStream(outImage));
                return true;
            }else{
                return false
            }
        }
    }
}