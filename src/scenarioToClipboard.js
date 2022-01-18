javascript:
	var script = document.createElement('script');
script.setAttribute('src', 'https://html2canvas.hertzen.com/dist/html2canvas.min.js');
document.head.appendChild(script);
script.addEventListener('load', () => {
	var div = document.querySelector('#headertabs div div');
	div.style.background = 'none';
	div.style.border = '3px solid';
	div.style.width = '1050px';

	div.querySelector('.picture').style.display = 'none';

	[...div.querySelectorAll('*')].forEach(el => {
		el.style.color = 'black';
		el.style.background = 'none';
	});

	[...div.querySelectorAll('p')]
		.filter(a => a.textContent === '\n')
		.forEach(el => el.style.display = 'none');

	html2canvas(div).then(canvas => {
		canvas.toBlob(blob => {
			const item = new ClipboardItem({"image/png": blob});
			navigator.clipboard.write([item]);
			console.log('copied');
		});
	});
});
