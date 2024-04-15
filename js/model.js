const dataFromLS = JSON.parse(localStorage.getItem('request'))
let requestModel = []

if (dataFromLS) requestModel = [...dataFromLS]

export { requestModel }