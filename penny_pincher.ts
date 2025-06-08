/*
file: penny_pincher.ts
description: collects and store the cheapest offers of products in the received data from an API response.
created: 2025-06-03 12:05:42 UTC
author: hosu-kim
*/

const BASE_URL: string = 'https://offerdata.com/products'

interface ProductData {
	"productId": string;
	"offerId": string;
	"price": string;
}

async function fetchResponseData(): Promise<ProductData[]> {
	const response: Response = await fetch(BASE_URL);

	if (!response.ok) {
		throw new Error(`Failed to fetch response data. HTTP status: ${ response.status }`);
	}
	return response.json() as Promise<ProductData[]>;
}

function findCheapestOffers(productList: ProductData[]): ProductData[] {

	let cheapeastPriceList: ProductData[] = [];

	let i = 0;

	while (i < productList.length) {

			let cheapestOffer = productList[i];

		while (productList[i + 1] && productList[i].productId === productList[i + 1].productId) {
			if (Number(cheapestOffer.price.slice(1)) > Number(productList[i + 1].price.slice(1))) {
				cheapestOffer = productList[i + 1];
			}
			i++;
		}
		cheapeastPriceList.push(cheapestOffer);
		i++;
	}
	return cheapeastPriceList;
}

async function main() {
	try {
		let products: ProductData[] = [];

		const rawPriceList: ProductData[] = await fetchResponseData();
		const sortedPriceList: ProductData[] = rawPriceList.sort((a, b) => {
			return a.productId < b.productId ? -1 : a.productId > b.productId ? 1 : 0});

		products = findCheapestOffers(sortedPriceList);
	} catch (error) {
		console.error(`Error occured!: ${ error }`);
	}
}
