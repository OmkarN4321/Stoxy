export const technicalIndicator = async (
  symbol,
  interval,
  time_period,
  output_size,
  indicator
) => {
  const res = await fetch(
    `https://api.twelvedata.com/${indicator}?symbol=${symbol}&interval=${interval}&time_period=${time_period}&output_size=${output_size}&apikey=${process.env.KEY1}`
  );
  const result = await res.json();

  return result;
};

export const timeSeries = async (symbol) => {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${process.env.KEY}`
  );
  const data = await res.json();

  return data;
};

export const overview = async (symbol) => {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${process.env.KEY2}`
  );
  const data = await res.json();

  return data;
};

export const advicer = (dema9, dema21, macd) => {
  
  if (
    (dema9[0].dema > dema21[0].dema &&
    dema9[1].dema < dema21[1].dema) && (macd[0].macd > macd[0].macd_signal)
  ) {
    return "BUY";
  }
  else if(
    (dema9[0].dema < dema21[0].dema &&
    dema9[1].dema > dema21[1].dema) && (macd[0].macd < macd[0].macd_signal)
  ) {
    return "SELL";
  }else{
    return "HOLD"
  }
};



