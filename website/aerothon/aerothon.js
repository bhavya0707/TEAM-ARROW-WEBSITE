const observer = new IntersectionObserver((entry)=>{
    entry.forEach((ent)=>{
        // console.log("hello");
        if(ent.isIntersecting){
            ent.target.classList.add('show');
        }
        else{
            ent.target.classList.remove('show');
        }
    })
})

const hiddenEle = document.querySelectorAll(".hidden");
hiddenEle.forEach((el)=>observer.observe(el))