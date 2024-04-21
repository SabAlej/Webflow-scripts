document.addEventListener('DOMContentLoaded', function () {
  const allScrollables = document.querySelectorAll('[scrollable="true"]');
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const allProducts = document.getElementById('all-products-list');
  const recomended = document.getElementById('recomended-list');
  const popular = document.getElementById('popular-list');
  const categories = document.getElementById('categories-list');
  const btnShowAll = document.getElementById('btnAll');
  const filterLayout = document.getElementById('flayout');
  const btnsFilterMobile = document.getElementById('btns-fmobile');
  const toggleBtn = document.getElementById('fdtoggle');
  const btnClean = document.getElementById('btnClean');
  const btnApply = document.getElementById('btnApply');
  const inputSearch = document.getElementById('field');
  const catSelection = document.querySelectorAll('.backdrop');
  const filterTriggers = document.querySelectorAll('.w-checkbox');
  const chipsContainer = document.querySelector('.filters-chips-container');
  const bannerMobile = document.getElementById('banner-mobile');
  const topNavBar = document.getElementById('top-nav-bar');
  const closeFilterIcon = document.getElementById('close-filter-icon');
  checkboxes.forEach(checkbox => {
    checkbox.style.accentColor = '#fedb00';
  });
  // window.addEventListener('resize', () => {
  //   if (window.innerWidth <= 768) {
  //     filterLayout.style.display = 'none';
  //   } else {
  //     filterLayout.style.display = 'block';
  //   }
  // });

  // Call the resize event handler initially to set the correct display when the page loads
  // window.dispatchEvent(new Event('resize'));

  const elements = [recomended, popular, categories, allProducts];

  const anyCheckboxChecked = () =>
    Array.from(checkboxes).some(checkbox => checkbox.checked);

  const displayElements = (elements, displayStyle) =>
    elements.forEach(element => {
      element.style.display = displayStyle;
    });

  allScrollables.forEach(scrollGroup => {
    const scrollable = scrollGroup.querySelector('[scrollable="overflowed"]');
    let distance = scrollable.getAttribute('scroll-width');
    distance = distance
      ? distance
      : scrollable.getBoundingClientRect().width / 3;

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

  btnClean.addEventListener('click', function () {
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
    inputSearch.value = '';
  });

  // const closeFilter = () => {
  //   allProducts.style.display = 'block';
  //   filterLayout.style.display = 'none';
  //   toggleBtn.style.display = 'block';
  //   inputSearch.style.display = 'block';
  //   bannerMobile.style.display = 'block';
  //   topNavBar.style.display = 'block';
  //   if (anyCheckboxChecked()) {
  //     displayElements(elements, 'none');
  //     allProducts.style.display = 'block';
  //   } else {
  //     displayElements(elements, 'block');
  //     allProducts.style.display = 'none';
  //   }
  // };

  // closeFilterIcon.addEventListener('click', closeFilter);

  btnApply.addEventListener('click', function () {
    if (anyCheckboxChecked()) {
      displayElements(elements, 'none');
      allProducts.style.display = 'block';
      chipsContainer.style.display = 'flex';
    } else {
      displayElements(elements, 'block');
      allProducts.style.display = 'none';
    }
    filterLayout.style.display = 'none';

    toggleBtn.style.display = 'block';
    inputSearch.style.display = 'block';
    bannerMobile.style.display = 'block';
    topNavBar.style.display = 'block';
  });

  inputSearch.addEventListener('input', function () {
    let fieldValue = this.value.trim(); // Trim spaces from the value

    if (fieldValue === '') {
      displayElements(elements, 'block');
      allProducts.style.display = 'none';
    } else {
      displayElements(elements, 'none');
      allProducts.style.display = 'block';
    }
  });

  const showFilters = e => {
    e.preventDefault();

    if (window.innerWidth < 769) {
      if (
        filterLayout.style.display === 'none' ||
        filterLayout.style.display === ''
      ) {
        filterLayout.style.display = 'block';
        btnsFilterMobile.style.display = 'flex';

        toggleBtn.style.display = 'none';
        inputSearch.style.display = 'none';
        bannerMobile.style.display = 'none';
        topNavBar.style.display = 'none';
        chipsContainer.style.display = 'none';
        displayElements(elements, 'none');
      } else {
        filterLayout.style.display = 'none';
        btnsFilterMobile.style.display = 'none';

        toggleBtn.style.display = 'block';
        inputSearch.style.display = 'block';
        bannerMobile.style.display = 'block';
        topNavBar.style.display = 'block';
        chipsContainer.style.display = 'block';
        displayElements(elements, 'block');
      }
    } else {
      filterLayout.style.display = 'block';
      btnsFilterMobile.style.display = 'none';

      toggleBtn.style.display = 'block';
      inputSearch.style.display = 'block';
      bannerMobile.style.display = 'block';
      topNavBar.style.display = 'block';
      chipsContainer.style.display = 'flex';
      displayElements(elements, 'block');
    }
  };

  toggleBtn.addEventListener('click', showFilters);

  // btnShowAll.addEventListener('click', showAllProducts);

  Array.from(checkboxes).forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        // Checkbox is checked, create a new FilterChip and append it to the chipsContainer
        // let checkboxLabel = this.nextElementSibling.textContent;
        // let newChipElement = createChipElement(checkboxLabel, this);
        // chipsContainer.appendChild(newChipElement);
        if ((filterLayout.style.display = 'block')) {
          allProducts.style.display = 'none';
        }
      }
      // else {
      //   // Checkbox is unchecked, remove the corresponding FilterChip from the chipsContainer
      //   let chipToRemove = Array.from(chipsContainer.children).find(
      //     chip => chip.checkbox === this
      //   );
      //   if (chipToRemove) {
      //     chipsContainer.removeChild(chipToRemove);
      //   }
      // }

      if (anyCheckboxChecked()) {
        displayElements(elements, 'none');
        allProducts.style.display = 'block';
      } else {
        displayElements(elements, 'block');
        allProducts.style.display = 'none';
      }
    });
  });

  // Array.from(catSelection).forEach(cat => {
  //   cat.addEventListener('click', function (e) {
  //     Array.from(filterTriggers).forEach(trigger => {
  //       if (trigger.childNodes[1].innerText.includes(e.target.id)) {
  //         trigger.checked = !trigger.checked;
  //         trigger.classList.add('jetboost-filter-active');
  //         trigger.childNodes[1].classList.add('jetboost-filter-active');

  //         // console.log('ENTRO', e.target.id, trigger.childNodes);
  //         let event = new MouseEvent('change', {
  //           bubbles: true,
  //           cancelable: true,
  //         });
  //         trigger.dispatchEvent(event);
  //       }
  //     });
  //     displayElements(elements, 'none');
  //     allProducts.style.display = 'block';
  //   });
  // });
});

// function createChipElement(name, checkbox) {
//   // Create the main div
//   let chipElement = document.createElement('div');
//   chipElement.setAttribute('fs-cmsfilter-element', 'tag-template');
//   chipElement.className = 'filter-chip white-text';

//   // Store a reference to the checkbox in the chip element
//   chipElement.checkbox = checkbox;

//   // Create the text div
//   let textElement = document.createElement('div');
//   textElement.setAttribute('fs-cmsfilter-element', 'tag-text');
//   textElement.textContent = name;

//   // Create the remove div
//   let removeElement = document.createElement('div');
//   removeElement.setAttribute('fs-cmsfilter-element', 'tag-remove');
//   removeElement.className = 'html-embed-29 w-embed';

//   // Add an event listener to the remove div
//   removeElement.addEventListener('click', function () {
//     chipElement.checkbox.checked = false;
//     chipElement.remove();
//     // Trigger the change event on the checkbox
//     let event = new MouseEvent('change', {
//       bubbles: true,
//       cancelable: true,
//     });
//     chipElement.checkbox.dispatchEvent(event);
//   });

//   // Create the SVG
//   let svgElement = document.createElementNS(
//     'http://www.w3.org/2000/svg',
//     'svg'
//   );
//   svgElement.setAttribute('width', '100%');
//   svgElement.setAttribute('height', '100%');
//   svgElement.setAttribute('viewBox', '0 0 8 8');
//   svgElement.setAttribute('fill', 'none');

//   // Create the path
//   let pathElement = document.createElementNS(
//     'http://www.w3.org/2000/svg',
//     'path'
//   );
//   pathElement.setAttribute(
//     'd',
//     'M1.16252 7.61646L0.462524 6.91646L3.26252 4.11646L0.462524 1.31646L1.16252 0.616455L3.96252 3.41646L6.76252 0.616455L7.46252 1.31646L4.66252 4.11646L7.46252 6.91646L6.76252 7.61646L3.96252 4.81646L1.16252 7.61646Z'
//   );
//   pathElement.setAttribute('fill', '#FBFBFB');

//   // Append the path to the SVG
//   svgElement.appendChild(pathElement);

//   // Append the SVG to the remove div
//   removeElement.appendChild(svgElement);
//   let hiddenInputElement = document.createElement('input');
//   hiddenInputElement.type = 'hidden';
//   hiddenInputElement.className = 'jetboost-list-item';
//   hiddenInputElement.value = `{{wf {"path":"slug","type":"PlainText"} }}`;

//   // Append the hidden input to the main div
//   chipElement.appendChild(hiddenInputElement);

//   // Append the text and remove divs to the main div
//   chipElement.appendChild(textElement);
//   chipElement.appendChild(removeElement);

//   return chipElement;
// }
