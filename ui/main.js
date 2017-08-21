

// Change the text of the main-text div
 var button = document.getElementById('counter');
 button.onclick = function(){
     
     //create a request object
     var request = new XMLHttpRequest();
     
     
     //capture the response and store it in a variable
     request.onreadystatechange = function(){
         if(request.readyState === XMLHttpRequest.DONE){
             if(request.status === 200){
                var counter = request.responeText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
             }
         } 
     };
     
    //Make the request
    request.open('GET','http://nfathima07.imad.hasura-app.io/counter', true);
    request.send(null);
 };
 
 //Submit name
 
 var submit = document.getElementById('submit_btn');
 submit.onclick = function()
 {
     
     //create a request object
     var request = new XMLHttpRequest();
     
     
     //capture the response and store it in a variable
     request.onreadystatechange = function()
    {
         if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0; i<names.length;i++){
                list +='<li>' + names[i] + '</li>';
         
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
        }
    } 
};
    
    var nameInput = document.getElementById('name');
    var name = nameInput.value; 
     
     //Make a request to the server and send the name
     
    request.open('GET','http://nfathima07.imad.hasura-app.io/submit-name?name='+ name, true);
    request.send(null);
    
 };

 