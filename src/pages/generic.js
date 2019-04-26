import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic01 from '../assets/images/pic01.jpg'

class Generic2 extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Rock Formation Historian" />
        <header id="header">
          <h1>Rock Cycle Geologist</h1>
          <p>This part was created by Chihiro.</p>
      </header>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic01} alt="" /></span>
              <h1 id="backgroundinformation">Background Information</h1>
                <p>There are three types of rock: <strong>igneous</strong> rock, <strong>sedimentary</strong> rock, and <strong>metamorphic</strong> rock. </p>
                <ul>
                <li><strong>Igneous</strong> rocks such as Basalt, Granite, and Obsidian are rocks formed from the cooling and hardening of magma. As it gets hot, molten rock rises to the surface and it undergoes changes in temperature and pressure that cause it to cool, solidify, and crystallize. </li>

                <li><strong>Sedimentary</strong> rocks such as Conglomerate, Limestone, and Sandstone are formed by particles of rocks, minerals, animals or plant material.</li>

                <li><strong>Metamorphic</strong> rocks such as Gneiss, Marble, and Quartzite are formed by physical or chemical alteration by heat and pressure of an existing igneous or sedimentary material into a denser form.</li>
                </ul>

                <p><strong>Sediment</strong> is loose pieces of minerals and rocks. 
                <strong>Magma</strong> is hot, liquid rock found deep inside the earth. </p>

                <p>It takes a lot of heat to melt a rock. The rock is pulled down by movements in the earth's crust and gets hotter and hotter as it goes deeper. Then it melts and turns into a magma. </p>

                <p><strong>Lava</strong> which is magma rises from deep within the earth and explodes out of a volcano and cools quickly on the surface.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic2
