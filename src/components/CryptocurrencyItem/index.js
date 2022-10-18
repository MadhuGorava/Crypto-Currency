// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyList} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoCurrencyList
  return (
    <li className="list-item-container">
      <div className="logo-card">
        <img src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="logo-card">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
