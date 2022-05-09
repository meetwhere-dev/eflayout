/**
 * 生成指定长度和基数的UUID：
 * 8 character ID (base=2)
 * uuid(8, 2)  //  "01001010"
 * 8 character ID (base=10)
 * uuid(8, 10) // "47473046"
 * 8 character ID (base=16)
 * uuid(8, 16) // "098F4D35"
 * @param {*} len 
 * @param {*} radix 
 * @returns 
 */
export function createUUID(len, radix) {  
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');  
  var uuid = [], i;  
  radix = radix || chars.length;  
 
  if (len) {  
    // Compact form  
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];  
  } else {  
    // rfc4122, version 4 form  
    var r;  
 
    // rfc4122 requires these characters  
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';  
    uuid[14] = '4';  
 
    // Fill in random data.  At i==19 set the high bits of clock sequence as  
    // per rfc4122, sec. 4.1.5  
    for (i = 0; i < 36; i++) {  
      if (!uuid[i]) {  
        r = 0 | Math.random()*16;  
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];  
      }  
    }  
  }  
 
  return uuid.join('');  
}

export function setCookie(name, data, exdays) {
  let exdate = new Date(); //获取时间
  exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
  //字符串拼接cookie
  window.document.cookie = `${name}=${data};path=/;expires=${exdate.toGMTString()}`;
}

/**
 * 获取cookie中目标name的值
 * @param {String} name cookie名
 * @returns 
 */
export function getCookieByName(name) {
  const result = document.cookie.match(new RegExp(`${name}=([^;]+)(;|$)`));
  return result ? result[1] : undefined;
}

/**
 * 向下兼容发送信号的方法
*/
const sendBeacon = navigator.sendBeacon
? (url, data) => {
  if (data) navigator.sendBeacon(url, JSON.stringify(data));
}
: (url, data) => {
  // 传统方式传递参数
  const beacon = new Image();
  beacon.src = `${url}?v=${encodeURIComponent(JSON.stringify(data))}`;
};
