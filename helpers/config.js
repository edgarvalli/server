module.exports = {
    secret: "K3SwR59SxPQYve7hzgEU9SLxG9237A6bY92nQGtVbwudMjzW3ZrXgcYDLTZ3zF4dvcsrvDxrBb4jDMzjuxQ3sq8sfJ",
    headers(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Token, Client');

        // Pass to next layer of middleware
        next();
    }
}