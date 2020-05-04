type Obj = {
  [key: string]: any;
};

export default function jsonToQueryString(json: Obj): string {
  return Object.keys(json)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(json[key]))
    .join('&');
}
