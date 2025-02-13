const CLASS_BTN_EMOJI = 'fui-Button r1alrhcs oDRY1 ___1svpkjh';
const CLASS_BTN_SEND = 'fui-SplitButton__primaryActionButton';
const CLASS_BTN_SEND_ICON = 'fui-Icon-font rb9zq';

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

if(rm_element() === -1) {
	setTimeout(function() {
		console.log(rm_element());
	}, 500);
}
