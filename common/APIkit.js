import HTTPKit, { client } from "./HTTPkit";

const defaultFileUploadConfig = {
  headers: { "Content-Type": "multipart/form-data" },
};

const APIKit = {
  setClientToken: HTTPKit.setClientToken,

  auth: {
    register: (payload) => {
      const url = "/auth/onboarding";
      return client.post(url, payload);
    },

    token: (payload, params) => {
      const url = "/auth/token";
      return client.post(url, payload, { params });
    },
  },

  public: {
    products: {
      getProducts: () => {
        const url = "/products";
        return client.get(url);
      },
    },
    getSingleProduct: (slug) => {
      const url = `/products/${slug}`;
      return client.get(url);
    },
  },

  me: {
    getMe: () => {
      const url = "/me";
      return client.get(url);
    },
  },

  shop: {
    product: {
      postProduct: (payload) => {
        const url = "/shop/products";
        return client.post(url, payload, defaultFileUploadConfig);
      },
      getProducts: () => {
        const url = "/shop/products";
        return client.get(url);
      },
    },
  },
};

export default APIKit;
