//―――――――――――――――――――――――――――――――――――――――――― ┏  Modules ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

const axios = require("axios");

//―――――――――――――――――――――――――――――――――――――――――― ┏  Instagram Downloader Api ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

async function exportInsta_Data(url) {
  var urls = getInstaLink();
  var headers = {
    authority: "sssinstagram.com",
    accept: "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,id-ID;q=0.8,id;q=0.7",
    "content-type": "application/json;charset=UTF-8",
    cookie:
      "random_n=eyJpdiI6IlBDNVpod01TeHRpbDVuam4rTUthQ2c9PSIsInZhbHVlIjoicU5Qb3MvYnJxZkMwNnJFNU5VelZoaDZ5R21BdUlyYm1WTWQ1eWFoUWJ2anpUNnJjMVdwY1VQbGNCSnpPNUxFTCIsIm1hYyI6ImVlM2ViOGRmZTVhMzBmZDJkY2NiZmE1ODg4NmQwNTYzNTRhYTA2YjMzMGFkYzZiNzI4YTc0OTM4ODA4YmQ3NjEiLCJ0YWciOiIifQ%3D%3D; XSRF-TOKEN=eyJpdiI6IjQ0MHB1QnB1SFQzc2dzU1RYRVhYeUE9PSIsInZhbHVlIjoiYVhGdXpqQVpXQ2RMSzJ1SEdXdkhNeWxaaWJwWk9URjFXNGtuWEJiUmRRMngyTC91eGZkSFRSRjdPWFB0cFN3UGZFY1ZNMFNlM1NoemxSZlVDdWFSZHZLUnMyZmc2bEZrVVhVNW93bTZUbGZnOThRbVYrZlhpSGtVOURJKzVHUFAiLCJtYWMiOiIwMzNhNTdmZDczNjY0MzgxNTU5ZTRlMmY1Y2M1Yzc2MzE4OTM0MTUwNmI2MDZlODEyNTk4ZGE1NGFjMDAyM2U0IiwidGFnIjoiIn0%3D; sssinstagram_session=eyJpdiI6InhjbHFFSkFpUWNmNTVaeFpRNlI4d3c9PSIsInZhbHVlIjoicENybDFRNHlTUUE0K1J4MFpvVFZoZmdySTZnbnJGU1JOb0g3UWdjQWJLNW80b2dGeXhPWWJqMlZCUngvNXBxY1UvWTdHZTZZN041dEJuQ3JwdTQraHVHemNDemd5cEdXSE10QUQxNjFRbCtkYmpIK0JvS0dJZytxWUZpTmJWNEEiLCJtYWMiOiJlZWY3NGEyZGNhNWIyMWMzZmM4NDc4NTU4YTk4N2MyZWI5Y2QyYzg2MzNhMmFkNDE0M2Q2NzcxNmRhNjY1MWZlIiwidGFnIjoiIn0%3D; _ga_90WCZ6NHEE=GS1.1.1702047074.1.0.1702047074.0.0.0; _ga=GA1.1.2109781057.1702047074",
    "x-xsrf-token":
      "eyJpdiI6IjQ0MHB1QnB1SFQzc2dzU1RYRVhYeUE9PSIsInZhbHVlIjoiYVhGdXpqQVpXQ2RMSzJ1SEdXdkhNeWxaaWJwWk9URjFXNGtuWEJiUmRRMngyTC91eGZkSFRSRjdPWFB0cFN3UGZFY1ZNMFNlM1NoemxSZlVDdWFSZHZLUnMyZmc2bEZrVVhVNW93bTZUbGZnOThRbVYrZlhpSGtVOURJKzVHUFAiLCJtYWMiOiIwMzNhNTdmZDczNjY0MzgxNTU5ZTRlMmY1Y2M1Yzc2MzE4OTM0MTUwNmI2MDZlODEyNTk4ZGE1NGFjMDAyM2U0IiwidGFnIjoiIn0=",
  };
  var data = await axios({
    method: "post",
    url: urls,
    headers: headers,
    data: {
      link: url,
      token: "",
    },
  });

  return data.data.data;
}

function getInstaLink() {
  return "https://sssinstagram.com/r";
}
module.exports = exportInsta_Data;
