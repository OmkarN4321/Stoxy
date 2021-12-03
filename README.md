# Stoxy

### This is still an ongoing project, more features will be added.

##### This is a simple stock adviser which gives calls by analysing stock charts.
##### The web app basically fetches the stock's technical indicator data from twelevdata API and the data is analysed to return either a BUY, SELL or HOLD call.
##### Alphavantage API is also used for some helpful company related data.
##### This project is severely limited because there aren't many reliable free apis for stock data and this is also the reason why it only supports the US stock market.

## Known issues

- The app crashes on multiple refreshes, because twelvedata API allows only 8 requests per minute on the free account. If there is another better API let me know in the repository issues.

## Commands to run

#### npm run dev (Runs the dev server)

## Screenshots

### Home page

![Home page](/screenshots/dashboard.png)

### Search

![Search page](/screenshots/page.png)

### Advice

![Advice](/screenshots/advice.png)
