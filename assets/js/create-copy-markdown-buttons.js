const headers = document.getElementsByTagName('h2');

for (let i = 0; i < headers.length; i++) {
  const header = headers[i];

  const smellLink = header.getElementsByClassName('smell-link')[0];
  const smellUrlAbsolute = smellLink.protocol + '//' + smellLink.host + smellLink.pathname + smellLink.search + smellLink.hash;
  const markdown = `[${header.textContent}](${smellUrlAbsolute})`;

  const copyMarkdownButton = document.createElement('button');
  copyMarkdownButton.classList.add('copy-markdown-button');
  copyMarkdownButton.setAttribute('data-clipboard-text', markdown);

  const copyMarkdownIcon = document.createElement('img');
  copyMarkdownIcon.setAttribute('src', '/assets/images/markdown.png');
  copyMarkdownIcon.setAttribute('alt', 'copy markdown icon');

  copyMarkdownButton.appendChild(copyMarkdownIcon);
  header.appendChild(copyMarkdownButton);
}

new ClipboardJS('.copy-markdown-button');
