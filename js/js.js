const mbNav = document.querySelector(".mobile");
const popMenu = document.querySelector(".pop-menu");

mbNav.addEventListener("click", () => {
  popMenu.classList.toggle("on");
  if (popMenu.classList.contains("on")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

// 화면 변경시 메뉴 닫기
// window.addEventListener("resize", () => {
//   popMenu.classList.remove("on");
// });
