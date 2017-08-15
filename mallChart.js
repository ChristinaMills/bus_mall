var canvas =  document.getElementById( 'mallChart' ).getContext( '2d' );



function drawChart () {
    var voteChart = new Chart ( canvas, {
        type: 'bar',
        data: {
            labels: allProducts.map(function ( product ) {
                return product.displayName;
            }),
            datasets: [{
                label: 'Number of votes', 
                data: allProducts.map(function ( product) {
                    return product.votes;
                }) 
            }]

                // label: 'number of votes',
                // data: [allProducts]
            
        },

    })
}