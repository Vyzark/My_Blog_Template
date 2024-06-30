import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postList: Post[] = [];
  categoryList = [
    { category: 'Code', icon: 'pi pi-code' },
    { category: 'Technology', icon: 'pi pi-microchip' },
    { category: 'Science', icon: 'pi pi-chart-scatter' },
    { category: 'Media', icon: 'pi pi-hashtag' },
    { category: 'Finance', icon: 'pi pi-bitcoin' },
  ];

  create(post: Post) {
    this.postList.push(post);
    localStorage.setItem('archive', JSON.stringify(this.postList));
  }

  getFromLocal() {
    if (localStorage.getItem('archive')) {
      return JSON.parse(localStorage.getItem('archive')!);
    }
  }

  getAll(): Post[] {
    this.postList = this.getFromLocal()
    return this.postList;
  }

  getByCategory(cat: string): Post[] {

    this.postList = this.getFromLocal()
    console.log(this.postList.filter((post) => post.category.category === cat));

    return this.postList.filter((post) => post.category.category === cat);
  }

  capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1, string.length);
  }
}
