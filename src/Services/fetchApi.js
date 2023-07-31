const fetchApi = async (pathUrl, method, body = "") => {
 let myHeaders = new Headers();
 myHeaders.append("Content-type", "application/json");
 myHeaders.append("Authorization", "mauricio-cassiano@hotmail.com");

 let requestOptions = {
  method,
  headers: myHeaders,
  redirect: "follow",
  };

 if (body) {
  requestOptions.body = JSON.stringify(body);
  }
 const response = await fetch(
  `https://tiao.supliu.com.br/${pathUrl}`,
  requestOptions
 );

const data = await response.json();
 return {
  data,
  status: response.ok,
  message: data.error,
  };
};

export default fetchApi;
