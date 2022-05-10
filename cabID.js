function getCabID() {
  var metas = document.getElementsByTagName("meta");
  for (var i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") == "cab-id") {
      return metas[i].getAttribute("content");
    } else if (metas[i].getAttribute("name") == "page-id") {
      return metas[i].getAttribute("content");
    }
  }
  return "";
}
alert("The cab-id for this page is " + getCabID())
