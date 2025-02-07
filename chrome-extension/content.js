document.addEventListener('click', function(event) {
  // if (event.target && event.target.matches('button[aria-label="送信"]')) {
  // Add support for both Send button and the paper plane icon
  if (event.target
    && ((event.target.tagName === 'BUTTON' && event.target.className.includes('fui-SplitButton__primaryActionButton'))
	|| (event.target.tagName === 'I' && event.target.className.includes('fui-Icon-font rb9zq'))
	)) {
    if (!confirm("Are you sure?\nAre you sure??\nAre you sure???")) {
      event.stopImmediatePropagation();
      event.preventDefault();
    } else {
		if (!confirm("This is the last confirmation.\nARE? YOU? SURE??")) {
			event.stopImmediatePropagation();
			event.preventDefault();
		}
	}
  }
}, true);

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'Enter') {
    event.preventDefault();
    event.stopPropagation();
    alert("Ctrl+Enter is not allowed!");
  }
}, true);