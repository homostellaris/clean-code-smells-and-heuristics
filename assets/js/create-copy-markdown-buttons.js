const smells = document.getElementsByClassName('smell');

for (let i = 0; i < smells.length; i++) {
  const smell = smells[i];
  const copyMarkdownElement = createCopyMarkdownButtonForSmell(smell);
  appendToSmellHeader(smell, copyMarkdownElement);
}

setupClipboard()

function setupClipboard () {
  const clipboard = new ClipboardJS('.copy-markdown-button');

  clipboard.on('success', function(e) {
    const copyMarkdown = e.trigger.parentElement;
    copyMarkdown.classList.add('link-copied');

    setTimeout(() => {
      copyMarkdown.classList.remove('link-copied');
    }, 3000);

    e.clearSelection();
  });

  clipboard.on('error', function(e) {
    alert("There was an error copying to the clipboard, sorry!");
  });
}

function createCopyMarkdownButtonForSmell(smell) {
  const markdown = getMarkdownForSmell(smell);
  const copyMarkdownButton = createCopyMarkdownElement(markdown);
  return copyMarkdownButton
}

function getMarkdownForSmell(smell) {
  const smellHeader = smell.getElementsByTagName('h2')[0];
  const smellPageLink = smellHeader.getElementsByClassName('smell-link')[0];
  const smellUrlAbsolute = smellPageLink.protocol + '//' + smellPageLink.host + smellPageLink.pathname + smellPageLink.search + smellPageLink.hash;
  const markdown = `[${smellHeader.textContent.trim()}](${smellUrlAbsolute})`;
  return markdown;
}

function createCopyMarkdownElement(markdown) {
  const copyMarkdownContainer = document.createElement('span');
  copyMarkdownContainer.classList.add('copy-markdown');

  const copyMarkdownButton = document.createElement('button');
  copyMarkdownButton.classList.add('copy-markdown-button');
  copyMarkdownButton.setAttribute('data-clipboard-text', markdown);
  copyMarkdownButton.setAttribute('title', 'Copies a markdown link to the clipboard.');

  const copyMarkdownIcon = document.createElement('img');
  copyMarkdownIcon.setAttribute('src', './assets/images/markdown.png');
  copyMarkdownIcon.setAttribute('alt', 'copy markdown icon');

  const copyMarkdownMessage = document.createElement('span');
  copyMarkdownMessage.textContent = 'Copied';
  copyMarkdownMessage.classList.add('copy-markdown-message');

  copyMarkdownButton.appendChild(copyMarkdownIcon);
  copyMarkdownContainer.appendChild(copyMarkdownButton);
  copyMarkdownContainer.appendChild(copyMarkdownMessage);

  return copyMarkdownContainer;
}

function appendToSmellHeader(smell, element) {
  const smellHeader = smell.getElementsByTagName('h2')[0];
  smellHeader.appendChild(element);
}