(function() {
  window.location.href = "https://app.contentful.com/spaces/vms0u05139aw/entries/" + getPageID();

  function getPageID() {
    var metas = document.getElementsByTagName("meta");
    for (var i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute("name") == "page-id") {
        return metas[i].getAttribute("content");
      }
    }
    return "";
  }
})();
