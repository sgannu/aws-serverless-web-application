// TODO SOMEDAY: Feature Componetized like CrisisCenter
import { Component, OnInit, ViewChild, QueryList, ViewChildren, AfterContentInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { IFoodItem } from "./fooditem"
import { LambdaService }  from './lambda.service';

@Component({
    template: `
    <div id="ngridContainer" class="dw" ngridContainer>
    <div class="dw-panel" *ngFor="let item of foods; let i = index" ngridIcon>
      <div class="dw-panel__content icon">
            <a [routerLink]="['/food', item.id]"><img class="icon-img" src="/public/images/{{item.icon}}" alt="{{item.name}}"></a>
              <div class="img-desc-wrap">
                    <h5 >{{item.name}}</h5> <like type="food" index="{{i}}" id="{{item.id}}" (likeEvent)="likeEvent($event);"></like>
                    <p >{{item.name}}</p>
                    <rating [(ngModel)]="item.rating" readonly="true"></rating>
                    <div class="u-pull-right">
                           <div class="likes ng-binding"><span class="icon-like"></span>{{item.likes}}</div>
                            <div class="watch ng-binding"><span class="icon-watch"></span> 1015</div>
                    </div>
             </div>
        </div>
    </div>
    </div>`,
    styleUrls: ["/css/driveway.min.css"]
})

export class ListComponent implements OnInit {

    private sub: any;
    alert: string;
    foods: IFoodItem[];
    mode = 'Observable';
    @Output() counterChange = new EventEmitter();


    constructor(private foodItemsService: LambdaService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.foodItemsService.getFoodItems()
                .then(foods => { this.foods = foods; }, error => this.alert = <any>error);
        });
    }

    ngOnDestroy() {
        // Clean sub to avoid memory leak
        this.sub.unsubscribe();
    }

}

