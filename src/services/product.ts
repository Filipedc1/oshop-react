import axios from 'axios';
import { ICategory } from '../interfaces/icategory';
import { IProduct } from '../interfaces/iproduct';

export class ProductService {
    private _baseUrl = 'https://localhost:44356/api';

    async getAllAsync() : Promise<IProduct[]> {
        const response = await axios.get<IProduct[]>(`${this._baseUrl}/products`);
        return response.data;
    }

    async getProductsByCategoryAsync(categoryId: number) : Promise<IProduct[]> {
        const response = await axios.get<IProduct[]>(`${this._baseUrl}/products/category/${categoryId}`);
        return response.data;
    }

    async getProductAsync(productId: number) : Promise<IProduct> {
        const response = await axios.get<IProduct>(`${this._baseUrl}/products/${productId}`);
        return response.data;
    }

    async getAllCategoriesAsync() : Promise<ICategory[]> {
        const response = await axios.get<ICategory[]>(`${this._baseUrl}/category`);
        return response.data;
    }

    // async createAsync(product) : Promise<any> {
    //     return this._http.post(this._baseUrl, product);
    // }
    
    // async updateAsync(productId, product) : Promise<any> {
    //     return this._http.put(`${this._baseUrl}/${productId}`, product);
    // }

    // async deleteAsync(productId) : Promise<any> {
    //     return this._http.delete(`${this._baseUrl}/${productId}`);
    // }
}
