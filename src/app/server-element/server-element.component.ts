import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated  // None , Native
  // To ensure only this component receives the style defines in it,
    // in browsers that don't support the Angular view encapsulation.
})
export class ServerElementComponent implements OnInit {

  // The INPUT Decorator have the type of data to be show.
  // Need it to send the data from the parent component to the child component.
  // tslint:disable-next-line: no-input-rename
  @Input('someAlias') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
