function validate() {
  var e = document.getElementById("admname"),
    a = document.getElementById("admage"),
    n = document.getElementById("admphone"),
    t = document.getElementById("admemail"),
    r = document.getElementById("floatingTextarea2"),
    l = document.getElementById("year"),
    i = document.getElementById("admgrade");
  let o = engine(e, 0, "Student Name cannot be blank"),
    d = engine(a, 1, "Age cannot be blank"),
    s = engine(n, 2, "Phone cannot be blank"),
    m = engine(t, 3, "Email cannot be blank"),
    g = engine(r, 4, "Message cannot be blank"),
    u = engine1(l, 0, "Year cannot be blank"),
    c = engine1(i, 1, "Grade cannot be blank");
  var b = /^[0-9]+$/;
  return (
    !!o &&
    !!d &&
    !!s &&
    !!m &&
    !!g &&
    !!u &&
    !!c &&
    (t.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ? a.value.match(b)
        ? n.value.match(b)
          ? (!(n.value.length < 10) && !(n.value.length > 10)) ||
            ((document.getElementsByClassName("error")[2].innerHTML =
              "Please Enter10 digit Valid Mobile number"),
            (n.style.border = "2px solid red"),
            !1)
          : ((document.getElementsByClassName("error")[2].innerHTML =
              "Please Enter Valid Mobile number"),
            (n.style.border = "2px solid red"),
            !1)
        : ((document.getElementsByClassName("error")[1].innerHTML =
            "Please Enter Valid Age"),
          (a.style.border = "2px solid red"),
          !1)
      : ((document.getElementsByClassName("error")[3].innerHTML =
          "Please Enter Valid Email Address"),
        (t.style.border = "2px solid red"),
        !1))
  );
}
$(function () {
  $(".videogallery").click(function () {
    var e = $(this).data("bs-target"),
      a = $(this).attr("data-video");
    $(e + " iframe").attr("src", a + "?autoplay=1"),
      $(e + " button.close").click(function () {
        $("#videoModal").hide(), $(e + " iframe").attr("src", "");
      });
  });
}),
  $("#videoModal").on("hidden.bs.modal", function () {
    $("#videoModal").hide(), $("#videoModal iframe").attr("src", "");
  });
let engine = (e, a, n) => {
    let t = document.getElementsByClassName("error");
    return "" === e.value.trim()
      ? ((t[a].innerHTML = n), (e.style.border = "2px solid red"), !1)
      : ((t[a].innerHTML = ""), (e.style.border = "2px solid green"), !0);
  },
  engine1 = (e, a, n) => {
    let t = document.getElementsByClassName("error1");
    return "" === e.value.trim()
      ? ((t[a].innerHTML = n), (e.style.border = "2px solid red"), !1)
      : ((t[a].innerHTML = ""), (e.style.border = "2px solid green"), !0);
  };
$(document).ready(function () {
  var e = $("#one"),
    a = $("#two");
  e.owlCarousel({
    center: !1,
    loop: !0,
    autoplayTimeout: 4e3,
    margin: 10,
    autoplay: !0,
    nav: !0,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: { 0: { items: 1 }, 600: { items: 2 }, 1e3: { items: 2 } },
  }),
    a.owlCarousel({
      center: !1,
      loop: !0,
      autoplayTimeout: 4e3,
      margin: 10,
      autoplay: !1,
      nav: !0,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
      responsive: { 0: { items: 1 }, 600: { items: 2 }, 1e3: { items: 2 } },
    });
});
