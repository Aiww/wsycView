window.onload = () => {
  /* 传入waterfall与pic节点，调用函数waterFall */
  waterFall('.waterfall', '.cases-item')
}
// column每行个数
// lineSpace列间距
// rowSpace行间距

function waterFall(waterfall, pic, marginTop=20,lineSpace = 0, rowSpace = 50) {
  let column=3
  let win_w=$(window).width();
  if(win_w>1200){
    column=3
  } else  if(win_w<=1200&&win_w>600){
    column=2
  }
  /*waterfallWidth可视窗口waterfall的宽度  */
  var waterfallWidth = document.querySelector(waterfall).offsetWidth
  /* 计算每个pic的宽度 */
  var line = (column - 1) * lineSpace
  // console.log(line);
  var picWidth = parseInt((waterfallWidth - line) / column)
  // console.log(picWidth);
  /* 获取所有pic节点 */
  var picNode = document.querySelectorAll(pic)
  // console.log(picNode)
  /* 通过for循环完成瀑布流的设置 */
  var picArr = []
  for (var i = 0; i < picNode.length; i++) {
    /* 设置每一个pic的宽度 */
    picNode[i].style.width = picWidth + 'px'
    /* 获取每一个pic的高 */
    // console.log('picNode[i]',picNode[i],picNode[i].clientHeight)
    var picHeight = picNode[i].clientHeight
    /* 通过判断，区分第一行和非第一行 */
    if (i < column) {
      /* 给第一行的进行定位 */
      picNode[i].style.top = marginTop
      picNode[i].style.left = (picWidth + lineSpace) * i+ 'px'
      /* 将获取的pic的高push到一个数组记录下来 */
      picArr.push(picHeight)
      // console.log('picHeight',picHeight)
    }else{
      /* 在非第一行中，找到数组的最小值 */
      var picArrMin=Math.min(...picArr)
      // console.log(picArrMin);
      /* 获取最小值的索引 */
      var mixIndex=picArr.indexOf(picArrMin)
      // console.log(mixIndex);
      /* 对非第一行的pic进行定位，top为最小值的高，left为pic宽加行间距乘以最小值的索引 */
      picNode[i].style.top=(picArrMin+rowSpace+marginTop)+'px'
      picNode[i].style.left=(picWidth+lineSpace)*mixIndex+'px'
      /* 对数组中的最小值进行修改 */
      picArr[mixIndex]+=picHeight+rowSpace
    }
  }
  // console.log('picArr',Math.max(...picArr))
  const boxH=Math.max(...picArr)
  $(waterfall).css({height:boxH+'px'})
}
