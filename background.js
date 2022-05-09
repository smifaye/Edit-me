async function getCurrentTab() {
  let queryOptions = {
    active: true,
    currentWindow: true
  };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

if (tab == ["https://www.citizensadvice.org.uk/family/*", "https://www.citizensadvice.org.uk/immigration/*"]) {
  chrome.action.onClicked.addListener(function(tab) {
    chrome.scripting.executeScript({
      target: {
        tabID: tab.id
      },
      files: ['bookmarklet.js']
    })
  });
}
else {
  chrome.action.onClicked.addListener(function(tab) {
    chrome.scripting.executeScript({
      target: {
        tabID: tab.id
      },
      files: ['epi-bookmarklet.js']
    })
  });
}
