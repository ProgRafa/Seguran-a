class Byte{
    constructor(stream){
        this.byte = stream.toString().split('');
        this.bits = '';
        this.byLen = this.byte.length;

        this.encodeBinaryType();
    }

    encodeBinaryType(){
        for(let i = 0; i < this.byte.length; i++){
            this.bits += this.byte[i].charCodeAt().toString(2).padStart(8, '0');
        }

        this.biLen = this.bits.length;
    }
}

class AES{
    constructor(message, password){
        this.secret = new Byte(message);
        this.key = new Byte(password);
        this.blocKey128 = new Array();
        this.blockMessage128 = new Array();
        
        let x = 0;

        for(let i = 0; i < 4; i++){
            this.blocKey128[i] = new Array();
            this.blockMessage128[i] = new Array();

            for(let j = 0; j < 4; j++){
                this.blocKey128[i][j] = this.key.bits.slice(x, x + 8);
                this.blockMessage128[i][j] = this.secret.bits.slice(x, x + 8);
                x += 8;
            }    
        }
    }

    addRoundKey(){

    }

    subBytes(){

    }

    shiftRows(){

    }

    mixColumns(){

    }

    encodeAES(){

    }

    decodeAES(){

    }
}

window.onload = function(){
    teste = new AES('abcdefghijklmnop', 1234567890123456);

    console.log(teste);
}