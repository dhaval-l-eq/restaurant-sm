import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IRootState } from '../store';
import { toggleSidebar } from '../store/themeConfigSlice';
import Dropdown from '../components/Dropdown';
import DPImage from '../assets/images/dummy-user-dp.png';
import AvatarBox from '../components/ui/avatar/AvatarBox';

const Header = () => {
   const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

   const themeConfig = useSelector((state: IRootState) => state.themeConfig);
   const dispatch = useDispatch();

   const [notifications, setNotifications] = useState([
      {
         id: 1,
         profile: 'user-profile.jpeg',
         message: '<strong class="text-sm mr-1">John Doe</strong>invite you to <strong>Prototyping</strong>',
         time: '45 min ago',
      },
      {
         id: 2,
         profile: 'profile-34.jpeg',
         message: '<strong class="text-sm mr-1">Adam Nolan</strong>mentioned you to <strong>UX Basics</strong>',
         time: '9h Ago',
      },
      {
         id: 3,
         profile: 'profile-16.jpeg',
         message: '<strong class="text-sm mr-1">Anna Morgan</strong>Upload a file',
         time: '9h Ago',
      },
   ]);

   const removeNotification = (value: number) => {
      setNotifications(notifications.filter((user) => user.id !== value));
   };

   const [search, setSearch] = useState(false);

   return (
      <header className={`z-40 ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}>
         <div className="relative bg-white flex w-full items-center px-9.5 py-5 dark:bg-black">
            <div className="horizontal-logo flex lg:hidden justify-between items-center ltr:mr-2 rtl:ml-2">
               <Link to="/" className="main-logo flex items-center shrink-0">
                  <img className="w-8 ltr:-ml-1 rtl:-mr-1 inline" src="/assets/images/logo.svg" alt="logo" />
                  <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5  font-semibold  align-middle hidden md:inline dark:text-white-light transition-all duration-300">
                     VRISTO
                  </span>
               </Link>
               <button
                  type="button"
                  className="collapse-icon flex-none dark:text-[#d0d2d6] hover:text-primary dark:hover:text-primary flex lg:hidden ltr:ml-2 rtl:mr-2 p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
                  onClick={() => {
                     dispatch(toggleSidebar());
                  }}
               >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                     <path opacity="0.5" d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                     <path d="M20 17L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
               </button>
            </div>

            <div className="sm:flex-1 ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
               <div className="sm:ltr:mr-auto sm:rtl:ml-auto">
                  <form
                     className={`${
                        search && '!block'
                     } sm:relative absolute inset-x-0 sm:top-0 top-1/2 sm:translate-y-0 -translate-y-1/2 sm:mx-0 mx-4 z-10 sm:block hidden`}
                     onSubmit={() => setSearch(false)}
                  >
                     <div className="relative">
                        <input
                           type="text"
                           className="form-input ltr:pl-9 rtl:pr-9 ltr:sm:pr-4 rtl:sm:pl-4 ltr:pr-9 rtl:pl-9 peer sm:bg-transparent bg-gray-100 placeholder:tracking-widest"
                           placeholder="Search..."
                        />
                        <button
                           type="button"
                           className="absolute w-9 h-9 inset-0 ltr:right-auto rtl:left-auto appearance-none peer-focus:text-primary"
                        >
                           <svg
                              className="mx-auto"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <circle cx="11.5" cy="11.5" r="9.5" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                              <path d="M18.5 18.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                           </svg>
                        </button>
                        <button
                           type="button"
                           className="hover:opacity-80 sm:hidden block absolute top-1/2 -translate-y-1/2 ltr:right-2 rtl:left-2"
                           onClick={() => setSearch(false)}
                        >
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                              <path
                                 d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                                 stroke="currentColor"
                                 strokeWidth="1.5"
                                 strokeLinecap="round"
                              />
                           </svg>
                        </button>
                     </div>
                  </form>
                  <button
                     type="button"
                     onClick={() => setSearch(!search)}
                     className="search_btn sm:hidden p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
                  >
                     <svg
                        className="w-4.5 h-4.5 mx-auto dark:text-[#d0d2d6]"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <circle cx="11.5" cy="11.5" r="9.5" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                        <path d="M18.5 18.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                     </svg>
                  </button>
               </div>

               <div className="dropdown shrink-0 flex">
                  <Dropdown
                     offset={[0, 8]}
                     placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                     btnClassName="relative group block flex space-x-5"
                     button={<AvatarBox img={DPImage} title="Delicious Burger" titleClass="text-xs" />}
                  >
                     <ul className="text-dark dark:text-white-dark !py-0 w-[230px] font-semibold dark:text-white-light/90">
                        <li>
                           <div className="flex items-center px-4 py-4">
                              <img className="rounded-md w-10 h-10 object-cover" src={DPImage} alt="userProfile" />
                              <div className="ltr:pl-4 rtl:pr-4 truncate">
                                 <h4 className="text-sm">
                                    John Doe
                                    <span className="text-xs bg-success-light rounded text-success px-1 ltr:ml-2 rtl:ml-2">
                                       Pro
                                    </span>
                                 </h4>
                                 <button
                                    type="button"
                                    className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white"
                                 >
                                    johndoe@gmail.com
                                 </button>
                              </div>
                           </div>
                        </li>
                        <li>
                           <Link to="/users/profile" className="dark:hover:text-white">
                              <svg
                                 className="ltr:mr-2 rtl:ml-2 shrink-0"
                                 width="18"
                                 height="18"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
                                 <path
                                    opacity="0.5"
                                    d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                 />
                              </svg>
                              Profile
                           </Link>
                        </li>
                        <li>
                           <Link to="/apps/mailbox" className="dark:hover:text-white">
                              <svg
                                 className="ltr:mr-2 rtl:ml-2 shrink-0"
                                 width="18"
                                 height="18"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    opacity="0.5"
                                    d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                 />
                                 <path
                                    d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                 />
                              </svg>
                              Inbox
                           </Link>
                        </li>
                        <li>
                           <Link to="/auth/boxed-lockscreen" className="dark:hover:text-white">
                              <svg
                                 className="ltr:mr-2 rtl:ml-2 shrink-0"
                                 width="18"
                                 height="18"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                 />
                                 <path
                                    opacity="0.5"
                                    d="M6 10V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V10"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                 />
                                 <g opacity="0.5">
                                    <path
                                       d="M9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16Z"
                                       fill="currentColor"
                                    />
                                    <path
                                       d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z"
                                       fill="currentColor"
                                    />
                                    <path
                                       d="M17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z"
                                       fill="currentColor"
                                    />
                                 </g>
                              </svg>
                              Lock Screen
                           </Link>
                        </li>
                        <li className="border-t border-white-light dark:border-white-light/10">
                           <Link to="/auth/boxed-signin" className="text-danger !py-3">
                              <svg
                                 className="ltr:mr-2 rtl:ml-2 rotate-90 shrink-0"
                                 width="18"
                                 height="18"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    opacity="0.5"
                                    d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                 />
                                 <path
                                    d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                 />
                              </svg>
                              Sign Out
                           </Link>
                        </li>
                     </ul>
                  </Dropdown>
               </div>
               <div className="dropdown shrink-0">
                  <Dropdown
                     offset={[0, 8]}
                     placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                     btnClassName="relative block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                     button={
                        <span>
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z"
                                 stroke="currentColor"
                                 strokeWidth="1.5"
                              />
                              <path
                                 d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                                 stroke="currentColor"
                                 strokeWidth="1.5"
                                 strokeLinecap="round"
                              />
                              <path d="M12 6V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                           </svg>
                           <span className="flex absolute w-3 h-3 ltr:right-0 rtl:left-0 top-0">
                              <span className="animate-ping absolute ltr:-left-[3px] rtl:-right-[3px] -top-[3px] inline-flex h-full w-full rounded-full bg-success/50 opacity-75"></span>
                              <span className="relative inline-flex rounded-full w-[6px] h-[6px] bg-success"></span>
                           </span>
                        </span>
                     }
                  >
                     <ul className="!py-0 text-dark dark:text-white-dark w-[300px] sm:w-[350px] divide-y dark:divide-white/10">
                        <li onClick={(e) => e.stopPropagation()}>
                           <div className="flex items-center px-4 py-2 justify-between font-semibold">
                              <h4 className="text-lg">Notification</h4>
                              {notifications.length ? <span className="badge bg-primary/80">{notifications.length}New</span> : ''}
                           </div>
                        </li>
                        {notifications.length > 0 ? (
                           <>
                              {notifications.map((notification) => {
                                 return (
                                    <li
                                       key={notification.id}
                                       className="dark:text-white-light/90"
                                       onClick={(e) => e.stopPropagation()}
                                    >
                                       <div className="group flex items-center px-4 py-2">
                                          <div className="grid place-content-center rounded">
                                             <div className="w-12 h-12 relative">
                                                <img
                                                   className="w-12 h-12 rounded-full object-cover"
                                                   alt="profile"
                                                   src={`/assets/images/${notification.profile}`}
                                                />
                                                <span className="bg-success w-2 h-2 rounded-full block absolute right-[6px] bottom-0"></span>
                                             </div>
                                          </div>
                                          <div className="ltr:pl-3 rtl:pr-3 flex flex-auto">
                                             <div className="ltr:pr-3 rtl:pl-3">
                                                <h6
                                                   dangerouslySetInnerHTML={{
                                                      __html: notification.message,
                                                   }}
                                                ></h6>
                                                <span className="text-xs block font-normal dark:text-gray-500">
                                                   {notification.time}
                                                </span>
                                             </div>
                                             <button
                                                type="button"
                                                className="ltr:ml-auto rtl:mr-auto text-neutral-300 hover:text-danger opacity-0 group-hover:opacity-100"
                                                onClick={() => removeNotification(notification.id)}
                                             >
                                                <svg
                                                   width="20"
                                                   height="20"
                                                   viewBox="0 0 24 24"
                                                   fill="none"
                                                   xmlns="http://www.w3.org/2000/svg"
                                                >
                                                   <circle
                                                      opacity="0.5"
                                                      cx="12"
                                                      cy="12"
                                                      r="10"
                                                      stroke="currentColor"
                                                      strokeWidth="1.5"
                                                   />
                                                   <path
                                                      d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                                                      stroke="currentColor"
                                                      strokeWidth="1.5"
                                                      strokeLinecap="round"
                                                   />
                                                </svg>
                                             </button>
                                          </div>
                                       </div>
                                    </li>
                                 );
                              })}
                              <li>
                                 <div className="p-4">
                                    <button className="btn btn-primary block w-full btn-small">Read All Notifications</button>
                                 </div>
                              </li>
                           </>
                        ) : (
                           <li onClick={(e) => e.stopPropagation()}>
                              <button
                                 type="button"
                                 className="!grid place-content-center hover:!bg-transparent text-lg min-h-[200px]"
                              >
                                 <div className="mx-auto ring-4 ring-primary/30 rounded-full mb-4">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="40"
                                       height="40"
                                       viewBox="0 0 24 24"
                                       fill="#a9abb6"
                                       stroke="#ffffff"
                                       strokeWidth="1.5"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-info bg-primary rounded-full"
                                    >
                                       <line x1="12" y1="16" x2="12" y2="12"></line>
                                       <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                 </div>
                                 No data available.
                              </button>
                           </li>
                        )}
                     </ul>
                  </Dropdown>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
