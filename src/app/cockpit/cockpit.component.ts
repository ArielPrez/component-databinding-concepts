import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // The OUTPUT Decorator have the property with declaration of a new EventEmitter.
  // Need it to send the data from the child component to the parent component.
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // tslint:disable-next-line: no-output-rename
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  // To getting access to Template & DOM
  @ViewChild('serverContentInput', {static: true}) newServerContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // These methods emit the data from the child component.
  onAddServer(nameImput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameImput.value,
      serverContent: this.newServerContentInput.nativeElement.value
    });
  }
  onAddBlueprint(nameImput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameImput.value,
      serverContent: this.newServerContentInput.nativeElement.value
    });
  }

  // onAddBlueprint(nameImput: HTMLInputElement) {
  //   this.blueprintCreated.emit({
  //     serverName: nameImput.value,
  //     serverContent: this.newServerContent
  //   });
  // }

}
