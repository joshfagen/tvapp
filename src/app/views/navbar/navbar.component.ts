import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private router: any;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  setSelected(showQuery: string) {
    this.router.navigate(['/shows/' + showQuery]);

  }
}
