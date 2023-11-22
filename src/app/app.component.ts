import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
  data = 'Angular'
  getValue()
  {
    return "Function Call Successfully"
  }
  getName(firstName:string, secondName:string){
    alert(firstName); 
    alert(secondName); 
  }
}
