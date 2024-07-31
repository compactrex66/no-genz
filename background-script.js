chrome.tabs.onUpdated.addListener(() => {
    console.log("lol1")
    chrome.tabs
    .query({
      currentWindow: true,
      active: true,
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { command: "redirect" })
    })
})