$("#searchBtn").on("click", function(){

    var text = $("#searchText").val();
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+text+"election&api-key=CrOfebTO4nxToR74F4U1rSaXCYFBQXqh"

    fetch(url)
    .then(function(response) {
    
    //Only proceed if valid city
    if (response.ok) {
        
        $.ajax({
            url: url,
            method: "GET"
          }).then(function(data) {

            console.log(data);
            
          });
        }

    });

});




