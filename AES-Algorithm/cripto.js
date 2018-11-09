class MessageScheduler{
    constructor(message){
        this.message128 = new Array();

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
                criptMessage += item.charCode16;
            });
        } 

        return criptMessage;
    }

    decrypt(password){
        let aes = new AES();
        let decryptMessage = '';

        for(var i in this.message128){
            aes = new AES(this.message128[i].join(''), password);
            this.message128[i] = '';
            aes.output.forEach((item) => {
                this.message128[i] += item.byte;  
                criptMessage += item.charCode16;
                j++;
            });
        } 

        return criptMessage;
    }
}