// Simulasi data respons yang Anda terima dari permintaan API
const responseJSON = {
  result: [
    {
      image:
        "https://storydownloader.app/file/https%253A%252F%252Fscontent-ams4-1.cdninstagram.com%252Fv%252Ft51.2885-15%252F408281932_732913535553499_290662630929711445_n.jpg%253Fstp%253Ddst-jpg_e15%2526efg%253DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42NDB4MTEzNi5zZHIifQ%2526_nc_ht%253Dscontent-ams4-1.cdninstagram.com%2526_nc_cat%253D107%2526_nc_ohc%253DpQte2W7VRIsAX9-siWf%2526edm%253DANmP7GQBAAAA%2526ccb%253D7-5%2526ig_cache_key%253DMzI1MzE5MTIzNTQzOTYxNDc0Nw%25253D%25253D.2-ccb7-5%2526oh%253D00_AfCkm6xlGI7b2YvCiCHHxfO831ihfvpLwo4qB2EdQFDLXw%2526oe%253D65749FC5%2526_nc_sid%253D982cc7",
      url_download:
        "https://scontent-ams2-1.cdninstagram.com/o1/v/t16/f1/m78/E74111D21A11552069E308786C53F8AB_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uc3RvcnkuYzIuNzIwLmJhc2VsaW5lIn0&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=106&vs=882263963181835_2364605400&_nc_vs=HBkcFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyL0U3NDExMUQyMUExMTU1MjA2OUUzMDg3ODZDNTNGOEFCX3ZpZGVvX2Rhc2hpbml0Lm1wNBUAAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJpyzsbj6nrdBFQIoAkMzLBdAFAAAAAAAABgSZGFzaF9iYXNlbGluZV8xX3YxEQB16AcA&_nc_rid=cec9961a63&ccb=9-4&oh=00_AfAmd-qxkNILuQjenQEqJXhXAqbPfqD_tFyOzAY0eA83iw&oe=6574FB4C&_nc_sid=982cc7",
    },
    {
      image:
        "https://storydownloader.app/file/https%253A%252F%252Fscontent-ams2-1.cdninstagram.com%252Fv%252Ft51.2885-15%252F408382786_1047435626305667_7424855736326163408_n.jpg%253Fstp%253Ddst-jpg_e35%2526efg%253DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi44Mjh4MTQ3Mi5zZHIifQ%2526_nc_ht%253Dscontent-ams2-1.cdninstagram.com%2526_nc_cat%253D111%2526_nc_ohc%253Doq-CFElD-p8AX-HHixJ%2526edm%253DANmP7GQBAAAA%2526ccb%253D7-5%2526ig_cache_key%253DMzI1MzIwNDU5Mjg5NzAwMTk2Ng%25253D%25253D.2-ccb7-5%2526oh%253D00_AfAQZGnD_1DXW787s1xXceruxpCOYO0XBFo559vMJzVyCw%2526oe%253D6575057A%2526_nc_sid%253D982cc7",
      url_download:
        "https://scontent-ams2-1.cdninstagram.com/v/t51.2885-15/408382786_1047435626305667_7424855736326163408_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi44Mjh4MTQ3Mi5zZHIifQ&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=oq-CFElD-p8AX-HHixJ&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MzI1MzIwNDU5Mjg5NzAwMTk2Ng%3D%3D.2-ccb7-5&oh=00_AfAQZGnD_1DXW787s1xXceruxpCOYO0XBFo559vMJzVyCw&oe=6575057A&_nc_sid=982cc7",
    },
    {
      image:
        "https://storydownloader.app/file/https%253A%252F%252Fscontent-ams2-1.cdninstagram.com%252Fv%252Ft51.2885-15%252F409208344_576131978002244_3581087091924410226_n.jpg%253Fstp%253Ddst-jpg_e35%2526efg%253DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi44Mjh4MTQ3Mi5zZHIifQ%2526_nc_ht%253Dscontent-ams2-1.cdninstagram.com%2526_nc_cat%253D108%2526_nc_ohc%253DB4MMK2uYzHsAX9CAokm%2526edm%253DANmP7GQBAAAA%2526ccb%253D7-5%2526ig_cache_key%253DMzI1MzIzODUyNTUwNDA2ODQyNQ%25253D%25253D.2-ccb7-5%2526oh%253D00_AfDzsrIDgFYEjr6vHfoJwtSsnCKqO3Sr5CiZmOPb8tvKFQ%2526oe%253D657530C6%2526_nc_sid%253D982cc7",
      url_download:
        "https://scontent-ams2-1.cdninstagram.com/v/t51.2885-15/409208344_576131978002244_3581087091924410226_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi44Mjh4MTQ3Mi5zZHIifQ&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=B4MMK2uYzHsAX9CAokm&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=MzI1MzIzODUyNTUwNDA2ODQyNQ%3D%3D.2-ccb7-5&oh=00_AfDzsrIDgFYEjr6vHfoJwtSsnCKqO3Sr5CiZmOPb8tvKFQ&oe=657530C6&_nc_sid=982cc7",
    },
    {
      image:
        "https://storydownloader.app/file/https%253A%252F%252Fscontent-ams4-1.cdninstagram.com%252Fv%252Ft51.2885-15%252F408671069_1521204081969025_2702316524017600260_n.jpg%253Fstp%253Ddst-jpg_e15%2526efg%253DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42NDB4MTEzNi5zZHIifQ%2526_nc_ht%253Dscontent-ams4-1.cdninstagram.com%2526_nc_cat%253D101%2526_nc_ohc%253DkRCTbCy-UkAAX8G0lTG%2526edm%253DANmP7GQBAAAA%2526ccb%253D7-5%2526ig_cache_key%253DMzI1MzIzODc1MTA5OTA4MzAzNg%25253D%25253D.2-ccb7-5%2526oh%253D00_AfC8Dzd0ASHorCZod6B3GbGYuvpes6IT7V95T7KRpoaISw%2526oe%253D65751FA1%2526_nc_sid%253D982cc7",
      url_download:
        "https://scontent-ams2-1.cdninstagram.com/o1/v/t16/f1/m78/5C40AE304CCE7975FFF9F2D648A996A2_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uc3RvcnkuYzIuNzIwLmJhc2VsaW5lIn0&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=105&vs=1360121441561198_1108547432&_nc_vs=HBksFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyLzVDNDBBRTMwNENDRTc5NzVGRkY5RjJENjQ4QTk5NkEyX3ZpZGVvX2Rhc2hpbml0Lm1wNBUAAsgBABUCGDpwYXNzdGhyb3VnaF9ldmVyc3RvcmUvR040RFloZ1UxZDJ1ampZSEFPQS1PcGtMdF9wWmJwa3dBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAmwuqSgYWkmUAVAigCQzMsF0AsmZmZmZmaGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHXoBwA%3D&_nc_rid=cec9915f0a&ccb=9-4&oh=00_AfCTTbPorD33-wa3WEUfDHW1KEAPQQ-fEtXsXoWlYjKPXQ&oe=6574D499&_nc_sid=982cc7",
    },
    {
      image:
        "https://storydownloader.app/file/https%253A%252F%252Fscontent-ams2-1.cdninstagram.com%252Fv%252Ft51.2885-15%252F407975959_1488585598591518_5402775846437674661_n.jpg%253Fstp%253Ddst-jpg_e15%2526efg%253DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42NDB4MTEzNi5zZHIifQ%2526_nc_ht%253Dscontent-ams2-1.cdninstagram.com%2526_nc_cat%253D106%2526_nc_ohc%253DXOnOHMVq-QgAX-T5czK%2526edm%253DANmP7GQBAAAA%2526ccb%253D7-5%2526ig_cache_key%253DMzI1MzIzODg2MDA5MjE0NTM4Ng%25253D%25253D.2-ccb7-5%2526oh%253D00_AfDWnJHUzyOqNc1854T1r974pzdnP3QWXSnCHe6HviYQyw%2526oe%253D6574AAC2%2526_nc_sid%253D982cc7",
      url_download:
        "https://scontent-ams2-1.cdninstagram.com/o1/v/t16/f1/m78/4440DABE8840D5347C4E0B47D3DFE986_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uc3RvcnkuYzIuNzIwLmJhc2VsaW5lIn0&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=106&vs=379334854520098_2523873894&_nc_vs=HBksFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyLzQ0NDBEQUJFODg0MEQ1MzQ3QzRFMEI0N0QzREZFOTg2X3ZpZGVvX2Rhc2hpbml0Lm1wNBUAAsgBABUCGDpwYXNzdGhyb3VnaF9ldmVyc3RvcmUvR01tcFd4aWRlNUViakw4REFIbVhTY28xRDc0RWJwa3dBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAmxK7wl4%2Fri0AVAigCQzMsF0AkEOVgQYk3GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHXoBwA%3D&_nc_rid=cec9919733&ccb=9-4&oh=00_AfD0s4NAqM4WgYWPyx0_a2nC0gJp2vBLcD7-SznLvPvn2w&oe=6574B55C&_nc_sid=982cc7",
    },
    {},
  ],
};

// Mengubah JSON menjadi objek JavaScript
// const response = JSON.parse(responseJSON);
// Mengakses properti 'urls' dari 'items'
responseJSON.result = responseJSON.result.filter(
  (item) => Object.keys(item).length !== 0
);

const urls = responseJSON.result;

// Menampilkan URLs
console.log(urls);
