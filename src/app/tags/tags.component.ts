import { Component, OnInit, Input } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/Tag';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  foodPageTags?:any[]
  tags?:Tag[];

  currentTag:string = '';

  constructor(private foodService:FoodService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    if (!this.foodPageTags){
      this.tags = this.foodService.getAllTags();
    } else {
      this.tags = this.foodPageTags;
    }


    this.route.params.subscribe(params => {
      if (params?.['tag']) {
        this.currentTag = params?.['tag'];
      } else if(params?.['searchTerm']) {
        this.currentTag = '';
      } else {
        this.currentTag = 'All';
      }
    })
  }

  updateCurrentTag(param:string):void{
    this.currentTag = param;
  }

}
