// utils/fetcher.ts

export interface FetcherOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  token?: string;
}

export async function $fetch(url: string, options: FetcherOptions = {}) {
  const { method = "GET", headers = {}, body, token } = options;
  const fetchHeaders: Record<string, string> = {
    ...headers,
  };
  if (token) {
    fetchHeaders["Authorization"] = `Bearer ${token}`;
  }
  const res = await fetch(url, {
    method,
    headers: fetchHeaders,
    body: body ? (typeof body === "string" ? body : JSON.stringify(body)) : undefined,
  });
  if (!res.ok) {
    let errorMsg = "API Error";
    try {
      const err = await res.json();
      errorMsg = err.message || JSON.stringify(err);
    } catch {}
    throw new Error(errorMsg);
  }
  if (res.status === 204) return null;
  return res.json();
}
