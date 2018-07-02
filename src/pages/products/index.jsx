/**
 * @desc: 主页面
 * @author: zengtiansheng
 * @update: 2018/5/23
 */
import React, {Component} from 'react';
import './style.less'

const ProductItem = (props) => {
  return (
    <li className="li-item">
      <div className="li-item-content">
        <img className="prod-img" src="/react-snap-example/imgProducts/p1.jpg" alt="Solar Road" />
        <div className="products-detail">
          <div className="title">Solar LED Road Stud(LD-RSD-SP)</div>
          <div className="details f-js-as-dc">
            <span>Size:Ø116*25mm</span>
            <span>Material:PC shell with epoxy filler</span>
            <span>LED light color:white</span>
            <span>Weight:about 0.3kg</span>
          </div>
        </div>
      </div>
    </li>
  )
}

class Products extends Component {
  state = {
  }
  render() {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
      <section className="app-products">
        <div className="top-title">Products/</div>
        <ul className="ul-contnet f-js-as">
          {
            list.map((item, index) => {
              return (<ProductItem key={index} item={item}/>)
            })
          }
        </ul>
      </section>
    )
  }
}

export default Products
