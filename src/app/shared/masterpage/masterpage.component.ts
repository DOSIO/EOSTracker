import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-masterpage',
  templateUrl: './masterpage.component.html',
  styleUrls: ['./masterpage.component.scss']
})
export class MasterpageComponent implements OnInit {

  sidenavMode$: Observable<string> = of('over');
  sidenavOpen$: Observable<boolean> = of(false);
  console.log(location.href)
  navHeaderShow=true;
  constructor(
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit() {
    this.sidenavMode$ = this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).pipe(
      map(result => result.matches ? 'over' : 'side')
    );
    this.sidenavOpen$ = this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).pipe(
      map(result => result.matches ? false : true)
    );

    if(location.href.indexOf("mobile=true")!=-1){
      this.navHeaderShow=false;
    }
  }

  navHeaderShowsetStyle(){
    if(this.navHeaderShow){
      return {}
    }else{
      return{
        'padding-top':'0'
      }
    }
  }

}
