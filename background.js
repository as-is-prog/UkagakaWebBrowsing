chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      function: () => {
        var title = document.title;
        var url = document.URL;
        
        let sstp_str = `NOTIFY SSTP/1.1
Charset: UTF-8
Sender: UkagakaWebBrowsing
Event: OnUWBShowPageInfo
SecurityLevel: local
Reference0: ${title}
Reference1: ${url}`;

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:9801/api/sstp/v1", true);
        xhr.setRequestHeader('Content-Type', 'text/plain');
        xhr.send(sstp_str);
      },
    });
});

// 当面使うつもりは無い
// chrome.webNavigation.onCompleted.addListener((data) => {
//     let tabId = data.tabId;
//     chrome.scripting.executeScript({
//       target: {tabId: tabId},
//       function: () => {
//         var title = document.title;
//         var url = document.URL;
        
//         let sstp_str = `NOTIFY SSTP/1.1
// Charset: UTF-8
// Sender: UkagakaWebBrowsing
// Event: OnUWBUpdatePageInfo
// SecurityLevel: local
// Reference0: ${title}
// Reference1: ${url}`;

//         var xhr = new XMLHttpRequest();
//         xhr.open("POST", "http://localhost:9801/api/sstp/v1", true);
//         xhr.setRequestHeader('Content-Type', 'text/plain');
//         xhr.send(sstp_str);
//       },
//     });
// });
