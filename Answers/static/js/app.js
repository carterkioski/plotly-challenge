d3.json("./samples.json").then(function (data){
    data['names'].forEach((d) =>
    d3.select('#selDataset').append("option").text('BB_' + d)
    )

    
})

