import Text from "@/components/atoms/Text";

const UserDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded">
        <Text className="text-black">user detail</Text>
        <br />
        <Text className="text-black">
          <>id : {id}</>
        </Text>
      </div>
    </div>
  );
};

export default UserDetail;
