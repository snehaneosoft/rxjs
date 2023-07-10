import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http:HttpClient) { }

  fetchRecord(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  searchById(id:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
  fetchMergeRecord(){
    return this.http.get('https://rickandmortyapi.com/api/character');
  }

  changedApiTrigger(status:string,gender:string){
    let params = new HttpParams()
                .set('status',status)
                .set('gender',gender)
    return this.http.get('https://rickandmortyapi.com/api/character',{params})
  }

  fetchMapRecord(){
    return this.http.get('https://rickandmortyapi.com/api/episode')
  }
 
}
