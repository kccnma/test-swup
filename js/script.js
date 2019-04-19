document.addEventListener("DOMContentLoaded", function () {

  // SWUP: enable swup
  let options = {
    LINK_SELECTOR: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="./"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
    FORM_SELECTOR: 'form[data-swup-form]',
    elements: [
      '#swup'
    ],
    animationSelector: '[class*="transition-"]',
    cache: true,
    pageClassPrefix: '',
    scroll: true,
    debugMode: true,
    preload: true,
    support: true,
    skipPopStateHandling: function (event) {
      if (event.state && event.state.source == "swup") {
        return false;
      }
      return true;
    },
    animateHistoryBrowsing: false,
  }
  const swup = new Swup(options);

  swup.on('animationOutDone', function () {
    console.log("leave is done");
  });

});
