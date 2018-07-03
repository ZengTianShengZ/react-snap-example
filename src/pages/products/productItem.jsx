/**
 * @desc: 主页面
 * @author: zengtiansheng
 * @update: 2018/5/23
 */
import React, {Component} from 'react';
import TtestMd from './components/test.md';
import HelloWorld from './hello-world.md';

import 'src/libs/etalage/etalage.css'
import 'src/libs/etalage/jquery.etalage.min.js'
import './product-item.less'

class Products extends Component {
  state = {
  }
  componentDidMount() {
    $('#etalage').etalage({
      thumb_image_width: 250,
      thumb_image_height: 350,
      source_image_width: 800,
      source_image_height: 1000,
      show_hint: true,
      click_callback: function(image_anchor, instance_id) {
        alert('Callback example:\nYou clicked on an image with the anchor: "' + image_anchor + '"\n(in Etalage instance: "' + instance_id + '")');
      }
    });
  }
  render() {
    return (
      <section className="app-product-item">
        <div className="product-content f-jb-as">
          <div className="left-content f-js-as">
            <ul id="etalage">
              <li>
                <a href="optionallink.html">
                  <img className="etalage_thumb_image" src="/react-snap-example/imgProducts/p1.jpg" />
                  <img className="etalage_source_image" src="/react-snap-example/imgProducts/p1.jpg" title="This is an optional description." />
                </a>
              </li>
              <li>
                <img className="etalage_thumb_image" src="/react-snap-example/imgProducts/p1.jpg" />
                <img className="etalage_source_image" src="/react-snap-example/imgProducts/p1.jpg" title="This text area can also be setup to appear at the top of the image.<br>This second line shows that the description can be longer." />
              </li>
              <li>
                <img className="etalage_thumb_image" src="/react-snap-example/imgProducts/p1.jpg" />
                <img className="etalage_source_image" src="/react-snap-example/imgProducts/p1.jpg" />
              </li>
              <li>
                <img className="etalage_thumb_image" src="/react-snap-example/imgProducts/p1.jpg" />
                <img className="etalage_source_image" src="d/react-snap-example/imgProducts/p1.jpg" />
              </li>
            </ul>
            <div className="desc-content">
              <h2 className="title">Solar LED Road Stud(LD-RSD-SP)</h2>
              <div className="desc-part">
                <p className="p-text">Products Features:</p>
                <div className="products-features">
                  <p><span>Size:</span> Ø116*25mm</p>
                  <p><span>Material:</span> PC shell with epoxy filler</p>
                  <p><span>Weight:</span> about 0.3kg</p>
                  <p><span>LED light color:</span> white ,red ,yellow ,green,blue</p>
                </div>
              </div>
              <p className="p-s-a"><span className="">Supply Ability:</span>10000 Piece/Pieces per Month</p>
              <div className="desc-part">
                <p className="p-text">Products Features:</p>
                <div className="products-features">
                  <p><span>Size:</span> Ø116*25mm</p>
                  <p><span>Material:</span> PC shell with epoxy filler</p>
                  <p><span>Weight:</span> about 0.3kg</p>
                  <p><span>LED light color:</span> white ,red ,yellow ,green,blue</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="heard-content f-js-ac">
              <img className="heard-img" src="/react-snap-example/imgHome/us_img1.png" alt="" />
              <span className="heard-name">Sales Manager</span>
            </div>
            <p className="p-text"><span>Company</span> Fujian XP Industrial Co.,LTD</p>
            <p className="p-text"><span>Phone</span> +86 15505965690(wechat)</p>
            <p className="p-text"><span>Email</span>roadstudXP@foxmail.com</p>
            <div className="contect-content">
              <a target="_blank" href="https://www.facebook.com/lucy.guo.7965"><ion-icon name="logo-facebook"></ion-icon></a>
              <a target="_blank" href="https://twitter.com/LucyRoadstud"><ion-icon name="logo-twitter"></ion-icon></a>
            </div>
          </div>
        </div>
        <div className="centet-content f-jb-as">
          <div className="left-content">markdown</div>
          <div className="centet-content-right">
            <div>
              {
                recommendItem()
              }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const recommendItem = () => {
  return (
    <div className="">
      <img className="product-img" src="/react-snap-example/imgHome/p1.jpg" alt="Solar Road" />
      <div className="prd-d">
        <p className="p-tt">Solar LED Road Stud(LD-RSD-SP)</p>
        <div className="span-s">
          <span>Size:Ø116*25mm</span>
          <span>Size:Ø116*25mm</span>
          <span>Size:Ø116*25mm</span>
          <span>Size:Ø116*25mm</span>
        </div>
      </div>
    </div>
  )
}

export default Products
