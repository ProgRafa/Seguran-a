class SBOX{
    static aesBox(){
        let sbox = [
            0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76,
            0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0,
            0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15,
            0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75,
            0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84,
            0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf,
            0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8,
            0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2,
            0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73,
            0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb,
            0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79,
            0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08,
            0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a,
            0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e,
            0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf,
            0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16,
        ]; 
        
        for(var i in sbox)
            sbox[i] = new Char(String.fromCharCode(sbox[i]))

        return sbox;
    }

    static aesInvBox(){
        let invBox =  [
            0x52, 0x09, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb,             
            0x7c, 0xe3, 0x39, 0x82, 0x9b, 0x2f, 0xff, 0x87, 0x34, 0x8e, 0x43, 0x44, 0xc4, 0xde, 0xe9, 0xcb,             
            0x54, 0x7b, 0x94, 0x32, 0xa6, 0xc2, 0x23, 0x3d, 0xee, 0x4c, 0x95, 0x0b, 0x42, 0xfa, 0xc3, 0x4e,
            0x08, 0x2e, 0xa1, 0x66, 0x28, 0xd9, 0x24, 0xb2, 0x76, 0x5b, 0xa2, 0x49, 0x6d, 0x8b, 0xd1, 0x25,
            0x72, 0xf8, 0xf6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xd4, 0xa4, 0x5c, 0xcc, 0x5d, 0x65, 0xb6, 0x92,
            0x6c, 0x70, 0x48, 0x50, 0xfd, 0xed, 0xb9, 0xda, 0x5e, 0x15, 0x46, 0x57, 0xa7, 0x8d, 0x9d, 0x84, 
            0x90, 0xd8, 0xab, 0x00, 0x8c, 0xbc, 0xd3, 0x0a, 0xf7, 0xe4, 0x58, 0x05, 0xb8, 0xb3, 0x45, 0x06,
            0xd0, 0x2c, 0x1e, 0x8f, 0xca, 0x3f, 0x0f, 0x02, 0xc1, 0xaf, 0xbd, 0x03, 0x01, 0x13, 0x8a, 0x6b,
            0x3a, 0x91, 0x11, 0x41, 0x4f, 0x67, 0xdc, 0xea, 0x97, 0xf2, 0xcf, 0xce, 0xf0, 0xb4, 0xe6, 0x73,
            0x96, 0xac, 0x74, 0x22, 0xe7, 0xad, 0x35, 0x85, 0xe2, 0xf9, 0x37, 0xe8, 0x1c, 0x75, 0xdf, 0x6e,
            0x47, 0xf1, 0x1a, 0x71, 0x1d, 0x29, 0xc5, 0x89, 0x6f, 0xb7, 0x62, 0x0e, 0xaa, 0x18, 0xbe, 0x1b,
            0xfc, 0x56, 0x3e, 0x4b, 0xc6, 0xd2, 0x79, 0x20, 0x9a, 0xdb, 0xc0, 0xfe, 0x78, 0xcd, 0x5a, 0xf4,             
            0x1f, 0xdd, 0xa8, 0x33, 0x88, 0x07, 0xc7, 0x31, 0xb1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xec, 0x5f,
            0x60, 0x51, 0x7f, 0xa9, 0x19, 0xb5, 0x4a, 0x0d, 0x2d, 0xe5, 0x7a, 0x9f, 0x93, 0xc9, 0x9c, 0xef,
            0xa0, 0xe0, 0x3b, 0x4d, 0xae, 0x2a, 0xf5, 0xb0, 0xc8, 0xeb, 0xbb, 0x3c, 0x83, 0x53, 0x99, 0x61, 
            0x17, 0x2b, 0x04, 0x7e, 0xba, 0x77, 0xd6, 0x26, 0xe1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0c, 0x7d, 
        ];

        for(var i in invBox)
            invBox[i] = new Char(String.fromCharCode(invBox[i]))

        return invBox;
    }

    static aesRCon(){
        let rcon = [ 
            [ 0x00, 0x00, 0x00, 0x00 ],
            [ 0x01, 0x00, 0x00, 0x00 ],
            [ 0x02, 0x00, 0x00, 0x00 ],
            [ 0x04, 0x00, 0x00, 0x00 ],
            [ 0x08, 0x00, 0x00, 0x00 ],
            [ 0x10, 0x00, 0x00, 0x00 ],
            [ 0x20, 0x00, 0x00, 0x00 ],
            [ 0x40, 0x00, 0x00, 0x00 ],
            [ 0x80, 0x00, 0x00, 0x00 ],
            [ 0x1b, 0x00, 0x00, 0x00 ],
            [ 0x36, 0x00, 0x00, 0x00 ] 
        ];

        return rcon;
    }
}

class AES{
    constructor(message, password){
        
        let state = new Array(); // cópia da mensagem, a cifra será feita nele 
        let nb = 4; // tamanho do bloco da word baseado no algoritmo aes fixo em 128 bits
        let nk = password.length / 4; // tamanho do bloco da chave que pode ser 128, 192 ou 256 bits
        this.output;

        let key = this.keyExpansion(password, nb, nk);

        //state copia a mensagem para um array de char
        for(var i in message)
            state.push(new Char(message[i]));

         //state copia a mensagem para um array de char
        for(var i in key){
            for(var j in key[i])
                key[i][j] = new Char(key[i][j].toString());    
        }
        this.tState = state;
        this.tKey = key;
        //this.cipher(state, key, nb, nk, 1);
    }
    
    cipher(state, key, nb, nk){
        let nr = nb + nk + 2;

        state = this.addRoundKey(state, key, nb, 0);

        for(let round = 1; round < 3/*nr + 1*/; round++){
            console.log(state);
            state = this.subBytes(state);
            state = this.shiftRows(state, nb);
            state = this.mixColunms(state, nb);
            state = this.addRoundKey(state, key, nb, round);
        }

        //final round
        state = this.subBytes(state);
        state = this.shiftRows(state, nb);
        state = this.addRoundKey(state, key, nb, 2);

        this.output = state;
    }
    
    invCipher(cipher, key, nk, nb){
        let nr = nb + nk + 2;
        console.log(cipher);
        cipher = this.addRoundKey(cipher, key, nb, 0);
        console.log(cipher);
        for(let round = 1; round < 3/*nr + 1*/; round++){
            console.log(cipher);
            cipher = this.invShiftRows(cipher, nb);
            cipher = this.invSubBytes(cipher);
            cipher = this.addRoundKey(cipher, key, nb, round);
            cipher = this.invMixColunms(cipher, nb);
        }

        cipher = this.invShiftRows(cipher, nb);
        cipher = this.invSubBytes(cipher);
        cipher = this.addRoundKey(cipher, key, nb, 0);

        this.output = cipher;    
    }

    subBytes(state){
        let sbox = SBOX.aesBox();

        for(var i in state)
            state[i] = sbox[state[i].charCode10];

        return state;
    }

    invSubBytes(state){
        let invSbox = SBOX.aesInvBox();

        for(var i in state)
            state[i] = invSbox[state[i].charCode10];
    
        return state;
    }

    shiftRows(state, nb){
        let r = 1;
        let word;

        for(let i = 4; i < 16; i+=4){
            word = state.slice(i, i + nb);

            for(let j = 0; j < nb; j++){
                let pos = (i + j) % nb + r; 

                if(pos >= 4)
                    state[i + j] = word[pos - 4];    
                else
                    state[i + j] = word[pos];   
            }

            r += r < 4 ? 1 : 0;
        }

        return state;
    }

    invShiftRows(state, nb){
        let r = 1;
        let word;

        for(let i = 4; i < 16; i+=4){
            word = state.slice(i, i + nb);

            for(let j = 0; j < nb; j++){
                let pos = (i + j) % nb + r;   

                if(pos >= 4){
                    state[i + pos - 4] = word[j];    
                }else{
                    state[i + pos] = word[j];   
                }
            }

            r += r < 4 ? 1 : 0;
        }

        return state;
    }

    mixColunms(state){ 
        for(let i = 0; i < 4; i++){
            let copy = new Array();
            let gf = new Array();

            for(let j = i; j < 16; j += 4){
                copy.push(state[j].charCode10);
                gf.push(state[j].charCode10 & 0x80 ? state[j].charCode10 << 1 ^ 0x11b : state[j].charCode10 << 1);    
            }

            state[i].updateCharCode10(gf[0] ^ copy[1] ^ gf[1] ^ copy[2] ^ copy[3]); // {02}•a0 + {03}•a1 + a2 + a3
            state[i + 4].updateCharCode10(copy[0] ^ gf[1] ^ copy[2] ^ gf[2] ^ copy[3]); // a0 • {02}•a1 + {03}•a2 + a3
            state[i + 8].updateCharCode10(copy[0] ^ copy[1] ^ gf[2] ^ copy[3] ^ gf[3]); // a0 + a1 + {02}•a2 + {03}•a3
            state[i + 12].updateCharCode10(copy[0] ^ gf[0] ^ copy[1] ^ copy[2] ^ gf[3]); // {03}•a0 + a1 + a2 + {02}•a3
        }
        
        return state;
    }

    invMixColunms(state){
        let gf = (n, i) => {
            if(i == 14){
                return (((((n << 1) ^ n) << 1) ^ n) << 1);
            }else if(i == 13){
                return ((((n << 1) ^ n) << 2) ^ n);
            }else if(i == 11){
                return ((((n << 2) ^ n) << 1) ^ n);
            }else if(i == 9){
                return ((n << 3) ^ n);
            }

            return 0;
        };
        
        for(let i = 0; i < 4; i++){
            let copy = new Array();

            for(let j = i; j < 16; j += 4){
                copy.push(state[j].charCode10);    
            }

            state[i].updateCharCode10(gf(copy[0], 14) ^ gf(copy[1], 11) ^ gf(copy[2], 13) ^ gf(copy[3], 9)); // {14}•a0 + {11}•a1 + {13}•a2 + {9}•a3
            state[i + 4].updateCharCode10(gf(copy[0], 9) ^ gf(copy[1], 14) ^ gf(copy[2], 11) ^ gf(copy[3], 13)); // {9}•a0 + {14}•a1 + {11}•a2 + {13}•a3
            state[i + 8].updateCharCode10(gf(copy[0], 13) ^ gf(copy[1], 9) ^ gf(copy[2], 14) ^ gf(copy[3], 11)); // {13}•a0 + {9}•a1 + {14}•a2 + {11}•a3
            state[i + 12].updateCharCode10(gf(copy[0], 11) ^ gf(copy[1], 13) ^ gf(copy[2], 9) ^ gf(copy[3], 14)); // {11}•a0 + {13}•a1 + {9}•a2 + {14}•a3
        }
        
        return state;
    }

    addRoundKey(state, key, nb, round){
        let temp;
        for (let i = 0; i < 16; i+=4) {
            for(let j = 0; j < nb; j++) {
                temp = state[i + j].charCode10 ^ key[round * 4 + j][i / 4].charCode10;
                state[i + j].updateCharCode10(temp);
            }
        }
        
        return state;
    }

    
    keyExpansion(key, nb, nk){
        let nr = nb + nk + 2;
        let word = new Array(nb * (nr + 1));
        let temp = new Array(4);
        const rcon = SBOX.aesRCon();

        for(let i = 0; i < nk; i++){
            let row = [key[4 * i], key[4 * i + 1], key[4 * i + 2], key[4 * i + 3]];
            word[i] = row;
        }

        for (let i = nk; i < (nb * (nr + 1)); i++) {
            word[i] = new Array(4);
            
            for (let j = 0; j < 4; j++) 
                temp[j] = word[i-1][j];
            
            if (i % nk == 0) {
                temp = this.subWord(this.rotWord(temp));
                for (let j = 0; j < 4; j++) 
                    temp[j] ^= rcon[i / nk][j];
            }else if (nk > 6 && i % nk == 4) {
                temp = this.subWord(temp);
            }
            
            for (let j = 0; j < 4; j++) 
                word[i][j] = word[i - nk][j] ^ temp[j];
        }

        return word;
    }

    rotWord(w){
        const tmp = w[0];
        for (let i = 0; i < 3; i++) 
            w[i] = w[i+1];
        
        w[3] = tmp;

        return w;
    }

    subWord(w) {
        let sbox = SBOX.aesBox();

        for (let i = 0; i < 4; i++) 
            w[i] = sbox[w[i]];
        
        return w;
    }
}

window.onload = function(){
    aes = new AES('abcdefghijklmnop', '1234567890123456');

    
}