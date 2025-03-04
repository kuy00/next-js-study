import Text from "@/components/atoms/Text";

const Test = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded">
        <Text className="text-black">test modal</Text>
      </div>
    </div>
  );
};

export default Test;
