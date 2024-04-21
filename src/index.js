const filterCategoryName = {
  'Concreto<br>                          Concrete': 'Todo en Concreto',
  'Reparaciones<br>                          Repairs': 'Todo en Reparaciones',
  'Albañilería<br>                          Masonry': 'Todo en Albañilería',
  'Otros<br>                          Others': 'Todo en Otros Productos',
};

document.addEventListener('DOMContentLoaded', function () {
  const searchTag = document.getElementById('tag-search');
  console.log(searchTag);

  searchTag.style.display = 'none';

  const parentElement = document.querySelector('.filters-chips-container');

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      const filterTag = parentElement.querySelectorAll(
        '.jetboost-applied-filter-item-n1k6'
      );

      if (filterTag[1]) {
        console.log('Element is rendered:', filterTag[1].childNodes[1]);

        let htmlContent = filterTag[1].childNodes[1].innerHTML;
        filterTag[1].childNodes[1].innerHTML = filterCategoryName[htmlContent];
      }
    });
  });

  observer.observe(parentElement, { childList: true });

  const allScrollables = document.querySelectorAll('[scrollable="true"]');
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.style.accentColor = '#fedb00';
    checkbox.style.setProperty('--webkit-accent-color', '#fedb00');
  });

  allScrollables.forEach(scrollGroup => {
    const scrollable = scrollGroup.querySelector('[scrollable="overflowed"]');
    let distance = scrollable?.getAttribute('scroll-width');
    if (distance) {
      distance = scrollable.getBoundingClientRect().width / 3;
    }

    const leftButton = scrollGroup.querySelector('[scrollable="scroll-left"]');
    const rightButton = scrollGroup.querySelector(
      '[scrollable="scroll-rigth"]'
    );

    function scrollLeft() {
      scrollable.scrollBy({
        left: -distance,
        behavior: 'smooth',
      });
    }

    function scrollRight() {
      scrollable.scrollBy({
        left: distance,
        behavior: 'smooth',
      });
    }

    leftButton.addEventListener('click', () => {
      scrollRight();
    });

    rightButton.addEventListener('click', () => {
      scrollLeft();
    });
  });

  const searchField = document.getElementById('field-search');
  // const searchTagX = document.createElement('span');
  // searchTagX.innerHTML =
  //   '<svg width="100%" height="100%" viewBox="0 0 8 8" fill="#FBFBFB" xmlns="http://www.w3.org/2000/svg"><path d="M1.16252 7.61646L0.462524 6.91646L3.26252 4.11646L0.462524 1.31646L1.16252 0.616455L3.96252 3.41646L6.76252 0.616455L7.46252 1.31646L4.66252 4.11646L7.46252 6.91646L6.76252 7.61646L3.96252 4.81646L1.16252 7.61646Z" fill="#FBFBFB"/></svg>';
  // searchField.insertAdjacentElement('afterbegin', searchTagX);
  const searchTagText = searchTag.children[0];
  searchField.addEventListener('keyup', function (e) {
    if (e.target.value === '') {
      searchTag.style.display = 'none';
      // searchTagX.style.display = 'none';
    } else {
      const value = e.target.value;
      searchTagText.textContent = value;
      searchTagText.style.textTransform = 'uppercase';
      searchTag.style.display = 'grid';
      // searchTagX.style.display = 'block';
    }
  });

  searchTag.addEventListener('click', function () {
    searchTag.style.display = 'none';
  });

  const btnShowAll = document.getElementById('btnAll');
  btnShowAll.addEventListener('click', function () {
    const recomended = document.getElementById('recomended-list');
    const popular = document.getElementById('popular-list');
    const categories = document.getElementById('category-list');
    const products = document.getElementById('all-products-list');
    recomended.classList.add('jetboost-list-item-hide');
    popular.classList.add('jetboost-list-item-hide');
    categories.classList.add('jetboost-list-item-hide');
    products.classList.remove('jetboost-list-item-hide');
  });
});
