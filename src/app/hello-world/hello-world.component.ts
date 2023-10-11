import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent {
  // constructor(private logger: LoggerService) {}

  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    console.log('ngOnInit called');
  }

}
