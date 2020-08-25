import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // This array contain the data to show in the child componet
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];


  // These methods that receives the data from the child component as event and save it.(push)
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyLastElement() {
    // tslint:disable-next-line: no-unused-expression
    this.serverElements.splice(0, 1);
  }

}
