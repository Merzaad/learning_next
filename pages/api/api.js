const fetchData = (promise) => {
  let data;
  const fetch = async () => {
    data = await promise;
  };
  const closure = () => {
    if (!data) throw fetch();
    return data;
  };
  return closure;
};

const promise = (delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(`resolved + ${delay} sec timeout`);
    }, delay * 1000);
  });

const Api = (delay) => {
  let testPromis = promise(delay);
  return {
    fetch: fetchData(testPromis),
  };
};

export default Api;
