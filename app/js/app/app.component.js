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
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.parentMealList = [];
        this.selectedMeal = null;
    }
    AppComponent.prototype.addMeal = function (newMealFromChild) {
        this.parentMealList.push(newMealFromChild);
    };
    AppComponent.prototype.showDetails = function (clickedMeal) {
        this.selectedMeal = clickedMeal;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div class=\"container\">\n      <h1><img src=\"build/images/logo.png\" class=\"logo\">Epic Health Tracker</h1>\n      <show-meal\n        [childMealList] = \"parentMealList\"\n        (clickedMeal) = \"showDetails($event)\"\n      ></show-meal>\n      <add-meal\n        [childSelectedMeal] = \"selectedMeal\"\n        (newMealSender) = \"addMeal($event)\"\n      ></add-meal>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map