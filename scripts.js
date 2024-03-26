const convertbutton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValuetoconvert = document.querySelector(".currency-value-to-convert")
    const currencyValueconverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)

    const dolarToday = 5.2
    const euroToday = 6.2

    if (currencySelect.value == 'dolar') {
        currencyValueconverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == 'euro') {
        currencyValueconverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValuetoconvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency:'BRL'
    }).format(inputCurrencyValue)
}
function changecurrency(){
    const currencyName = document.getElementById('currency-name')
    const currencyimagem = document.querySelector('.currency-img')

    if(currencySelect.value == 'dolar'){
        currencyName.innerHTML = 'Dólar americano'
        currencyimagem.src ='./assets/dolar.png'
    }

    if(currencySelect.value == 'euro'){
        currencyName.innerHTML = 'Euro'
        currencyimagem.src ='./assets/euro.png'
    }

    convertValues()
}



currencySelect.addEventListener('change',changecurrency)
convertbutton.addEventListener("click", convertValues)      
