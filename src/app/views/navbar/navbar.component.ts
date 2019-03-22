import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  show: string;
  constructor() { }
    url = 'http://api.tvmaze.com/search/shows?q=';
  ngOnInit() {
  }

  search() {
    this.show = document.getElementById('show').innerText;
    let showCleaned = trim(this.show);


  }
}
