document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("#openbook img");
  let index = 0;

  function showNextImage() {
    images[index].classList.remove("visible");

    index++;
    if (index === images.length) {
      index = 0;
    }

    images[index].classList.add("visible");
  }

  images[0].classList.add("visible");

  setInterval(showNextImage, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("#info img");
  let index = 0;

  function showNextImage() {
    images[index].classList.remove("visible");

    index++;
    if (index === images.length) {
      index = 0;
    }

    images[index].classList.add("visible");
  }

  images[0].classList.add("visible");

  setInterval(showNextImage, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
  const infoSection = document.querySelector("#info");
  const infoText = document.querySelector(".info_txt");

  // #info 섹션에 도달했을 때 이벤트 처리
  function handleInfoSectionScroll() {
    const infoSectionTop = infoSection.offsetTop;
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    // #info 섹션에 도달하면
    if (scrollTop >= infoSectionTop - windowHeight) {
      // GSAP 애니메이션을 사용하여 텍스트 부분에 스크롤 모션 적용
      gsap.to(infoText, { duration: 1, y: 0, ease: "power3.out" });
    } else {
      // #info 섹션을 벗어나면
      // 텍스트 부분에 스크롤 모션 제거
      gsap.to(infoText, { duration: 1, y: "100%", ease: "power3.out" });
    }
  }

  // 스크롤 이벤트 감지
  window.addEventListener("scroll", handleInfoSectionScroll);
});
