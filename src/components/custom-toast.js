import React, { createContext, useContext, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

const ToastContext = createContext();

export function ToastProvider({
  children,
  defaultDuration = 3000,
  defaultPosition = "top-center",
  defaultClassName = "bg-green-500 text-black",
}) {
  const [toast, setToast] = useState({ visible: false, message: "", options: {} });

  const showToast = useCallback(
    (message, options = {}) => {
      const { duration = defaultDuration } = options;
      setToast({ visible: true, message, options });
      setTimeout(() => setToast({ visible: false, message: "", options: {} }), duration);
    },
    [defaultDuration]
  );

  const positions = {
    "top-center": "top-8 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-8 left-1/2 -translate-x-1/2",
    "top-right": "top-8 right-8",
    "bottom-right": "bottom-8 right-8",
    "top-left": "top-8 left-8",
    "bottom-left": "bottom-8 left-8",
  };

  const activePosition = toast.options.position || defaultPosition;
  const activeClassName = toast.options.className || defaultClassName;

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast UI for this specific provider */}
      <div
        className={cn(
          "fixed z-50 transition-all duration-300",
          toast.visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none",
          positions[activePosition] || positions["top-center"]
        )}
      >
        <div
          className={cn(
            "px-5 py-2 rounded-lg text-xs font-semibold shadow-lg ",
            activeClassName
          )}
        >
          {toast.message}
        </div>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used inside a <ToastProvider>");
  }
  return context.showToast;
}
