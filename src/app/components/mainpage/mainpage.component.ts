import {
  Component,
  Inject,
  NgZone,
  OnDestroy,
  OnInit,
  Renderer2,
  ElementRef
} from "@angular/core";


@Component({
  selector: "app-mainpage",
  templateUrl: "mainpage.component.html",
  styleUrls: ["./mainpage.component.scss"],
})
export class MainPageComponent implements OnInit, OnDestroy {
  imageObject: Array<any> = [{
    image: '../../../assets/images/20231017_153241.jpg',
    thumbImage: '../../../assets/images/20231017_153241.jpg',
    alt: 'alt of image',
  },
    {
    image: '../../../assets/images/20240113_212045.jpg',
    thumbImage: '../../../assets/images/20240113_212045.jpg',
    alt: 'alt of image',
  },
    {
    image: '../../../assets/images/20231125_164919.jpg',
    thumbImage: '../../../assets/images/20231125_164919.jpg',
    alt: 'Image alt',
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  },
    {
      image: '../../../assets/images/20231114_170603.jpg',
      thumbImage: '../../../assets/images/20231114_170603.jpg',
      alt: 'alt of image',
    },
    {
      image: '../../../assets/images/20231120_223550.jpg',
      thumbImage: '../../../assets/images/20231120_223550.jpg',
      alt: 'alt of image',
    },
  ];
  public isActiveBtn = false;
  constructor() {
  }
  ngOnInit() {
}
  clickButton() {
    this.isActiveBtn = !this.isActiveBtn;
  }
ngOnDestroy() {
}
}
