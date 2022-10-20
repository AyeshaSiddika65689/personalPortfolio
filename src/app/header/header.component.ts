import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
    
  ngOnInit(): void {
  }

  toAbout() {
    document.getElementById('services')?.scrollIntoView({behavior:"smooth"});
  }
  toContact() {
    document.getElementById('contact')?.scrollIntoView({behavior:"smooth"});
  }
  toTestimony() {
    document.getElementById('testimony')?.scrollIntoView({behavior:"smooth"});
  }
}
