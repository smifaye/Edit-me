//set some things here based on their id in the HTML file
let contentful = document.getElementById("contentful");
let episerver = document.getElementById("episerver");
let cabID = document.getElementById("cabID");
let guid = document.getElementById("guid");
let view = document.getElementById("view");
let login = document.getElementById("login");

//run the async function to get the active tab
async function getCurrentTab() {
  let queryOptions = {
    active: true,
    currentWindow: true
  };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

//listen for clicks and then run a script
contentful.addEventListener("click", async () => {
  let tab = await getCurrentTab();

  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    files: ["contentful.js"]
  });
});

//listen for clicks and then run a script
episerver.addEventListener("click", async () => {
  let tab = await getCurrentTab();

  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    files: ["episerver.js"]
  });
});

//listen for clicks and then run a script
cabID.addEventListener("click", async () => {
  let tab = await getCurrentTab();

  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    files: ["cabID.js"]
  });
});

guid.addEventListener("click", async () => {
  let tab = await getCurrentTab();

  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    files: ["guid.js"]
  });
});

view.addEventListener("click", async () => {
  let tab = await getCurrentTab();

  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    files: ["getURL.js"]
  });
});

login.addEventListener("click", async () => {
  let tab = await getCurrentTab();
  
  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    files: ["login.js"]
  });
});
