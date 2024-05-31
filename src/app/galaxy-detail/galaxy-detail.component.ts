import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Galaxy, GalaxyService} from "../galaxy.service";

@Component({
  selector: 'app-galaxy-detail',
  templateUrl: './galaxy-detail.component.html',
  styleUrl: './galaxy-detail.component.css'
})
export class GalaxyDetailComponent {

  galaxy: Galaxy | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Добавлен Router в конструктор
    private galaxyService: GalaxyService
  ) { }

  ngOnInit(): void {
    this.getGalaxy();
  }

  getGalaxy(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.galaxyService.getGalaxyById(id).subscribe(galaxy => this.galaxy = galaxy);
    }
  }
}
