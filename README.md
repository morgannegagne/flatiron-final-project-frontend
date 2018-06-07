## Herd

Herd is a fullstack web application that allows users to save places to a personal map, add friends, and see their friends saved places. It is a social way to discover new shops, restaurants, and attractions.

The frontend utilizes React/Redux to build components and is styled using Semantic UI and custom CSS.

Places and maps were served through the Google Maps API. 


### Custom Google Chrome Extension
This repository also contains a custom Google Chrome extension that allows users to save places from anywhere in the web. The Chrome Extension makes a POST request to a Rails backend, where Nokogiri is utilized to scrape the web page, looking for a place name or address. 
