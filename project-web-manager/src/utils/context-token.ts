import { createContext } from "react";
import { AccessTokenPayload } from "@/models/token";

export type ContextTokenType = {
  contextTokenPayload: AccessTokenPayload | undefined;
  setContextTokenPayload: (contextTokenPayload: AccessTokenPayload | undefined) => void;
}

export const ContextToken = createContext<ContextTokenType>({
  contextTokenPayload: undefined,
  setContextTokenPayload: () => null,
});