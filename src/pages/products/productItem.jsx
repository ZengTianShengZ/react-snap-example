/**
 * @desc: 主页面
 * @author: zengtiansheng
 * @update: 2018/5/23
 */
import React, {Component} from 'react';
import 'src/libs/etalage/etalage.css'
import 'src/libs/etalage/jquery.etalage.min.js'
import './product-item.less'

class Products extends Component {
  state = {
  }
  componentDidMount() {
    $('#etalage').etalage({
      thumb_image_width: 300,
      thumb_image_height: 400,
      source_image_width: 900,
      source_image_height: 1200,
      show_hint: true,
      click_callback: function(image_anchor, instance_id) {
        alert('Callback example:\nYou clicked on an image with the anchor: "' + image_anchor + '"\n(in Etalage instance: "' + instance_id + '")');
      }
    });
  }
  render() {
    return (
      <section className="app-product-item">
        <div className="etalage-content">
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
        </div>
      </section>
    )
  }
}

export default Products
