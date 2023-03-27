// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrencyList extends Component {
  state = {currencies: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencies()
  }

  getCryptocurrencies = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(crypto => ({
      currencyName: crypto.currency_name,
      usdValue: crypto.usd_value,
      euroValue: crypto.euro_value,
      id: crypto.id,
      currencyLogo: crypto.currency_logo,
    }))
    this.setState(prev => ({
      currencies: updatedData,
      isLoading: !prev.isLoading,
    }))
  }

  render() {
    const {currencies, isLoading} = this.state
    return (
      <div>
        <h1>Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <ul>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Rings" color="#000000" height={100} width={80} />
            </div>
          ) : (
            currencies.map(crypto => (
              <CryptocurrencyItem cryptoDetails={crypto} key={crypto.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default CryptocurrencyList
