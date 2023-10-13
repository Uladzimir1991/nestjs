export const catchMessage = async (
  error: any,
): Promise<Record<string, string>> => {
  return {
    timestamp: new Date().toLocaleString(),
    message: error.message,
  };
};
