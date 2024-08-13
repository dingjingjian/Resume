// 数字格式化
function formatNum(nStr) {
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}
// 保留两位
function returnFloat(value){
	var value=Math.round(parseFloat(value)*100)/100;
	var s=value.toString().split(".");
	if(s.length==1){
		value=value.toString()+".00";
		return value;
	}
	if(s.length>1){
		if(s[1].length<2){
			value=value.toString()+"0";
		}
		return value;
	}
}
// 大小数字格式化
function formatData (data) {
	var html = ''
	if(data){
		html = returnFloat(data).toString()
		html = formatNum(html.split('.')[0]) + '<span>.'+ html.split('.')[1] + '</span>'
	}else {
		html = '0<span>.00</span>'
	}
	return html
}
// 文字超出隐藏
function cutString(str, len) {
	if (str.length <= len) {
		return str;
	} else {
		return str.substring(0, len -1) + "...";
	}
}