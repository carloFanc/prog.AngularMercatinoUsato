import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss'],
})
export class SidebarLayoutComponent implements OnInit {
  constructor() {
    console.log('SidebarLayoutComponent constructor');
  }

  ngOnInit(): void {
    console.log('SidebarLayoutComponent ngOnInit');
  }
}
