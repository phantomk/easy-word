function selectionOnClick(info, tab) { 
  localStorage.words = localStorage.words ? localStorage.words + "," + info.selectionText : info.selectionText ;
} 

chrome.contextMenus.create({
  type: 'normal',
  title: 'Add to list',
  id: 'a',
  contexts: ['selection'],
  onclick: selectionOnClick
});


