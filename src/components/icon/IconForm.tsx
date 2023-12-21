import { PropsWithChildren } from "react";
import { IconProps } from "../../typescript/interfaces/global";

function IconForm(props: PropsWithChildren<IconProps>) {
   const EmailIcon = () => (
      <svg className="scale-150" xmlns="http://www.w3.org/2000/svg" width="29" height="30" fill="none" viewBox="0 0 29 30">
         <path
            fillRule="evenodd"
            stroke="#828282"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.773"
            d="M5.94 6.773h17.41c1.07 0 1.936.867 1.936 1.936v12.574a1.934 1.934 0 01-1.934 1.935H5.939a1.933 1.933 0 01-1.934-1.935V8.71c0-1.069.866-1.936 1.934-1.936z"
            clipRule="evenodd"
         ></path>
         <path
            stroke="#828282"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.773"
            d="M4.146 7.993l9.096 6.506a2.365 2.365 0 002.749.002l9.148-6.524"
         ></path>
      </svg>
   );

   const UserIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" fill="none" viewBox="0 0 18 21">
         <path
            stroke="#828282"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
            d="M17 19.626c0-3.604-3.586-6.519-8-6.519s-8 2.915-8 6.52m8-9.314A4.657 4.657 0 109 1a4.657 4.657 0 000 9.313z"
         ></path>
      </svg>
   );

   const PhoneIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
         <g clipPath="url(#clip0_1858_24175)">
            <mask
               id="mask0_1858_24175"
               style={{ maskType: "luminance" }}
               width="18"
               height="18"
               x="0"
               y="0"
               maskUnits="userSpaceOnUse"
            >
               <path fill="#fff" stroke="#fff" strokeWidth="1.5" d="M17.25 17.25V.75H.75v16.5h16.5z"></path>
            </mask>
            <g mask="url(#mask0_1858_24175)">
               <path
                  stroke="#828282"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                  d="M5.046.527a4.52 4.52 0 00-4.519 4.52c0 6.862 5.564 12.426 12.427 12.426a4.52 4.52 0 004.519-4.52l-5.649-2.258-1.13 2.824h0A6.213 6.213 0 014.48 7.306v0l2.824-1.13L5.046.527z"
               ></path>
            </g>
         </g>
         <defs>
            <clipPath id="clip0_1858_24175">
               <path fill="#fff" d="M0 0H18V18H0z"></path>
            </clipPath>
         </defs>
      </svg>
   );

   const PasswordIcon = () => (
      <svg className="scale-150" xmlns="http://www.w3.org/2000/svg" width="29" height="30" fill="none" viewBox="0 0 29 30">
         <path
            stroke="#828282"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.773"
            d="M9.916 12.573V9.026v0a4.73 4.73 0 014.73-4.73v0a4.73 4.73 0 014.728 4.73v3.547M14.645 17.3v3.548"
         ></path>
         <path
            fillRule="evenodd"
            stroke="#828282"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.773"
            d="M20.556 25.58H8.734a2.364 2.364 0 01-2.365-2.365v-8.276a2.364 2.364 0 012.365-2.365h11.822a2.364 2.364 0 012.365 2.365v8.276a2.364 2.364 0 01-2.365 2.364z"
            clipRule="evenodd"
         ></path>
      </svg>
   );

   const iconMap = {
      user: <UserIcon />,
      phone: <PhoneIcon />,
      email: <EmailIcon />,
      password: <PasswordIcon />,
   };

   return iconMap[props.name];
}
export default IconForm;
