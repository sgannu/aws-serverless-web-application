import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { HttpModule } from "@angular/http";

import { LambdaService } from './components/lambda.service';
import { IFoodItem } from './components/fooditem';
import "rxjs/Rx";


@Component({
  selector: 'my-app',
    templateUrl: 'views/index.client.view.html'
})

export class AppComponent {}

