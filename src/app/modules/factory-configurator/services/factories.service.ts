import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FactoryListItem } from '@shared/interfaces/factory-list-item.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactoriesService {

  #publicUrl = 'http://localhost:3000';
  
  http = inject(HttpClient);


  async getAllFactories(): Promise<FactoryListItem[]> {
    const factories$ = this.http.get<FactoryListItem[]>(`${this.#publicUrl}/factories`);
    const response = await firstValueFrom(factories$);
    return response;
  }

}
