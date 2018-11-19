getContentArchive = () => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = function (evt) {
        document.getElementById('input_text').value = evt.target.result;
        document.getElementById('name_archive').innerText = file.name;
    }
    reader.onerror = function (evt) {
        text_box.innerText = "error reading file";
    }
}

countCaracteres = () => {
    let key = document.getElementById('key');

    if(key.value.length == 1){
        document.getElementById('count').innerText = '1 caracter'; 
    }else{
        document.getElementById('count').innerText = key.value.length + ' caracteres'; 
    }

    if(key.value.length % 8 == 0 && key.value.length > 8){
        key.className = '';
        key.style.borderColor = 'blue';
        document.getElementById('count').style.color = 'blue';
    }else{
        key.style.borderColor = 'red';
        document.getElementById('count').style.color = 'red';
    }
}

cifrar = () => {
    let key = document.getElementById('key');
    let inputMessage = document.getElementById('input_text');
    
    if(key.value == ''){
        alert('Você deve inserir uma chave.');
        key.className = 'error';
        key.focus();
        return false;
    }

    if(key.value.length % 8 != 0){
        alert('A chave deve conter 16, 24 ou 32 caracteres.');
        key.className = 'error';
        key.focus();
        return false;
    }

    if(inputMessage.value == ''){
        alert('Digite ou import um arquivo de texto para ser cifrado ou decifrado.');
        inputMessage.className = 'error';
        inputMessage.focus();
        return false;
    }

    key.className = '';
    inputMessage.className = '';

    let scheduler = new MessageScheduler(inputMessage.value, false);
    let output;

    output = scheduler.encrypt(key.value);

    clear();
    download('encript.txt', output);

    document.getElementById('output_text').innerText = output;
}

decifrar = () => {
    let key = document.getElementById('key');
    let inputMessage = document.getElementById('input_text');
    
    if(key.value == ''){
        alert('Você deve inserir uma chave.');
        key.className = 'error';
        key.focus();
        return false;
    }

    if(key.value.length % 8 != 0){
        alert('A chave deve conter 16, 24 ou 32 caracteres.');
        key.className = 'error';
        key.focus();
        return false;
    }

    if(inputMessage.value == ''){
        alert('Digite ou import um arquivo de texto para ser cifrado ou decifrado.');
        inputMessage.className = 'error';
        inputMessage.focus();
        return false;
    }

    key.className = '';
    inputMessage.className = '';

    let scheduler = new MessageScheduler(inputMessage.value, true);
    let output;

    output = scheduler.decrypt(key.value);

    clear();
    download('decrypt.txt', output);

    document.getElementById('output_text').innerText = output;
}

download = (filename, text) => {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

clear = () => {
    let input = document.getElementById('input_text');
    let output = document.getElementById('input_text');
    let key = document.getElementById('key');
    let nArchive = document.getElementById('name_archive');

    input.value = '';
    output.innerText = '';
    key.value = '';
    nArchive.innerText = 'Importar Arquivo';
    countCaracteres();
    document.getElementById('key').style.borderColor = 'black';
}

copy = () =>{
    let output = document.getElementById('output_text');
    let input = document.getElementById('input_text');

    if(output.innerText != ''){
        input.value = output.innerText; 
        output.innerText = '';
    }
}

window.onload = () => {
    let btnCifrar = document.getElementById('cifrar');
    let btnDecifrar = document.getElementById('decifrar');
    let btnCopy = document.getElementById('copy');
    let key = document.getElementById('key');

    btnCifrar.addEventListener('click', cifrar);
    btnDecifrar.addEventListener('click', decifrar);
    btnCopy.addEventListener('click', copy);
    key.addEventListener('input', countCaracteres);
    key.addEventListener('change', countCaracteres);
}