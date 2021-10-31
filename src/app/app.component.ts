import { Component } from '@angular/core';
import { Router, NavigationStart,  NavigationEnd, Event} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoader: boolean;

  constructor(private _router: Router) {}

  ngOnInit() {
    this.routerEvents();
  }

  routerEvents() {

    this._router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.isLoader = true;
          break;
        }
        case event instanceof NavigationEnd: {
          this.isLoader = false;
          break;
        }
      }
    });
  }

}
