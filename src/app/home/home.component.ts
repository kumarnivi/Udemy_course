import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // interval(period:1000).subscribe(next:count => {
    //   console.log(count)
    // })
  }


  onLoadServers() {
    this.router.navigate(['/servers']);
  }
}
