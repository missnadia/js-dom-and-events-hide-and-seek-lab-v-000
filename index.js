function getFirstSelector(selector) {
  return document.querySelector(selector);
}


function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy (n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = children.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[i].innerHTML parseInt(children[j].innerHTML) + n;
    }
  };
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div');
}