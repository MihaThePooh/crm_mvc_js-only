import * as formView from './form.view.js';
import { insertTestData, testData } from './form.test-data.js';

/*
1. взять из формы значения
2. сформировать объект
3. сохранить его в локал сторадж
*/

const form = formView.elements



formView.elements.form.addEventListener('submit', (e) => {
    e.preventDefault()

    const newCostomer = {
        name: form.formName.value,
        phone: form.formPhone.value,
        email: form.formEmail.value,
        product: form.formProduct.value
    }

    if (localStorage.getItem('request') === null) {
        const request = []
        request.push(newCostomer)
        localStorage.setItem('request', JSON.stringify(request))
    } else if (localStorage.getItem('request') !== null) {
        let dataFromLS = JSON.parse(localStorage.getItem('request'))
        dataFromLS.push(newCostomer)
        localStorage.setItem('request', JSON.stringify(dataFromLS))
    }
    
    insertTestData(testData)
})








