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
    image: './../../lizacard/assets/images/1.png',
    thumbImage: '../../../lizacard/assets/images/1.png',
    alt: 'alt of image',
  },
    {
    image: './../../lizacard/assets/images/2.png',
    thumbImage: './../../lizacard/assets/images/2.png',
    alt: 'alt of image',
  },
    {
    image: './../../lizacard/assets/images/3.png',
    thumbImage: '../../../lizacard/assets/images/3.png',
    alt: 'Image alt',
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  },
    {
      image: './../../lizacard/assets/images/4.png',
      thumbImage: '../../../lizacard/assets/images/4.png',
      alt: 'alt of image',
    },
    {
      image: './../../lizacard/assets/images/5.png',
      thumbImage: './../../lizacard/assets/images/5.png',
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
