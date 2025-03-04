"use client";

import Button from "../atoms/Button";
import Text from "../atoms/Text";

const SearchButton = ({ fetch }: { fetch: () => Promise<object> }) => {
  const search = async () => {
    const result = await fetch();
    alert(JSON.stringify(result));
  };

  return (
    <Button className="w-20 bg-white rounded-md" onClick={search}>
      <Text className="text-2xl text-black">검색</Text>
    </Button>
  );
};

export default SearchButton;
