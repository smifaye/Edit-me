(function() {
  //Add the pageID to the end of the following URL
  window.location.href = "https://app.contentful.com/spaces/vms0u05139aw/entries/" + getPageID();

  function getPageID() {
    //make a new variable called metas - this looks for all elements that have the name "meta"
    var metas = document.getElementsByTagName("meta");
    for (var i = 0; i < metas.length; i++) {
      //find a match for page-id in metas
      if (metas[i].getAttribute("name") == "page-id") {
        return metas[i].getAttribute("content");
      }
    }
    return "";
  }
})();
