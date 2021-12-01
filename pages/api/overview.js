export default async function handler(req, res){
    if(req.method === "GET"){   
        const symbol = req.query.symbol;

        const res = await fetch(
            `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${process.env.KEY2}`
          );
        const data = await res.json();

        if(data){
            res.status(200).json(data)
        }else{
            res.status(404).json({error: "Unable to fetch data"})
        }
    }
}