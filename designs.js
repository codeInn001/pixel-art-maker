// Select color input
const colorInput = document.querySelector('#colorPicker')
const heightInput = document.querySelector('#inputHeight')
const widthInput = document.querySelector('#inputWidth')
const pixelCanvas = document.querySelector('#pixelCanvas')
const form = document.querySelector('form')
let heightValue = '';
let widthValue = '';
let colorValue = '';
let tableDatas = '';
let dataArray = []

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', (e) => {
    pixelCanvas.innerHTML = '' // empties our table element
    initialValues()
    e.preventDefault()
    makeGrid()
})

// calls initial values
function initialValues() {
    colorValue = colorInput.value
    heightValue = heightInput.value;
    widthValue = widthInput.value;
}

    // Keeps track of our input values 
    heightInput.addEventListener('input', (e) => {assignInputValue(e, heightValue)})

    widthInput.addEventListener('input', (e) => {assignInputValue(e, widthValue)})

    colorInput.addEventListener('input', (e) => {colorValue = e.target.value})

    // assigns the value of height and width  to corresponding variables
    function assignInputValue(e,inputValue) {
        inputValue = e.target.value
    }

// Select size input




function makeGrid() {

// Your code goes here!
// creates height
for(let i = 0; i < heightValue; i++) {
    
    let tableRow = document.createElement('tr');
    pixelCanvas.appendChild(tableRow);

    // creates width
    for(let j = 0; j < widthValue; j++) {

        tableDatas =  document.createElement('td');
        
        dataArray.push(tableDatas)

        dataArray.forEach(tabledata => {
            tabledata.addEventListener('click', (e) => {
                e.target.style.backgroundColor = colorValue
            })
        })
        tableDatas.innerText = ''
        tableRow.appendChild(tableDatas)
    }
    
}


}


makeGrid()