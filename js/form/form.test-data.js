import * as formView from './form.view.js';

const testData = [
    {id: 1, name: "Иван Фролов", phone: "8(911)163-92-10", email: "frolov@gmail.com", product: "course-html", date: "01.00.0000", status: "Новая"},
    {id: 2, name: "Василий Пупкин", phone: "8(911)276-85-57", email: "pupkin@gmail.com", product: "course-js", date: "02.00.0000", status: "В работе"},
    {id: 3, name: "Елена Иванова", phone: "8(911)681-84-06", email: "ivanova@gmail.com", product: "course-vue", date: "03.00.0000", status: "Новая"},
    {id: 4, name: "Екатерина Похоменко", phone: "8(911)509-72-50", email: "pohomenko@gmail.com", product: "course-php", date: "04.00.0000", status: "Завершенный"},
    {id: 5, name: "Константин Сидоров", phone: "8(911)133-45-30", email: "sidorov@gmail.com", product: "course-wordpress", date: "05.00.0000", status: "Новая"}
]

function insertTestData (testData) {
    const randomDataIndex = Math.floor(Math.random() * testData.length)
    const form = formView.elements
    const randomData = testData[randomDataIndex]

    form.formName.value = randomData.name
    form.formPhone.value = randomData.phone
    form.formEmail.value = randomData.email
    form.formProduct.value = randomData.product
}

insertTestData(testData)

export { insertTestData, testData }