

// Change the text of the main-text div
 var button1 = document.getElementById('counter');
 button1.onclick = function(){
     
     //create a request object
     var request = new XMLHttpRequest();
     
     
     //capture the response and store it in a variable
     request.onreadystatechange = function(){
         if(request.readyState === XMLHttpRequest.Done){
             if(request.status === 200){
                var counter =  request.responeText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
             }
         } 
     };
     
    //Make the request
    request.open('GET','http://nfathima07.imad.hasura-app.io/counter', true);
    request.send(null);
 
     
 };