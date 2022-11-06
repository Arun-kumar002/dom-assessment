let section=document.querySelectorAll("section");

// console.log(section.children.item(0));
// section.forEach(e=>{
//     let a=e.children.item(0);
//     let b=e.children.item(1);
//     let c=e.children.item(2);
//     let d=e.children.item(3);
//     let i= e.children.item(4);
//     let f= e.children.item(5);
//     let g= e.children.item(6);
//     let h= e.children.item(7);
    
//     a.addEventListener("mouseenter",e=>
//     {
        
//         a.style.background="red";
//         a.addEventListener("mouseleave",e=>{
//             a.style.background="#efefec";
//         })
//     });
//     b.addEventListener("mouseenter",e=>{
//         b.style.background="violet";
//         b.addEventListener("mouseleave",e=>{
//             b.style.background="#efefec";
//         })
//     });
//     c.addEventListener("mouseenter",e=>
//     {
        
//         c.style.background="indigo";
//         c.addEventListener("mouseleave",e=>{
//             c.style.background="#efefec";
//         })
//     });
//     i.addEventListener("mouseenter",e=>
//     {
        
//         i.style.background="green";
//         i.addEventListener("mouseleave",e=>{
//             i.style.background="#efefec";
//         })
//     });
//     d.addEventListener("mouseenter",e=>
//     {
        
//         d.style.background="blue";
//         d.addEventListener("mouseleave",e=>{
//             d.style.background="#efefec";
//         })
//     });
//     f.addEventListener("mouseenter",e=>
//     {
        
//         f.style.background="yellow";
//         f.addEventListener("mouseleave",e=>{
//             f.style.background="#efefec";
//         })
//     });
//     g.addEventListener("mouseenter",e=>
//     {
        
//         g.style.background="orange";
//         g.addEventListener("mouseleave",e=>{
//             g.style.background="#efefec";
//         })
//     });
//     h.addEventListener("mouseenter",e=>
//     {
        
//         h.style.background="red";
//         h.addEventListener("mouseleave",e=>{
//             h.style.background="#efefec";
//         })
//     });
// })


let div=document.querySelectorAll("div")


div.forEach(data=>{
    data.addEventListener("mouseover",e=>{
            data.style.background=data.innerHTML;
    });
    data.addEventListener("mouseout",e=>{
        data.style.background="initial";
      });
});