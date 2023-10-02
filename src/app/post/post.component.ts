import { Component, OnInit } from '@angular/core';
import { Iposts } from '../models/post';
import { posts } from '../const/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
    postArray : Array<Iposts> =[];


  constructor() { }

  ngOnInit(): void {
     this.postArray = posts
  }

 

}
