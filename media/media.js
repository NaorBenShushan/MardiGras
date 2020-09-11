/* FancyBox */

// MDB Lightbox Init
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

$('[data-fancybox="gallery"]').fancybox({
  animationEffect: "slide",
  transitionEffect: "tube",
  loop: true,
  smallBtn: "auto",
  protect: true,
  thumbs: {
    autoStart: true,
  },
  buttons: ["zoom", "slideShow", "fulleScreen", "thumbs", "close"],
  idleTime: 1.5,
});
