console.log('Loaded!');

// Change the text of the main-text div
 var button = document.getElementById('counter');
 
 button.onCLick = function(){
     
     //create a request to the counter endpoint
     var request = new XMLHttpRequest();
     
     
     //capture the response and store it in a variable
     request.onreadystatechange = function(){
         if(request.readyState == XMLHttpRequest.Done){
             if(request.status == 200){
                var counter =  request.responeText;
                var span = document.getElementById('counter');
                span.innerHTML = counter.toString();
             }
         } 
     };
     
    //Make the request
    request.open('GET','http://nfathima07.imad.hasura-app.io/counter', true);
    request.send(null);
 
     
 }