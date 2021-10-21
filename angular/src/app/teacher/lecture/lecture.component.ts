import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {

  safeSrc: SafeResourceUrl;
  safeSrc1: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { 
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/w7ejDZ8SWv8");
    this.safeSrc1 = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/3dHNOWTI7H8");
  }
  ngOnInit(): void {
  }

}
