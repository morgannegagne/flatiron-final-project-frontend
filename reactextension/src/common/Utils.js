/*global chrome*/

export function getCurrentTab(callback) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    },
    (tabs) => {
        console.log(tabs[0]);
    });
}
