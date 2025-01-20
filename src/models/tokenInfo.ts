import { TokenInfoInterface } from "@/types/api/auth";
import { JsonObject, JsonProperty } from "typescript-json-serializer";

@JsonObject()
class TokenInfo implements TokenInfoInterface {
  @JsonProperty({ name: "token" })
  public token: string;
}

export default TokenInfo;
