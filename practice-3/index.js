const table = document.querySelector("#sortableTable");
const th = table.querySelectorAll("th");
let tbody = table.querySelector("tbody");

// Получение данных

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


// Сортировка таблица

th.forEach((header) => {
    header.addEventListener("click", function () {
        let rows = [...tbody.rows];
        let columnIndex = header.cellIndex;
        let sortDirection = header.getAttribute("data-sort-direction") === "asc" ? "desc" : "asc";
        header.setAttribute("data-sort-direction", sortDirection);
        rows.sort((a, b) => {

            if (columnIndex > 2) {
                let aValue = a.cells[columnIndex].textContent;
                let bValue = b.cells[columnIndex].textContent;

                if (sortDirection === "asc") {
                    return aValue > bValue ? 1 : -1;
                } else {
                    return bValue > aValue ? 1 : -1;
                }
            } else {
                let aValue = +a.cells[columnIndex].textContent;
                let bValue = +b.cells[columnIndex].textContent;

                if (sortDirection === "asc") {
                    return aValue > bValue ? 1 : -1;
                } else {
                    return bValue > aValue ? 1 : -1;
                }
            }
        });

        tbody.remove();
        tbody = document.createElement("tbody");
        rows.forEach((row) => tbody.appendChild(row));
        table.appendChild(tbody);
    });
});
request()
window.addEventListener('click', (e) => {
    console.log(typeof e.target.textContent);

})