"use client";

import { useQuery } from "@tanstack/react-query";
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
export const GetCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: () => {
      const data = localStorage.getItem("cart");
      return data ? JSON.parse(data) : null;
    },
  });
};

export const calculateTotal = (data) => {
  const subtotal = data?.reduce((accumulator, currentValue) => {
    const selected_quantity =
      currentValue.selected_stock > currentValue.present_stock
        ? currentValue.present_stock
        : currentValue.selected_stock;
    return accumulator + selected_quantity * currentValue.unit_price;
  }, 0);

  // Calculate total selected quantity for shipping calculation
  const totalSelectedQuantity = data?.reduce((accumulator, currentValue) => {
    const selected_quantity =
      currentValue.selected_stock > currentValue.present_stock
        ? currentValue.present_stock
        : currentValue.selected_stock;
    return accumulator + selected_quantity;
  }, 0);

  // Calculate shipping charge as a single charge for all products based on total selected quantity
  const shipping = totalSelectedQuantity > 0 ? data[0]?.shipping_charges : 0;

  const total = (subtotal + shipping)?.toFixed(2);

  return {
    subtotal: subtotal,
    shipping: shipping,
    total: +total,
  };
};

export function pickDifference(initialValues, submittedValues) {
  const keys = Object.keys(initialValues);

  const picked = {};

  for (let key of keys) {
    if (initialValues[key] !== submittedValues[key]) {
      picked[key] = submittedValues[key];
    }
  }
  return picked;
}

export function formatDateAndTime(data, isTimeRequired = false) {
  const date = new Date(`${data}`);

  const createOptions = () => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    if (isTimeRequired) {
      options.hour = "numeric";
      options.minute = "numeric";
    }

    return options;
  };

  const dateTimeFormat = new Intl.DateTimeFormat("en-US", createOptions());

  return dateTimeFormat.format(date);
}

export const formatText = (text) => {
  if (text) {
    const textLowerCase = text.split("_").join(" ").toLowerCase();
    const words = textLowerCase.split(" ");
    const formattedText = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return formattedText;
  } else {
    return "";
  }
};

export function calculateTimeRemaining(targetDate) {
  const targetTime = new Date(targetDate).getTime();
  const currentTime = new Date().getTime();
  const difference = targetTime - currentTime;

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}
