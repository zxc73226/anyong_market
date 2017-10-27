$(document).ready(function () {
  let market = "http://localhost:8080/products/";
  let item = '<div class="grid"><div class="mk_block"><div class="mk_img"></div><h3>商品名稱</h3><p>價格</p></div></div>';
  let $btn = '.btn';
  let $market = '.market_box';

  $($btn).on('click', function () {
    $($market).append(item);
  });
});
