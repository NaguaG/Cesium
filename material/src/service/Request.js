import axios from "axios";

export const getRequest = (uri) => {
  return new Promise((resolve, reject) => {
    axios
      .get(uri)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const postRequest = (uri, body) => {
  return new Promise((resolve, reject) => {
    axios
      .post(uri, body)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const putRequest = (uri, body) => {
  return new Promise((resolve, reject) => {
    axios
      .put(uri, body)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const deleteRequest = (uri) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(uri)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
