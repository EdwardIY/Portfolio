if(localStorage.getItem("perspective") == "chosen")looking2HireBtn();


function looking2HireBtn(){
localStorage.setItem("perspective", "chosen")
document.querySelector('body').style.overflowY="initial";
document.querySelector('header').style.left="0px"
// document.querySelector('.serviceNav').style.display="none"
document.querySelector('.hireNav').style.display="flex"
document.querySelector('.perspective').style.display='none'
document.querySelector('.perspectiveafterChosen').style.opacity='1'
document.querySelector('.looking2Hire').classList.add('perspectiveChosenButton')
document.querySelector('.needWebsite').classList.remove('perspectiveChosenButton') 
document.querySelector('.needWebsite').style.overflow="hidden" //Make sure to delete when INaW is ready
}

// function overflowfreezefix(){
// document.querySelector('html').style.overflowY="initial" 
// document.querySelector('header').style.left="0px"
// document.querySelector('.serviceNav').style.display="none"
// document.querySelector('.hireNav').style.display="block"
// document.querySelector('.perspective').style.display='none'
// document.querySelector('.perspectiveafterChosen').style.opacity='1'
// document.querySelector('.looking2Hire').classList.add('perspectiveChosenButton')
// document.querySelector('.needWebsite').classList.remove('perspectiveChosenButton') 

// }





// function needWebsiteBtn (){ 
//  // document.querySelector('html').style.overflowY="initial" Uncomment when u start this perspective
// document.querySelector('body').style.overflow="initial"
// document.querySelector('header').style.left="0px"
// document.querySelector('.hireNav').style.display="none"
// document.querySelector('.serviceNav').style.display="block"
// document.querySelector('.perspective').style.display='none'
// document.querySelector('.perspectiveafterChosen').style.opacity='1'
// document.querySelector('.needWebsite').classList.add('perspectiveChosenButton')
// document.querySelector('.looking2Hire').classList.remove('perspectiveChosenButton')
// }





function ContactBtn(){
    document.querySelector('body').style.overflow="hidden"
    document.querySelector('.darkbackground').style.width="100vw"
    document.querySelector('form').style.display='flex'   
}





function contactSubmitBtn(){
    if(document.querySelector('input').value==""){
        document.querySelector(".req1").placeholder+=" Required*"
        document.querySelector(".req2").placeholder+=" Required*"}
    
   

        else{
        document.querySelector('.beforeFormh1').style.display="none"
        document.querySelector('.afterFormh1').style.display="flex"
        document.querySelector('form').style.border="3px solid green"
        document.querySelector('.formInputs').style.display="none"
        document.querySelector('.formLeftText').style.width="100%"
        // document.querySelector('form').style.width="50%"
        document.querySelector('form').style.padding="0px"
        document.querySelector('.checkIcon').style.color="green"
        document.querySelector('.checkIcon').style.fontSize="10vw"
        document.querySelector('.closeForm').style.fontSize="0"   
    }
}





function contactExitBtn(){
    document.querySelector('body').style.overflow="initial"
    document.querySelector('.darkbackground').style.width="0vw"
    document.querySelector('form').style.display='none'
}


window.sr=ScrollReveal();

sr.reveal(".topDown",
{
    origin:"top",
    distance:"50px",
    duration:2000,
    
})
sr.reveal('.leftInShort',
{
   origin:"left",
   distance:"50px",
   duration:1000,
   viewFactor:.3
});
sr.reveal('.rightInShort',
{
    origin:"right",
    distance:"50px",
    duration:1000,
    viewFactor:.3
});

sr.reveal(".rightInLong",
{
    origin:"left",
    distance:"400px"
})
sr.reveal(".rightInLongDelay",
{
    origin:"left",
    distance:"400px",
    delay:100
})

sr.reveal('.skill-1',
{
    duration:500,
    delay:100,
    origin:"bottom",
    distance:"50px",
    viewFactor:1

});

sr.reveal('.skill-2',
{
    duration:500,
    delay:200,
     origin:"bottom",
    distance:"50px",
    viewFactor:1
});
sr.reveal('.skill-3',
{
    duration:500,
    delay:300,
     origin:"bottom",
    distance:"50px",
    viewFactor:1
});
sr.reveal('.skill-4',
{
    duration:500,
    delay:400,
     origin:"bottom",
    distance:"50px",
    viewFactor:1
});
sr.reveal('.skill-5',
{
    duration:500,
    delay:500,
     origin:"bottom",
    distance:"50px",
    viewFactor:1
});
sr.reveal('.skill-6',
{
    duration:500,
    delay:600,
     origin:"bottom",
    distance:"50px",
    viewFactor:1
});
sr.reveal('.skill-7',
{
    duration:500,
    delay:700,
     origin:"bottom",
    distance:"50px",
    viewFactor:1
});


const openNav = document.getElementById('open')
const closeNav = document.getElementById('close')
const nav = document.getElementById('nav');

openNav.addEventListener("click",()=>{
    nav.style.left = "0px"
    openNav.style.zIndex = "-1"
    openNav.style.opacity = "0"
    closeNav.style.zIndex = "3"
    closeNav.style.opacity = "1"
})

closeNav.addEventListener("click",()=>{
    nav.style.left = "-320px"
    openNav.style.zIndex = "3"
    openNav.style.opacity = "1"
    closeNav.style.zIndex = "-1"
    closeNav.style.opacity = "0"
})

// PRE LOADER 
const preloader = document. getElementById('preloader')

setTimeout(()=>{
    preloader.style.zIndex = "-1";
    preloader.style.opacity = "0";
},1000)

// STATIC PAGE IMAGE CHANGER

const images = [
"./KhanAcademy_Page.jpeg",
"./TecCrunch_Page.jpeg",
"./Restaurant_Page.jpeg",
"./MarketTemplate_Page.jpeg"]
const currentImg = document.getElementById('currentImg');
let i = 0;

setInterval(()=>{
    currentImg.style.backgroundImage = `url(${images[i]})`
    i++;
    if(i == 4) i = 0;
},5000)




