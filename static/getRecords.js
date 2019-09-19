require('babel-polyfill')
const SiteClient = require('datocms-client').SiteClient

const client = new SiteClient('86b7964979adcbc9fe35b976836d48')

client.items
	.all({
		'filter{type]': 'quiltSquare',
		'page[limit]': 10,
		'page[offset]': 10,
	})
	.then(records => console.log(records))
