var canvas =  document.getElementById( 'chart' );
var context = canvas.getContext( '2d' );

var voteChart = new Chart ( canvas, {
    type: 'bar',
    data: {
        labels: [ 'bag', 'banana', 'dog', 'duck'],
        datasets: [voteCounter]
    },

})