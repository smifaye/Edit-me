(function() {
  window.location.href = "https://www.citizensadvice.org.uk" + getURL();

  function getURL() {
    var input = document.querySelector("[data-field-api-name='publicAdviceFullUrl'] input")
    return input.getAttribute("value")
  }
})();
