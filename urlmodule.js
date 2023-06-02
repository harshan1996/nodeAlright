// import url from 'node:url';
const url=require("url")
const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';


const myURL2 = url.parse('https://user:pass@sub.example.com:8080/pathName?query=string#hash');
console.log(myURL);
console.log(myURL2.href);

console.log(myURL2.host); // includes port
console.log(myURL2.hostname); // doesn't include port
console.log(myURL2.pathname);
console.log(myURL2.search);
console.log(myURL.searchParams);
myURL.searchParams.append(1,"a")
console.log(myURL.searchParams);