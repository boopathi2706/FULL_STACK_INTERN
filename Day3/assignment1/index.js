var cards=document.getElementById("cards");

const fetchdata=async()=>{
    try {
        var response=await fetch('https://jsonplaceholder.typicode.com/users');
         var data= await response.json();
         console.log(data);
         var len=data.length;
         var i=0;
         while(len--){
            var card=document.createElement('div');
            card.classNameList.add("card");
           
                var ide=document.createElement('div');
                ide.textContent=data[i].id;
                card.appendChild(ide);
                ide.classNameList.add("id_");
                
                var user=document.createElement('div');
                user.textContent=data[i].username;
                card.appendChild(user);
                user.classNameList.add("user_")
                
                // var demo =document.createElement("div");
                // var div_className1=document.createElement("div");
                // var div_className2=document.createElement("div");
                // var sy1=document.createElement("div");
                // sy1.textContent="📱"
                // var sy2=document.createElement("div");
                // sy2.textContent="📱"
                var div1=document.createElement("div");
                div1.classNameList.add("div1");
                var pho=document.createElement('h2');
                pho.textContent=data[i].phone;
                 div1.appendChild(pho);

                // card.appendChild(pho);
                // pho.classNameList.add("phone_")
                
                var em=document.createElement('h2');
                em.textContent=data[i].email;
                div1.appendChild(em);
                card.appendChild(div1);
                // card.appendChild(em);
                // em.classNameList.add("email_")
             i++;
            cards.appendChild(card);
            
         }

    } catch (error) {
        console.log("error : " ,error)
    }
}
fetchdata()