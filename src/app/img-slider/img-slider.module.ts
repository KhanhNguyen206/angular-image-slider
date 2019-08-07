import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImgSliderComponent} from './img-slider.component';
import {ImageSlideComponent} from './image-slide/image-slide.component';



@NgModule({
  declarations: [ImgSliderComponent, ImageSlideComponent],
  imports: [
    CommonModule
  ],
  exports: [ImgSliderComponent, ImageSlideComponent]
})
export class ImgSliderModule { }
