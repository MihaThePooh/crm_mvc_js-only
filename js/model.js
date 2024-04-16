let requestModel, productText

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

    switch (costomerFromForm.product) {
        case "course-html":
            productText = "Курс по верстке"
            break
        case "course-js":
            productText = "Курс по JavaScript"
            break
        case "course-vue":
            productText = "Курс по VUE JS"
            break
        case "course-php":
            productText = "Курс по PHP"
            break
        case "course-wordpress":
            productText = "Курс по WordPress"
            break
        default:
            console.log("ошибка в свич кейсе");
    }

    return {
        id,
        name: costomerFromForm.name,
        phone: costomerFromForm.phone,
        email: costomerFromForm.email,
        product: productText,
        date: formatedDate,
        status: 'Новая'
    }
}

const updateCostumerInfo = (costumerForChanges) => {
    // взяли всё из локал стораджа
    const dataFromLS = JSON.parse(localStorage.getItem('request'))
    

    // нашли покупателя, которого нужно изменить
    let findCostumerForChanges = dataFromLS.find(costumer => costumer.id === costumerForChanges.id)

    // нашли индекс этого покупателя
    let indexCostumerForChanges = dataFromLS.findIndex(costumer => costumer.id === costumerForChanges.id)

    // удаляем из массива из LS нужного пользователя
    const startArray = dataFromLS.slice(0, indexCostumerForChanges)
    const endArray = dataFromLS.slice(indexCostumerForChanges + 1)

    findCostumerForChanges = {
        id: findCostumerForChanges.id,
        name: costumerForChanges.name,
        phone: costumerForChanges.phone,
        email: costumerForChanges.email,
        product: costumerForChanges.product,
        date: findCostumerForChanges.date,
        status: costumerForChanges.status,
    }

    startArray.push(findCostumerForChanges)
    const resultArray = startArray.concat(endArray)
    localStorage.setItem('request', JSON.stringify(resultArray))
}
    
    

if (!localStorage.getItem('request')) setInitArrayToLS()

requestModel = loadFromLS()

export { requestModel, loadNewDataToLS, createNewCostomer, loadFromLS, updateCostumerInfo }

