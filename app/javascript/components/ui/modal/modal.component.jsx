import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function ModalComponent({
  visible,
  onClose,
  children,
  title = "Dialog",
}) {
  return (
    <div
      className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${visible ? "visible bg-black/20" : "invisible"}
      `}
    >
      <div
        className={`
          bg-white rounded-lg shadow transition-all overflow-hidden
          ${visible ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <div className="flex justify-between px-6 py-4 bg-gray-100">
          <div className="text-blue-500 font-bold">{title}</div>
          <button onClick={onClose}>
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
