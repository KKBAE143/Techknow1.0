var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

function page6(){
  gsap.from("#page6 h2",{
      scale: 1.2,
      y: 50,
      duration:1,
      opacity: 0,
      scrollTrigger: {
          trigger: "#page6",
          scroller: "#main",
          // markers: true,
          start: "top -30%",
          end: "top -50%",
          scrub: 2
      }
  })
  
  gsap.from("#page6 p",{
      scale: 1.2,
      y: 50,
      duration:1,
      opacity: 0,
      scrollTrigger: {
          trigger: "#page6",
          scroller: "#main",
          // markers: true,
          start: "top -35%",
          end: "top -55%",
          scrub: 2
      }
  })
  
  gsap.from("#page6 .btn4",{
      scale: 1.2,
      y: 50,
      duration:1,
      opacity: 0,
      scrollTrigger: {
          trigger: "#page6",
          scroller: "#main",
          // markers: true,
          start: "top -40%",
          end: "top -58%",
          scrub: 2
      }
  })
  
  /////
  
  gsap.from("#page41-container-left h1",{
      scale: 1.2,
      y: 50,
      duration:1,
      opacity: 0,
      scrollTrigger: {
          trigger: "#page41-container",
          scroller: "#main",
          // markers: true,
          start: "top 89%",
          end: "top 65%",
          scrub: 2
      }
  })
  
  gsap.from("#page41-container-right",{
      scale: 1.2,
      y: 50,
      duration:1,
      opacity: 0,
      scrollTrigger: {
          trigger: "#page41-container",
          scroller: "#main",
          // markers: true,
          start: "top 89%",
          end: "top 65%",
          scrub: 2
      }
  })


  gsap.from("#page42-container-left",{
      scale: 1.1,
      y: 50,
      duration:1,
      opacity: 0,
      scrollTrigger: {
          trigger: "#page42-container",
          scroller: "#main",
          // markers: true,
          start: "top 94%",
          end: "top 65%",
          scrub: 2
      }
  })
  
  gsap.from("#page42-container-right h1",{
      scale: 1.08,
      y: 50,
      duration:1,
      opacity: 0,
      scrollTrigger: {
          trigger: "#page42-container",
          scroller: "#main",
          // markers: true,
          start: "top 89%",
          end: "top 65%",
          scrub: 2
      }
  })
  
  gsap.from("#page42-container-right button",{
      scale: 1.2,
      y: 50,
      duration:1,
      opacity: 0,
      scrollTrigger: {
          trigger: "#page42-container",
          scroller: "#main",
          // markers: true,
          start: "top 70%",
          end: "top 55%",
          scrub: 2
      }
  })
  
  /////
  
  gsap.from("#page43-container-left h3",{
      scale: 1.2,
      y: 50,
      duration:1,
      opacity: 0,
      scrollTrigger: {
          trigger: "#page43-container",
          scroller: "#main",
          // markers: true,
          start: "top 89%",
          end: "top 65%",
          scrub: 2
      }
  })
  
  gsap.from("#page43-container-right",{
      scale: 1.2,
      y: 50,
      duration:1,
      opacity: 0,
      scrollTrigger: {
          trigger: "#page43-container",
          scroller: "#main",
          // markers: true,
          start: "top 89%",
          end: "top 65%",
          scrub: 2
      }
  })
  
  /////
  
  
  gsap.from("#page44-container-left",{
      scale: 1.2,
      y: 50,
      duration:1,
      opacity: 0,
      scrollTrigger: {
          trigger: "#page44-container",
          scroller: "#main",
          // markers: true,
          start: "top 89%",
          end: "top 65%",
          scrub: 2
      }
  })
  
  gsap.from("#page44-container-right h3 ",{
      scale: 1.2,
      y: 50,
      duration:1,
      opacity: 0,
      scrollTrigger: {
          trigger: "#page44-container",
          scroller: "#main",
          // markers: true,
          start: "top 89%",
          end: "top 65%",
          scrub: 2
      }
  })
  
  gsap.from("#page44-container-right .btn44 ",{
      scale: 1.2,
      y: 50,
      duration:1,
      opacity: 0,
      scrollTrigger: {
          trigger: "#page44-container",
          scroller: "#main",
          // markers: true,
          start: "top 75%",
          end: "top 64%",
          scrub: 2
      }
  })
}

page6()




function submitForm() {

    var patientName = document.getElementById('patientName').value;
    var doctor = document.getElementById('doctor').value;
    var appointmentDate = document.getElementById('appointmentDate').value;
    var appointmentTime = document.getElementById('appointmentTime').value;


    var appointmentData = {
        patientName: patientName,
        doctor: doctor,
        appointmentDate: appointmentDate,
        appointmentTime: appointmentTime
    };


    var appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointmentData);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    alert('Appointment booked successfully!');

}