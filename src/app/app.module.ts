import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VideosComponent } from './components/videos/videos.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VideoComponent } from './components/video/video.component';
import { FirstcompComponent } from './components/firstcomp/firstcomp.component';
import { SeccompComponent } from './components/seccomp/seccomp.component';
import { ThirdcompComponent } from './components/thirdcomp/thirdcomp.component';
import { FourthcompComponent } from './components/fourthcomp/fourthcomp.component';
import { BoxcompComponent } from './components/boxcomp/boxcomp.component';
import { CasestudiesComponent } from './components/casestudies/casestudies.component';
import { OutsourcecompComponent } from './components/outsourcecomp/outsourcecomp.component';
import { ServingcompComponent } from './components/servingcomp/servingcomp.component';
import { BlogscompComponent } from './components/blogscomp/blogscomp.component';
import { LastcompComponent } from './components/lastcomp/lastcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VideosComponent,
    VideoComponent,
    FirstcompComponent,
    SeccompComponent,
    ThirdcompComponent,
    FourthcompComponent,
    BoxcompComponent,
    CasestudiesComponent,
    OutsourcecompComponent,
    ServingcompComponent,
    BlogscompComponent,
    LastcompComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
