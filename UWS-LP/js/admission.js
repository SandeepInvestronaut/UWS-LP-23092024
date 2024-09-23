function validate() {
  var e = document.getElementById("admname"),
    a = document.getElementById("admage"),
    l = document.getElementById("admphone"),
    t = document.getElementById("admemail"),
    n = document.getElementById("floatingTextarea2"),
    r = document.getElementById("year"),
    s = document.getElementById("admgrade");
  let d = engine(e, 0, "Student Name cannot be blank"),
    m = engine(a, 1, "Age cannot be blank"),
    o = engine(l, 3, "Phone cannot be blank"),
    i = engine(t, 2, "Email cannot be blank"),
    g = engine(n, 4, "Message cannot be blank"),
    b = engine1(r, 0, "Please select an Academic Year"),
    y = engine1(s, 1, "Please select Grade");
  var E = /^[0-9]+$/;
  return (
    !!d &&
    !!m &&
    !!o &&
    !!i &&
    !!g &&
    !!b &&
    !!y &&
    (t.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ? a.value.match(E)
        ? l.value.match(E)
          ? (!(l.value.length < 10) && !(l.value.length > 10)) ||
            ((document.getElementsByClassName("error")[3].innerHTML =
              "Please Enter10 digit Valid Mobile number"),
            (l.style.border = "2px solid red"),
            !1)
          : ((document.getElementsByClassName("error")[3].innerHTML =
              "Please Enter Valid Mobile number"),
            (l.style.border = "2px solid red"),
            !1)
        : ((document.getElementsByClassName("error")[1].innerHTML =
            "Please Enter Valid Age"),
          (a.style.border = "2px solid red"),
          !1)
      : ((document.getElementsByClassName("error")[2].innerHTML =
          "Please Enter Valid Email Address"),
        (t.style.border = "2px solid red"),
        !1))
  );
}

//Naturing Learners Item Slider

document.addEventListener('DOMContentLoaded', function () {
    // Dynamic data for the slider
    const sliderData = [
      {
        backgroundColor: '#993e7c',
        imgSrc: 'img/icon1.webp',
        title: 'Experiential Learning',
        description: 'The best way to learn is “learning by doing” and then reflecting on the experience. Project-based, real-world learning is a core part of our curriculum.'
      },
      {
        backgroundColor: '#d55873',
        imgSrc: 'img/icon2.webp',
        title: 'Inquiry-based Approach',
        description: 'We inculcate a lifelong love of learning by encouraging curiosity, questions, and learning by exploration, rather than instruction.'
      },
      {
        backgroundColor: '#fb8563',
        imgSrc: 'img/icon3.webp',
        title: 'World-class Facilities',
        description: 'From an outstanding swimming pool to an archery and rifle-shooting range, holistic development is encouraged and supported by our state-of-the-art facilities.'
      },
      {
        backgroundColor: '#3c87a3',
        imgSrc: 'img/icon5.webp',
        title: 'International Mindedness',
        description: 'We believe in inculcating international mindedness among our students to complement the firm foundation laid with Indian values.'
      },
      {
        backgroundColor: '#00c9a9',
        imgSrc: 'img/icon4.webp',
        title: 'Individualised Learning & Critical Thinking',
        description: 'We nurture the unique potential and strengths of each and every child while aiming at developing essential critical thinking skills in them.'
      }
    ];
  
    const sliderInner = document.getElementById('slider-inner');
  
    // Dynamically generate slides
    sliderData.forEach(item => {
      const slide = document.createElement('div');
      slide.classList.add('item');
      slide.innerHTML = `
        <div class="belowbanner" style="background-color: ${item.backgroundColor}; padding-top: 80px;">
          <img src="${item.imgSrc}" alt="${item.title}" class="img-fluid">
          <h3 style="margin-top: 20px;">${item.title}</h3>
          <p>${item.description}</p>
        </div>
      `;
      sliderInner.appendChild(slide);
    });
  
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.item');
    const slideWidth = slides[0].offsetWidth;
  
    // Helper function to center a slide
    function centerSlide(slideIndex) {
      const leftScrollPosition = slides[slideIndex].offsetLeft - (slider.offsetWidth - slideWidth) / 2;
      slider.scrollTo({
        left: leftScrollPosition,
        behavior: 'smooth'
      });
    }
  
    let currentIndex = 0;
    
    // Next button functionality
    document.getElementById('next').addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % slides.length;
      centerSlide(currentIndex);
    });
  
    // Prev button functionality
    document.getElementById('prev').addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      centerSlide(currentIndex);
    });
  
    // Auto-scroll functionality
    let autoScroll = setInterval(function () {
      currentIndex = (currentIndex + 1) % slides.length;
      centerSlide(currentIndex);
    }, 3000); // Auto-scroll every 3 seconds
  
    // Pause auto-scroll on hover
    slider.addEventListener('mouseenter', function () {
      clearInterval(autoScroll);
    });
  
    // Resume auto-scroll when not hovering
    slider.addEventListener('mouseleave', function () {
      autoScroll = setInterval(function () {
        currentIndex = (currentIndex + 1) % slides.length;
        centerSlide(currentIndex);
      }, 3000);
    });
  });
    