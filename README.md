# Angular4-ImageExplorer
A simple image search application to query the Pixabay API is developed using Angular 4 and Google's material design. 
<br>
This is an image search application that queries Pixabay API for image data. Depending on the query entered by user, application will fetch the related images with the help of Pixabay API. When user clicks on an image, he will be redirected to pixbay website where we can download, like or share an image.
<br>
<hr>
<a href="https://pixabay.com/api/docs/">Pixabay API Documentation</a>
<br>
To get the API key, sign up on pixabay website.

Store the API key in enviornment.ts
<br>
Generate the project using Angular CLI

Create a component to display the images that are returned by API

```
ng generate component [nameOfTheComponent]
```

<hr>
<h2>Issues</h2>
I faced the following issues while working on this project.

Issue 1: No provider for Http
Solution: <br>
You have to register the HttpModule to your module (/app.module.ts):

```
import { HttpModule} from '@angular/http';

@NgModule({
  imports: [
    HttpModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
```

Reference link: https://stackoverflow.com/questions/43609853/angular-4-and-ionic-3-no-provider-for-http

