import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>現在日時:{{currentTime.toLocaleString()}}</p>
    <div class="base-container">
      <div *ngFor="let user of users">
        <span>{{user.userId}}</span><span>{{user.userName}}</span>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: { userId: number, userName: string }[] = [];
  currentTime = new Date();

  async ngOnInit() {
    this.users = await window.myAPI.loadUsers();    
  }

}
