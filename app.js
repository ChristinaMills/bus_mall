var allProducts = []

function Product (displayName, filePath, id) {
    this.displayName = displayName,
    this.filePath = filePath,
    // this.displayCount = 0,
    this.votes = 0,
    this.id = id,
    
    allProducts.push( this );
}

//Constructor and instances
function instProducts() {
    var bag = new Product( 'bag', 'images/bag.jpg');
    var banana = new Product( 'banana', 'images/banana.jpg');
    var bathroom = new Product('bathroom', 'images/bathroom.jpg');
    var boots = new Product('boots', 'images/boots.jpg');
    var bubbleGum = new Product('bubbleGum', 'images/bubblegum.jpg');
    var chair = new Product('chair', 'images/chair.jpg', 'chair');
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

var tracker = {
    choice1: document.getElementById( 'choice1' ),
    choice2: document.getElementById( 'choice2'),
    choice3: document.getElementById( 'choice3'),
    displaySection: document.getElementById( 'display' ),
    votes: 0,

    randomIndex: function ( arr ) {
        return Math.floor( Math.random() * arr.length );
    },

    getIndexes: function ( arr ) {
        var selectIndexes = [];
        console.log(selectIndexes);
        
        
        do {
            var indexNum = this.randomIndex( arr );

            if (!selectIndexes.includes (indexNum) ) {
                selectIndexes.push( indexNum );
            }

        } while ( selectIndexes.length < 3 );
    
        return selectIndexes;
       
    },

    displayOptions: function () {
        var randomProductsIndex = this.getIndexes( allProducts );


        for (var i = 1; i < 4; i++ ) {
            var randomProductsArr = []
            var productsArr = []
            
            for  (var j = 0; j < 1; j++ ) {
            var index = 0
            
            index[i] = randomProductsIndex[j];
            randomProductsArr.push(randomProductsIndex[j])
            }

        var product = 0
        product[i] = allProducts[index[i]];
        this.choice[i].src = product[i].filePath;
        this.choice[i].id = product[i].id; 
        this.choice[i].setAttribute( 'data-index', index[i] );
        
        }
    },

    voteCounter: function ( target ) {
        this.votes += 1;

        var selectItems = allProducts[ target.getAttribute( 'data-index') ];
        selectItems.votes ++;

        if ( this.votes > 25 ) {
            this.viewResults();
        }
    },

    viewResults: function () {

        this.displaySection.removeEventListener ( 'click', voteHandler );
        console.table( allProducts );
    }
    
};

var display = document.getElementById( 'display' );
display.addEventListener( 'click', voteHandler, true );

function voteHandler (event) {
    tracker.voteCounter( event.target );
    tracker.displayOptions();
}
  



instProducts();
tracker.displayOptions();


    // var imageThree = document.getElementById('three');
    //    imageThree.src = this.filePath;