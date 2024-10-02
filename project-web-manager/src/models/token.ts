export type RoleEnum = '1' | '2';

export type AccessTokenPayload = {
  exp: number;
  unique_name: string;
  role: RoleEnum[];
}