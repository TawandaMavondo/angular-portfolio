import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerModule } from './banner/banner.module';
import { ProjectcardComponent } from './projectcard/projectcard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ProjectcardComponent],
  imports: [
    CommonModule,
    BannerModule,
    FontAwesomeModule
  ],
  exports: [BannerModule, ProjectcardComponent]
})
export class ComponentsModule { }
