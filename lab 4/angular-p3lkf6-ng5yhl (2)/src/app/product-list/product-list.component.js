import "./product-list-component.css";
(function() {
  const imageArray = [
    "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc5/h8c/63083544707102/dyson-hs05-airwrap-complete-fen-setka-1300-w-106790035-1.jpg",
    "https://cdn.pixabay.com/photo/2015/08/01/16/15/soldier-870399__480.jpg",
    "https://cdn.pixabay.com/photo/2016/02/26/16/32/dog-1224267__480.jpg",
    "https://cdn.pixabay.com/photo/2019/06/25/18/22/puppy-4298756__340.jpg",
    "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg"
  ];
  const { length } = imageArray;

  var img = document.querySelector("img.img");
  var preBtn = document.querySelector(".btn.prev");
  var nextBtn = document.querySelector(".btn.next");
  var meta = document.querySelector(".meta");

  /**
   * @param {String} direction
   */
  function navigateImage(direction) {
    let currentIndex = imageArray.indexOf(img.src);
    let nextIndex = null;

    if (direction === "prev") {
      nextIndex = currentIndex === 0 ? 4 : (currentIndex - 1) % length;
    } else if (direction === "next") {
      nextIndex = (currentIndex + 1) % length;
    }

    img.src = imageArray[nextIndex];
    meta.innerHTML = `Viewing image number ${nextIndex + 1}`;
  }

  [preBtn, nextBtn].forEach(function(btn) {
    btn.addEventListener("click", function(evt) {
      const { direction } = evt.target.dataset;
      navigateImage(direction);
    });
  });
})();
