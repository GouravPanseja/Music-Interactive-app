const playButton = document.querySelector('.play-button');
const backButton = document.querySelector('#back-button');

let t1 = gsap.timeline({paused:true, reversed:true});
let t2 = gsap.timeline({paused:true, reversed:true});
let reverseButton2 = document.querySelector(".back-button2");

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
    ease:"power4.Out",
    yPercent:-100,
    opacity:0,
    
},
0);

t1.to(".screen-1 .album-title",{
    ease:"power4.Out",
    yPercent:-200, 
    duration:0.5,
    opacity:0,
},
0);
t1.to(".album-row",{
    ease:"power4.Out",
    yPercent:100, 
    opacity:0,
},
0);

t1.to(".album-1",
{
    ease:"powe4.Out",
    yPercent:-150,
    
},
0.1
);

t1.to(".album-1",
{
    ease:"power4.Out",
    height:180,
},
0.1
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
t1.to(
    "#back-button",{
  
    ease:"expo.out",
    y:-264,
    opacity:1,
},
1.5)


/// 2nd TimeLine

t2.to(
    ".album-1",
{
        height:100,
        y:-100,
        ease:"power1.inOut"

}
,0
)

t2.to(
    ".album-1 img",
{
        height:100,
        y:-100,
        ease:"power1.inOut"

}
,0
)
t2.to(
    ".play-row h3",
{
    ease:"back.inOut(1.7)",    //  1.7 is the measure of the element goes in opposite direction before going in desired direction to give special effect
    x:-124,
    opacity:1,
     

}
,0
)
t2.to(
    ".play-button",
{
    ease:"power1.inOut",    //  1.7 is the measure of the element goes in opposite direction before going in desired direction to give special effect
    scale:0,

}
,0
)
t2.to(
    ".album-desc",
{
    y:440,
    ease:"power1.inOut"
}
,0
)
t2.to(
    "#back-button",
{
    y:264,
    ease:"power1.inOut"
}
,0
)
t2.to(
    ".song-1",
{
    xPercent:120,
}
  
,0
)

 
