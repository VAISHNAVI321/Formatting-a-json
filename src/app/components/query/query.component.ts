import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/queries.json';
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  q :  any  = (data  as  any).default;
  displayedColumns: string[] = ["reference","type","raisedby","raisedon","status"];
  constructor() { }

  ngOnInit(): void {
  }

}
