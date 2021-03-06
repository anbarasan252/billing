import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu'; 
import { FlexLayoutModule } from '@angular/flex-layout'; 
import {MatButtonModule} from '@angular/material/button'; 
import { McodingComponent } from './mcoding/mcoding.component';
import { HomeComponent } from './home/home.component';
import { BillingComponent } from './billing/billing.component'; 
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { SignupComponent } from './signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent, McodingComponent, HomeComponent, BillingComponent, SignupComponent
  ],
  imports: [
    BrowserModule, MatCardModule,MatFormFieldModule,MatInputModule,
    AppRoutingModule,MatButtonModule,MatIconModule,MatDialogModule,
    BrowserAnimationsModule, MatToolbarModule, MatProgressSpinnerModule, MatMenuModule, FlexLayoutModule,  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
