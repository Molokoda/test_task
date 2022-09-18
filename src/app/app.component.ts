import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../data/data.json'
import { dataItemInterface } from 'src/models/dataItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'test_task';
  navs: string[] = ["income", "outcome", "loan", "investment" ]
  data: dataItemInterface[] = [];
  tab: number = 0;
  
  constructor(private route: ActivatedRoute){}
  ngOnInit(){
    this.route.queryParams
      .subscribe( ( params: any ) => { 
        this.tab = Number(params.tab) || 0;
        this.data = data.data.filter( (data: dataItemInterface) => data.type === this.navs[Number(this.tab)])
        console.log(this.data)
      }
    );
  }
}
