
const callApi = url => {
  fetch(url)
    .then(resp => resp.json())
    .then(data => ({data, isError: false}))
    .catch(error => ({ error, isError: true }));
};

export default callApi;
