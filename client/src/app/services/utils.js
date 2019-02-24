// utility to parse fetch response into json
export function parseResponse(response) {
  if (response.ok) {
    return response.json();
  }
  // Though this currently only returns null, this is where
  // more advanced error handling could be started
  return null;
}
