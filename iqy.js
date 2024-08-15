// 获取响应体
let body = $response.body;

// 将响应体解析为 JSON 对象
let obj = JSON.parse(body);

// 修改每个 bookerList 对象中的 remainStockQuantity 和 receivestatus
obj.data.parentActivityDTO.bookerList.forEach(item => {
    item.remainStockQuantity = 99;
    item.receivestatus = 1;
});

// 将修改后的 JSON 对象转换回字符串
body = JSON.stringify(obj);

// 输出修改后的响应体
$done({body});
