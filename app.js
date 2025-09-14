new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: false,
  anchors: ["0", "1", "2", "3"],
  sectionsColor: ["#000", "#000", "#000", "#000"],
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const OriginalSection = origin.item;

    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.1 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
    const electron = section.querySelector(".electron");

    const Originalelectron = OriginalSection.querySelector(".electron");

    if (origin.index === 1) {
      setTimeout(removeLogos, 500);
    }
    
    function removeLogos() {

        $(OriginalSection.querySelector(".logo-containers")).empty();
    }
    if (destination.index === 1) {
      addLogos(section.querySelector(".logo-containers"));

      const photo = document.querySelector("#photo");
      const p = document.querySelector("p");
      const stats = document.querySelector(".stats-container");

      tl.fromTo(p, 0.3, { opacity: 0 }, { opacity: 1 });
      tl.fromTo(photo, 0.2, { x: "100", opacity: 0 }, { x: "0", opacity: 1 });
      tl.fromTo(stats, 0.2, { x: "100", opacity: 0 }, { x: "0", opacity: 1 });
      tl.fromTo(logo1, 0.2, { y: "80", opacity: 0 }, { y: 0, opacity: 1 });
      tl.fromTo(logo2, 0.2, { y: "80", opacity: 0 }, { y: 0, opacity: 1 });
      tl.fromTo(logo3, 0.2, { y: "80", opacity: 0 }, { y: 0, opacity: 1 });
      tl.fromTo(logo4, 0.2, { y: "80", opacity: 0 }, { y: 0, opacity: 1 });
      tl.fromTo(logo5, 0.2, { y: "80", opacity: 0 }, { y: 0, opacity: 1 });
      tl.fromTo(logo6, 0.2, { y: "80", opacity: 0 }, { y: 0, opacity: 1 });
      tl.fromTo(logo7, 0.2, { y: "80", opacity: 0 }, { y: 0, opacity: 1 });
      tl.fromTo(logo8, 0.2, { y: "80", opacity: 0 }, { y: 0, opacity: 1 });
      tl.fromTo(logo9, 0.2, { y: "80", opacity: 0 }, { y: 0, opacity: 1 });
      tl.fromTo(logo10, 0.2, { y: "80", opacity: 0 }, { y: 0, opacity: 1 });
      tl.fromTo(logo11, 0.2, { y: "80", opacity: 0 }, { y: 0, opacity: 1 });
      tl.fromTo(logo12, 0.2, { y: "80", opacity: 0 }, { y: 0, opacity: 1 });
    }
    if (destination.index === 2) {
      //    const projects=document.querySelectorAll('.pcontainer');
      //    let i=0;
      //    while(i<3) { tl.fromTo(projects[i],0.4,{x:'0',opacity:0},{x:'50',opacity:1})
      //    i=i+1;
      // };
    }
    if (destination.index === 3) {
      // const container1 = document.querySelectorAll(".container1");
      // tl.fromTo(
      //   container1[0],
      //   0.4,
      //   { x: "-100", opacity: 0 },
      //   { x: "0", opacity: 1 }
      // );
      // tl.fromTo(
      //   container1[1],
      //   0.4,
      //   { x: "100", opacity: 0 },
      //   { x: "0", opacity: 1 }
      // );
    }
    if (destination.index === 4) {
      const form = document.querySelector(".container");
      const details = document.querySelector(".sec");

      tl.fromTo(form, 0.4, { x: "-100", opacity: 0 }, { x: "0", opacity: 1 });
      tl.fromTo(details, 0.4, { x: "100", opacity: 0 }, { x: "0", opacity: 1 });
    }
  },
  afterRender: function() {
    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
  }
});


function addLogos(container) {

  $(container).append('<div class="logo_container"><img class="logo" id="logo1" src="images/logos/html5.PNG" height="70" alt="html5"><img class="logo" id="logo2" src="images/logos/css.PNG" height="70" alt="css3"><img class="logo" id="logo3" src="images/logos/JavaScript-Logo.png" height="70" alt="JavaScript"><img class="logo" id="logo4" src="images/logos/php.PNG" height="70" alt="php"><img class="logo" id="logo5" src="images/logos/mysql.png" height="70" alt="mysql"><img class="logo" id="logo6" src="images/logos/react.png" height="70" alt="react"><img class="logo" id="logo7" src="images/logos/jquery.png" height="70" alt="jquery"></div><div  class="logo_container"><img class="logo filler"  src="images/favicon.png" height="70" alt="jquery"><img class="logo" id="logo8" src="images/logos/laravel-logo.png" height="70"  alt="jquery"><img class="logo" id="logo9" src="images/logos/CI.png" height="70" alt="jquery"><img class="logo" id="logo10" src="images/logos/angularjs-logo.jpg" height="70" alt="jquery"><img class="logo" id="logo11" src="images/logos/react-native-logo.png" height="70" alt="jquery"><img class="logo" id="logo12" src="images/logos/Sass-logo.png" height="70" alt="jquery"><img class="logo filler" src="images/favicon.png" height="70" alt="jquery"></div>');
}

// black hole
blackhole('#blackhole');



function blackhole(element) {
	var h = $(element).height(),
	    w = $(element).width(),
	    cw = w,
	    ch = h,
	    maxorbit = 255, // distance from center
	    centery = ch/2,
	    centerx = cw/2;

	var startTime = new Date().getTime();
	var currentTime = 0;

	var stars = [],
	    collapse = false, // if hovered
	    expanse = false; // if clicked

	var canvas = $('<canvas/>').attr({width: cw, height: ch}).appendTo(element),
	    context = canvas.get(0).getContext("2d");

	context.globalCompositeOperation = "multiply";

	function setDPI(canvas, dpi) {
		// Set up CSS size if it's not set up already
		if (!canvas.get(0).style.width)
			canvas.get(0).style.width = canvas.get(0).width + 'px';
		if (!canvas.get(0).style.height)
			canvas.get(0).style.height = canvas.get(0).height + 'px';

		var scaleFactor = dpi / 96;
		canvas.get(0).width = Math.ceil(canvas.get(0).width * scaleFactor);
		canvas.get(0).height = Math.ceil(canvas.get(0).height * scaleFactor);
		var ctx = canvas.get(0).getContext('2d');
		ctx.scale(scaleFactor, scaleFactor);
	}

	function rotate(cx, cy, x, y, angle) {
		var radians = angle,
		    cos = Math.cos(radians),
		    sin = Math.sin(radians),
		    nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
		    ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
		return [nx, ny];
	}

	setDPI(canvas, 192);

	var star = function(){

		// Get a weighted random number, so that the majority of stars will form in the center of the orbit
		var rands = [];
		rands.push(Math.random() * (maxorbit/2) + 1);
		rands.push(Math.random() * (maxorbit/2) + maxorbit);

		this.orbital = (rands.reduce(function(p, c) {
			return p + c;
		}, 0) / rands.length);
		// Done getting that random number, it's stored in this.orbital

		this.x = centerx; // All of these stars are at the center x position at all times
		this.y = centery + this.orbital; // Set Y position starting at the center y + the position in the orbit

		this.yOrigin = centery + this.orbital;  // this is used to track the particles origin

		this.speed = (Math.floor(Math.random() * 2.5) + 1.5)*Math.PI/180; // The rate at which this star will orbit
		this.rotation = 0; // current Rotation
		this.startRotation = (Math.floor(Math.random() * 360) + 1)*Math.PI/180; // Starting rotation.  If not random, all stars will be generated in a single line.  

		this.id = stars.length;  // This will be used when expansion takes place.

		this.collapseBonus = this.orbital - (maxorbit * 0.7); // This "bonus" is used to randomly place some stars outside of the blackhole on hover
		if(this.collapseBonus < 0){ // if the collapse "bonus" is negative
			this.collapseBonus = 0; // set it to 0, this way no stars will go inside the blackhole
		}

		stars.push(this);
		this.color = 'rgba(255,255,255,'+ (1 - ((this.orbital) / 255)) +')'; // Color the star white, but make it more transparent the further out it is generated

		this.hoverPos = centery + (maxorbit/2) + this.collapseBonus;  // Where the star will go on hover of the blackhole
		this.expansePos = centery + (this.id%100)*-10 + (Math.floor(Math.random() * 20) + 1); // Where the star will go when expansion takes place


		this.prevR = this.startRotation;
		this.prevX = this.x;
		this.prevY = this.y;

		// The reason why I have yOrigin, hoverPos and expansePos is so that I don't have to do math on each animation frame.  Trying to reduce lag.
	}
	star.prototype.draw = function(){
		// the stars are not actually moving on the X axis in my code.  I'm simply rotating the canvas context for each star individually so that they all get rotated with the use of less complex math in each frame.



		if(!expanse){
			this.rotation = this.startRotation + (currentTime * this.speed);
			if(!collapse){ // not hovered
				if(this.y > this.yOrigin){
					this.y-= 2.5;
				}
				if(this.y < this.yOrigin-4){
					this.y+= (this.yOrigin - this.y) / 10;
				}
			} else { // on hover
				this.trail = 1;
				if(this.y > this.hoverPos){
					this.y-= (this.hoverPos - this.y) / -5;
				}
				if(this.y < this.hoverPos-4){
					this.y+= 2.5;
				}
			}
		} else {
			this.rotation = this.startRotation + (currentTime * (this.speed / 2));
			if(this.y > this.expansePos){
				this.y-= Math.floor(this.expansePos - this.y) / -140;
			}
		}

		context.save();
		context.fillStyle = this.color;
		context.strokeStyle = this.color;
		context.beginPath();
		var oldPos = rotate(centerx,centery,this.prevX,this.prevY,-this.prevR);
		context.moveTo(oldPos[0],oldPos[1]);
		context.translate(centerx, centery);
		context.rotate(this.rotation);
		context.translate(-centerx, -centery);
		context.lineTo(this.x,this.y);
		context.stroke();
		context.restore();


		this.prevR = this.rotation;
		this.prevX = this.x;
		this.prevY = this.y;
	}


	$('.centerHover').on('click',function(){
		start();
	
	});
	$('.centerHover').on('mouseover',function(){
		if(expanse == false){
			collapse = true;
		}
	});
	$('.centerHover').on('mouseout',function(){
		if(expanse == false){
			collapse = false;
		}
	});

	window.requestFrame = (function(){
		return  window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			function( callback ){
			window.setTimeout(callback, 1000 / 60);
		};
	})();

	function loop(){
		var now = new Date().getTime();
		currentTime = (now - startTime) / 50;

		context.fillStyle = 'rgba(25,25,25,0.2)'; // somewhat clear the context, this way there will be trails behind the stars 
		context.fillRect(0, 0, cw, ch);

		for(var i = 0; i < stars.length; i++){  // For each star
			if(stars[i] != stars){
				stars[i].draw(); // Draw it
			}
		}

		requestFrame(loop);
	}

	function init(time){
		context.fillStyle = 'rgba(25,25,25,1)';  // Initial clear of the canvas, to avoid an issue where it all gets too dark
		context.fillRect(0, 0, cw, ch);
		for(var i = 0; i < 2500; i++){  // create 2500 stars
			new star();
		}
		loop();
	}
	init();
start()
	function start(){
			collapse = false;
		expanse = true;

		$(this).addClass('open');
		$('.fullpage').addClass('open');
		setTimeout(function(){
			$('.header .welcome').removeClass('gone');
		}, 500);
		$('#blackhole').css('z-index', '1');
		setTimeout(() => {
		$('.hello-container').show();
		$('.hello-container').addClass('show');
		  fullpage_api.setAllowScrolling(true);
  		  fullpage_api.setKeyboardScrolling(true);
		}, 500);
	}
}
