// fetch the data 
fetch('https://randomfox.ca/floof/')
    // convert the data {function}
    .then(response => response.json())
    // the action, what do you want to happen
    .then(
        (convertedData) => {
            const foxImgElement = document.querySelector("#fox")
            foxImgElement.src = convertedData.image
        }
    )