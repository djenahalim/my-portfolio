new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: false,
  anchors: ["0", "1", "2", "3", "4"],
  sectionsColor: ["#000", "#000", "#000", "#000", "#000"],
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const OriginalSection = origin.item;

    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.1 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
    const electron = section.querySelector(".electron");

    const Originalelectron = OriginalSection.querySelector(".electron");

    addStars(electron);
    setTimeout(removeStars, 500);
    if (origin.index === 1) {
      setTimeout(removeLogos, 500);
    }
    function removeStars() {
      $(Originalelectron).empty();
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
      const container1 = document.querySelectorAll(".container1");
      tl.fromTo(
        container1[0],
        0.4,
        { x: "-100", opacity: 0 },
        { x: "0", opacity: 1 }
      );
      tl.fromTo(
        container1[1],
        0.4,
        { x: "100", opacity: 0 },
        { x: "0", opacity: 1 }
      );
    }
    if (destination.index === 4) {
      const form = document.querySelector(".container");
      const details = document.querySelector(".sec");

      tl.fromTo(form, 0.4, { x: "-100", opacity: 0 }, { x: "0", opacity: 1 });
      tl.fromTo(details, 0.4, { x: "100", opacity: 0 }, { x: "0", opacity: 1 });
    }
  },
});
function addStars(electron) {
  for (let i = 0; i < 200; i++) {
    const random2 = Math.floor(Math.random() * 100);
    const random3 = Math.floor(Math.random() * 100);
    const random4 = Math.floor(Math.random() * 3) + 2;
    $(electron).append(
      "<div class='dot' style=' left: " +
        random2 +
        "%;top: " +
        random3 +
        "%;  width: " +
        random4 +
        "px;height: " +
        random4 +
        "px;'></div>"
    );
  }
}

function addLogos(container) {

  $(container).append('<div class="logo_container"><img class="logo" id="logo1" src="images/logos/html5.PNG" height="70" alt="html5"><img class="logo" id="logo2" src="images/logos/css.PNG" height="70" alt="css3"><img class="logo" id="logo3" src="images/logos/JavaScript-Logo.png" height="70" alt="JavaScript"><img class="logo" id="logo4" src="images/logos/php.PNG" height="70" alt="php"><img class="logo" id="logo5" src="images/logos/mysql.png" height="70" alt="mysql"><img class="logo" id="logo6" src="images/logos/react.png" height="70" alt="react"><img class="logo" id="logo7" src="images/logos/jquery.png" height="70" alt="jquery"></div><div  class="logo_container"><img class="logo filler"  src="images/favicon.png" height="70" alt="jquery"><img class="logo" id="logo8" src="images/logos/laravel-logo.png" height="70"  alt="jquery"><img class="logo" id="logo9" src="images/logos/CI.png" height="70" alt="jquery"><img class="logo" id="logo10" src="images/logos/angularjs-logo.jpg" height="70" alt="jquery"><img class="logo" id="logo11" src="images/logos/react-native-logo.png" height="70" alt="jquery"><img class="logo" id="logo12" src="images/logos/Sass-logo.png" height="70" alt="jquery"><img class="logo filler" src="images/favicon.png" height="70" alt="jquery"></div>');
}
