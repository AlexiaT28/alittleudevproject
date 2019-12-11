import { Component, OnInit } from '@angular/core';
import {Sucrerie} from '../sucrerie';
import { BonbecService } from '../bonbec.service' ;

@Component({
  selector: 'app-bonbonniere-component',
  templateUrl: './bonbonniere-component.component.html',
  styleUrls: ['./bonbonniere-component.component.css']
})
export class BonbonniereComponentComponent implements OnInit {
  bonbonniere: Sucrerie[];
  constructor(private bonbecservice: BonbecService) { }

  ngOnInit() {
    this.getBonbonniere();
  }
  getBonbonniere(): void {
    this.bonbecservice.getBonbonniere().subscribe(bonbonniere => this.bonbonniere = bonbonniere);
  }

}
