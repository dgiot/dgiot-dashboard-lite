

/**
 *
 * @param response
 * @return
 * @description export file
 * @document https://zhuanlan.zhihu.com/p/77672133
 */
 export function convertRes2Blob(response) {
  //  console.log(response);
  //  return 
    
  // 提取文件名
  const filename =
    response.headers['content-disposition'].match(/filename=(.*)/)[1]
  // 将二进制流转为blob
  const blob = new Blob([response.data], {
    type: 'application/octet-stream',
  })
  console.log(blob);
  // return 
  
  // && typeof window.navigator.msSaveBlob !== 'undefined' window.navigator.hasOwnProperty('msSaveBlob')
    // if (typeof window.navigator.msSaveBlob !== 'undefined') {
    //   console.log("111");
      
    //   // 兼容IE，window.navigator.msSaveBlob：以本地方式保存文件
    //   window.navigator.msSaveBlob(blob, decodeURI(filename))
    // }else {
    // 创建新的URL并指向File对象或者Blob对象的地址
    const blobURL = window.URL.createObjectURL(blob)
    // 创建a标签，用于跳转至下载链接
    const tempLink = document.createElement('a')
    tempLink.style.display = 'none'
    tempLink.href = blobURL
    tempLink.setAttribute('download', decodeURI(filename))
    // 兼容：某些浏览器不支持HTML5的download属性
    if (typeof tempLink.download === 'undefined') {
      tempLink.setAttribute('target', '_blank')
    }
    // 挂载a标签
    document.body.appendChild(tempLink)
    tempLink.click()
    document.body.removeChild(tempLink)
    // 释放blob URL地址
    window.URL.revokeObjectURL(blobURL)
}