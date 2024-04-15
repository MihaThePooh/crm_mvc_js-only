let requestModel

const setInitArrayToLS = () => localStorage.setItem('request', JSON.stringify([]))

const loadFromLS = () => JSON.parse(localStorage.getItem('request')) ? JSON.parse(localStorage.getItem('request')) : undefined

const loadNewDataToLS = (newData) => {
    const dataFromLS = JSON.parse(localStorage.getItem('request'))
    const newDataToLS = [...dataFromLS, newData]
    localStorage.setItem('request', JSON.stringify(newDataToLS))
}

const createNewCostomer = (costomerFromForm) => {
    const date = new Date()
    const formatedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
    const id = Math.floor(Math.random() * 99999)

    return {
        id,
        name: costomerFromForm.name,
        phone: costomerFromForm.phone,
        email: costomerFromForm.email,
        product: costomerFromForm.product,
        date: formatedDate,
        status: 'Новая'
    }
}

if (!localStorage.getItem('request')) setInitArrayToLS()

requestModel = loadFromLS()

export { requestModel, loadNewDataToLS, createNewCostomer, loadFromLS }

