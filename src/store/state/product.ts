import { IProduct } from "../../interfaces/iproduct";

interface ProductState {
    products: IProduct[];
    loading: boolean;
    loaded: boolean;
    error: boolean;
    errorMsg: string | null;
}

const initialProductState: ProductState = {
    products: [],
    loading: false,
    loaded: false,
    error: false,
    errorMsg: null
};

export default initialProductState;