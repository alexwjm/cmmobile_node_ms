import {Component,Input,ElementRef} from '@angular/core';


@Component({
	selector: 'menu-item',
	templateUrl: 'menuItem.component.html',
	styleUrls: ['menuItem.component.css']
})
export class MenuItem{
	@Input() label:string;
	@Input() hrefUrl:string ='#';
	@Input() floatDirectionReverse:boolean= false;


	constructor(private elementRef: ElementRef) {
  	};

  	ontouchstart(){
  		let aElement = this.elementRef.nativeElement.querySelector('a');
		aElement.style.fontSize = "20px";
  		setTimeout(function(){aElement.style.fontSize = "15px";},200);

  		aElement.style.color = 'red';
  	}
}
