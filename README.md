# Angular4-ImageExplorer
A simple image search application to query the Pixabay API is developed using Angular 4 and Google's material design. 
<br>
This is an image search application that queries Pixabay API for image data. Depending on the query entered by user, application will fetch the related images with the help of Pixabay API. When user clicks on an image, he will be redirected to pixbay website where we can download, like or share an image.
<hr>
The application is deployed on Heroku. https://image-explorer.herokuapp.com/ 
<hr>
<a href="https://pixabay.com/api/docs/">Pixabay API Documentation</a>
<br>
To get the API key, sign up on <a href="https://pixabay.com/">pixabay website</a>
<hr>
<h2>Screenshots</h2>

<h3>When user enters some query, he gets the related images</h3>
<img src="https://github.com/patilankita79/Angular4-ImageExplorer/blob/master/Screenshots/4_QueryTexas1.png" />
<img src="https://github.com/patilankita79/Angular4-ImageExplorer/blob/master/Screenshots/4_QueryTexas1.png" />
<img src="https://github.com/patilankita79/Angular4-ImageExplorer/blob/master/Screenshots/6_QueryIndia.png" />
<h3>Console Output </h3>
<img src="https://github.com/patilankita79/Angular4-ImageExplorer/blob/master/Screenshots/1_consoleOutput.png" />
<img src="https://github.com/patilankita79/Angular4-ImageExplorer/blob/master/Screenshots/2_ConsoleOp.png" />
<h3>JSON objects</h3>
<img src="https://github.com/patilankita79/Angular4-ImageExplorer/blob/master/Screenshots/3_consoleOp.png" />
<img src="https://github.com/patilankita79/Angular4-ImageExplorer/blob/master/Screenshots/7.png" />
<h3>Masonry Effect</h3>
<img src="https://github.com/patilankita79/Angular4-ImageExplorer/blob/master/Screenshots/8_masonryEffect.png" />
<img src="https://github.com/patilankita79/Angular4-ImageExplorer/blob/master/Screenshots/9_masonryEffect.png" />


<hr>
Generate the project using Angular CLI <br>
Store the API key in enviornment.ts
Create a component to display the images that are returned by API

```
ng generate component [nameOfTheComponent]
```
Installing dependencies for angular material
```
npm install --save @angular/material @angular/cdk
```
```
npm install --save @angular/animations
```
```
npm install bootstrap --save
```
```
npm install --save angular2-masonry
```
masonry gives responsive feel to set of images when displayed in a group

<br>

Add relative paths in angular-cli.json under "scripts" <br>
Include javascript package imagesloaded in index.html
https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/4.1.3/imagesloaded.pkgd.min.js under script tag.

```
"../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "../node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
```
Include fonts link in index.html under head tag
Google font: Fredoka One
<link href="https://fonts.googleapis.com/css?family=Fredoka+One" rel="stylesheet">


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

<br>
 I had to import the FormsModule for the [(ngModel)] on the input tag to work<br>
 You have to register the FormsModule to your module (app.module.ts):

```
import { FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
```



