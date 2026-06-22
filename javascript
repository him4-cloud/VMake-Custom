let obj = JSON.parse($response.body);
obj.is_pro = true;
obj.subscription_type = "yearly";
$done({body: JSON.stringify(obj)});
