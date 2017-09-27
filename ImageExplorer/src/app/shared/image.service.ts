import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {
    /**
     * Define the methods to make Pixabay API call
     */

     private query: string;

     // Stores Pixabay API key
     private API_KEY: string = environment.PIXABAY_API_KEY;

     // Stores API URL
     private API_URL: string = environment.PIXABAY_API_URL;

     private URL: string = this.API_URL + this.API_KEY + '&q=';

     private perPage = '&per_page=10';

     constructor(private http: Http) {

     }

     /**
      * To get an image based on query
      * @param query 
      */
     getImage(query) {
        return this.http.get(this.URL + query + this.perPage).map(
            response => response.json()
        );
     }
}