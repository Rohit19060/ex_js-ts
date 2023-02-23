"use strict";
exports.__esModule = true;
exports.sendHttpRequest = void 0;
var getBtn = document.getElementById('get-btn');
var postBtn = document.getElementById('post-btn');
function sendHttpRequest(method, url, data) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    if (data) {
        xhr.setRequestHeader('Content-Type', 'application/json');
    }
    xhr.onload = function () {
        console.log(xhr.response);
    };
    xhr.send(JSON.stringify(data));
}
exports.sendHttpRequest = sendHttpRequest;
;
var getData = function () {
    sendHttpRequest('GET', 'https://reqres.in/api/users', null);
};
