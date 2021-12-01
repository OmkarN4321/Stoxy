export default async function handler(req, res) {
  if (req.method === "GET") {
    const ticker = req.query.stock;
    const outputsize = req.query.outputsize;

    const values = await fetch(
      `https://api.twelvedata.com/time_series?symbol=${ticker}&interval=1day&outputsize=${outputsize}&apikey=${process.env.KEY3}`
    );
    const data = await values.json();

    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ error: "Unable to fetch data" });
    }
  }
}
