type Param = string | number;

export type Params = {
  [key: string]: Param[] | Param | null;
};
