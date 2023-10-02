import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myblog';
  omi = 'this is angular javascript';
  displayName = '';
  getname(name:string)
{
  alert(name);
  // prompt('how are you');
 
}
getData(val:string){
  console.warn(val);

}
getValue(value:string)
{
  console.warn(value);
  this.displayName = value;

}

}

