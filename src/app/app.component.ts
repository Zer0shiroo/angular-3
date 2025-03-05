import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paises: any; // Atributo para almacenar los países

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Hacemos la solicitud HTTP GET a la API de COVID-19
    this.http.get("https://api.covid19api.com/summary")
      .subscribe(
        resultado => {
          this.paises = resultado;  // Guardamos la respuesta en 'paises'
        }
      );
  }
}
