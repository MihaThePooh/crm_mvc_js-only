import { requestModel, updateCostumerInfo } from "./../model.js"

// взять из урла инфу
const urlParams = new URL(document.location).searchParams
const id = parseInt(urlParams.get('id'))

// взять из модели нужную инфу и найти по айди искомую заявку
const currentCostumer = requestModel.find(costumer => costumer.id === id)

// отправить измененного пользователя в модель
const changedCostumerToModel = (changedCostumer) => updateCostumerInfo(changedCostumer);

export { currentCostumer, changedCostumerToModel }

