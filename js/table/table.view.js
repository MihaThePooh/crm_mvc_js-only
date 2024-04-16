import * as model from './../model.js';

const tableView = {
    tableBody: document.querySelector("#tbody")
}

model.requestModel.map(custumer => {

    let custumerStatusCSSclass

    if (custumer.status === "Новая") {
        custumerStatusCSSclass = "danger"
    } else if (custumer.status === "В работе") {
        custumerStatusCSSclass = "warning"
    } else if (custumer.status === "Завершенный") {
        custumerStatusCSSclass = "success"
    }
    

    const newTrHTML = `<tr>
                        <th scope="row">${custumer.id}</th>
                        <td>${custumer.date}</td>
                        <td>${custumer.product}</td>
                        <td>${custumer.name}</td>
                        <td>${custumer.email}</td>
                        <td>${custumer.phone}</td>
                        <td>
                            <div class="badge badge-pill badge-${custumerStatusCSSclass}">${custumer.status}</div>
                        </td>
                        <td>
                            <a href="edit.html?id=${custumer.id}">Редактировать</a>
                        </td>
                    </tr>`

    tableView.tableBody.insertAdjacentHTML('afterbegin', newTrHTML)
    
})

