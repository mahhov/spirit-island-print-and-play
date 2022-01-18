javascript:
	var script = document.createElement('script');
script.setAttribute('src', 'https://html2canvas.hertzen.com/dist/html2canvas.min.js');
document.head.appendChild(script);
script.addEventListener('load', () => {
	var div = document.querySelector("#fearcardbox");
	div.style.background = 'none';
	div.style.border = '3px solid';
	div.style.width = '300px';
	div.style.height = '500px';

	[...div.querySelectorAll('*')].forEach(el => {
		el.style.color = 'black';
		el.style.background = 'none';
		el.style.boxShadow = 'none';
		el.style.fontSize = '14px';
	});

	html2canvas(div).then(canvas => {
		canvas.toBlob(blob => {
			const item = new ClipboardItem({"image/png": blob});
			navigator.clipboard.write([item]);
			console.log('copied');
		});
	});
});
