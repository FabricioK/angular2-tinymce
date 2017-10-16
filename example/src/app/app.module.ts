import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TinymceModule } from '../../../src/index'
import { AppComponent } from './app.component';
//Tiny MCE//Tiny MCE
import 'tinymce/plugins/textcolor/plugin.js';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TinymceModule.withConfig({
      plugins: ['link paste table advlist autoresize lists code cadastroimagens visualizarslide'],
      toolbar: 'forecolor backcolor link paste table advlist autoresize lists code cadastroimagens visualizarslide | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent'
    }),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
