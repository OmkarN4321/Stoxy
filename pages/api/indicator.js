export default async function handler(req, res){
    if(req.method === "GET"){
        const indicator = req.query.indicator;
        const symbol = req.query.symbol;
        const interval = req.query.interval;
        const time_period = req.query.period;
        const output_size = req.query.outputsize

        const values = await fetch(
            `https://api.twelvedata.com/${indicator}?symbol=${symbol}&interval=${interval}&time_period=${time_period}&output_size=${output_size}&apikey=${process.env.KEY1}`
          );
        const data = await values.json();

        if(data){
            res.status(200).json(data)
        }else{
            res.status(404).json({error: "Unable to fetch data"})
        }
    }
}