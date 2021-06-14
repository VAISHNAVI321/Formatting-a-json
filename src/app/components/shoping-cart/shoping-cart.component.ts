import { Component, OnInit } from '@angular/core';

import * as data from '../../../assets/products.json';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {
  products:  any  = (data  as  any).default;
  constructor() { }
  
  starList: boolean[] = [true,true,true,true,true]; 
  setStar(d:any){                             
    for(var i=0;i<=4;i++){  
      if(i<d){  
        this.starList[i]=false;  
      }  
      else{  
        this.starList[i]=true;  
      }  
   }  
}  
  ngOnInit(): void {
    
  }

}
