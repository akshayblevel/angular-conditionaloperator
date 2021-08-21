# angular-conditionaloperator

my-component.component.ts

```js
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
```
my-component.component.html

```html
<div>
  <div>
    <button (click)='toggleImage()'>
      {{showImage? 'Hide' : 'Show' }} Image
    </button>
  </div>
  <div *ngFor="let employee of employees">
    {{employee.id}} <br/>
  {{employee.name}}
    <img *ngIf='showImage' [src]='employee.imageUrl' />
    <hr />
  </div>
</div>
```

app.module.ts

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MyComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

app.component.html

```html
<app-my-component></app-my-component>
```


