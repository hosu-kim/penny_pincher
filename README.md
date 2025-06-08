# Penny Pincher TypeScript Project

## Description

`penny_pincher.ts` is a TypeScript module designed to fetch product offer data from an API and process the example data to find the cheapest offer for each product.

## How It Works
1. **Fetch Data**: The `fetchResponseData` function sends a GET request to an API endpoint. It expects a JSON response containing an array of product offers.
2. **Sort Data**: Before processing, the `main` function sorts the fetched data based on `productID`. This groups all offers for the same product together, which is essential for the `findCheapestOffers` function to work correctly.
3. **Find Cheapest Offers**: The `findCheapestOffers` function iterates through the sorted list of products. For each product, it compares the prices of its associated offers and selects the one with the lowest price. The price is extracted by removing the currency symbol ('$') and converting the string to a number.

The script is currently set up to store the cheapest offers in a variable within the `main` function.

## Example Input Data (from API)

```json
[
  {
    "productId": "B07BQZ8S7V",
    "offerId": "B092CB4GRR",
    "price": "$4.25"
  },
  {
    "productId": "B07BQZ8S7V",
    "offerId": "B0811SYNHK",
    "price": "$0.89"
  },
  {
    "productId": "B09CSP81PS",
    "offerId": "B06GFTRA5T",
    "price": "$9.26"
  }
]
```

## Example Output Data (Cheapest Offers)

```json
[
  {
    "productId": "B07BQZ8S7V",
    "offerId": "B0811SYNHK",
    "price": "$0.89"
  },
  {
    "productId": "B09CSP81PS",
    "offerId": "B06GFTRA5T",
    "price": "$9.26"
  }
]
```

## Author

hosu-kim

## License

This project is licensed under the MIT License.