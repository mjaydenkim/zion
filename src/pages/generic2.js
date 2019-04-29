import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic02 from '../assets/images/pic02.jpg'

class Generic3 extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Rock Cycle Geologist" />
        <header id="header">
          <h1>Rock Cycle Geologist</h1>
          <p>This part was created by Maddox.</p>
      </header>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic02} alt="" /></span>
              <ul>
                <li><strong>Convection</strong> spreads throughout fluids, convection happens when a fluid is heated somehow. The fluid then becomes less dense and floats to the top and then cools to fall back down.</li>

                <li><strong>Conduction</strong> is what happens when heat transfers through two objects that are touching each other.</li>

                <li><strong>Radiation</strong> can travel through vacuums. The “source” of heat and “receiver” of heat will not have anything between them to transfer heat.</li>

                <li><strong>What does this energy effect?</strong> Active Volcanoes and plate tectonics, Weather and climate, Electricity, Everything on earth.</li>
              </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic3
