import { inject } from 'vue';
import {v4 as uuid} from "uuid"

export const loadingSymbol = "VueLoading"+uuid();
export const loadingConfigSymbol = "VueLoadingConfig"+uuid();

export function useLoading() {
    const VueLoading = inject(loadingSymbol);
    const VueLoadingConfig = inject(loadingConfigSymbol);
    if (!VueLoading) throw new Error('No VueToasted provided!!!');
    if (!VueLoadingConfig) throw new Error('No VueToastedConfig provided!!!');

    return {VueLoading, VueLoadingConfig};
}