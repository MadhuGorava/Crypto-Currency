// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true}

  renderDivEle = () => {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <h1>Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <CryptocurrenciesList />
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
          this.renderDivEle()
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
