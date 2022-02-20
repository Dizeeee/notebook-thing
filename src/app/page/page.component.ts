import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  pageNum: number = parseInt(this.route.snapshot.params['pageNum']);
  content: string | null = null;

  ngOnInit(): void {
    this.content = sessionStorage.getItem(this.pageNum.toString());
  }

  saveData(event: Event) {
    const element = event.target as HTMLElement;
    sessionStorage.setItem(this.pageNum.toString(), element.innerHTML);
  }
}
