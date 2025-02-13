chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url === 'about:blank') {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['content_pop.js']
    });
  }
});