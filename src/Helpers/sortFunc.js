export default function sortF(a, b, type) {
  // let nameA = a[type].toLowerCase();
  // let nameB = b[type].toLowerCase();
  // if (nameA < nameB) return -1;
  // if (nameA > nameB) return 1;
  // return 0;
  return a[type].localeCompare(b[type]);
}
