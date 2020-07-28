import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated  // None , Native 
  //to ensure only this component receives the style defines in it.
})
export class ServerElementComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('someAlias') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
