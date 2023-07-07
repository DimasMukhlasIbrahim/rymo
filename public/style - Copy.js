function openNav() {
    document.getElementById("mySidebar").style.right= "1px";
    document.getElementById("closebtn").style.marginRight = "30px";
}

/* JavaScript untuk menutup sidebar */
function closeNav() {
document.getElementById("mySidebar").style.right = "-70vw";
document.getElementById("closebtn").style.marginRight= "-5rem";
}



$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
// slide
// const content = [...document.querySelectorAll('.content')]
// const prebtn = [...document.querySelectorAll ['.prebtn']]
// const nxtbtn = [...document.querySelectorAll ['.nxtbtn']]

// content .forEach ((item,i)=> {
//     let ContainerDimensions = item.getBoundingClientRect();
//     let ContainerWidth = ContainerDimensions.width

//     nxtbtn [i].addEventListener ('click', () => {
//         item.scrollright += ContainerWidth;
//     })

//     prebtn [i].addEventListener ('click', () => {
//         item.scrollLeft -= ContainerWidth;
//     })
// })

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

//   
