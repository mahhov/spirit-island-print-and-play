javascript:
	var script = document.createElement('script');
script.setAttribute('src', 'https://html2canvas.hertzen.com/dist/html2canvas.min.js');
document.head.appendChild(script);
script.addEventListener('load', () => {
	var div = document.querySelector('#headertabs div div');
	div.style.background = 'none';
	div.style.border = '3px solid';
	div.style.width = '1250px';

	div.querySelector('.growthblock').style.color = 'black';
	div.querySelector('.growthblock').style.backgroundColor = 'white';
	[...div.querySelectorAll('*')].forEach(el => {
		el.style.color = 'black';
		el.style.background = 'none';
	});
	div.querySelector('div:nth-child(4) > p').style.display = 'none';

	div.querySelectorAll('.track:not(:first-child) .text').forEach(el => el.style.fontSize = '100%');

	let p = document.createElement('p');
	p.textContent = document.querySelector("#ui-id-1").textContent;
	p.style.fontFamily = 'sans-serif';
	p.style.fontWeight = 'bolder';
	p.style.fontSize = '20px';
	p.style.textAlign = 'center';
	div.insertBefore(p, div.firstElementChild);

	[...div.querySelectorAll('p')]
		.filter(a => a.textContent === '\n')
		.forEach(el => el.style.display = 'none');
	div.querySelector("center").style.display = 'none';

	[...div.querySelectorAll('img')]
		.filter(img => img.alt.includes('Simple'))
		.forEach(img => {
			let textSpan = document.createElement('span');
			let text = img.alt.match(/Simple (.*)\.png/)[1];
			textSpan.textContent = '[' + text[0].toUpperCase() + text.slice(1) + ']';
			img.replaceWith(textSpan);
		});

	html2canvas(div).then(canvas => {
		canvas.toBlob(blob => {
			const item = new ClipboardItem({"image/png": blob});
			navigator.clipboard.write([item]);
			console.log('copied');
		});
	});
});
