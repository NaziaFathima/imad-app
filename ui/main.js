

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
 
 //Submit name
 var nameInput = document.getElementById('name');
 var name1 = nameInput.value;
 var submit = document.getElementById('submit_btn');
 submit.onclick = function() {
     //Make a request to the server and send the name
     
     
     //Capture a list of names and render it as a list
     var names = ['name1','name2','name3'];
     var list = '';
     for(var i=0; i<names.length;i++){
         list +='<li>' + names[i] + '</li>';
         
     }
     var ul = document.getElementById('namelist');
     ul.innerHTML = list;
 };

 