const contentful = ["https://www.citizensadvice.org.uk/family/*","https://www.citizensadvice.org.uk/immigration/*"];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == 'complete' && contentful.some(url => tab.url.includes(url))) {
    chrome.action.onClicked.addListener(function(tab) {
      chrome.scripting.executeScript({
        target: {
          tabId: tab.id
        },
        files: ["bookmarklet.js"]
      })
    });
  }
  else {
    chrome.action.onClicked.addListener(function(tab) {
      chrome.scripting.executeScript({
        target: {
          tabId: tab.id
        },
        files: ["bookmarklet.js"]
      })
    });
  }
});
