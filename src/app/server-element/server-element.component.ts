import { Component,
  OnInit,
  Input,
  ViewEncapsulation,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated  // None , Native
  // To ensure only this component receives the style defines in it,
    // in browsers that don't support the Angular view encapsulation.
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {
  // The INPUT Decorator have the type of data to be show.
  // Need it to send the data from the parent component to the child component.
  // tslint:disable-next-line: no-input-rename
  @Input('someAlias') element: {type: string, name: string, content: string};
  @Input() name: string;
  constructor() { console.log('Constructor called!'); }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook.
    // Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void { console.log('ngOnInit called!'); }

  // tslint:disable-next-line: use-life-cycle-interface
  ngDoCheck(): void {
    // Called every time that the input properties of a component or a directive are checked.
    // Use it to extend change detection by performing a custom check.
    // Add 'implements DoCheck' to the class.
    console.log('ngDoCheck called!');
  }
  ngAfterContentInit(): void { console.log('ngAfterContentInit called!'); }

  ngAfterContentChecked(): void {
    // Called after every check of the component's or directive's content.
    // Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit(): void { console.log('ngAfterViewInit called!'); }

  ngAfterViewChecked(): void { console.log('ngAfterViewChecked called!'); }

}
