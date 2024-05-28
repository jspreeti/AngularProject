import { NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, UpperCasePipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


list = [
  {id : 1, Country : 'India'},
  {id : 2, Country : 'USA'},
  {id : 3, Country : 'South Africa'},
  {id : 4, Country : 'Canada'},
  {id : 5, Country : 'Mexico'}
]

}
