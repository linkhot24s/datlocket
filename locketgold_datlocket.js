// Locket Gold Unlock - Keep Gold but allow new images
// Author: DatLocket

const url = $request.url;

if (url.includes("api.revenuecat.com/v1/subscribers/")) {
    let fakeGold = {
        "subscriber": {
            "entitlements": {
                "gold": {
                    "expires_date": "2099-12-31T23:59:59Z",
                    "product_identifier": "com.locket.gold.yearly",
                    "purchase_date": "2025-01-01T00:00:00Z"
                }
            },
            "first_seen": "2025-01-01T00:00:00Z",
            "last_seen": "2025-08-13T00:00:00Z",
            "original_app_user_id": "$RCAnonymousID:gold_unlock",
            "original_purchase_date": "2025-01-01T00:00:00Z",
            "subscriptions": {
                "com.locket.gold.yearly": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2099-12-31T23:59:59Z",
                    "is_sandbox": false,
                    "original_purchase_date": "2025-01-01T00:00:00Z",
                    "period_type": "normal",
                    "purchase_date": "2025-01-01T00:00:00Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
                }
            }
        }
    };

    $done({ body: JSON.stringify(fakeGold) });
} else {
    $done({});
}
