import {Component} from '@angular/core';
import {Galaxy, GalaxyService} from "../galaxy.service";

@Component({
  selector: 'app-galaxy-create',
  templateUrl: './galaxy-create.component.html',
  styleUrl: './galaxy-create.component.css'
})
export class CreateGalaxyComponent {
  galaxy: Galaxy = {_id: '', name: '', distance: 0, description: '', photo: ''}; // Значения по умолчанию

  constructor(private galaxyService: GalaxyService) {
  }

  createGalaxy(): void {
    if (!this.galaxy.name || !this.galaxy.distance) {
      console.error('Ошибка: Поля name и distance должны быть заполнены');
      return;
    }

    const galaxyDataToSend = {
      name: this.galaxy.name,
      distance: this.galaxy.distance,
      description: this.galaxy.description,
      photo: this.galaxy.photo
    };

    this.galaxyService.addGalaxy(galaxyDataToSend).subscribe(() => {
      // Галактика успешно создана, выполните необходимые действия
    }, error => {
      console.error('Ошибка при создании галактики:', error);
      // Обработка ошибок
    });
  }
}
