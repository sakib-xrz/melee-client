"use client";

import React from "react";

const OrderStatusTracker = ({ status }) => {
  const statusColors = {
    "Order Placed": "bg-gray-600",
    Processing: "bg-blue-600",
    "On the Way": "bg-yellow-600",
    "Out for Delivery": "bg-orange-600",
    Delivered: "bg-green-600",
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="flex space-x-4">
        {Object.keys(statusColors).map((orderStatus, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex justify-center items-center w-8 h-8 rounded-full ${
                status === orderStatus
                  ? statusColors[orderStatus]
                  : "bg-gray-200"
              }`}
            >
              <div className="w-4 h-4 m-auto bg-white rounded-full"></div>
            </div>
            {index !== Object.keys(statusColors).length - 1 && (
              <div
                className={`flex-1 border-t-2 ${
                  status === orderStatus
                    ? statusColors[orderStatus]
                    : "border-gray-200"
                }`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        {Object.keys(statusColors).map((orderStatus, index) => (
          <div key={index} className="text-xs text-center text-gray-600">
            {orderStatus}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatusTracker;
