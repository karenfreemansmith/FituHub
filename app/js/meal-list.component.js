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
var core_1 = require('@angular/core');
var ShowMealComponent = (function () {
    function ShowMealComponent() {
        this.clickedMeal = new core_1.EventEmitter();
    }
    ShowMealComponent.prototype.selectMeal = function (mealToEdit) {
        this.clickedMeal.emit(mealToEdit);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ShowMealComponent.prototype, "childMealList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ShowMealComponent.prototype, "clickedMeal", void 0);
    ShowMealComponent = __decorate([
        core_1.Component({
            selector: "show-meal",
            template: "\n  <div *ngFor=\"let currentMeal of childMealList \" >\n      <h4>{{ currentMeal.food }} ({{ currentMeal.calories }}) @ {{ currentMeal.datetime }}</h4>\n      <p>Protein: {{ currentMeal.protein }}</p>\n      <p>Carbohydrates: {{ currentMeal.carbs }}</p>\n      <p>Fat: {{ currentMeal.fat }}</p>\n      <p>{{ currentMeal.comments }}</p>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ShowMealComponent);
    return ShowMealComponent;
}());
exports.ShowMealComponent = ShowMealComponent;
//# sourceMappingURL=meal-list.component.js.map