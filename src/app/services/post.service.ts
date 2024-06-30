import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postList: Post[] = [];

  create(post: Post) {
    this.postList.push(post)
    localStorage.setItem("archive", JSON.stringify(this.postList))
  }

  getAll(): Post[] {
    if (localStorage.getItem("archive")) {
      this.postList = JSON.parse(localStorage.getItem("archive")!)
    }
    return this.postList
  }

  getByCategory(cat: string): Post[] {
    return this.postList.filter(post => post.category === cat)
  }
}
