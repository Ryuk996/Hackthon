function searchtab() {
    const prodcontainer = document.createElement("div");
    prodcontainer.className = "search-prod-container";
         prodcontainer.innerHTML =   `<h1 class = "header"> Makeup OnBoad</h1>
         <p class = "tag">Fashion destination</p></br>
  
         <input class='search_item' placeholder='prod_name'/>
            <button class="search" onclick="getitems()"> Search </button>
            `;
            
            document.body.append(prodcontainer);
            
  }

  async function getitems() {
    
    try{
      const title = document.querySelector(".search_item").value;
    const data = await fetch(
      `https://makeup-api.herokuapp.com/api/v1/products.json=${brand},${category},`,
      {
        method: "GET"
      }
    );
    
      const users = await data.json();
    const items = users.results;
    localStorage.setItem("search",JSON.stringify(items));
    loadusers(items);
    }

   catch{
     alert("enter valid item? unauthorized")

   }
   
  }



function blush(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                                //calls the function loadUser to print it on the screen
}
function loadUsers(users){
    const userList=document.createElement('div')
    userList.className="user-list";
  users.forEach((user) => {
  console.log(user);
  const userContainer=document.createElement('div');        //Creating a Container div  //$=> concatenating strings
  userContainer.className='user-container'
  userContainer.innerHTML=`
 
  <div class="content">
  <img class="image" src=${user.image_link}></img>
  <div class= "card">
  <h5 class="text1" >${user.brand}</h5> 
  <h5 class="text1">${user.name}</h5>
  <h5 class="text1">${user.category}</h5>                                                            
      <p class="time">${user.price}</p>
      <p class="des">${user.product_link}</p>

     
  </div>
  </div>`                     
  // userContainer.append(userDate,userImg,userName);          //append => adding all data are added to container 
  userList.append(userContainer);                           // conatainer is appended to the userList
  
});
document.body.append(userList);

}

function Bronzer(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                                //calls the function loadUser to print it on the screen
}
function loadUsers(users){
    const userList=document.createElement('div')
    userList.className="user-list";
  users.forEach((user) => {
  console.log(user);
  const userContainer=document.createElement('div');        //Creating a Container div  //$=> concatenating strings
  userContainer.className='user-container'
  userContainer.innerHTML=`
 
  <div class="content">
  <img class="image" src=${user.image_link}></img>
  <div class= "card">
  <h5 >${user.brand}</h5> 
  <h5 >${user.name}</h5>
  <h5 >${user.category}</h5>                                                             
      <p class="time">${user.price}</p>
     
  </div>
  </div>`                     
  // userContainer.append(userDate,userImg,userName);          //append => adding all data are added to container 
  userList.append(userContainer);                           // conatainer is appended to the userList
  
});
document.body.append(userList);

}

function Eyebrow(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                                //calls the function loadUser to print it on the screen
}
function loadUsers(users){
    const userList=document.createElement('div')
    userList.className="user-list";
  users.forEach((user) => {
  console.log(user);
  const userContainer=document.createElement('div');        //Creating a Container div  //$=> concatenating strings
  userContainer.className='user-container'
  userContainer.innerHTML=`
 
  <div class="content">
  <img class="image" src=${user.image_link}></img>
  <div class= "card">
  <h5 >${user.brand}</h5> 
  <h5 >${user.name}</h5>
  <h5 >${user.category}</h5>                                                             
      <p class="time">${user.price}</p>
     
  </div>
  </div>`                     
  // userContainer.append(userDate,userImg,userName);          //append => adding all data are added to container 
  userList.append(userContainer);                           // conatainer is appended to the userList
  
});
document.body.append(userList);

}

function Eyeliner(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                                //calls the function loadUser to print it on the screen
}
function loadUsers(users){
    const userList=document.createElement('div')
    userList.className="user-list";
  users.forEach((user) => {
  console.log(user);
  const userContainer=document.createElement('div');        //Creating a Container div  //$=> concatenating strings
  userContainer.className='user-container'
  userContainer.innerHTML=`
 
  <div class="content">
  <img class="image" src=${user.image_link}></img>
  <div class= "card">
  <h5 >${user.brand}</h5> 
  <h5 >${user.name}</h5>
  <h5 >${user.category}</h5>                                                             
      <p class="time">${user.price}</p>
     
  </div>
  </div>`                     
  // userContainer.append(userDate,userImg,userName);          //append => adding all data are added to container 
  userList.append(userContainer);                           // conatainer is appended to the userList
  
});
document.body.append(userList);

}

function Eyeshadow(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                                //calls the function loadUser to print it on the screen
}
function loadUsers(users){
    const userList=document.createElement('div')
    userList.className="user-list";
  users.forEach((user) => {
  console.log(user);
  const userContainer=document.createElement('div');        //Creating a Container div  //$=> concatenating strings
  userContainer.className='user-container'
  userContainer.innerHTML=`
 
  <div class="content">
  <img class="image" src=${user.image_link}></img>
  <div class= "card">
  <h5 >${user.brand}</h5> 
  <h5 >${user.name}</h5>
  <h5 >${user.category}</h5>                                                             
      <p class="time">${user.price}</p>
     
  </div>
  </div>`                     
  // userContainer.append(userDate,userImg,userName);          //append => adding all data are added to container 
  userList.append(userContainer);                           // conatainer is appended to the userList
  
});
document.body.append(userList);

}

function Foundation(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                                //calls the function loadUser to print it on the screen
}
function loadUsers(users){
    const userList=document.createElement('div')
    userList.className="user-list";
  users.forEach((user) => {
  console.log(user);
  const userContainer=document.createElement('div');        //Creating a Container div  //$=> concatenating strings
  userContainer.className='user-container'
  userContainer.innerHTML=`
 
  <div class="content">
  <img class="image" src=${user.image_link}></img>
  <div class= "card">
  <h5 >${user.brand}</h5> 
  <h5 >${user.name}</h5>
  <h5 >${user.category}</h5>                                                             
      <p class="time">${user.price}</p>
     
  </div>
  </div>`                     
  // userContainer.append(userDate,userImg,userName);          //append => adding all data are added to container 
  userList.append(userContainer);                           // conatainer is appended to the userList
  
});
document.body.append(userList);

}

function Lipliner(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                                //calls the function loadUser to print it on the screen
}
function loadUsers(users){
    const userList=document.createElement('div')
    userList.className="user-list";
  users.forEach((user) => {
  console.log(user);
  const userContainer=document.createElement('div');        //Creating a Container div  //$=> concatenating strings
  userContainer.className='user-container'
  userContainer.innerHTML=`
 
  <div class="content">
  <img class="image" src=${user.image_link}></img>
  <div class= "card">
  <h5 >${user.brand}</h5> 
  <h5 >${user.name}</h5>
  <h5 >${user.category}</h5>                                                             
      <p class="time">${user.price}</p>
     
  </div>
  </div>`                     
  // userContainer.append(userDate,userImg,userName);          //append => adding all data are added to container 
  userList.append(userContainer);                           // conatainer is appended to the userList
  
});
document.body.append(userList);

}

function Lipstick(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                                //calls the function loadUser to print it on the screen
}
function loadUsers(users){
    const userList=document.createElement('div')
    userList.className="user-list";
  users.forEach((user) => {
  console.log(user);
  const userContainer=document.createElement('div');        //Creating a Container div  //$=> concatenating strings
  userContainer.className='user-container'
  userContainer.innerHTML=`
 
  <div class="content">
  <img class="image" src=${user.image_link}></img>
  <div class= "card">
  <h5 >${user.brand}</h5> 
  <h5 >${user.name}</h5>
  <h5 >${user.category}</h5>                                                             
      <p class="time">${user.price}</p>
     
  </div>
  </div>`                     
  // userContainer.append(userDate,userImg,userName);          //append => adding all data are added to container 
  userList.append(userContainer);                           // conatainer is appended to the userList
  
});
document.body.append(userList);

}

function Mascara(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                                //calls the function loadUser to print it on the screen
}
function loadUsers(users){
    const userList=document.createElement('div')
    userList.className="user-list";
  users.forEach((user) => {
  console.log(user);
  const userContainer=document.createElement('div');        //Creating a Container div  //$=> concatenating strings
  userContainer.className='user-container'
  userContainer.innerHTML=`
 
  <div class="content">
  <img class="image" src=${user.image_link}></img>
  <div class= "card">
  <h5 >${user.brand}</h5> 
  <h5 >${user.name}</h5>
  <h5 >${user.category}</h5>                                                             
      <p class="time">${user.price}</p>
     
  </div>
  </div>`                     
  // userContainer.append(userDate,userImg,userName);          //append => adding all data are added to container 
  userList.append(userContainer);                           // conatainer is appended to the userList
  
});
document.body.append(userList);

}

function Nail_polish(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish',{
        method:"GET"
    })                                                              //fetches the data from the server
    .then(data => data.json())                                      //converts data into the json file
    .then(users => loadUsers(users))                                //calls the function loadUser to print it on the screen
}
function loadUsers(users){
    const userList=document.createElement('div')
    userList.className="user-list";
  users.forEach((user) => {
  console.log(user);
  const userContainer=document.createElement('div');        //Creating a Container div  //$=> concatenating strings
  userContainer.className='user-container'
  userContainer.innerHTML=`
 
  <div class="content">
  <img class="image" src=${user.image_link}></img>
  <div class= "card">
  <h5 >${user.brand}</h5> 
  <h5 >${user.name}</h5>
  <h5 >${user.category}</h5>                                                             
      <p class="time">${user.price}</p>
     
  </div>
  </div>`                     
  // userContainer.append(userDate,userImg,userName);          //append => adding all data are added to container 
  userList.append(userContainer);                           // conatainer is appended to the userList
  
});
document.body.append(userList);

}




