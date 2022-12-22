import * as React from "react";

const OrangeBitsIcon = (props: any) => (
  <svg
    width={40}
    height={41}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={20}
      cy={20.5}
      r={14.583}
      stroke="#F58634"
      strokeWidth={10.833}
    />
    <circle
      cx={20}
      cy={20.5}
      r={13.131}
      fill="#fff"
      stroke="#000"
      strokeWidth={2.424}
    />
    <circle cx={20} cy={20.5} r={7.879} fill="#000" />
    <path
      stroke="#F58634"
      strokeWidth={1.616}
      strokeLinecap="round"
      d="M16.566 19.894v4.04M19.394 17.874v6.06M22.222 17.066v6.868"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.08 4.436V19.49H5.656V6.54s.689-.687 1.163-1.098A30.777 30.777 0 0 1 8.08 4.436Z"
      fill="#000"
    />
  </svg>
);

export default OrangeBitsIcon;
