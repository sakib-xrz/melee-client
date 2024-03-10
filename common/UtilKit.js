"use client";

import APIKit from "./APIkit";
import HTTPKit from "./HTTPkit";
import { AUTH_TOKEN_KEY } from "./KeyChain";

export function deferred() {
  let _deferred = {};
  _deferred.promise = new Promise(function (resolve, reject) {
    _deferred.resolve = resolve;
    _deferred.reject = reject;
  });
  return _deferred;
}

export const setJWTokenAndRedirect = async (token, redirect = () => {}) => {
  try {
    const client = await APIKit.setClientToken(token);
    const authToken =
      client.defaults.headers.common["Authorization"].split(" ")[1];
    localStorage.setItem(AUTH_TOKEN_KEY, authToken);
    HTTPKit.defer.resolve(client);
    redirect();
  } catch (error) {
    console.error(error);
  }
};

export const setCart = (item) => {
  const cart = localStorage.getItem("cart");

  if (cart) {
    const items = JSON.parse(cart);

    const existingItem = items.find((cartItem) => cartItem.slug === item.slug);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      items.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(items));
  } else {
    const items = [item];
    localStorage.setItem("cart", JSON.stringify(items));
  }
};

export const getCart = () => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : null;
};

export const refetchGetCart = () => {
  getCart();
};

export const removeItemFromCart = (slug) => {
  const cart = localStorage.getItem("cart");
  const items = JSON.parse(cart);

  const newItems = items.filter((item) => item.slug !== slug);

  localStorage.setItem("cart", JSON.stringify(newItems));
};
