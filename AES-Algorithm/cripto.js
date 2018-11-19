class MessageScheduler{
    constructor(message, isHex){
        this.message128 = new Array();

        if(isHex){
            let temp = '';
            for(let i = 0; i < message.length; i+=2)
                temp += String.fromCharCode(parseInt(message.slice(i, i + 2), 16));
                
            message = temp;
        }

        for(let i = 0; i < message.length; i += 16){
            this.message128[i / 16] = '';
            for(let j = 0; j < 16; j++){
                this.message128[i / 16] += message[i + j] == undefined ? ' ' : message[i + j];               
            }        
        }
    }

    encrypt(key){
        let aes = new AES();
        let criptMessage = '';
        let rCipher;

        for(let i in this.message128){
            rCipher = aes.cipher(this.message128[i], key);
            this.message128[i] = '';
            
            rCipher.forEach((item) => {
                this.message128[i] += item.byte;  
                criptMessage += item.charCode16.padStart(2, '0');
            });
        } 

        return criptMessage;
    }

    decrypt(key){
        let aes = new AES();
        let decryptMessage = '';
        let rInvCipher;

        for(var i in this.message128){
            rInvCipher = aes.invCipher(this.message128[i], key) 
            this.message128[i] = '';
            
            rInvCipher.forEach((item) => {
                this.message128[i] += item.byte;  
                decryptMessage += item.byte;
            });
        } 

        return decryptMessage.trim();
    }
}