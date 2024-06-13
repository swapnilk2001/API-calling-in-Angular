import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponentComponent } from './component/api-component/api-component.component';
import { NewsServiceService } from './news-service.service';
import { NewsComponentComponent } from './news-component/news-component.component';
import { ErrorComComponent } from './error-com/error-com.component';
import { CommemtCoComponent } from './commemt-co/commemt-co.component';
import { PhotoComComponent } from './component/photo-com/photo-com.component';

const routes: Routes = [
  {
    path: 'post',
    component: ApiComponentComponent,
  },
  {
    path: 'news',
    component: NewsComponentComponent,
  },
  {
    path: 'error',
    component: ErrorComComponent,
  },
  {
    path: 'comment',
    component: CommemtCoComponent,
  },
  {
    path: 'photo',
    component: PhotoComComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
