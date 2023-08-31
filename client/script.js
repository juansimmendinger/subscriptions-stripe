/* Fetch prices and update the form */
fetch("/config")
  .then(r => r.json())
  .then(({lowPrice, basicPrice, proPrice}) => {
    const lowPriceInput = document.querySelector('#lowPrice');
    lowPriceInput.value = lowPrice;
    const basicPriceInput = document.querySelector('#basicPrice');
    basicPriceInput.value = basicPrice;
    const proPriceInput = document.querySelector('#proPrice');
    proPriceInput.value = proPrice;
  })
