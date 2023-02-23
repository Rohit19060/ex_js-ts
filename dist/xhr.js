var baseURL = "https://reqres.in/api";
const sendXHRequest = (method, url, data = null) => {
    const promise = new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "json";
        if (data) {
            xhr.setRequestHeader("Content-Type", "application/json");
        }
        xhr.onload = () => xhr.status >= 400 ? rej(xhr.response) : res(xhr.response);
        xhr.onerror = (e) => rej(e + " Something went wrong!");
        xhr.onprogress = (e) => {
            console.log("Loaded:", e.loaded);
            console.log("Total:", e.total);
        };
        xhr.onabort = () => console.log("Request aborted!");
        xhr.ontimeout = () => console.log("Request timed out!");
        xhr.onloadstart = () => {
            console.time("Request time");
            console.log("Request started!");
            console.log("METHOD:", method);
            console.log("URL:", url);
            if (data) {
                console.log("DATA:", data);
            }
        };
        xhr.onloadend = () => {
            console.log("Request ended!");
            console.timeEnd("Request time");
        };
        xhr.send(JSON.stringify(data));
    });
    return promise;
};
const getXHRData = () => sendXHRequest("GET", `${baseURL}/users`)
    .then((res) => console.log("Response:", res))
    .catch((err) => console.log("Error:", err));
const sendXHRData = () => sendXHRequest("POST", `${baseURL}/users`, {
    "name": "morpheus",
    "job": "leader"
})
    .then((res) => console.log("Response:", res))
    .catch((err) => console.log("Error:", err));
var getBtn = document.getElementById("get-btn");
var postBtn = document.getElementById("post-btn");
getBtn.addEventListener("click", getXHRData);
postBtn.addEventListener("click", sendXHRData);
