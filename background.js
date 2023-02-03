browser.contextMenus.create({
  id: "highlight-text",
  title: "Highlight Text",
  contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "highlight-text") {
    browser.tabs.sendMessage(tab.id, {
      command: "highlight-text",
      color: "yellow"  // replace with your desired color
    });
  }
});
