import { Injectable } from '@angular/core';
import {map} from 'rxjs/internal/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Root} from './root.model';

@Injectable({
  providedIn: 'root'
})
export class RootService {
  private readonly apiUrl: string = 'http://dvns.me/yaniv/clientest/public/explorePictures?path=root/';
  private readonly accessToken  = '2d4e69f4823176197ccf41caa5ee6456';
  private lastRootPath: string;
  constructor(private httpClient: HttpClient) { }


  getNodes(rootPath: string = '') {
    this.lastRootPath = this.lastRootPath ? `${this.lastRootPath}/${rootPath}` : rootPath;
    const headers = new HttpHeaders({'X-TOKEN': this.accessToken});
    return this.httpClient.get(`${this.apiUrl}${this.lastRootPath}`,{headers})
      .pipe(map((res: any) => <Root>res.data));
  }

}
