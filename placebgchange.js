let list=document.querySelector("#text");
let bangalore=document.querySelector("select");
bangalore.addEventListener('change',e=>{
   if(e.target.value=='chennai'){
    document.body.style.background="url('https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197__480.jpg')"
    document.body.style.backgroundSize="cover";
    document.body.style. backgroundRepeat="no-repeat"
   }
   else if(e.target.value=='bangalore'){
    document.body.style.background="url('https://cdn.pixabay.com/photo/2014/04/10/15/37/snowman-321034__340.jpg')";
    document.body.style.backgroundSize="cover";
    document.body.style. backgroundRepeat="no-repeat"
   }
   else if(e.target.value=='ooty'){
    
    document.body.style.background="url('https://cdn.pixabay.com/photo/2016/11/14/03/29/grand-palace-1822487__340.jpg')"
    document.body.style.backgroundSize="cover";
    document.body.style. backgroundRepeat="no-repeat"
}
   else if(e.target.value=='mysore'){
    
    document.body.style.background="url('https://cdn.pixabay.com/photo/2017/03/05/00/34/panorama-2117310__340.jpg'"
    document.body.style.backgroundSize="cover";
    document.body.style. backgroundRepeat="no-repeat"
}
  
})
