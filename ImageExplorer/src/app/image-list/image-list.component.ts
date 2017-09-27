import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { FormsModule } from '@angular/forms';

 
@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  // To store the images or image objects that are returned by API
  images: any[];
  
  searching: boolean = false;
  constructor(private imageService: ImageService) { 
    console.log('In image-list');
  }

  searchImages(query: string) {
    return this.imageService.getImage(query).subscribe(
      response => {
        this.searching = true;
        this.images = response.hits;
        console.log(this.images);
      }, 
      error => {
        console.log("Error");
      },
      /**
       * Fire anonymous function when above method is complete
       */
      () => {
        this.searching = false; 
      }
    );
  }
  ngOnInit() {
  }

}
