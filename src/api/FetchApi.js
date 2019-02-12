
const callApi = url =>
  fetch(url)
    .then(
      response => (response.ok
        ? response.json()
        : Promise.reject(response.text())
      ),
      error => Promise.reject(error))
    .then(
      data => ({ data, isError: false }),
      error => ({ error, isError: true }))
    .catch(error => ({ error, isError: true }));

export default callApi;
