const gallery = document.querySelector(".gallery");

const getCarouselImages = async () => {
  const tpl = [...Array(14).keys()]
    .map(
      (key) => `
            <li class="slide">
              <img src=${`/assets/images/ester_${key}.webp`} alt=${`Ester image ${key}`} width=100% height=auto/>
            </li>
          `
    )
    .join("");
  gallery.innerHTML = tpl;
};

getCarouselImages()