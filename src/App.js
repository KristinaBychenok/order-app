import { Fragment } from 'react'

import { OrderSection } from './components/OrderSection/OrderSection'
import classes from './App.module.css'

function App() {
  return (
    <Fragment>
      <header>
        <h1 className={classes.header_title}>Dish App</h1>
      </header>
      <main>
        <OrderSection />
      </main>
    </Fragment>
  )
}

export default App
