import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { RouterModule, UrlSegment } from '@angular/router';

@NgModule({
  declarations: [AppComponent, PageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        matcher: (url) => {
          let num: number = parseInt(url[0].path);

          if (num > 5 || num < 1) return null;
          if (isNaN(num)) return null;

          return {
            consumed: url,
            posParams: {
              pageNum: new UrlSegment(num.toString(), {}),
            },
          };
        },
        component: PageComponent,
      },
      {
        path: '**',
        redirectTo: '1',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
