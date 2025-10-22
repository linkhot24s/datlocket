// ========= ID ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};
// =========  @Datlocket ========= // 
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"],
    obj = JSON.parse($response.body);

obj.Attention = "Datlocket";

var datlocket_sub = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: "2099-12-18T01:04:17Z",
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2024-07-28T01:04:18Z",
  purchase_date: "2024-07-28T01:04:17Z",
  store: "app_store"
};

var datlocket_ent = {
  grace_period_expires_date: null,
  purchase_date: "2024-07-28T01:04:17Z",
  product_identifier: "com.datlocket.premium.yearly",
  expires_date: "2099-12-18T01:04:17Z"
};

const match = Object.keys(mapping).find(e => ua.includes(e));

if (match) {
  let [e, s] = mapping[match];
  if (s) {
    datlocket_ent.product_identifier = s;
    obj.subscriber.subscriptions[s] = datlocket_sub;
  } else {
    obj.subscriber.subscriptions["com.datlocket.premium.yearly"] = datlocket_sub;
  }
  obj.subscriber.entitlements[e] = datlocket_ent;
} else {
  obj.subscriber.subscriptions["com.datlocket.premium.yearly"] = datlocket_sub;
  obj.subscriber.entitlements.pro = datlocket_ent;
}

$done({ body: JSON.stringify(obj) });
