document.body.innerHTML=`
<div class="header-container">
<h1><i class="far fa-cat fa-1x"></i>Cats</h1>
<div class="search-botton-container">
<input type="search" id="search" placeholder="Search..." />
<button class="search-bottom" onclick="Search_cat()"><a class="waves-effect waves-light btn-small">Button</a></button>
</div>
</div>
<section class="cat-list"></section>`
//giving the header and search button into the body



//async the acat api by using fetch and await
//by using the section the below items are print in the window
async function getCatsList(){
    const data = await fetch("https://cataas.com/api/cats?tags=cute");
    const userList=await data.json();
    const catList=document.querySelector(".cat-list");
    catList.innerHTML="";
    userList.forEach((userList)=>{
        catList.innerHTML +=`
        <div class="align-cats-details">
        <div>
        <img class="image-cat" src="https://cataas.com/cat/${userList.id}" alt="${userList.id}" />
        </div>
        <div>
        <p class="cat-tags">${userList.tags}</p>
        </div>
        </div>
       `;
       //getting the image and tags (cute,etc) into the section
        
    });
    console.log(userList);
}
getCatsList();
 
//in the below the searching of tag is to display in the window 
//getting the image and tag by usin async , await and fetch
//if loop is to check whether the input value is equal to the usertag 
//while click the search button then the image will print 
async function Search_cat(){
    const data=await fetch("https://cataas.com/api/cats?tags=cute");
    try{
    const cat=await data.json();
    const inputValue=document.querySelector("#search").value;
    const userContainer=document.querySelector(".cat-list");
    userContainer.innerHTML=" ";
    cat.forEach(catImage=>{
        for(let i=0;i<=catImage.tags.length;i++){
            if(catImage.tags[i]==inputValue){
                console.log(catImage.id)
                const userContainer=document.querySelector(".cat-list");
                userContainer.innerHTML+=`
                <div>
                <img class="image-cat" src="https://cataas.com/cat/${catImage.id}" alt="catImage" />
                </div>` 
            }
        }
    })
    //if input value is equal then print the image 
    if(inputValue){
        console.log("hello");
        userContainer.innerHTML+=`
                <div>
                <img class="cat-image" src="https://cataas.com/cat/${inputValue}" alt="inputValue" />
                </div>` 

    }
}
//catch is use to catch the error found in the if loop
catch(err){
     if(inputValue!==userList.tags){
    alert("tryagain");
     }
};
}
getCatsList();

//getting the searched image into the window 


