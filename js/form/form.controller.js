import * as formView from './form.view.js';
import * as test from './form.test-data.js';
import * as model from '../model.js';

const form = formView.elements

formView.elements.form.addEventListener('submit', (e) => {
    e.preventDefault()
   
    const newCostomer = {
        name: form.formName.value,
        phone: form.formPhone.value,
        email: form.formEmail.value,
        product: form.formProduct.value
    }
    
    let formatedCostomer = model.createNewCostomer(newCostomer)

    model.loadNewDataToLS(formatedCostomer)
    
    test.insertTestData(test.testData)
})








