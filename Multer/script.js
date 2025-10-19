const form =document.querySelector("form");
const progress=document.querySelector("p");

form.addEventListener("submit",async (event)=>{
    event.preventDefault();
    const formData=new FormData(event.target)
     console.log(formData);
        for(const field of formData){
            console.log(field);
            
        }  
    const  xhr=new XMLHttpRequest();
    xhr.open("POST",`http://localhost:4000/upload`,true);
    xhr.addEventListener('load',()=>{
        console.log(xhr.response);
        
        
    })
    xhr.upload.addEventListener(    "progress",(e)=>{
        const   totalProgress=(e.loaded/e.total)*100
        progress.innerText=`Progress: ${totalProgress.toFixed(2)}`;
    })
xhr.send(formData);
    
})