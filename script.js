
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const firstCurrency = document.querySelector(".first-currency")

//Converte valores
const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const CurrencyValueConverted = document.querySelector(".currency-value")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    console.log(data);

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = 6.20
    const bitcoinToday = data.BTCBRL.high



    if (currencySelect.value == "dolar") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue/dolarToday)

    }

    if (currencySelect.value == "euro") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue/euroToday)
        
    
    }


    if (currencySelect.value == "libra") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue/libraToday)
        
    
    }


    if (currencySelect.value == "bitcoin") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue/bitcoinToday)
        
    
    }


    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue)

}

//Mudando o nome da moeda e imagem
const changeCurrency=()=> {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")
    
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./Assets/estados-unidos (1) 1.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./Assets/Design sem nome 3.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./Assets/libra 1 (1).png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "BTC Bitcoin"
        currencyImage.src = "./Assets/bitcoin 1 (1).png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./Assets/brasil 2.png"
    }

    convertValues()

}

//VÊ se mudou o select
currencySelect.addEventListener("change", changeCurrency )
//Faz a conversão de moeda
convertButton.addEventListener("click", convertValues)