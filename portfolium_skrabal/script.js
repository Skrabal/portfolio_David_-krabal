gsap.registerPlugin(ScrollTrigger);

gsap.to('.box', {
    x: 200,
    duraction:1
})

function vypisprumer(array){
var prumer= (znamka+znamkacestina+znamkawebovky) /3;
console.log(prumer)
}
vypisprumer(5+1+3)

let pole =[5,1,3]


function vypisprumer(array){
if (array== null|| array === null){
    alert("pozor, je tu null")
}else{
    for(let i=0; i < array; i++){
        console.log(array[i])
    }
}
}
vypisprumer(pole)
//|| nebo
//&&  a zároven

// ppythagoraocva věda
function pythagorova(a, b) {
    let c = a * a + b * b;
    let odmocnenec = Math.sqrt(c);
    console.log(odmocnenec);
}
pythagorova(2, 5);
//sinus
function sinus90() {
    let radian = Math.PI / 2;  
    let vysledek = Math.sin(radian);  
    console.log(vysledek);  
}
sinus90();


function obsahtrojuhelniku(a, v ){
    //a= strana ab
    // v = vyška
    let obsah = (1/2 *a *v)
    console.log("strana A:" , a," vyska V: " ,v, "obsah:" ,obsah )
}
obsahtrojuhelniku(3,3)


function obvodctverce(a){
    let obvod = 4*a
    console.log(obvod)
}
obvodctverce(2)




// 3. Horizontální scroll
gsap.to('.horizontal-content', {
    xPercent: -100 * (document.querySelectorAll('.box').length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: '.horizontal-scroll',
        
        start: 'top top',
        end: '+=2000',
        pin: true,
        scrub: true,
    }
});



