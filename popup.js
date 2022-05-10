let contentful = document.getElementById("contentful");
let episerver = document.getElementById("episerver");
let cabID = document.getElementById("cabID");

async function getCurrentTab() {
  let queryOptions = {
    active: true,
    currentWindow: true
  };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

contentful.addEventListener("click", async () => {
  let tab = await getCurrentTab();

  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    files: ["contentful.js"]
  });
});

episerver.addEventListener("click", async () => {
  let tab = await getCurrentTab();

  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    files: ["episerver.js"]
  });
});

cabID.addEventListener("click", async () => {
  let tab = await getCurrentTab();

  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    files: ["cabID.js"]
  });
});
