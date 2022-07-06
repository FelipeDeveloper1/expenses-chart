let total = 0
const resultado = document.querySelector(".resultado")
verifique = (info) => {
    for (valores in info) {
        total += info[valores].amount
        let search = info[valores].day
        console.log(search)
        if (document.querySelector('#' + info[valores].day)) {
            document.querySelector('.' + info[valores].day).innerHTML = `R$${info[valores].amount}`
            document.querySelector('#' + search).style.width = '40px'
            document.querySelector('#' + search).style.height = `${(info[valores].amount + 40)}px`
            document.querySelector('#' + search).style.backgroundColor = '#F26F63'
            document.querySelector('#' + search).style.borderRadius = '5px'
            if (info[valores].amount <= 23) {
                document.querySelector('#' + info[valores].day).style.backgroundColor = '#B4DFE5'
            }
            if (info[valores].amount >= 24) {
                document.querySelector('#' + info[valores].day).style.backgroundColor = '#DBC826'
            }
            if (info[valores].amount >= 50) {
                document.querySelector('#' + info[valores].day).style.backgroundColor = '#EB755D'
            }
            if (info[valores].amount >= 80) {
                document.querySelector('#' + info[valores].day).style.height = '120px'
            }
        }

        resultado.innerHTML = `R$${total}`
    }

}



fetch('data.json')
    .then(info => {
        info.json()
            .then(info => verifique(info))
    })

.catch((e) => console.log('deu erro', e))