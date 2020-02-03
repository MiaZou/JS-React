function handleMouseEvent(ev) {
  let wholePicture = document.querySelector(".picture");
  let left = document.querySelector(".left");
  let right = document.querySelector(".right");
  let bar = document.querySelector(".bar");

  let leftside = ev.clientX - wholePicture.offsetLeft;

  if (leftside < 0) {
    leftside = 0;
  } else if (leftside >= wholePicture.offsetWidth - bar.offsetWidth) {
    leftside = wholePicture.offsetWidth - bar.offsetWidth;
  }

  left.style.width = leftside + "px";
  left.style.transition = "";
  bar.style.left = leftside + "px";
  bar.style.transition = "";

}

window.onload = function() {
  let wholePicture = document.querySelector(".picture");

  wholePicture.addEventListener("mouseenter", () => {
    document.addEventListener("mousemove", handleMouseEvent);
  });

  wholePicture.addEventListener("mouseleave", (e) => {
    document.removeEventListener("mousemove", handleMouseEvent);

    let wholePicture = document.querySelector(".picture");
    let left = document.querySelector(".left");
    let right = document.querySelector(".right");
    let bar = document.querySelector(".bar");

    left.style.width = "50%";
    left.style.transition = "1s";
    bar.style.left = "50%";
    bar.style.transition = "1s";
  })
}