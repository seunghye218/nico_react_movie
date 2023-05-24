import { useEffect, useState } from "react";

export default function Coin() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then((resonse) => resonse.json())
			.then((json) => {
				setCoins(json);
				setLoading(false);
			});

	}, [])
	return (
		<div>
			<h1>The {coins.length} Coins! </h1>
			{loading ?
				<strong>Loading...</strong>
				:
				<select>
					{coins.map((coin) =>
						<option key={coin.id}>
							{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
						</option>
					)}
				</select>}

		</div>
	)
}
