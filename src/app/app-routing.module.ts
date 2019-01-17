// test run add ons

import { ModelssZComponent } from './components/modelss-z/modelss-z.component';
import { ModelsmRComponent } from './components/modelsm-r/modelsm-r.component';
import { ModelsgLComponent } from './components/modelsg-l/modelsg-l.component';
import { ModelsaFComponent } from './components/modelsa-f/modelsa-f.component';
import { ToysComponent } from './components/toys/toys.component';
import { SoloComponent } from './components/solo/solo.component';
import { FetishesComponent } from './components/fetishes/fetishes.component';
import { LinerieComponent } from './components/linerie/linerie.component';
import { BdsmComponent } from './components/bdsm/bdsm.component';

import { AnalComponent } from './components/anal/anal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouplesComponent } from './components/couples/couples.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { FappingComponent } from './components/fapping/fapping.component';


const routes: Routes = [
  {
    path: 'anal',
    component: AnalComponent
  },
  {
    path: 'couples',
    component: CouplesComponent
  },
  {
    path: 'fapping',
    component: FappingComponent
  },
  {
    path: 'bdsm',
    component: BdsmComponent
  },
  {
    path: 'lingerie',
    component: LinerieComponent
  },
  {
    path: 'fetishes',
    component: FetishesComponent
  },
  {
    path: 'solo',
    component: SoloComponent
  },
  {
    path: 'toys',
    component: ToysComponent
  },
  {
    path: 'modelsa-f',
    component: ModelsaFComponent
  },
  {
    path: 'modelsg-l',
    component:  ModelsgLComponent
  },
  {
    path: 'modelsm-r',
    component: ModelsmRComponent
  },
  {
    path: 'modelss-z',
    component: ModelssZComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
