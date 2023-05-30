import React from "react";

/**
 * Nút sync kèm với icon loading để làm màu trạng thái lấy dữ liệu cho thằng button
 * @param {string} props.color Màu của sync này primary | success | ...
 * @param {prop} props.large Nếu có prop này thì cho btn thành btn-lg
 * @param {prop} props.fullWidth Nếu có prop này thì cho btn thành btn-block
 * @returns
 */
export default function SyncButton(props) {
  const btnSize = props.hasOwnProperty("large") ? "btn-lg" : "";
  const spinnerSize = props.hasOwnProperty("large") ? "spinner-border-lg" : "spinner-border-sm";
  return (
    <button
      className={`btn btn-${props.color ? props.color : "primary"} ${btnSize} ${
        props.hasOwnProperty("fullWidth") ? "btn-block" : null
      }`}
      type="button"
      disabled
    >
      <span className={`spinner-border ${spinnerSize}`} role="status" aria-hidden="true"></span>
      <span className="sr-only">Loading...</span>
    </button>
  );
}
