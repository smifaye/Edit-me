chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("/family/")) {
    chrome.scripting.executeScript({
      target: {
        tabId: tab.id
      },
      files: ["bookmarklet.js"]
    });
  } else if (tab.url.includes("/immigration/")) {
    chrome.scripting.executeScript({
      target: {
        tabId: tab.id
      },
      files: ["bookmarklet.js"]
    });
  } else {
    chrome.scripting.executeScript({
      target: {
        tabId: tab.id
      },
      files: ["epi-bookmarklet.js"]
    });
  }
});
