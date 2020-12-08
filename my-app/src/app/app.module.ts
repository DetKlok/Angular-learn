import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { CoursePageComponent } from './courses-page/course-page/course-page.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './courses-page/search/search.component';
import { CourseItemComponent } from './courses-page/course-item/course-item.component';
import { LoadMoreComponent } from './shared/components/load-more/load-more.component';
import { UserAreaComponent } from './shared/components/user-area/user-area.component';

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
