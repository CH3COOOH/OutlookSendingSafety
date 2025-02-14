const CLASS_BTN_EMOJI = 'fui-Button r1alrhcs oDRY1 ___1svpkjh';
const CLASS_BTN_SEND = 'fui-SplitButton__primaryActionButton';
const CLASS_BTN_SEND_ICON = 'fui-Icon-font rb9zq';
const ID_READING_PANEL = 'ReadingPaneContainerId';

var observer = null;
var readingpane = null;
var isReadingpane = false;

function rm_element() {
var selector = document.querySelectorAll(`[class*="${CLASS_BTN_EMOJI}"]`);
	if (selector.length > 0) {
		selector.forEach(function(element) {
			element.remove();
			console.log('Element removed: Emoji Button');
		});
		return 0;
	} else {
		return -1;
	}
}

document.addEventListener('click', function(event) {
	if (event.target
		&& ((event.target.tagName === 'BUTTON' && event.target.className.includes(CLASS_BTN_SEND))
		|| (event.target.tagName === 'I' && event.target.className.includes(CLASS_BTN_SEND_ICON)))) {
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

setTimeout(function() {
	readingpane = document.getElementById(ID_READING_PANEL);
	if (readingpane) {
		console.log('Emoji killer launched.');
		observer = new MutationObserver(function(mutationsList, observer) {
			rm_element();
		});
		observer.observe(readingpane, { childList: true, subtree: true, attributes: true });
	}
}, 3000);

setInterval(() => {
	if (!document.body.contains(readingpane)) {
		console.log('Mainframe disappeared? Try to pull up the observer...');
		isReadingpane = false;
		readingpane = document.getElementById(ID_READING_PANEL);
		observer.observe(readingpane, { childList: true, subtree: true, attributes: true });
		rm_element();
	} else {
		if (isReadingpane === false) {
			console.log('Mainframe online.');
			isReadingpane = true;
		}
	}
}, 5000);