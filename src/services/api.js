import ax from "axios";

const clientID =
  process.env.NODE_ENV !== "production"
    ? process.env.REACT_APP_GITHUB_CLIENT_ID
    : process.env.PROD_GITHUB_CLIENT_ID;

const clientSecret =
  process.env.NODE_ENV !== "production"
    ? process.env.REACT_APP_GITHUB_CLIENT_SECRET
    : process.env.PROD_GITHUB_CLIENT_SECRET;

ax.defaults.baseURL = "https://api.github.com";

ax.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params["client_id"] = clientID;
  config.params["client_secret"] = clientSecret;
  return config;
});

export default ax;
