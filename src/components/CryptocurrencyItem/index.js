// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoDetails

  return (
    <li className="crypto-currency-container">
      <img src={currencyLogo} alt={currencyName} className="logo" />
      <p>{currencyName}</p>
      <p>{usdValue}</p>
      <p>{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
