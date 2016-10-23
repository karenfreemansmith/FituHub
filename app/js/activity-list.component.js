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
var ShowActivityComponent = (function () {
    function ShowActivityComponent() {
        this.clickedActivity = new core_1.EventEmitter();
    }
    ShowActivityComponent.prototype.selectedActivity = function (activityToEdit) {
        console.log(activityToEdit);
        this.clickedActivity.emit(activityToEdit);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ShowActivityComponent.prototype, "childActivityList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ShowActivityComponent.prototype, "clickedActivity", void 0);
    ShowActivityComponent = __decorate([
        core_1.Component({
            selector: "show-activity",
            template: "\n  <div *ngFor=\"let currentActivity of childActivityList\">\n    <h3  (click)=\"selectedActivity(currentActivity)\">{{ currentActivity.duration }} minutes of {{ currentActivity.description }}</h3>\n    <p>{{currentActivity.datetime | date:'longDate'}}</p>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ShowActivityComponent);
    return ShowActivityComponent;
}());
exports.ShowActivityComponent = ShowActivityComponent;
//# sourceMappingURL=activity-list.component.js.map