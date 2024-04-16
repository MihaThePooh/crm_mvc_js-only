import * as controller from "./edit.controller.js"

const formEdit = document.querySelector('#form div.card-header')
const saveChangesForm = document.querySelector('#form')

if (controller.currentCostumer) {
    const cardHTML = `<div class="card-body">
                    <div class="row mb-3">
                        <div class="col-md-2">
                            <strong>ID:</strong>
                        </div>
                        <div class="col">Заявка №<span id="number">${controller.currentCostumer.id}</span></div>
                        <input name="id" type="hidden" id="id">
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-2">
                            <strong>Дата создания:</strong>
                        </div>
                        <div class="col" id="date">${controller.currentCostumer.date}</div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-2">
                            <strong>Продукт:</strong>
                        </div>
                        <div class="col">
                            <select id="product" name="product" class="custom-select" >
                                <option value="course-html" ${controller.currentCostumer.product === "Курс по верстке" ? "selected" : ""}>Курс по верстке</option>
                                <option value="course-js" ${controller.currentCostumer.product === "Курс по JavaScript" ? "selected" : ""}>Курс по JavaScript</option>
                                <option value="course-vue" ${controller.currentCostumer.product === "Курс по VUE JS" ? "selected" : ""}>Курс по VUE JS</option>
                                <option value="course-php" ${controller.currentCostumer.product === "Курс по PHP" ? "selected" : ""}>Курс по PHP</option>
                                <option value="course-wordpress" ${controller.currentCostumer.product === "Курс по WordPress" ? "selected" : ""}>Курс по WordPress</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-2">
                            <strong>Имя:</strong>
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                value="${controller.currentCostumer.name}"
                                id="name"
                                name="name"
                            />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-2">
                            <strong>Email:</strong>
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                value="${controller.currentCostumer.email}"
                                id="email"
                                name="email"
                                />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-2">
                            <strong>Телефон:</strong>
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                class="form-control"
                                value="${controller.currentCostumer.phone}"
                                id="phone"
                                name="phone"
                                />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-2">
                            <strong>Статус заявки:</strong>
                        </div>
                        <div class="col">
                            <select class="custom-select" id="status" name="status">
                                <option value="new" ${controller.currentCostumer.status === "Новая" ? "selected" : ""}>Новая</option>
                                <option value="inwork" ${controller.currentCostumer.status === "В работе" ? "selected" : ""}>В работе</option>
                                <option value="complete" ${controller.currentCostumer.status === "Завершена" ? "selected" : ""}>Завершена</option>
                            </select>
                        </div>
                    </div>
                    </div>`
    formEdit.insertAdjacentHTML('afterend', cardHTML)
} else {
    const noCostumerIdCaseHTML = `<div class="card-body">Выберите пользователя</div>`
    formEdit.insertAdjacentHTML('afterend', noCostumerIdCaseHTML)
}

const costumerCardForm = {
    product: document.querySelector('#product'),
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    phone: document.querySelector('#phone'),
    status: document.querySelector('#status')
}

saveChangesForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    // по нажатию на кнопку, собрать пользователя с формы и отдать контроллеру
    let changedCostumer = {
        ...controller.currentCostumer,
        product: costumerCardForm.product.value,
        name: costumerCardForm.name.value,
        email: costumerCardForm.email.value,
        phone: costumerCardForm.phone.value,
        status: costumerCardForm.status.value,
    }

    controller.changedCostumerToModel(changedCostumer)
})
    





