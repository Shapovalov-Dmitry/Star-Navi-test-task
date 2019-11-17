import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './root-page.component.html',
  styleUrls: ['./root-page.component.scss']
})
export class RootPageComponent implements OnInit {
  constructor(private _router: Router) {}

  goToGameInDots = () => this._router.navigateByUrl('/game-in-dots');

  ngOnInit() {}
}
