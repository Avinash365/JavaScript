document.addEventListener("mousemove", function (details) {

    var rect = document.querySelector("#rect");
    var rect_width = rect.getBoundingClientRect().width / 2;
    var rect_hight = rect.getBoundingClientRect().height / 2;

    var res = gsap.utils.mapRange(0, window.innerWidth, 100 + rect_width, window.innerWidth - 100 - rect_width, details.clientX);
    var resh = gsap.utils.mapRange(0, window.innerHeight, 100 + rect_hight, window.innerHeight - 100 - rect_hight, details.clientY);
    gsap.to('#rect', {
        left: res + "Px",
        top: resh + "Px",
        ease: Power4
    })

}); 