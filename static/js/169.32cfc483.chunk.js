"use strict";(self.webpackChunkreadme=self.webpackChunkreadme||[]).push([[169],{7169:function(e,o,a){a.r(o),a.d(o,{default:function(){return r}});var n=a(885),t=a(4569),s=a.n(t),l=a(2791),i=a(4374),c=a(184),u=(0,i.Le)((function(e){var o=e.bookName,a=e.bookImg;return(0,c.jsx)("a",{href:"https://wa.me/+212771487686",children:(0,c.jsxs)("div",{className:"details",children:[(0,c.jsx)("div",{className:"image",children:(0,c.jsx)("img",{className:"detailsImg",src:a,alt:"book"})}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h1",{className:"detailsTitle",children:o})})]})})}));function r(e){var o=(0,l.useState)([]),a=(0,n.Z)(o,2),t=a[0],i=a[1],r=e.searchValue;return(0,l.useEffect)((function(){s().get("https://www.googleapis.com/books/v1/volumes?q="+r+"&key=".concat("AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU")+"&maxResults=40").then((function(e){return i(e.data.items)})).catch((function(e){return console.log(e)}))}),[r]),(0,c.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",backgroundColor:"black"},children:t.map((function(e){try{return(0,c.jsx)(u,{bookName:e.volumeInfo.title,bookImg:e.volumeInfo.imageLinks.smallThumbnail,bookAuthor:e.volumeInfo.authors},e.id)}catch(o){e.volumeInfo.title,e.volumeInfo.publishedDate,e.volumeInfo.description,e.volumeInfo.infoLink,e.id}}))})}}}]);
//# sourceMappingURL=169.32cfc483.chunk.js.map