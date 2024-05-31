import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GalaxyService, Galaxy } from '../galaxy.service';

@Component({
  selector: 'app-galaxy-update',
  templateUrl: './galaxy-update.component.html',
  styleUrls: ['./galaxy-update.component.css']
})
export class GalaxyUpdateComponent implements OnInit {
  galaxy: Galaxy = {
    _id: '',
    name: '',
    description: '',
    distance: 0,
    photo: ''
  };

  constructor(
    private galaxyService: GalaxyService,
    private router: Router,
    private route: ActivatedRoute // Добавлен ActivatedRoute для получения параметров URL
  ) {}

  ngOnInit(): void {
    this.getGalaxy();
  }

  getGalaxy(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.galaxyService.getGalaxyById(id).subscribe(galaxy => {
        this.galaxy = galaxy;
      });
    }
  }

  onSubmit(): void {
    console.log(this.galaxy);
    if (this.galaxy && this.galaxy._id) {
      this.galaxyService.updateGalaxy(this.galaxy._id, this.galaxy).subscribe(updatedGalaxy => {
        console.log('Galaxy updated:', updatedGalaxy);
        this.router.navigate(['/galaxies']);
      });
    } else {
      console.error('Galaxy ID is required');
    }
  }
}

