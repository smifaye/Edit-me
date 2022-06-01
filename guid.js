function getGUID() {
  var metas = document.getElementsByTagName("meta");
  for (var i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") == "cab-guid") {
      return metas[i].getAttribute("content");
    } else {
      return ("blank - this page is already on Contentful");
    }
  }
  return "";
}
alert("The GUID for this page is " + getGUID())
