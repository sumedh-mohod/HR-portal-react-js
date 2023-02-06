import * as React from "react"


const QRicon = (props:any) => {


  return(
  <svg
  width={14}
  height={10}
  viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.5 7.167V.5h6.667v6.667H.5ZM2.167 5.5H5.5V2.167H2.167V5.5ZM.5 15.5V8.833h6.667V15.5H.5Zm1.667-1.667H5.5V10.5H2.167v3.333Zm6.666-6.666V.5H15.5v6.667H8.833ZM10.5 5.5h3.333V2.167H10.5V5.5Zm3.333 10v-1.667H15.5V15.5h-1.667Zm-5-5V8.833H10.5V10.5H8.833Zm1.667 1.667V10.5h1.667v1.667H10.5Zm-1.667 1.666v-1.666H10.5v1.666H8.833ZM10.5 15.5v-1.667h1.667V15.5H10.5Zm1.667-1.667v-1.666h1.666v1.666h-1.666Zm0-3.333V8.833h1.666V10.5h-1.666Zm1.666 1.667V10.5H15.5v1.667h-1.667Z"
      fill="#fff"
    />
  </svg>
)
  }

export default QRicon
