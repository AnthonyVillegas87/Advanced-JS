

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    //Create XHR Obj
    const xhr = new XMLHttpRequest();

    //Open Method for specificity of request
    xhr.open('GET', 'data/data.txt', true);

    //Optional - Used for loading gifs
    xhr.onprogress = function() {
        console.log('READYSTATE', xhr.readyState);

    }

    xhr.onload = function() {
        console.log('READYSTATE', xhr.readyState);

        if(this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }

    // xhr.onreadystatechange = function() {
    //     console.log('READYSTATE', xhr.readyState);
    //
    //     if(this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }
    xhr.send();


//    READY STATE VALUES
    //0: request not initialized
    //1: server connection established
    //2:request received
    //3: processing request
    //4: request finished and response is ready





//    HTTP STATUSES
    //200: OK
    //403: 'FORBIDDEN'
    //404: 'NOT FOUND'

}