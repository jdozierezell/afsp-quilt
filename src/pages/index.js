import React, { Suspense, lazy } from 'react'

const Artists = lazy(() => import('../components/Artists'))

export default () => {
	return (
		<div className="App">
			<Suspense fallback={<div>Loading...</div>}>
				<Artists />
			</Suspense>
		</div>
	)
}

// import React from 'react'
// import ApolloClient, { gql } from 'apollo-boost'
// import { ApolloProvider, useQuery } from '@apollo/react-hooks'

// const client = new ApolloClient({
// 	uri: 'https://48p1r2roz4.sse.codesandbox.io',
// })

// const EXCHANGE_RATES = gql`
// 	{
// 		rates(currency: "USD") {
// 			currency
// 			rate
// 		}
// 	}
// `

// const ExchangeRates = () => {
// 	const { loading, error, data } = useQuery(EXCHANGE_RATES)

// 	if (loading) return <p>Loading...</p>
// 	if (error) return <p>Error...</p>
// 	return data.rates.map(({ currency, rate }) => (
// 		<div key={currency}>
// 			<p>
// 				{currency}: {rate}
// 			</p>
// 		</div>
// 	))
// }

// export default () => {
// 	return (
// 		<ApolloProvider client={client}>
// 			<ExchangeRates />
// 		</ApolloProvider>
// 	)
// }
