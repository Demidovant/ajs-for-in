export default function orderByProps(obj, values) {
  const sortableProp = [];
  const sortableName = [];

  //   for (const key in obj) {
  Object.keys(obj).forEach((key) => {
    if (values.includes(key)) {
      sortableProp.push({ key, value: obj[key] });
    } else {
      sortableName.push({ key, value: obj[key] });
    }
  });

  sortableName.sort((a, b) => (a.key > b.key ? 1 : -1));

  const result = sortableProp.concat(sortableName);
  return result;
}
