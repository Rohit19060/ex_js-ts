const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

function sendHttpRequest(method, url, data) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = 'json';

    if (data) {
        xhr.setRequestHeader('Content-Type', 'application/json');
    }

    xhr.onload = () => {
        console.log(xhr.response);
    };

    xhr.send(JSON.stringify(data));
};

const getData = () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users', null);
};

export { sendHttpRequest };

