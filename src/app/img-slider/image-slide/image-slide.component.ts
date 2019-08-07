import {Component, OnInit, ViewChild, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-img-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.scss']
})
export class ImageSlideComponent implements OnInit {

  // @ts-ignore
  @ViewChild('tmpl') template: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
