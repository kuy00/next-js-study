import Button from "../atoms/Button";
import Text from "../atoms/Text";
import InputField from "../molecules/InputField";

const LoginForm = () => {
  return (
    <form>
      <div className="flex flex-col justify-between h-28 mb-4">
        <InputField label="ID" type="text" />
        <InputField label="PW" type="password" />
      </div>

      <div className="px-5">
        <Button className="w-full bg-white rounded-md">
          <Text className="text-2xl text-black">Login</Text>
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
