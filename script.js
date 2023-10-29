const playButton = document.querySelector('.play-button');
const backButton = document.querySelector('#back-button');

let t1 = gsap.timeline({paused:true, reversed:true});
let t2 = gsap.timeline({paused:true, reversed:true});

const album1 = document.querySelector(".album-1");

album1.addEventListener('click',()=>{
    t1.play();
})

playButton.addEventListener("click",()=>{
    t2.play();
})

backButton.addEventListener('click',()=>{
    t1.reverse();
})


t1.to(".screen-1 h1",{
    ease:"power1.inOut",
    yPercent:-100,
    opacity:0,
    
},
0);

t1.to(".screen-1 .album-title",{
    ease:"power1.inOut",
    yPercent:-200, 
    duration:0.5,
    opacity:0,
},
0);
t1.to(".album-row",{
    ease:"power1.inOut",
    yPercent:100, 
    opacity:0,
},
0);

t1.to(".album-1",
{
    ease:"powe1.inOut",
    yPercent:-150,
    
},
0.1
);

t1.to(".album-1",
{
    ease:"power1.inOut",
    height:180,
},
0.1
);

t1.to(".album-1 .left h2",
{
    marginTop:20,
    lineHeight:2
},
0.15
);

t1.to(".album-1 .album-release",   // this one will occur after above ones had compeleted fully 
{
    ease:"power1.inOut",
    opacity:1,

}
);


t1.to(
".play-row h3",{
    ease: "back.inOut(1.7)",
    x:124,
    opacity:1,
},
1);

t1.to(
".album-desc",
{
    ease:"power1.inOut",
    y:-440,
    opacity:1,
}
,1
)
t1.to(
".play-row .play-button",
{
    ease: "bounce.out",
    duration:1,
    scale:1,
}
,1
)
t1.to("#back-button",{
    onStart:()=>{ console.log("started")},
    ease:"expo.out",
    y:-264,
    opacity:1,
},
1.5)


