var allProducts = []
var naughtyList =[]
// var display = document.getElementById( 'display' );
var totalClicks = 0;


function Product (displayName, filePath, id) {
    this.displayName = displayName,
    this.filePath = filePath,
    this.votes = 0,
    this.id = id,
    //console.log(this);
    allProducts.push( this );
    //console.log(allProducts);
}

//Constructor and instances
function instProducts() {
    var bag = new Product( 'bag', 'images/bag.jpg', 'bag');
    var banana = new Product( 'banana', 'images/banana.jpg', 'banana');
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
    var shark = new Product( 'shark', 'images/shark.jpg', 'shark');
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
    //console.log(allProducts)
    threeRands = [];

        for ( var i = 0; i < 3; i++) {
            var randNum =  Math.floor( Math.random() * allProducts.length );
            threeRands.push( randNum );
        }
        
        console.log('threeRands after for loop: ' + threeRands)
        compare(threeRands);

        //make sure 3 rands doesn't have any double numbers

        function compare (arr) {
            console.log('start of compare function: ' + threeRands)
            if ( threeRands[0] === threeRands[1] ) {
                // console.log( 'I am threeRands in the if:' + threeRands )
                get3RandomIndexes();
            }
            else if (threeRands[0] === threeRands[2] ) {
                // console.log( 'I am threeRands in the else if:' + threeRands )
                get3RandomIndexes();
            }
            else if (threeRands[1] === threeRands[2] ) {
                // console.log( 'I am threeRands in the second else if:' + threeRands )
                get3RandomIndexes();
            }
            else {
                console.log( 'I am threeRands in the else:' + threeRands )
                return threeRands;
            }
            // console.log('this is the naughty list inside the COMPARE' + naughtyList)
        }
        // console.log( 'I am threeRands outside the else of the compare function:' + threeRands)
        //call the display function
        //then rename threeRands to lastRands
        render();
        return threeRands;
    
}

instProducts();
get3RandomIndexes();

// console.log( 'I am threeRands outside the function' + threeRands + ' VICTORY IS MINE, BOW TO MY GLORY!!!' )


function render () {
    
    console.log( 'I am threeRands inside render ' + threeRands)  
    // Selects element with id 'choice1', adds the url as attribute, select place to append to, finally append

    var findClass = document.getElementsByClassName( 'classP');

    var newProduct1 = findClass[0];
    newProduct1.setAttribute("src", allProducts[threeRands[0]].filePath );
    newProduct1.setAttribute("id", allProducts[threeRands[0]].id )
  
    var newProduct2 = findClass[1];
    newProduct2.setAttribute("src", allProducts[threeRands[1]].filePath );
    newProduct2.setAttribute("id", allProducts[threeRands[1]].id )

    var newProduct3 = findClass[2];
    newProduct3.setAttribute("src", allProducts[threeRands[2]].filePath );
    newProduct3.setAttribute("id", allProducts[threeRands[2]].id )
}

var display = document.getElementById( 'display' );
display.addEventListener( 'click', vote, true );


function vote () {
    var clicked = event.target;
    //console.log('this is the value of clicked: ' + clicked.id)
   // console.log('this is the value of allProducts[i].id :' + allProducts[1].id )

    for ( var i = 0; i < allProducts.length; i++ ) {
        console.log('this for loop is running')
        if (clicked.id === allProducts[i].id ) {
            console.log('found you!!!!')
            allProducts[i].votes =  allProducts[i].votes +1 
        }
    }

    totalClicks += 1
    
    if (totalClicks < 5 ) {
        console.log('NEEEEEXXXTTTTT, heading to get more indexes hopefully')
        get3RandomIndexes();
        // render();
    }
    else {
        console.log('results here/link to chart')
        console.table(allProducts)
    }

    console.log('total clicks equal : ' + totalClicks)
    //console.table(allProducts)

}



