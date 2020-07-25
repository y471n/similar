const prettify = (ugly) => {
  const obj = JSON.parse(ugly);
  const pretty = JSON.stringify(obj, undefined, 4);
  return pretty;
};

export default prettify;
