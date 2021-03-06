import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerModule } from './banner/banner.module';
import { ProjectCardComponent } from './projectcard/projectcard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioCardComponent } from './portfoliocard/portfoliocard.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { SpinnerComponent } from './spinner/spinner.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [ProjectCardComponent, PortfolioCardComponent, SpinnerComponent, FooterComponent],
  imports: [
    CommonModule,
    BannerModule,
    FontAwesomeModule,
    NzCardModule
  ],
  exports: [BannerModule, ProjectCardComponent, PortfolioCardComponent, SpinnerComponent, FooterComponent]
})
export class ComponentsModule { }
