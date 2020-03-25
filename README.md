# [TV App](https://github.com/joshfagen/tvapp)
#### By Joshua Fagen

### [View Project Here](https://joshfagen.github.io/tvapp/home) ###

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

I couldn't have made this without the [TVMaze API](https://api.tvmaze.com). All thanks to them for creating such a wonderful tool and making it available to us so that we can hone our skills.

### Main Pages: ###

* Home - where the search bar is located
* Shows Component - rendered after search...list of shows
* Show Page Component - season-by-season breakdown of a specific show. Clicking on a specific season causes the episodes from that season to appear.

***
### Routes: ### 
* 'shows/:query' => Search Results, upto 10 shows are returned.
* 'episodes/:id' => Details of a specific show...season-based episode breakdown.


***
### Moving Forward: Future Changes I want to make
* Move Search Field to Navbar.
* Visited Page - Logs pages the user has visited
* Calendar - Allow users to add shows to a calendar, so they can keep track of when shows air.
* User System - Allow users to create profiles, keep track of shows they're interested in...notify them when those shows are on tv. 
* Channel Field - combine Network property of show and location of user to give local channel number for a show. 
