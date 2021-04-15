d3.json("./samples.json").then( (data) => {
    data['names'].forEach((d) =>
    d3.select('#selDataset').append('option').text('BB_' + d).property("value",d)
    )

})



//d3.selectAll("body").on("change", updatePlotly);
function optionChanged(val){
    d3.json("./samples.json").then( (data) => {

        row = data['samples'].filter((item) => item['id'] === val)[0]
        otuIds = row['otu_ids'].slice(0,10).map( item => 'OTU ' + item)
        values = row['sample_values'].slice(0,10).map(item => parseInt(item))
        labels = row['otu_labels'].slice(0,10)
        trace1 = {
            x:values,
            y:otuIds,
            type: 'bar',
            orientation: 'h',
            text: labels
        }
        barLayout = {yaxis:{ autorange: 'reversed' }}
        barData = [trace1]
        Plotly.newPlot('bar', barData,barLayout);

        bubbleOtuIds = row['otu_ids']
        bubbleValues = row['sample_values'].map(item => parseInt(item))
        bubbleLabels = row['otu_labels']
        var trace2 = {
            x: bubbleOtuIds,
            y: bubbleValues,
            mode: 'markers',
            marker: {
              size: bubbleValues,
              color: bubbleOtuIds.map( item => `rgb(${item%255}, ${item%255}, ${item%255})`),
            },
            text: bubbleLabels
          };
        bubbleData = [trace2]
        bubbleLayout = {xaxis: {title: 'OTU ID'}}
        Plotly.newPlot('bubble', bubbleData, bubbleLayout)


    })
    

}