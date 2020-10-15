import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LogoComponent } from './shared/logo/logo.component';
import { CoursePageComponent } from './shared/course-page/course-page.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './shared/search/search.component';
import { CourseItemComponent } from './shared/course-item/course-item.component';
import { LoadMoreComponent } from './shared/load-more/load-more.component';
import { UserAreaComponent } from './shared/user-area/user-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CoursePageComponent,
    BreadcrumbsComponent,
    SearchComponent,
    CourseItemComponent,
    LoadMoreComponent,
    UserAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
