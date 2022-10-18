// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getDataResponse()
  }

  getDataResponse = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({currencyList: formattedData, isLoading: false})
  }

  renderUlElement = () => {
    const {currencyList} = this.state
    return (
      <div className="bg-container">
        <div className="logo-card">
          <p>CoinType</p>
          <div className="logo-item-card">
            <p>USD</p>
            <p>EURO</p>
          </div>
        </div>
        <ul className="list-container">
          {currencyList.map(item => (
            <CryptocurrencyItem cryptoCurrencyList={item} key={item.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div>
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderUlElement()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
