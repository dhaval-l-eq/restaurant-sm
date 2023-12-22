import { FormEvent } from 'react';
import BGImage from '../../assets/images/bg-login.jpg';
import TextInput from '../../components/TextInput';
import TextLarge from '../../components/typography/TextLarge';
import AuthLayout from '../../layouts/AuthLayout';
import IconForm from '../../components/icon/IconForm';
import { loginFormElements } from '../../helper/authConfig';
import Button from '../../components/button/Button';
import TextPrimary from '../../components/typography/TextPrimary';
import { NavLink, useNavigate } from 'react-router-dom';
import HeadingLarge from '../../components/typography/HeadingLarge';
import ButtonOutline from '../../components/button/ButtonOutline';

function Login() {

   const navigate = useNavigate();

   function submitHandler(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData);

      console.log(data);

      // todo - add login method and form validation

      // after login
      navigate('/dashboard');
   }

   return (
      <AuthLayout image={BGImage}>
         <div className="max-w-[440px] w-11/12">
            <HeadingLarge className="text-black-100 text-center">
               Welcome to <span className="font-bold text-primary-400">SM Restaurant</span>
            </HeadingLarge>
            <TextLarge className="text-black-200 font-medium text-center">Account</TextLarge>
            <div className="pe-2 ps-5 mt-[110px]">
               <form onSubmit={submitHandler}>
                  <div className="space-y-7">
                     {loginFormElements.map((item) => (
                        <div key={item.id}>
                           <TextInput
                              type={item.type}
                              placeholder={item.label}
                              icon={<IconForm name={item.icon} />}
                              id={item.id}
                              name={item.id}
                           />
                        </div>
                     ))}
                     <NavLink className="text-right text-primary font-secondary link block" to="/pwd-reset">
                        Forgot password?
                     </NavLink>
                  </div>

                  <Button className="mt-11 bg-primary-400 font-secondary" size="block">
                     Sign In
                  </Button>
               </form>
               <TextPrimary className="mt-11 text-gray-200 font-secondary text-center">
                  Don't have an account? Setup now
               </TextPrimary>
               <ButtonOutline isLink linkPath="/signup" className="mt-7 font-secondary" size="block">
                  Create Account
               </ButtonOutline>
            </div>
         </div>
      </AuthLayout>
   );
}
export default Login;
