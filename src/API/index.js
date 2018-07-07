import axios from 'axios';

const req = axios.create({
  baseURL: 'https://api.github.com/repos/ZengTianShengZ/react-snap-example/',
  timeout: 3000
});

export const issues = async () => {
  const res = await req.get('/issues/9')
  return res
}
export const getIssuesNum = async(url) => {
  try {
    const response = await req.get(url)
    if (response.data && response.data.body) {
      const data = JSON.parse(response.data.body.replace(/\s+/g, ''))
      let list = []
      if (data.list) {
        //  ![image](https://user-images.githubusercontent.com/15622519/42405252-9bf18624-81c5-11e8-9dd7-359db8daed9c.png)
        list = data.list.map((item) => {
          const {productImgUrl} = item
          item.productImgUrl = productImgUrl.substring(9, productImgUrl.length - 1)
          return item
        })
      }
      data.list = list
      return {
        success: true,
        data
      }
    } else {
      return {success: false}
    }
  } catch (error) {
    console.log(error)
    return {success: false}
  }
}
