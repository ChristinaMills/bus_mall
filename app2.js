//first thing ask is there anything on LS? if so, get it from LS (and tell it to parse it and then put it in a usable form (new object))
//if not..keep going
var storedProducts = getFromLS('products');
var allProducts = [];
var totalClicks = 0;
var badNums = []

if (storedProducts) {
    for (var i = 0; i < storedProducts.length; i++) {
        var productData = storedProducts[i];
        var product = new Product(productData.displayName, productData.filePath, productData.id);
        product.votes = productData.votes; //adding a prop
    }

} else {
    instProducts();
}



function Product(displayName, filePath, id) {
    this.displayName = displayName,
        this.filePath = filePath,
        this.votes = 0,
        this.id = id,
        //console.log(this);
        allProducts.push(this);
    //console.log(allProducts);
}

//Constructor and instances
function instProducts() {
    var bag = new Product('bag', 'images/bag.jpg', 'bag');
    var banana = new Product('banana', 'images/banana.jpg', 'banana');
    var bathroom = new Product('bathroom', 'images/bathroom.jpg', 'bathroom');
    var boots = new Product('boots', 'images/boots.jpg', 'boots');
    var bubbleGum = new Product('bubbleGum', 'images/bubblegum.jpg', 'bubblegum');
    var chair = new Product('chair', 'images/chair.jpg', 'chair', 'chair');
    var cthulhu = new Product('cthulhu', 'images/cthulhu.jpg', 'cthulhu');
    var dogDuck = new Product('dogDuck', 'images/dog-duck.jpg', 'dogDuck');
    var dragon = new Product('dragon', 'images/dragon.jpg', 'dragon');
    var pen = new Product('pen', 'images/pen.jpg', 'pen');
    var petSweep = new Product('petSweep', 'images/pet-sweep.jpg', 'petSweep');
    var scissors = new Product('scissors', 'images/scissors.jpg', 'scissors');
    var shark = new Product('shark', 'images/shark.jpg', 'shark');
    var sweep = new Product('sweep', 'images/sweep.png', 'sweep');
    var tauntaun = new Product('tauntaun', 'images/tauntaun.jpg', 'tauntaun');
    var unicorn = new Product('unicorn', 'images/unicorn.jpg', 'unicorn');
    var usb = new Product('usb', 'images/usb.gif', 'usb');
    var waterCan = new Product('watercan', 'images/water-can.jpg', 'watercan');
    var wineGlass = new Product('wineglass', 'images/wine-glass.jpg', 'wineglass');
}


//TODO
//creat array with all objects// they are accessible as instances of their mother Object at allProducts [1], etc
//use random number gen to give 3 random numbers between 0 and allProducts.length
//save those numbers to an array called 'evenDisplay'
//somewhere at the end of their usefulness change them to 'oddDisplay'
//compare evenDisplay and oddDisplay to make sure they have no overlapping indexes/instances whatever

var threeRands = [];

function get3RandomIndexes() {

    threeRands = [];

    for (var i = 0; i < 3; i++) {
        var randNum = Math.floor(Math.random() * allProducts.length);
        threeRands.push(randNum);
    }

    compare(threeRands);


    function compare(arr) {
       
        if (threeRands[0] === threeRands[1]) {
            // console.log( 'I am threeRands in the if:' + threeRands )
            get3RandomIndexes();
        } else if (threeRands[0] === threeRands[2]) {
            // console.log( 'I am threeRands in the else if:' + threeRands )
            get3RandomIndexes();
        } else if (threeRands[1] === threeRands[2]) {
            // console.log( 'I am threeRands in the second else if:' + threeRands )
            get3RandomIndexes();
        } else {

            for (var i = 0; i < 3; i++) {
                var isSame = badNums.includes(threeRands[i])
                if (isSame === true) {
                    get3RandomIndexes;
                } else {
                    badNums = threeRands;
                    console.log(badNums)
                }
            }

            return threeRands;
        }

    }

    renderProduct();
    return threeRands;

}

get3RandomIndexes();



function renderProduct() {

    var findClass = document.getElementsByClassName('classP');

    var newProduct1 = findClass[0];
    newProduct1.setAttribute("src", allProducts[threeRands[0]].filePath);
    newProduct1.setAttribute("id", allProducts[threeRands[0]].id)

    var newProduct2 = findClass[1];
    newProduct2.setAttribute("src", allProducts[threeRands[1]].filePath);
    newProduct2.setAttribute("id", allProducts[threeRands[1]].id)

    var newProduct3 = findClass[2];
    newProduct3.setAttribute("src", allProducts[threeRands[2]].filePath);
    newProduct3.setAttribute("id", allProducts[threeRands[2]].id)
}

var display = document.getElementById('display');
display.addEventListener('click', vote, true);


function vote() {
    var clicked = event.target;

    for (var i = 0; i < allProducts.length; i++) {
        console.log('this for loop is running')
        if (clicked.id === allProducts[i].id) {
            allProducts[i].votes = allProducts[i].votes + 1
        }
    }

    totalClicks += 1

    if (totalClicks < 5) {
        console.log('Next, heading to get more indexes hopefully')
        get3RandomIndexes();

    } else {
        console.log('results here/link to chart')
        console.table(allProducts)
        viewResults();
    }

    saveToLS('products', allProducts);
}

function saveToLS(key, value) {
    var str = JSON.stringify(value);
    localStorage.setItem(key, str);
}

function getFromLS(key) {
    return JSON.parse(localStorage.getItem(key));
}


function viewResults() {

    var display = document.getElementById('display');
    this.display.removeEventListener('click', vote);
    console.table(allProducts);

    var canvas = document.getElementById('mallChart').getContext('2d');
    var voteChart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: allProducts.map(function (product) {
                return product.displayName;
            }),
            datasets: [{
                label: 'Number of votes',
                data: allProducts.map(function (product) {
                    return product.votes;
                }),
                backgroundColor: ['#0CB8AC', '#B4A5E8', '#FDD540', '#E39191', '#5658A3', '#0CB8AC', '#B4A5E8', '#FDD540', '#E39191', '#5658A3', '#0CB8AC', '#B4A5E8', '#FDD540', '#E39191', '#5658A3', '#0CB8AC', '#FDD540', '#E39191', '#5658A3', '#0CB8AC']
            }]
        }
    })
}
