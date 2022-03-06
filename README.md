<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="images/logo.png" alt="Logo" >

  <p align="center">
    the official client-side repo of Scrapaste
    <br />
    <a href="https://scrapaste.herokuapp.com/">Visit App</a>  
    ·
    <a href="https://github.com/strauss02/scraper-frontend/issues">Report Bug</a>
    ·
    <a href="https://github.com/strauss02/scraper-frontend/issues">Request Feature</a>
  </p>
</div>

## About The Project

![](images/screenshot2.png)

Scrapaste is a scraping service that extracts information off darknet pastebins.  
In addition to the basic scraping, it also analyses each entry scraped.  
The metrics added to each entry currently include Sentiment analysis and Entity analysis.  
There also some nice general statistics presented.

This project was originally created as a class project for my programming course

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

<br>

- React.js
- Express
- Next.js
- Redux Toolkit
- MongoDB
- MUI

<!-- GETTING STARTED -->

## Getting Started

Go ahead and click the [link](https://scrapaste.herokuapp.com/) to access the website.

### Prerequisites

A modern browser.

![Dashboard statistics](images/1.png)

After entering the website, you would be presented with a handful of general statistics regarding the collected entries.  
</br>

### The entries section

</br>
Once entering the entries section, you can view all of the entries scraped up until now. The database self-updates every 2 minutes, and will add any new scrapes - so you don't have to worry about refreshing.  
</br>  
</br>

![Omni search](images/2.png)

Specific entries can be searched by using the omni-search bar.  
any relevant entry will show up in the search results.

![results](images/3.png)

The amount of search results to display can be controlled by using the results selector.

![results](images/4.png)

Every entry card includes information about that entry. We can see:

- The entry title
- The entrie's text content
- Entry posting date
- Entry tags
- Entry sentiment score

The tags are actually the results of an entity analysis which detects the relevant entities in the entry.

The sentiment analysis pill includes two pieces of information:

- The sentiment score - denoted by S (whether the text conveys negative or positive emotion)
- The sentiment magnitude - denoted by M (how decisive and prevalent is the sentiment conveyed by the text)

<!-- USAGE EXAMPLES -->

<p align="right">(<a href="#top">back to top</a>)</p>
