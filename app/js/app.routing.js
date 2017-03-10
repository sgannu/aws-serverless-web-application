"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var list_component_1 = require("./components/list.component");
var componentRoutes = [
    { path: '', redirectTo: '/foods', pathMatch: 'full' },
    { path: 'foods', component: list_component_1.ListComponent }
];
var appRoutes = componentRoutes.slice();
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map