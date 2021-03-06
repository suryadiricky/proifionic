import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import {News} from '../../providers/News';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})

export class Page1 {
	
	items: any;
	loading: any;
	posts: any;

  constructor(public navCtrl: NavController, private news:News) {

  }
  ngOnInit(){
  this.getnewsPosts();
  }
  getnewsPosts(){
  	this.news.getnewsPosts().subscribe(response =>{this.items=response;
  });
}
}
