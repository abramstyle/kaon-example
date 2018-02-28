const apiHost = process.env.API_HOST;
export function api(url) {
  return `${apiHost}${url}`;
}
