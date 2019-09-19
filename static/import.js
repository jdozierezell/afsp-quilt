require('babel-polyfill')
const SiteClient = require('datocms-client').SiteClient
const csv = require('csv-parser')
const fs = require('fs')

const client = new SiteClient('86b7964979adcbc9fe35b976836d48')

// client.itemTypes.all().then(models => console.log(models))

// client.fields.all('127983').then(fields => console.log(fields)) // quilt model

const data = []
fs.createReadStream('quilt_import_9-18-19.csv')
	.pipe(csv())
	.on('data', row => {
		data.push(row)
	})
	.on('end', () => {
		console.log('CSV file successfully processed')
		data.forEach((row, i) => {
			const index = i
			const title = row.Title
			const url = row.URL
			const description = row.Description
			const name = row.Name
			const state = row.StateID
			const email = row.Email
			setTimeout(() => {
				client
					.uploadFile(url)
					.then(image => {
						return client.items.create({
							itemType: '127983',
							title: title,
							yourName: name,
							yourState: state,
							quiltImage: image,
							quiltDescription: description,
							yourEmailAddress: email,
						})
					})
					.then(record => console.log(record))
			}, index * 1000)
		})
	})
