import { ICategory } from "../../interfaces/icategory";

interface CategoryState {
    categories: ICategory[];
    loading: boolean;
    loaded: boolean;
    error: boolean;
    errorMsg: string | null;
}

const initialCategoryState: CategoryState = {
    categories: [],
    loading: false,
    loaded: false,
    error: false,
    errorMsg: null
};

export default initialCategoryState;