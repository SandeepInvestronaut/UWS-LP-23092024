
//Form validation code
function validate() {
  var e = document.getElementById("admname"),
    t = document.getElementById("admage"),
    n = document.getElementById("admphone"),
    i = document.getElementById("admemail"),
    a = document.getElementById("floatingTextarea2"),
    o = document.getElementById("year"),
    l = document.getElementById("admgrade");
  let r = engine(e, 0, "Student Name cannot be blank"),
    c = engine(t, 1, "Age cannot be blank"),
    d = engine(n, 3, "Phone cannot be blank"),
    s = engine(i, 2, "Email cannot be blank"),
    m = engine(a, 4, "Message cannot be blank"),
    u = engine1(o, 0, "Please select an Academic Year"),
    g = engine1(l, 1, "Please select Grade");
  var b = /^[0-9]+$/;
  return !(
    !r ||
    !c ||
    !d ||
    !s ||
    !m ||
    !u ||
    !g ||
    (i.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ? t.value.match(b)
        ? n.value.match(b)
          ? (n.value.length < 10 || n.value.length > 10) &&
          ((document.getElementsByClassName("error")[3].innerHTML =
            "Please Enter10 digit Valid Mobile number"),
            (n.style.border = "2px solid red"),
            1)
          : ((document.getElementsByClassName("error")[3].innerHTML =
            "Please Enter Valid Mobile number"),
            (n.style.border = "2px solid red"),
            1)
        : ((document.getElementsByClassName("error")[1].innerHTML =
          "Please Enter Valid Age"),
          (t.style.border = "2px solid red"),
          1)
      : ((document.getElementsByClassName("error")[2].innerHTML =
        "Please Enter Valid Email Address"),
        (i.style.border = "2px solid red"),
        1))
  );
}


//Naturing learners for life code
window.onload = function () {
  const e = document.getElementById("slider-inner");
  [
    {
      backgroundColor: "#993e7c",
      imgSrc: "img/icon1.webp",
      title: "Experiential Learning",
      description:
        "The best way to learn is “learning by doing” and then reflecting on the experience. Project-based, real-world learning is a core part of our curriculum.",
    },
    {
      backgroundColor: "#d55873",
      imgSrc: "img/icon2.webp",
      title: "Inquiry-based Approach",
      description:
        "We inculcate a lifelong love of learning by encouraging curiosity, questions, and learning by exploration, rather than instruction.",
    },
    {
      backgroundColor: "#fb8563",
      imgSrc: "img/icon3.webp",
      title: "World-class Facilities",
      description:
        "From an outstanding swimming pool to an archery and rifle-shooting range, holistic development is encouraged and supported by our state-of-the-art facilities.",
    },
    {
      backgroundColor: "#3c87a3",
      imgSrc: "img/icon5.webp",
      title: "International Mindedness",
      description:
        "We believe in inculcating international mindedness among our students to complement the firm foundation laid with Indian values.",
    },
    {
      backgroundColor: "#00c9a9",
      imgSrc: "img/icon4.webp",
      title: "Individualised Learning & Critical Thinking",
      description:
        "We nurture the unique potential and strengths of each and every child while aiming at developing essential critical thinking skills in them.",
    },
  ].forEach((t) => {
    const n = document.createElement("div");
    n.classList.add("item"),
      (n.innerHTML = `\n        <div class="belowbanner" style="background-color: ${t.backgroundColor}; padding-top: 80px;">\n          <img src="${t.imgSrc}" alt="${t.title}" class="img-fluid">\n          <h3 style="margin-top: 20px;">${t.title}</h3>\n          <p>${t.description}</p>\n        </div>\n      `),
      e.appendChild(n);
  });
  const t = document.getElementById("slider"),
    n = document.querySelectorAll(".item"),
    i = n[0].offsetWidth;
  function a(e) {
    const a = n[e].offsetLeft - (t.offsetWidth - i) / 2;
    t.scrollTo({ left: a, behavior: "smooth" }),
      console.log("leftScrollPosition " + a),
      console.log(n[e].offsetLeft - t.offsetWidth - i);
  }
  console.log(t), console.log(i);
  let o = 0;
  document.getElementById("next").addEventListener("click", function () {
    (o = (o + 1) % n.length), a(o);
  }),
    document.getElementById("prev").addEventListener("click", function () {
      (o = (o - 1 + n.length) % n.length), a(o);
    });
  let l = setInterval(function () {
    (o = (o + 1) % n.length), a(o);
  }, 3e3);
  t.addEventListener("mouseenter", function () {
    clearInterval(l);
  }),
    t.addEventListener("mouseleave", function () {
      l = setInterval(function () {
        (o = (o + 1) % n.length), a(o);
      }, 3e3);
    });
};


//Infrastructural code

const images = [
  "img/infrastructure/02.webp",
  "img/infrastructure/03.webp",
  "img/infrastructure/04.webp",
  "img/infrastructure/05.webp",
  "img/infrastructure/06.webp",
],
  imageSlider = document.getElementById("infra-image-slider");
let currentIndex = 0;
function updateSlider() {
  imageSlider.style.transform = `translateX(-${100 * currentIndex}%)`;
}
images.forEach((e) => {
  const t = document.createElement("img");
  (t.src = e),
    t.classList.add("infra-image"),
    (t.loading = "lazy"),
    imageSlider.appendChild(t);
}),
  document.getElementById("infraPrevBtn").addEventListener("click", () => {
    currentIndex > 0 ? currentIndex-- : (currentIndex = images.length - 1),
      updateSlider();
  }),
  document.getElementById("infraNextBtn").addEventListener("click", () => {
    currentIndex < images.length - 1 ? currentIndex++ : (currentIndex = 0),
      updateSlider();
  });


  




//Tab code

const tabData = [
  {
    title: "Vision Statement",
    content:
      "Universal Wisdom School (UWS), Balewadi aims to be an Educational Centre of Excellence that prepares students for lifelong challenges and to become strong contributors in making the world a better place. We envision an Institution that strives to be a pioneer in Educational methodologies by incorporating cutting-edge technology and contemporary, impactful teaching/learning methods.",
  },
  {
    title: "Mission Statement",
    content:
      "Our mission is to create abundant opportunities to help unfold each student's unique talents and enhance their potential for social, emotional, spiritual, physical, and intellectual growth. We aim to develop in our students' compassion and responsibility towards contributing to the global society as confident, balanced, and caring individuals.",
  },
],
  tabList = document.getElementById("tab-list"),
  tabContent = document.getElementById("tab-content");
function createTabs(e) {
  e.forEach((e, t) => {
    const n = document.createElement("li");
    (n.innerHTML = `<button>${e.title}</button>`),
      n.addEventListener("click", () => {
        activateTab(t);
      }),
      tabList.appendChild(n);
    const i = document.createElement("div");
    (i.innerHTML = `<p>${e.content}</p>`), tabContent.appendChild(i);
  });
}
function activateTab(e) {
  document.querySelectorAll("#tab-list button").forEach((t, n) => {
    t.classList.toggle("active", n === e);
  }),
    document.querySelectorAll("#tab-content div").forEach((t, n) => {
      t.classList.toggle("active", n === e);
    });
}
createTabs(tabData), activateTab(0);
