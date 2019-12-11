import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import {Sucrerie} from '../sucrerie';
import { BonbecService } from '../bonbec.service' ;

@Component({
  selector: 'app-bonbon',
  templateUrl: './bonbon.component.html',
  styleUrls: ['./bonbon.component.css']
})
export class BonbonComponent implements OnInit {
  bonbon: Sucrerie;

  constructor(
    private bonbecService: BonbecService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBonbon();
  }
  getBonbon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bonbecService.getBonbon(id).subscribe(bonbon => this.bonbon = bonbon)
  }
}
