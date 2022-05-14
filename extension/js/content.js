console.log("This is the content script");

// const domTree = window.document.createTreeWalker(
//     window.document.body,
//     NodeFilter.SHOW_ELEMENT
// );

const domTree = window.document.querySelectorAll('*');
console.log(JSON.stringify(window.document.querySelectorAll('*')));

// const nodeList = [];
// const nodeDetails = [];
// let currentNode = domTree.currentNode;

// while (currentNode) {
//     nodeList.push(String(currentNode.outerHTML));
//     nodeDetails.push(currentNode);
//     currentNode = domTree.nextNode();
// }

const test = JSON.stringify(domTree);
// console.log(nodeDetails);
// console.log(nodeList);

console.log(test)

chrome.runtime.sendMessage({domTree: domTree});
