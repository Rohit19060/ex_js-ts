var baseURL = "https://reqres.in/api";
const sendFetchRequest = (method, url, data = null) => {
    return fetch(url, {
        method: method,
        body: data ? JSON.stringify(data) : null,
        headers: data ? { "Content-Type": "application/json" } : {},
        signal: AbortSignal.timeout(5000)
    }).then((response) => {
        if (response.status >= 400) {
            return response.json().then((err) => {
                throw new Error(err);
            });
        }
        return response.json();
    });
};
const getFetchData = () => sendFetchRequest("GET", `${baseURL}/users`)
    .then((res) => console.log("Response:", res))
    .catch((err) => console.log("Error:", err));
const sendFetchData = () => sendFetchRequest("POST", `${baseURL}/users`, {
    name: "morpheus",
    job: "leader",
})
    .then((res) => console.log("Response:", res))
    .catch((err) => console.log("Error:", err));
var getBtn = document.getElementById("get-btn");
var postBtn = document.getElementById("post-btn");
getBtn.addEventListener("click", getFetchData);
postBtn.addEventListener("click", sendFetchData);
