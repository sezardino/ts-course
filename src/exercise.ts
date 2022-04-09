type ID = number;

interface PaymentData {
  sub: number;
  from: ID;
  to: ID;
}

enum OperationStatus {
  SUCCESS = "success",
  FAILED = "failed",
}

interface PaymentRequest extends PaymentData {}

interface SuccessResponse extends PaymentData {
  databaseId: ID;
}

interface FailedResponse {
  errorMessage: string;
  errorCode: number;
}

interface SuccessResponse {
  status: OperationStatus;
  data: SuccessResponse;
}

interface FailedResponse {
  status: OperationStatus.FAILED;
  data: FailedResponse;
}
