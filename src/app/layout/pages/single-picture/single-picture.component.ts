import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-single-pictures',
  imports: [],
  templateUrl: './single-picture.component.html',
  styleUrl: './single-picture.component.scss'
})
export class SinglePictureComponent implements OnInit {
  photoId: string = '';
  route = inject(ActivatedRoute)

  ngOnInit() {
    this.photoId = this.route.snapshot.params['id'];
    console.log(this.photoId);
  }
}
