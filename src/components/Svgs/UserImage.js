import React from "react";

const UserImage = (props) => {
  return (
    <svg
      width={props.width ? props.width : "46"}
      height={props.height ? props.height : "46"}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 0.25C18.5005 0.25 14.102 1.58426 10.3608 4.08407C6.61957 6.58387 3.70364 10.1369 1.98175 14.294C0.259857 18.451 -0.190669 23.0252 0.687145 27.4383C1.56496 31.8514 3.73169 35.905 6.91333 39.0867C10.095 42.2683 14.1486 44.4351 18.5617 45.3129C22.9748 46.1907 27.549 45.7402 31.7061 44.0183C35.8631 42.2964 39.4161 39.3804 41.916 35.6392C44.4158 31.898 45.75 27.4995 45.75 23C45.7436 16.9683 43.3447 11.1854 39.0797 6.92036C34.8146 2.65528 29.0317 0.25637 23 0.25ZM11.205 38.2031C12.471 36.2232 14.215 34.5938 16.2763 33.4651C18.3377 32.3365 20.6499 31.7449 23 31.7449C25.3501 31.7449 27.6624 32.3365 29.7237 33.4651C31.785 34.5938 33.529 36.2232 34.795 38.2031C31.4226 40.8259 27.2723 42.2499 23 42.2499C18.7278 42.2499 14.5774 40.8259 11.205 38.2031ZM16 21.25C16 19.8655 16.4106 18.5122 17.1797 17.361C17.9489 16.2099 19.0421 15.3127 20.3212 14.7828C21.6003 14.253 23.0078 14.1144 24.3656 14.3845C25.7235 14.6546 26.9708 15.3213 27.9498 16.3003C28.9287 17.2792 29.5954 18.5265 29.8655 19.8844C30.1356 21.2422 29.997 22.6497 29.4672 23.9288C28.9374 25.2079 28.0401 26.3011 26.889 27.0703C25.7379 27.8395 24.3845 28.25 23 28.25C21.1435 28.25 19.363 27.5125 18.0503 26.1997C16.7375 24.887 16 23.1065 16 21.25ZM37.385 35.7772C35.4333 32.9489 32.6889 30.7609 29.4969 29.4881C31.2115 28.1377 32.4626 26.2865 33.0764 24.192C33.6901 22.0975 33.6359 19.8638 32.9212 17.8015C32.2066 15.7393 30.8671 13.9509 29.089 12.6853C27.3109 11.4196 25.1826 10.7395 23 10.7395C20.8174 10.7395 18.6891 11.4196 16.911 12.6853C15.1329 13.9509 13.7934 15.7393 13.0788 17.8015C12.3642 19.8638 12.3099 22.0975 12.9237 24.192C13.5374 26.2865 14.7885 28.1377 16.5031 29.4881C13.3112 30.7609 10.5668 32.9489 8.61501 35.7772C6.14875 33.0038 4.53679 29.5766 3.97323 25.9083C3.40968 22.24 3.91855 18.487 5.43858 15.1012C6.95861 11.7154 9.42498 8.84114 12.5407 6.82461C15.6564 4.80808 19.2887 3.73523 23 3.73523C26.7114 3.73523 30.3436 4.80808 33.4593 6.82461C36.575 8.84114 39.0414 11.7154 40.5614 15.1012C42.0815 18.487 42.5904 22.24 42.0268 25.9083C41.4632 29.5766 39.8513 33.0038 37.385 35.7772Z"
        fill="black"
      />
    </svg>
  );
};

export default UserImage;