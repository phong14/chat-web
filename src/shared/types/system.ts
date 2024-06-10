type ErrorType = Error & { digest?: string };

export interface INextErrors {
  error: ErrorType;
  reset: () => void;
}
