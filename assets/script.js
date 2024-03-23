// var bio = [
//     "Fullstack Web & CLI Developer",
//     "GD Player & Creator with 4k~ Hours 😭",
//     "3DS Homebrew Enthusiast",
//     "I <3 Catgirls :3",
//     "#TransRights🏳‍⚧ <3",
//     "Bisexual Catgirl :3",
//     "The worst part about Omori is that you will never be able to play it for the first time again.",
//     "My thoughts will follow you into your dreams.",
// ];

// var element = document.getElementById('bio');
// var random = bio[(Math.floor(Math.random() * bio.length))]
element.innerHTML = random;

articlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 250,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": false,
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
        }
      },
      "line_linked": {
        "enable": false,
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 1500,
          "rotateY": 1500
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
        },
        "onclick": {
          "enable": false,
        },
        "resize": true
      }
    },
    "retina_detect": true
  }

);


function checkProxy() {
    if (window.__uv$config || window.__dynamic$config) {
        alert('Webporxy User Detected');
      };
}; let checkInterval = setInterval(checkProxy, 1000);
