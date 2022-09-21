import { Component, OnInit } from '@angular/core';

// ActivatedRoute reads from the route
// Router writes into the route
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: String = "";

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      // if search term exists, use it. else, default
      if (params?.['searchTerm']){
        this.searchTerm = params?.['searchTerm'];
      }
    })
  }

  search():void{
    // check if there is a search term in the search box
    if(this.searchTerm){
      this.router.navigateByUrl('/search/' + this.searchTerm);
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
