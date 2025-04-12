const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/products",
  createProxyMiddleware({
    target: "http://ProductService:3001",
    changeOrigin: true,
  })
);

app.use(
  "/orders",
  createProxyMiddleware({
    target: "http://OrderService:3002",
    changeOrigin: true,
  })
);

app.use(
  "/customers",
  createProxyMiddleware({
    target: "http://CustomerService:3003",
    changeOrigin: true,
  })
);

app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});
