import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/utils';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(
    private _blogService: BlogService
  ) { }
  blogs: any;
  async ngOnInit() {
    this.blogs = await this._blogService.listAsync();
    for (var i = 0; i < this.blogs.items.length; i++) {
      this.blogs.items[i].pubDate = this.blogs.items[i].pubDate.substr(0, 10)
    }
  }
}
