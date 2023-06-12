(function() {
  //Add the cab-id or page-id to the end of the following URL
  window.location.href = "https://epi.citizensadvice.org.uk/https/ca-euw1-p-edielast-kfmrc11qf9h6-2084635982.eu-west-1.elb.amazonaws.com/EPiServer/CMS/Home#context=epi.cms.contentdata:///" + getCabID();

  function getCabID() {
    //make a new variable called metas - this looks for all elements that have the name "meta"
    var metas = document.getElementsByTagName("meta");
    for (var i = 0; i < metas.length; i++) {
      //find a match for cab-id in metas
      if (metas[i].getAttribute("name") == "cab-id") {
        return metas[i].getAttribute("content");
      } //if can't find cab-id, look for page-id in metas
        else if (metas[i].getAttribute("name") == "page-id") {
        return metas[i].getAttribute("content");
      }
    }
    return "";
  }
})();
