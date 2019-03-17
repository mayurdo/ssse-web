import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  @ViewChild('navbarcollapse') navbarcollapse: ElementRef;

  ngOnInit() {
  }

  public menuClick() {
    this.navbarcollapse.nativeElement.classList.remove("show")
  }

}
