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

  cart: {
    getCart: (payload) => {
      const url = "/carts";
      return client.post(url, payload);
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
      getSingleProduct: (uid) => {
        const url = `/shop/products/${uid}`;
        return client.get(url);
      },
      updateProduct: (uid, payload) => {
        const url = `/shop/products/${uid}`;
        return client.patch(url, payload, defaultFileUploadConfig);
      },
      updateProductStatus: (uid, payload) => {
        const url = `/shop/products/${uid}/publish`;
        return client.patch(url, payload);
      },

      image: {
        deleteImage: (uid) => {
          const url = `/shop/products/image/${uid}`;
          return client.delete(url);
        },
      },
    },
    public: {
      getShop: () => {
        const url = `/shop/public`;
        return client.get(url);
      },
    },
    order: {
      getOrders: () => {
        const url = "/shop/order";
        return client.get(url);
      },
      getSingleOrder: (uid) => {
        const url = `/shop/order/${uid}`;
        return client.get(url);
      },
      updateOrderStatus: (uid, payload) => {
        const url = `/shop/order/${uid}`;
        return client.patch(url, payload);
      },
    },
    dashboard: {
      getDashboard: () => {
        const url = "/shop/dashboard";
        return client.get(url);
      },
    },
    updateShop: (uid, payload) => {
      const url = `/shop/${uid}`;
      return client.patch(url, payload);
    },
  },

  order: {
    checkout: (payload) => {
      const url = "/order/checkout";
      return client.post(url, payload);
    },
    getOrders: () => {
      const url = "/order";
      return client.get(url);
    },
    getSingleOrder: (uid) => {
      const url = `/order/${uid}`;
      return client.get(url);
    },
  },
};

export default APIKit;
