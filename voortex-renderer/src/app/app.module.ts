import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ComponentsModule } from './components/renderer/components/components.module';
import { RendererComponent } from './components/renderer/renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RendererComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
