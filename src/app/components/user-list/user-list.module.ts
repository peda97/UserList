import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { HighlightDirective } from 'src/app/directives/highlight.directive';
import { UserService } from 'src/app/services/user.service';



@NgModule({
  declarations: [
    UserListComponent,
    FilterPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    FormsModule,
    CardModule,
    AvatarModule,
    InputTextModule,
    FlexLayoutModule
  ],
  providers: [UserService]
})
export class UserListModule { }
