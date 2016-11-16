import {Component} from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
    `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
  `]
})

export class AppComponent {
  title = 'Tour of Heroes';

}
