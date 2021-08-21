import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  showImage = false;
  employees = [
    {
      id: 1,
      name: 'Akshay Patel',
      imageUrl: 'https://picsum.photos/50'
    },
    {
      id: 2,
      name: 'Panth Patel',
      imageUrl: 'https://picsum.photos/50'
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
