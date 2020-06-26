import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { LoginFormComponent } from './login-form/login-form.component';
import { NewMessageFormComponent } from './new-message-form/new-message-form.component';
import { MessagesFeedComponent } from './messages-feed/messages-feed.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  declarations: [LoginFormComponent, NewMessageFormComponent, MessagesFeedComponent],
  exports: [
    LoginFormComponent,
    NewMessageFormComponent,
    MessagesFeedComponent
  ]
})
export class ComponentsModule { }
