const button=document.querySelectorAll('button')


button.forEach((button=>{
    button.addEventListener('click',async (event)=>{
        console.log("clciked");
        const id=button.dataset.id;
        console.log(id);
        const response=await fetch(`http://localhost:4000/todos/${id}`,{method:"DELETE"})
        console.log(await response.json());
        window.location.reload();
        
    })
}))