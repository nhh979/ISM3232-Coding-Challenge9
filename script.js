function main() {
    // Create a div element
    d3.select('body').append('div')

    // Add event listeners
    d3.selectAll('div')
        .on('mouseover', function(){
            d3.select(this).style('background-color', 'firebrick')
        })
        .on('mouseout', function(){
            d3.select(this).style('background-color', 'aqua')
        })
}