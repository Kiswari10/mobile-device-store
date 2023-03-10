/**
 * API Fetch
 * fetch(url, [options])
 */

export const get = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
  });

  if (response.status === 200) {
    return response.json();
  } else {
    const errorMessage = { code: response.status, message: 'response.status' };
    throw errorMessage;
  }
};

export const post = async (url, body) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 200) {
    return response.json();
  } else {
    const errorMessage = { code: response.status, message: 'response.status' };
    throw errorMessage;
  }
};
