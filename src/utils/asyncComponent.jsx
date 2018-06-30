/**
 * @desc: 组件按需加载实现工具
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import Loadable from 'react-loadable';

const pageAbout = Loadable({
  loader: () => import('./pages/about'),
  loading: loading
});