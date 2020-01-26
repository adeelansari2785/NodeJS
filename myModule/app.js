'use strict';

//const enigma=require('./enigma');
const Enigma=require('./enigma');//we are calling a constructor function, hence "E" in enigma is capital.
//const eng=new Enigma(); //created an instance of the enigma model
//console.log(eng.hello("Dave"));
//console.log(eng.goodmorning("Dave"));
const eng=new Enigma('magrathea');//pass the parameter as 'key'
let encodeString=eng.encode("Dont't Panic!");
let decodeString=eng.decode(encodeString);
console.log("Encoded: ",encodeString);
console.log("Decoded: ",decodeString);

let qr=eng.qrgen("http://www.npjs.com","outImage.png");

qr ? console.log('QR code created!'): console.log('QR code failed!'); 