import { Component } from '@angular/core';
import { HeaderBarComponent } from '../../components/header-bar/header-bar.component';
import { MainHeroComponent } from '../../components/main-hero/main-hero.component';
import { LastPostsComponent } from '../../components/last-posts/last-posts.component';

@Component({
  selector: 'app-home',
  imports: [HeaderBarComponent, MainHeroComponent, LastPostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
