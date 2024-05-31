import { Component, OnInit } from '@angular/core';
import { Galaxy,GalaxyService } from '../galaxy.service';

@Component({
  selector: 'app-galaxy-list',
  templateUrl: './galaxy-list.component.html',
  styleUrls: ['./galaxy-list.component.css']
})
export class GalaxyListComponent implements OnInit {
  galaxies: Galaxy[] = [];

  constructor(private galaxyService: GalaxyService) {}

  ngOnInit(): void {
    this.loadGalaxies();
  }

  loadGalaxies(): void {
    this.galaxyService.getGalaxies().subscribe((data: Galaxy[]) => {
      this.galaxies = data;
    });
  }
}

