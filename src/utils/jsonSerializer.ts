import { JsonSerializer, throwError } from "typescript-json-serializer";

const jsonSerializer = new JsonSerializer({
  errorCallback: throwError,
  nullishPolicy: {
    undefined: "disallow",
    null: "disallow",
  },
});

type DeserializeParams = Parameters<JsonSerializer["deserialize"]>;
type DeserializeReturnType = ReturnType<JsonSerializer["deserialize"]>;

export const deserialize = (
  ...params: DeserializeParams
): DeserializeReturnType => {
  const [obj, type] = params;
  return jsonSerializer.deserialize(obj, type);
};
