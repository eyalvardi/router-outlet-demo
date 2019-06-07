/**
 * Created by Eyal on 19/03/2017.
 */
import {Component} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'lazy',
  styles : [],
  template: `
<div>
  <h3>Lazy component</h3>
  <p>
    fill the right and left outlet in the root with ColorComponent (yellow).
  </p>
</div>
`})
export class LazyComponent {
    constructor(
        private router : Router,
        private route  : ActivatedRoute
    ){}

    ngOnInit(){
            /*this.router.navigate([{
                outlets:{
                    left:'up',
                    right:'down'
                }
            }]);*/
            this.router.navigateByUrl(`${this.router.url}(left:up//right:down)`);
    }
}