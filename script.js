let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), 8000);
    setTimeout(() => reject(new Error("Error...")), 12000);
});

promise.then(
    function (value) { console.log(value); return value+value },
    function (error) { console.log(error); }
).then(
    (value) => {console.log(value); return value+value;},
    (error) => { console.log(error); }
).then(
    (value) => {return value/0},
    (error) => console.log(error)
).then(
    (value) => console.log(value),
    (error) => console.log(error)
)


link = document.createElement('link');
link.rel = 'icon';
document.head.appendChild(link);

title = document.getElementsByTagName('title')[0];
// console.log(title);

const fetchPromise1 = fetch("http://localhost:5248/Forecast",{
    mode: 'no-cors',
});
console.log(fetchPromise1)
const root = document.getElementById("root0");

fetchPromise1.then(response => {
    return response.json();
})
.finally(root.innerHTML += `<center><h1>Fetching Dotnet Rest API...</h1></center>`)
.then(res => {
    console.log(res);
    root.innerHTML += res.fName;
})
.catch(error => alert(error.message));


const fetchPromise = fetch("https://api.github.com/users/ujjwalkar0");
console.log(fetchPromise)
const main = document.getElementById("root");

fetchPromise.then(response => {
    return response.json();
})
.finally(main.innerHTML += `<center><h1>Fetching My github account...</h1></center>`)
.then(res => {
    link.href = res.avatar_url;
    title.innerHTML = res.name;
    for (const i in res) {

        if (JSON.stringify(res[i]).startsWith("http")) {
            main.innerHTML += `<h1>${i} : <a href="${res[i]}">${res[i]}</a> <br></h1>`
        }
        else {
            main.innerHTML += `<h1>${i} : ${res[i]} <br></h1>`
        }
    }
})
.catch(error => alert(error.message));