export default async function handler(req, res) {
  if (req.method === "GET") {
    const symbol = req.query.symbol;

    const value = await fetch(
      `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${process.env.KEY2}`
    );
    const data = await value.json();

    res.status(200).json(data);
  }
}
