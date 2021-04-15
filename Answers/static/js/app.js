d3.json("./samples.json").then( (data) => {
    data['names'].forEach((d) =>
    d3.select('#selDataset').append('option').text('BB_' + d).property("value",d)
    )

})



//d3.selectAll("body").on("change", updatePlotly);
function optionChanged(val){
    d3.json("./samples.json").then( (data) => {

        row = data['samples'].filter((item) => item['id'] === val)[0]
        otu_ids = row['otu_ids'].slice(0,10).map( item => 'OTU ' + item)
        values = row['sample_values'].slice(0,10)

        trace1 = {
            x:values,
            y:otu_ids,
            type: 'bar',
            orientation: 'h',
        }
        layout = {yaxis:{ autorange: 'reversed' }}
        traces = [trace1]
        Plotly.newPlot('bar', traces,layout);
    })
    
}