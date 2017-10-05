(function() {
'use strict';

function generatePage(container) {
  const MSGS = [
    'First header',
    'Second header',
    'Third header',
    'Fourth header',
    'Fifth header'
  ];
  const t = container.querySelector('template');
  MSGS.forEach((msg, i) => {
    const clone = t.content.cloneNode(true);
    const h2 = clone.querySelector('h2');
    h2.textContent = msg;
    h2.id = normalizeTitle(msg);
    container.appendChild(clone);
  });
  document.getElementsByClassName('sticky')[0].style.backgroundColor='#FBB03B';
  document.getElementsByClassName('sticky')[1].style.backgroundColor='#00A8C5';
  document.getElementsByClassName('sticky')[2].style.backgroundColor='#662D8C';
  document.getElementsByClassName('sticky')[3].style.backgroundColor='#63E2FF';
  document.getElementsByClassName('sticky')[4].style.backgroundColor='#3AA17E';
}

function normalizeTitle(title) {
  return title.replace(/[\s!]/g, '-');
}

const container = document.querySelector('#container');
generatePage(container);

})();
