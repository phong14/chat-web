export type ApiVersion = {
  version: string;
};

export interface ApiResponse<TData = null> {
  status: number;
  errorMessage: string;
  errorMessageCode: string;
  data: TData | null;
}
