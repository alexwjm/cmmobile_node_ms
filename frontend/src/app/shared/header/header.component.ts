import {Component,Input,Output,EventEmitter} from '@angular/core';


@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.css']
})
export class Header {
	@Input() labelLeft:string='';
	@Input() labelRight:string='';
	@Output() leftButtonClick : EventEmitter<any> = new EventEmitter();
	leftClick(){
		this.leftButtonClick.emit();
	};
	@Output() rightButtonClick : EventEmitter<any> = new EventEmitter();
	rightClick(){
		this.rightButtonClick.emit();
	};
}