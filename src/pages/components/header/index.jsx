/**
 * @desc: header
 * @author: zengtiansheng
 * @update: 2018/5/23
 */
import React, {Component} from "react"
import {withRouter} from "react-router-dom"
import './style.less'

class Header extends Component {
  state = {
    headerLift: 0
  }
  btnLoginOutClick() {
    this.props.history.replace('/verify/login') 
  }
  render() {
    return (
      <header id="J_header_content" className="">
        header
      </header>
    )
  }
}

// export default withRouter(Header)
export default withRouter(Header)
