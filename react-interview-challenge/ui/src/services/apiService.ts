const API_BASE_URL = 'http://localhost:3000';

const apiRequest = async (url: string, amount: number) => {
  const response = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount })
  });
  if (!response.ok) throw new Error("API request failed.");
  return await response.json();
};

export const depositFundsAPI = async (accountNumber: number, amount: number) => {
  return await apiRequest(`${API_BASE_URL}/transactions/${accountNumber}/deposit`, amount);
};

export const withdrawFundsAPI = async (accountNumber: number, amount: number) => {
  return await apiRequest(`${API_BASE_URL}/transactions/${accountNumber}/withdraw`, amount);
};
