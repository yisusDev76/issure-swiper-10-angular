import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?:Swiper

  constructor(private router: Router) {}

  ngOnInit() {}

  swiperReady(){
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

  next() {
    this.swiper?.slideNext();//Thie line broken code
  }


  async start() {
    console.log("go to login");
    alert("swiper 9 works!")
  }

}
