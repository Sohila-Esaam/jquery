/// <reference types="../@types/jquery" />


//sideBar
$('.sideBar').on('click', function(){
    $('.sideBar-Box').animate({width: '250px'}, 500);
    $('.home-content').animate({marginLeft: '200px'}, 500)
})

$('.close-btn').on('click', function(){
    $('.sideBar-Box').animate({width: '0px'}, 500);
    $('.home-content').animate({marginLeft: '0px'}, 500)
})

//scroll

$('a').on('click', function(e){
    let sectionName = e.target.getAttribute('href');
    let sectionOffset = $(sectionName).offset().top;
    $('body,html').animate({scrollTop : sectionOffset}, 500)
})

// section 2
// $('.qoute1 .qouteHeader').on('click', function(){
//     $('.qoute1 .qouteContent').slideToggle(1000)
//     $('.qouteContent').not('.qoute1 .qouteContent').slideUp(1000)
// })
// $('.qoute2 .qouteHeader').on('click', function(){
//     $('.qouteContent').not('.qoute2 .qouteContent').slideUp(1000)
//     $('.qoute2 .qouteContent').slideToggle(1000)
// })
// $('.qoute3 .qouteHeader').on('click', function(){
//    $('.qouteContent').not('.qoute3 .qouteContent').slideUp(1000)
//     $('.qoute3 .qouteContent').slideToggle(1000)
// })
// $('.qoute4 .qouteHeader').on('click', function(){
//    $('.qouteContent').not('.qoute4 .qouteContent').slideUp(1000)
//     $('.qoute4 .qouteContent').slideToggle(1000)
// })

$('.qoute .qouteHeader').on('click', function(){
    $(this).next().slideToggle(1000);
    $('.qouteContent').not($(this).next()).slideUp(1000)
})

// section 3
console.log(new Date());

const d = new Date("October 13, 2014 15:13:10");
dd1 = d.getDate();
m1 = d.getMinutes();
h1 = d.getHours();
s1 = d.getSeconds();

const d2 = new Date();
dd2 = d2.getDate();
m2 = d2.getMinutes();
h2 = d2.getHours();
s2 = d2.getSeconds();


let differenceDays = dd2-dd1;
let differenceMinutes = m2-m1;
let differenceHours = h2-h1;
let differenceSeconds = s2-s1;

let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

days.innerHTML = differenceDays;
hours.innerHTML = differenceHours;
minutes.innerHTML = differenceMinutes;
seconds.innerHTML = differenceSeconds;

// end of section 3

//loading screen
$( function(){
    $('.loader').fadeOut(1000, function(){
        $('.loading').slideUp(1000, function(){
            $('body').css('overflow', 'auto')
        })
    })
}
)


//textarea
let maxLength = 100;

$('textarea').keyup(function() {
  let length = $(this).value.length;
  console.log(length);
  let AmountLeft = maxLength-length;

  if(AmountLeft<=0)
            {
                $("#num").text("your available character finished");
            }
            else{
                $("#num").text(AmountLeft);
            }
});