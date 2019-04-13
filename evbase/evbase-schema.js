module.exports = {
    "users": [
        {
            "username": String,
            "password": String,
            "fullname": String,
            "email": String,
            "phone": String,
            "profileId": String,
            "apps": [
                {
                    "appsId": String,
                    "appName": String
                }
            ],
            "notificationEndPoint": [String]
        }
    ],
    "profiles": [
        {
            "appId": String,
            "modules": [
                {
                    "key": String,
                    "display": String,
                    "reactPath": String,
                    "write": Boolean,
                    "read": Boolean,
                    "delete": Boolean
                }
            ]
        }
    ],
    "apps": [
        {
            "appName": String,
            "appDescription": String
        }
    ]
}