document.addEventListener("DOMContentLoaded", function() {
    // Burger Menu
    var burgerOpen = document.querySelector('.burger-open'),
    burgerCls = document.querySelector('.burger-close');

    burgerOpen.addEventListener('click', function(e) {
        burgerOpen.classList.add('active');
        burgerCls.classList.remove('active');
        showMenu();
    });

    burgerCls.addEventListener('click', function(e) {
        burgerCls.classList.add('active');
        hideMenu();
        burgerOpen.classList.remove('active');

    });

    // Menu footer effect
    generateBalls();
  
    window.addEventListener('resize', function(e) {
      $(".gooey-animations .ball").remove();
      generateBalls();
    });
});


function showMenu() {
    var burgerOpen = document.querySelector('.burger-open'),
    burgerCls = document.querySelector('.burger-close');

    var tl = anime.timeline({
        easing: 'easeInQuad',
        duration: 2500
      });

   
      tl.add({
          targets: "#first",
          d: [
              {
                value: "m -231.59524,-461.67912 c 0,0 322.93738,889.91118 720,925.71429 359.94284,32.45602 591.39494,-584.88893 948.57144,-640 319.1576,-49.2449 511.4616,454.15643 834.2856,445.71428 563.8484,-14.74515 937.143,-720 937.143,-720 z"
              },
              {
                value: "m -231.59524,-461.67912 c 0,0 -122.77691,4489.91122 274.285715,4525.71432 359.942835,32.456 968.537825,55.111 1325.714225,0 319.1576,-49.2449 1242.8903,65.585 1565.7143,57.1428 563.8484,-14.7451 274.2858,-4571.42855 274.2858,-4571.42855 z"
              }
          ],
          translateY: [-600, 0],
          duration: 2500
      },'-=1700')
    .add({
        targets: "#second",
        d: [
            {
              value: "m -231.59524,-461.67912 c 0,0 322.93738,889.91118 720,925.71429 359.94284,32.45602 591.39494,-584.88893 948.57144,-640 319.1576,-49.2449 511.4616,454.15643 834.2856,445.71428 563.8484,-14.74515 937.143,-720 937.143,-720 z"
            },
            {
              value: "m -231.59524,-461.67912 c 0,0 -122.77691,4489.91122 274.285715,4525.71432 359.942835,32.456 968.537825,55.111 1325.714225,0 319.1576,-49.2449 1242.8903,65.585 1565.7143,57.1428 563.8484,-14.7451 274.2858,-4571.42855 274.2858,-4571.42855 z"
            }
        ],
        translateY: [-700, 0],
        opacity: 1,
        duration: 2500
    },'-=2300')
  .add({
    targets: "#third",
    d: [
        {
          value: "m -231.59524,-461.67912 c 0,0 48.65167,478.48261 445.71429,514.28572 359.94284,32.45602 640.22018,-446.37284 982.85715,-331.42857 262.0148,87.89795 626.8984,1278.90087 1188.5713,1211.42853 532.557,-63.9747 822.8573,-1382.85711 822.8573,-1382.85711 z"
        },
        {
          value: "m -231.59524,-461.67912 c 0,0 -122.77691,4489.91122 274.285715,4525.71432 359.942835,32.456 968.537825,55.111 1325.714225,0 319.1576,-49.2449 1242.8903,65.585 1565.7143,57.1428 563.8484,-14.7451 274.2858,-4571.42855 274.2858,-4571.42855 z"
        }
    ],
    translateY: [-700, 0],
    duration: 2500
},'-=2300')
.add({
  targets: ".third-svg",
  complete: function() {
    burgerOpen.classList.remove('active');

      anime.timeline({}).add({
        targets: burgerOpen,
        opacity: 0,
        translateX: [0, -700],
        duration: 100
      })
      .add({
        targets: burgerCls,
        opacity: 1,
        translateX: [-700, 0],
        duration: 300
      }, '+=50');

    burgerCls.classList.add('active');

  }
},'-=2300')
.add({
  targets: ".liquid-menu-gooey",
  opacity: 1,
  height: '100vh',
  duration: 400

}, '-=400')
.add({
  targets: ['.nav-container', ".nav-link"],
  opacity: 1,
  zIndex: 400,
  easing: 'easeInCubic',
  duration: 300,

}, '-=400')

.add({
  targets: ".nav-link .letter",
  opacity: 1,
  translateX:["-300%", 0],
  color: ["#000", "#b0cae3", "#000"],
  easing: 'easeInCubic',
  duration: 500,
    delay: anime.stagger(20, {direction: "normal"}) 
}, '-=450')
.add({
  targets: ".nav-link .letter",
  color: ["#000", "#b0cae3", "#000"],
  easing: 'easeInCubic',
  duration: 400,
    delay: anime.stagger(20, {direction: "normal"}) 
}, '-=470')

.add({
    targets: [".liquid-menu"],
    height: "100vh",
    opacity: 1,
    duration: 100

},'0');

}




function hideMenu() {
    var burgerOpen = document.querySelector('.burger-open'),
    burgerCls = document.querySelector('.burger-close');


    var tl = anime.timeline({
        easing: 'easeInQuad'
      });



   
      tl

      .add({
        targets: "#third",
        d: [
    
            {
              value: "m -231.59524,-461.67912 c 0,0 -122.77691,4489.91122 274.285715,4525.71432 359.942835,32.456 968.537825,55.111 1325.714225,0 319.1576,-49.2449 1242.8903,65.585 1565.7143,57.1428 563.8484,-14.7451 274.2858,-4571.42855 274.2858,-4571.42855 z"
            },
            {
                value: "m -231.59524,-461.67912 c 0,0 48.65167,478.48261 445.71429,514.28572 359.94284,32.45602 640.22018,-446.37284 982.85715,-331.42857 262.0148,87.89795 626.8984,1278.90087 1188.5713,1211.42853 532.557,-63.9747 822.8573,-1382.85711 822.8573,-1382.85711 z"
            }
        ],
        translateY: [0, -700],
        duration: 3000
    },'-=2800')
    .add({
      targets: ".nav-link .letter",
      opacity: 0,
      translateX:[0, "-300%"],
      easing: 'easeInCubic',
      duration: 100,
        delay: anime.stagger(5, {direction: "reverse"}) 
    }, '-=2800')
    .add({
      targets: ['.nav-container', ".nav-link"],
      opacity: 0,
      zIndex: -100,
      easing: 'easeInCubic',
      duration: 100,
    
    }, '-=2800')
    .add({
      targets: ".liquid-menu-gooey",
      height: '0',
      opacity: 0,
      duration: 200
    
    }, '-=3000')

    .add({
        targets: "#second",
        d: [
            {
                value: "m -231.59524,-461.67912 c 0,0 -122.77691,4489.91122 274.285715,4525.71432 359.942835,32.456 968.537825,55.111 1325.714225,0 319.1576,-49.2449 1242.8903,65.585 1565.7143,57.1428 563.8484,-14.7451 274.2858,-4571.42855 274.2858,-4571.42855 z"
            },
            {
              value: "m -231.59524,-461.67912 c 0,0 322.93738,889.91118 720,925.71429 359.94284,32.45602 591.39494,-584.88893 948.57144,-640 319.1576,-49.2449 511.4616,454.15643 834.2856,445.71428 563.8484,-14.74515 937.143,-720 937.143,-720 z"
            }

        ],
        translateY: [0, -700],
        opacity: 1,
        duration: 3000
    },'-=2800')
      .add({
          targets: "#first",
          d: [
            {
                value: "m -231.59524,-461.67912 c 0,0 -122.77691,4489.91122 274.285715,4525.71432 359.942835,32.456 968.537825,55.111 1325.714225,0 319.1576,-49.2449 1242.8903,65.585 1565.7143,57.1428 563.8484,-14.7451 274.2858,-4571.42855 274.2858,-4571.42855 z"
              },
              {
                value: "m -231.59524,-461.67912 c 0,0 322.93738,889.91118 720,925.71429 359.94284,32.45602 591.39494,-584.88893 948.57144,-640 319.1576,-49.2449 511.4616,454.15643 834.2856,445.71428 563.8484,-14.74515 937.143,-720 937.143,-720 z"
              }
          ],
          translateY: [0, -600],
          duration: 3000,
          complete: function() {
            burgerCls.classList.remove('active');

            anime.timeline({}).add({
              targets: burgerCls,
              opacity: 0,
              translateX: [0, -700],
              duration: 100
            })
            .add({
              targets: burgerOpen,
              opacity: 1,
              translateX: [-700, 0],
              duration: 300
            }, '+=10')
            .add({
                targets: [".liquid-menu"],
                height: "0px",
                opacity: 0,
                duration: 100
            
            },'-=50');
      
        }
      },'-=2800');

}



  function generateBalls() {
    for (var i = 0; i < Math.floor(window.innerWidth/25); i++) {
      $(".gooey-animations").append(`
      <div class="ball"></div>
    `);
      var colors = ['#000','#b0cae3'];
      $(".ball").eq(i).css({"bottom":"0px","left":Math.random()*window.innerWidth-100,"animation-delay":Math.random()*5+"s","transform":"translateY("+Math.random()*10+"px)","background-color":colors[i%2]});
    }
  }

  function showNavLinks() {
    anime.timeline({})
    .add({
      targets: ['.nav-container', ".nav-link"],
      opacity: 1,
      zIndex: 400,
      easing: 'easeInCubic',
      duration: 300,
  
  }, '-=1000')
  .add({
      targets: ".nav-link .letter",
      opacity: 1,
      color: ["#fff", "#b0cae3", "#000"],
      easing: 'easeInCubic',
      duration: 300,
        delay: anime.stagger(20, {direction: "normal"}) 
  }, '-=50');
  }

  function SplitTextAll(els) {

    this.elList = document.querySelectorAll(els);
    this.elArr = [].slice.call(this.elList);
    this.stringArr  = [];
    this.letterArr  = [];
    this.strings = "";
    this.letters = "";
    this.wrapperLetters = "";
    
      for (var i = 0; i < this.elArr.length; i++ ) {
        //elArr[i].className +=  `  el-${i + 1}`;
        this.elArr[i].className += " word-".concat(i + 1);
        this.strings = (this.elArr[i].innerHTML).replace("&amp;", "&");;
    
    
        
        //letters = [...strings];
        this.letters = [].slice.call(this.strings);
    
        this.letterArr = [];
    
        for (var j = 0; j < this.letters.length; j++) {
    
    
          if(this.letters[j] != " ") {
            //wrappedLetters = `<span class='char char-${j + 1}'> ${letters[j]} </span> `;
    
            this.wrappedLetters = "<span class='letter letter-".concat(j + 1, "'>").concat(this.letters[j],"</span>");
            this.letterArr.push(this.wrappedLetters);
          } else {
            this.wrappedLetters = "<span class='letter-space'>" + this.letters[j] + "</span>";
            this.letterArr.push(this.wrappedLetters);
          }
    
          this.elArr[i].innerHTML = this.letterArr.join("");
         }
    
         this.stringArr.push(this.letterArr);
          
      
      }
    
    }
    
    var navLinkSplit = new SplitTextAll(".split");


    // Gooey Buttom
    var buttons = document.querySelectorAll('.button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    initButton(this);
  });
}

function initButton(el) {
	var circleLeft = el.querySelector('.circle.left');
	var circleRight = el.querySelector('.circle.right');

  var tl = anime.timeline({
    easing: 'easeInCubic',
    duration: 2500
  });
  

  anime({
    targets: circleLeft,
    keyframes: [
      {translateX: '-100px', scale: 1.3, opacity: 1, duration: 1000},
      {translateX: '-150px', scale: 1.1,  opacity: 0, duration: 300},
      {translateX: '0px', scale: 1, opacity:0, duration: 100},
      {translateX: '0px', scale: 1, opacity:1, duration: 50}

    ],
    easing: 'linear'
  });

  anime({
    targets: circleRight,
    keyframes: [
      {translateX: '100px', scale: 1.3, opacity: 1, duration: 1000},
      {translateX: '150px', scale: 1.1,  opacity: 0, duration: 300},
      {translateX: '0px', scale: 1, opacity:0, duration: 100},
      {translateX: '0px', scale: 1, opacity:1, duration: 50}

    ],
    easing: 'linear'
  });


}






