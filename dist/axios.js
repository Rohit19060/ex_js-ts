"use strict";
const baseURL = "https://reqres.in/api";
const getAxiosData = () => {
    axios.get(`${baseURL}/users`).then((response) => console.log(response));
};
const sendAxiosData = () => {
    axios
        .post(
            `${baseURL}/users`,
            {
                name: "morpheus",
                job: "leader",
            },
            {
                headers: {},
            }
        )
        .then((response) => console.log(response))
        .catch((err) => console.log(err, err.response));
};
var getBtn = document.getElementById("get-btn");
var postBtn = document.getElementById("post-btn");

getBtn.addEventListener("click", getAxiosData);
postBtn.addEventListener("click", sendAxiosData);
