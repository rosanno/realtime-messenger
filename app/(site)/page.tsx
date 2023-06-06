import AuthForm from "./components/AuthForm";
import { BsWechat } from "react-icons/bs";

const Auth = () => {
  return (
    <div
      className="
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        bg-pattern
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <BsWechat className="mx-auto w-auto text-5xl text-[#2b825b]" />
        <h2
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-white
          "
        >
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
};

export default Auth;
