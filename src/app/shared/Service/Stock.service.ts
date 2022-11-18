import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StockService {
  readonly API_URL = 'http://192.168.1.31:8089/SpringMVC/stock';

  constructor(private httpClient: HttpClient) { }

  getAllStocks() {
    return this.httpClient.get(`http://192.168.1.31:8089/SpringMVC/stock/retrieve-all-stocks`)
  }
  addStock(stock : any) {
    return this.httpClient.post(`http://192.168.1.31:8089/SpringMVC/stock/add-stock`, stock)
  }
  editStock(stock : any){
    return this.httpClient.put(`http://192.168.1.31:8089/SpringMVC/stock/modify-stock`, stock)
  }
  deleteStock(idStock : any){
    return  this.httpClient.delete(`http://192.168.1.31:8089/SpringMVC/stock/remove-stock/${idStock}`)
  }
}
