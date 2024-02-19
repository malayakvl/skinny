import { createSelector } from 'reselect';

// ------------------------------------
// Selectors
// ------------------------------------
const rootSelector = createSelector(
    (state: State.Root) => state.layouts,
    (layouts: State.Layouts): State.Layouts => layouts
);

export const getActiveLayoutSelector = createSelector(
    rootSelector,
    (layouts: State.Layouts): string => layouts.activeLayout
);
export const getAddressDataSelector = createSelector(
    rootSelector,
    (layouts: State.Layouts): any => layouts.address
);
