type APIResponse<Data> = {
  status: boolean;
  code: number;
  message: string;
  data: Data;
};
