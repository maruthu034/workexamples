import { Component } from '@angular/core';
@Component({
	template: `
	<nav [ngClass] = "'parent-menu'">
	  <ul>
		 <li><a routerLink="/article" routerLinkActive="active" >Article</a></li>
		 <li><a routerLink="/address" routerLinkActive="active">Address</a></li>
		 <li><a routerLink="/dynamic" routerLinkActive="active">dynamic</a></li>
		 <li><a routerLink="/onchnage" routerLinkActive="active">onchnage</a></li>
		 <li><a routerLink="/formbuild" routerLinkActive="active">formbuild</a></li>
		 <li><a routerLink="/provider" routerLinkActive="active">provider</a></li>
		 <li><a routerLink="/Renderer2" routerLinkActive="active">Renderer2</a></li>
		 <li><a routerLink="/lifecycle" routerLinkActive="active">lifecycle</a></li>
		 <li><a routerLink="/ngtemplate" routerLinkActive="active">ngtemplate</a></li>
		 <li><a routerLink="/crud" routerLinkActive="active">CRUD</a></li>
		 <li><a routerLink="/contentchild" routerLinkActive="active">contentchild</a></li>
		 <li><a routerLink="/querylist" routerLinkActive="active">querylist</a></li>
		 <li><a routerLink="/formvalidation" routerLinkActive="active">formvalidation</a></li>
		 <li><a routerLink="/customeevent" routerLinkActive="active">customeevent</a></li>
		 <li><a routerLink="/routerandnavigation" routerLinkActive="active">router&nav</a></li>
		 <li><a routerLink="/country" routerLinkActive="active">country</a></li>
		 <li><a routerLink="/twoway" routerLinkActive="active">twoway</a></li>
		 <li><a routerLink="/viewchild" routerLinkActive="active">viewchild</a></li>
		 <li><a routerLink="/customepipe" routerLinkActive="active">customepipe</a></li>
		 <li><a routerLink="/host" routerLinkActive="active">host</a></li>
		 <li><a routerLink="/Urlsearch" routerLinkActive="active">Urlsearc</a></li>
	  </ul>
	</nav>
	<logout></logout>
	<div [ngClass] = "'parent-container'">
	  <router-outlet></router-outlet>
	</div>
  `
})
export class DashboardLayoutComponent {
}
