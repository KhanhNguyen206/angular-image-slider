import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentProjectionComponent} from './content-projection.component';
import {CpCardComponent} from './cp-card/cp-card.component';
import {ContentChildComponent} from './content-child/content-child.component';



@NgModule({
  declarations: [ContentProjectionComponent, CpCardComponent, ContentChildComponent],
  imports: [
    CommonModule
  ],
  exports: [ContentProjectionComponent, ContentChildComponent]
})
export class ContentProjectionModule { }
