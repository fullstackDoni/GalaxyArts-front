import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GalaxyService, Galaxy } from '../galaxy.service';

@Component({
  selector: 'app-galaxy-delete',
  templateUrl: './galaxy-delete.component.html',
  styleUrls: ['./galaxy-delete.component.css']
})
export class GalaxyDeleteComponent implements OnInit {
  galaxy: Galaxy | undefined;

  constructor(
    private galaxyService: GalaxyService,
    private router: Router,
    private route: ActivatedRoute
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

  deleteGalaxy(): void {
    if (this.galaxy && this.galaxy._id) {
      if (confirm('Вы уверены, что хотите удалить галактику?')) {
        this.galaxyService.deleteGalaxy(this.galaxy._id).subscribe(
          () => {
            console.log('Galaxy deleted');
            this.router.navigate(['/galaxies']);
          },
          (error) => {
            console.error('Error deleting galaxy', error);
            alert(`Error deleting galaxy: ${error.message}`);
          }
        );
      }
    } else {
      console.error('Galaxy ID is required');
    }
  }
}





