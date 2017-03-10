"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// TODO SOMEDAY: Feature Componetized like CrisisCenter
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var lambda_service_1 = require("./lambda.service");
var ListComponent = (function () {
    function ListComponent(foodItemsService, route) {
        this.foodItemsService = foodItemsService;
        this.route = route;
        this.mode = 'Observable';
        this.counterChange = new core_1.EventEmitter();
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.foodItemsService.getFoodItems()
                .then(function (foods) { _this.foods = foods; }, function (error) { return _this.alert = error; });
        });
    };
    ListComponent.prototype.ngOnDestroy = function () {
        // Clean sub to avoid memory leak
        this.sub.unsubscribe();
    };
    return ListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ListComponent.prototype, "counterChange", void 0);
ListComponent = __decorate([
    core_1.Component({
        template: "\n    <div id=\"ngridContainer\" class=\"dw\" ngridContainer>\n    <div class=\"dw-panel\" *ngFor=\"let item of foods; let i = index\" ngridIcon>\n      <div class=\"dw-panel__content icon\">\n            <a [routerLink]=\"['/food', item.id]\"><img class=\"icon-img\" src=\"/public/images/{{item.icon}}\" alt=\"{{item.name}}\"></a>\n              <div class=\"img-desc-wrap\">\n                    <h5 >{{item.name}}</h5> <like type=\"food\" index=\"{{i}}\" id=\"{{item.id}}\" (likeEvent)=\"likeEvent($event);\"></like>\n                    <p >{{item.name}}</p>\n                    <rating [(ngModel)]=\"item.rating\" readonly=\"true\"></rating>\n                    <div class=\"u-pull-right\">\n                           <div class=\"likes ng-binding\"><span class=\"icon-like\"></span>{{item.likes}}</div>\n                            <div class=\"watch ng-binding\"><span class=\"icon-watch\"></span> 1015</div>\n                    </div>\n             </div>\n        </div>\n    </div>\n    </div>",
        styleUrls: ["/css/driveway.min.css"]
    }),
    __metadata("design:paramtypes", [lambda_service_1.LambdaService, router_1.ActivatedRoute])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map