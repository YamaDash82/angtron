import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angtron!! TestUpdate</h1>
    <p>現在日時:{{currentTime.toLocaleString()}}</p>
    <p>わははのは</p>
    <div class="base-container">
      <div *ngFor="let user of users">
        <span>{{user.userId}}</span><span>{{user.userName}}</span>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = `${window.myAPI.greet()}`;
  users: { userId: number, userName: string }[] = [];
  currentTime = new Date();

  async ngOnInit() {
    this.users = await window.myAPI.loadUsers();    
  }

}
