javascript:
var listOfLikeButtons = document.querySelectorAll('.UFILikeLink');
var numOfItems = listOfLikeButtons.length;
var currentOne = 0;
var timedEvent = setInterval(clickIt, 3000);
function clickIt(){
	item = listOfLikeButtons[currentOne];
	currentOne++;
	if (hasClass(item, 'UFILinkBright')){
		console.log('You liked this already');
	} else {
		console.log('You have not liked this one!');
		item.click();
	}
	if (currentOne == (numOfItems - 1)){
		clearInterval(timedEvent);
	}
}
function hasClass(element, className) {
    return element.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(element.className);
}