document.getElementById('serviceArrowLeft').onclick = swipeRightService;
document.getElementById('serviceArrowRight').onclick = swipeLeftService;
document.getElementById('contentArrowLeft').onclick = swipeRightContent;
document.getElementById('contentArrowRight').onclick = swipeLeftContent;
let sliderService = document.getElementsByClassName('slide')[0];
let slideContent = document.getElementsByClassName('slide_content')[0];
let serviceContainerWidth = document.getElementsByClassName('services_content')[0].clientWidth;
let contentContainerWidth = document.getElementsByClassName('content_block')[0].clientWidth;
let left = 0;

sliderService.style.width = (sliderService.childElementCount * 340) + 40 + 'px';
 
function swipeLeftService() {
	if(sliderService.clientWidth > (serviceContainerWidth + 80)) {
		if (serviceContainerWidth > 628 && left > (1060 - sliderService.clientWidth)) {
			left = left - 340;
		}else if (serviceContainerWidth == 628 && left > (628 - sliderService.clientWidth)) {
			left = left - 314;
		}else if (serviceContainerWidth == 300 && left > (300 - sliderService.clientWidth)) {
			left = left - 300;
		}else {
			left = 0;
		}
		sliderService.style.left = left + 'px';
	}
}

function swipeRightService() {
	if(sliderService.clientWidth > (serviceContainerWidth + 80)) {
		if (serviceContainerWidth > 628 && left <= (sliderService.clientWidth - 1060) && left < 0) {
			left = left + 340;
		}else if (serviceContainerWidth == 628 && left < 0 ) {
			left = left + 314;
		}else if (serviceContainerWidth == 300 && left < 0) {
			left = left + 300;
		}else if (serviceContainerWidth > 628 && (sliderService.style.left == 0 || sliderService.style.left == '0px')) {
			left = (serviceContainerWidth - sliderService.clientWidth) - 40;
		}else if (serviceContainerWidth == 628 && (sliderService.style.left == 0 || sliderService.style.left == '0px')) {
			left = (serviceContainerWidth - sliderService.clientWidth);
		}else if (serviceContainerWidth == 300 && (sliderService.style.left == 0 || sliderService.style.left == '0px')) {
			left = (serviceContainerWidth - sliderService.clientWidth);
		}else {
			left = 0;
		}
		sliderService.style.left = left + 'px';
	}
}

function swipeLeftContent() {
	if(slideContent.clientWidth > (serviceContainerWidth + 80)) {
		if (serviceContainerWidth > 628 && left > (1060 - slideContent.clientWidth)) {
			left = left - 340;
		}else if (serviceContainerWidth == 628 && left > (628 - slideContent.clientWidth)) {
			left = left - 314;
		}else if (serviceContainerWidth == 300 && left > (300 - slideContent.clientWidth)) {
			left = left - 300;
		}else {
			left = 0;
		}
		slideContent.style.left = left + 'px';
	}
}

function swipeRightContent() {
	if(slideContent.clientWidth > (contentContainerWidth + 80)) {
		if (contentContainerWidth > 628 && left <= (slideContent.clientWidth - 1060) && left < 0) {
			left = left + 340;
		}else if (contentContainerWidth == 628 && left < 0) {
			left = left + 314;
		}else if (contentContainerWidth == 300 && left < 0) {
			left = left + 300;
		}else if (contentContainerWidth > 628 && (slideContent.style.left == 0 || slideContent.style.left == '0px')) {
			left = (contentContainerWidth - slideContent.clientWidth) - 40;
		}else if (contentContainerWidth == 628 && (slideContent.style.left == 0 || slideContent.style.left == '0px')) {
			left = (contentContainerWidth - slideContent.clientWidth);
		}else if (contentContainerWidth == 300 && (slideContent.style.left == 0 || slideContent.style.left == '0px')) {
			left = (contentContainerWidth - slideContent.clientWidth);
		}else {
			left = 0;
		}
		slideContent.style.left = left + 'px';
	}
}
window.addEventListener(`resize`, event => {
	sliderService.style.left = slideContent.style.left = left = 0// some code
	sliderService = document.getElementsByClassName('slide')[0];
	slideContent = document.getElementsByClassName('slide_content')[0];
	serviceContainerWidth = document.getElementsByClassName('services_content')[0].clientWidth;
	contentContainerWidth = document.getElementsByClassName('content_block')[0].clientWidth;
}, false);