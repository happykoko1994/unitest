const tbody = document.querySelector('tbody')
function request() {

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
            for (i = 0; i < data.length; i++) {
                let newRow = document.createElement('tr')
                newRow.innerHTML = `<td>${data[i].id}</td><td>${data[i].userId}</td><td>${data[i].title}</td><td>${data[i].body}</td>`
                tbody.append(newRow)
            }
        });
}
request()


