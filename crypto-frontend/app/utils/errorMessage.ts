export const handleErrorMessage = (status: number) => {
  let errorMessage;
  switch (status) {
    case 404:
      errorMessage = "API endpoint not found";
      break;
    case 500:
      errorMessage = "Server error occurred";
      break;
    case 503:
      errorMessage = "Service temporarily unavailable";
      break;
    default:
      errorMessage = `HTTP error! status: ${status}`;
  }

  return errorMessage;
};
